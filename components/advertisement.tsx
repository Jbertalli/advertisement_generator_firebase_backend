import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container, Segment, Button, Form, Icon, Grid, Item, Card } from 'semantic-ui-react';
import FocusLock from 'react-focus-lock';
import styles from '../styles/advertisement.module.css';
import Local from '../components/localStorage';
// import firebase from '../firebase/clientApp';
import { getFirestore, doc, getDocs, setDoc, Timestamp, updateDoc, deleteField, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { auth } from '../firebase/clientApp';
import { useDispatch } from 'react-redux';
import { incrementCompany, deleteCompany } from '../slices/companySlice';
import { incrementDescription, deleteDescription } from '../slices/descriptionSlice';
import { incrementWidth, deleteWidth } from '../slices/widthSlice';
import { incrementHeight, deleteHeight } from '../slices/heightSlice';

auth;
const db = getFirestore();

export default function Advertisement () {
    const [company, setCompany] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [mediaPreview, setMediaPreview] = useState<string>('');
    const [image, setImage] = useState({name: '', media: ''});
    const [width, setWidth] = useState<any>(350);
    const [height, setHeight] = useState<any>(350);
    const [left, setLeft] = useState<any>(40);
    const [top, setTop] = useState<any>(20);
    const [imageWidth, setImageWidth] = useState<string>('44%');
    const [adWidth, setAdWidth] = useState<string>('56%');
    const [imageAspect, setImageAspect] = useState<string>('translate(0px)');
    const [userData, setUserData] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if (window.innerWidth > 991) {
            setImageWidth('44%');
            setAdWidth('56%');
            setImageAspect('translate(0px)');
        } else {
            setImageWidth('100%');
            setAdWidth('100%');
            setImageAspect('translate(-6%)');
        }
    
        const updateMedia = () => {
          if (window.innerWidth > 991) {
            setImageWidth('44%');
            setAdWidth('56%');
            setImageAspect('translate(0px)');
          } else {
            setImageWidth('100%');
            setAdWidth('100%');
            setImageAspect('translate(-6%)');
          }
        };
          window.addEventListener('resize', updateMedia);
          return () => window.removeEventListener('resize', updateMedia);
    }, []);

    function handleChange(event) {
        const { name, files } = event.target;
        if (name === 'media') {
            setImage(prevState => ({ ...prevState, media: files[0] }
            ));
            setMediaPreview(window.URL.createObjectURL(files[0]));
        }
        const img = files[0].name;
        console.log(img);
        console.log(files[0].name);
        // console.log(image);
        // console.log(mediaPreview);
    }

    console.log(mediaPreview);

    // useEffect(() => {
    //     document.body.style.overflow = "hidden";
    // return () => {
    //     document.body.style.overflow = "visible";
    //     }
    // }, []);

    // const handleInput = () => {
    //     console.log("advertisement", { company, header, description });
    // }

    //console.log(description.length);

    // console.log(auth);

    // console.log data
    const logged = async () => {
        const colRef = collection(db, "Advertisement");
        const docsSnap = await getDocs(colRef);
        docsSnap.forEach(doc => {
          console.log(doc.data());
        })
      }
  
      useEffect(() => {
        logged();
      }, []);

      const addAdvertisement = async (company: string, description: string, width: number, height: number, left: number, top: number, mediaPreview: string) => {
        await setDoc(doc(db, "Advertisement", "Company"), {
          company,
          description,
          width,
          height,
          left,
          top,
          mediaPreview,
          created: Timestamp.now()
        });
      }

      useEffect(() => {
        const q = query(collection(db, "Advertisement"), orderBy('created', 'desc'));
        onSnapshot(q, (querySnapshot) => {
            setUserData(querySnapshot.docs.map(doc => ({
                id: doc.id,
                company: doc.data().company,
                created: doc.data().created,
                description: doc.data().description,
                height: doc.data().height,
                left: doc.data().left,
                top: doc.data().top,
                width: doc.data().width,
                mediaPreview: doc.data().mediaPreview
            })))
        })
      }, []) 

      let dbId = userData?.[0]?.id;
      let dbCompany = userData?.[0]?.company;
      let dbDescription = userData?.[0]?.description;
      let dbHeight = userData?.[0]?.height;
      let dbLeft = userData?.[0]?.left;
      let dbTop = userData?.[0]?.top;
      let dbWidth = userData?.[0]?.width;
      let dbImage = userData?.[0]?.mediaPreview;
      
    //   console.log(dbId);
    //   console.log(dbCompany);
    //   console.log(dbDescription);
    //   console.log(dbHeight);
    //   console.log(dbLeft);
    //   console.log(dbTop);
    //   console.log(dbWidth);
    //   console.log(dbImage);

      const deleteAdvertisement = async (company: string, description: string, width: number, height: number, left: number, top: number, mediaPreview: string) => {
          await updateDoc(doc(db, "Advertisement", "Company"), {
            company: deleteField(),
            description: deleteField(),
            width: deleteField(),
            height: deleteField(),
            left: deleteField(),
            top: deleteField(),
            mediaPreview: deleteField(),
          })
      }

    return (
        <>
            <Head>
                <title>Earn and Trade Advertisement Generator</title>
                <meta name="description" content="earnandtrade, advertisement" />
            </Head>
            <Local setCompany={setCompany} setDescription={setDescription} setWidth={setWidth} setHeight={setHeight} left={left} setLeft={setLeft} top={top} setTop={setTop} mediaPreview={mediaPreview} setMediaPreview={setMediaPreview} />
            <FocusLock>
                <Container as="h1" size="massive" style={{ margin: '2em', boxShadow: '2px 2px 10px black' }}>
                    <Segment attached textAlign="center">
                        <div style={{ color: '#125CA1', fontSize: '52px', fontWeight: '700', padding: '1em 0em .5em 0em', lineHeight: '50px' }}>
                            Advertisement Generator
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: '400px', padding: '0em 0em 1em 0em' }}>
                            Create and Generate Dynamic Ads
                        </div>
                    </Segment>
                    <Form>
                        <Segment size="huge" textAlign="left">
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Form.Input
                                            fluid
                                            label="Company Name"
                                            placeholder="company"
                                            name="company"
                                            value={company}
                                            onChange={e => setCompany(e.target.value)}
                                        />
                                        {/* <Form.Input
                                            fluid
                                            //icon="chart bar"
                                            // size="large"
                                            // iconPosition="left"
                                            label="Advertisement Header"
                                            placeholder="header"
                                            name="header"
                                            value={header}
                                            onChange={e => setHeader(e.target.value)}
                                        /> */}
                                        <Form.Input
                                            fluid
                                            label="Advertisement Description"
                                            placeholder="description"
                                            name="description"
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                        <div>
                                            Upload Logo
                                        </div>
                                        <input
                                            name="media"
                                            type="file"
                                            accept="image/*"
                                            // content="Select Image"
                                            style={{ width: '30vw', transform: 'translateX(-.2vw)' }}
                                            className={styles.file}
                                            onChange={handleChange}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        { company.length > 0 || description.length > 0 || mediaPreview ? (<>
                                            {/* <strong style={{ fontSize: '1em', display: 'flex', justifyContent: 'center' }}>Advertisement</strong> */}
                                            <Card fluid style={{ textAlign: 'left', fontSize: '22px', margin: '1em 0em 0em 0em', padding: '1em' }}>
                                                <div style={{ margin: '1em 0em 0em 0em' }}>Company Name: {JSON.stringify(company, null, 2)}</div>
                                                {/* <div style={{ margin: '1em 0em 0em 0em' }}>{JSON.stringify(header, null, 2)}</div> */}
                                                <div style={{ margin: '1em 0em 1em 0em' }}>Advertisement Description: {JSON.stringify(description, null, 2)}</div>
                                                {/* <input type="image" src={mediaPreview}/> */}
                                            </Card>
                                        </>
                                        ) : (
                                        <>
                                            <Card fluid style={{ margin: '.5em 0em 0em 0em' }}>
                                                <Card.Content
                                                    content="Create Advertisement"
                                                    style={{ 
                                                        textAlign: 'center', 
                                                        fontSize: '25px', 
                                                        fontWeight: '50', 
                                                        margin: '0em 0em 0em 0em', 
                                                        color: 'gray', 
                                                        padding: '4.5em 0em 4.5em 0em', 
                                                        boxShadow: '2px 2px 10px black' 
                                                    }}
                                                />
                                            </Card>
                                        </>)}
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    { !mediaPreview ? (<>
                                        &nbsp;
                                    </>
                                    ) : (
                                    <>  
                                        <Segment style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '20px' }}>
                                            <Form.Input
                                                label="Logo Width"
                                                placeholder="width (pixels)"
                                                type="number"
                                                style={{ width: '20vw' }}
                                                // value={width}
                                                onChange = {e => setWidth(e.target.value)}
                                            />
                                            <Form.Input
                                                label="Logo Height"
                                                placeholder="height (pixels)"
                                                type="number"
                                                style={{ width: '20vw' }}
                                                // value={height}
                                                onChange = {e => setHeight(e.target.value)}
                                            />
                                            <Form.Input
                                                label="Left Margin"
                                                placeholder="left (pixels)"
                                                type="number"
                                                style={{ width: '20vw' }}
                                                // value={left}
                                                onChange = {e => setLeft(e.target.value)}
                                            />
                                            <Form.Input
                                                label="Top Margin"
                                                placeholder="top (pixels)"
                                                type="number"
                                                style={{ width: '20vw' }}
                                                // value={top}
                                                onChange = {e => setTop(e.target.value)}
                                            />
                                        </Segment>
                                    </>)}
                                </Grid.Row>
                                <Grid.Row>
                                    {(company && description) ? (
                                    <>
                                        <div style={{ transform: 'translateX(13.5px)' }}>
                                            <Button onClick={() => {addAdvertisement(company, description, width, height, left, top, mediaPreview), dispatch(incrementCompany(String(company))), dispatch(incrementDescription(String(description))), dispatch(incrementWidth(String(width))), dispatch(incrementHeight(String(height)))}} style={{ background: '#125CA1', color: 'white' }}>
                                                Save
                                            </Button>
                                            <Button onClick={() => {deleteAdvertisement(company, description, width, height, left, top, mediaPreview), setCompany(''), setDescription(''), setMediaPreview(''), dispatch(deleteCompany()), dispatch(deleteDescription()), dispatch(deleteWidth()), dispatch(deleteHeight())}} style={{ background: '#125CA1', color: 'white' }}>
                                                Delete
                                            </Button>
                                        </div>
                                    </>
                                    ):(
                                    <></>)}
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Form>
                    <Segment attached>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column style={{ transform: `${imageAspect}`, width: `${imageWidth}`, display: 'flex', justifyContent: 'center' }}>
                                    <input 
                                        type="image" 
                                        width={width}
                                        height={height}
                                        style={{ transform: `translate(${left}px, ${top}px) scale(.8)`, borderRadius: '5%', maxWidth: '30em', maxHeight: '30em' }}
                                        src={mediaPreview}
                                    />
                                </Grid.Column>
                                <Grid.Column style={{ width: `${adWidth}` }}>
                                    <Item style={{ fontSize: '1.5em', fontWeight: '900', padding: '1em 1em 1.5em 1em' }}>
                                        <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                                            {company} Video Advertisement
                                        </h1>
                                        <div style={{ fontSize: '.91em', lineHeight: '30px' }}>
                                            <div style={{ margin: '2em 0em 1em 0em' }}>
                                                <Icon
                                                    name="mouse pointer"
                                                />
                                                Click the button below to be transported to watch and take the comprehensive quiz for {company}.
                                            </div>
                                            <div style={{ margin: '1em 0em 1em 0em' }}>
                                                <Icon
                                                    name="dollar"
                                                />
                                                Earn 20 points after successfully watching and completing the comprehension quiz for {company}.
                                            </div>
                                            <div style={{ margin: '1em 0em 1em 0em' }}>
                                                <Icon
                                                    name="calendar"
                                                />
                                                {`Your account needs to settle, which can take more than 30 days (due to possible returns). In this time, Earn and Trade users are credited with "Pending Points".`}
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <Button
                                                    content="Earn 20 points"
                                                    size="large"
                                                    style={{ color: 'white', background: '#125CA1', borderRadius: '15% 15% 15% 15% / 50% 50% 50% 50%', marginTop: '1em' }}
                                                    href="/"
                                                />
                                            </div>
                                        </div>
                                    </Item>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {description}
                        </div>
                    </Segment>
                </Container>
            </FocusLock>
        </>
    );
}
