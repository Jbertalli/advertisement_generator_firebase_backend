import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import FocusLock from 'react-focus-lock';
import styles from '../styles/advertisement.module.css';
// import Local from '../components/localStorage';
import { Container, Segment, Button, Form, Icon, Grid, Item, Card } from 'semantic-ui-react';
import { getDoc, getFirestore, doc, setDoc, Timestamp, updateDoc, deleteField } from 'firebase/firestore';
import { auth } from '../firebase/clientApp';
import { useDispatch } from 'react-redux';
import { incrementCompany, deleteCompany } from '../slices/companySlice';
import { incrementDescription, deleteDescription } from '../slices/descriptionSlice';
import { incrementWidth, deleteWidth } from '../slices/widthSlice';
import { incrementHeight, deleteHeight } from '../slices/heightSlice';
import { incrementLeft, deleteLeft } from '../slices/leftSlice';
import { incrementTop, deleteTop } from '../slices/topSlice';
import { incrementMediaPreview, deleteMediaPreview } from '../slices/mediaSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/clientApp';

auth;
const db = getFirestore();
// const storage = getStorage(app);
// console.log(app)

export default function Advertisement() {
  const [company, setCompany] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [width, setWidth] = useState<any>(350);
  const [height, setHeight] = useState<any>(350);
  const [left, setLeft] = useState<any>(40);
  const [top, setTop] = useState<any>(20);
  const [resize, setResize] = useState<boolean>(false);
  const [showCompany, setShowCompany] = useState<string>('');
  const [showDescription, setShowDescription] = useState<string>('');
  const [showWidth, setShowWidth] = useState<any>(350);
  const [showHeight, setShowHeight] = useState<any>(350);
  const [showLeft, setShowLeft] = useState<any>(40);
  const [showTop, setShowTop] = useState<any>(20);
  const [selected, setSelected] = useState<boolean>(false);
  const [saveImage, setSaveImage] = useState(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const [url, setUrl] = useState(null);

  const currentUser = auth.currentUser?.uid;
  // console.log(currentUser);

  const [user] = useAuthState(auth);
  // console.log(user);
  // console.log(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth > 650) {
      setResize(true);
    } else {
      setResize(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 650) {
        setResize(true);
      } else {
        setResize(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const addAdvertisement = async (
    company: string,
    description: string,
    width: number,
    height: number,
    left: number,
    top: number
  ) => {
    await setDoc(doc(db, '/users/' + currentUser + 'Ads'), {
      company,
      description,
      width,
      height,
      left,
      top,
      created: Timestamp.now(),
    });
  };

  // const deleteAdvertisement = async (
  //   company: string,
  //   description: string,
  //   width: number,
  //   height: number,
  //   left: number,
  //   top: number,
  //   mediaPreview: string
  // ) => {
  //   await updateDoc(doc(db, 'users', currentUser), {
  //     company: deleteField(),
  //     description: deleteField(),
  //     width: deleteField(),
  //     height: deleteField(),
  //     left: deleteField(),
  //     top: deleteField(),
  //     mediaPreview: deleteField(),
  //   });
  // };

  async function getData() {
    const docRef = doc(db, '/users/' + currentUser + 'Ads');
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
      console.log('Document company:', docSnap.data().company);
      console.log('Document description:', docSnap.data().description);
      console.log('Document height:', docSnap.data().height);
      console.log('Document width:', docSnap.data().width);
      console.log('Document top:', docSnap.data().top);
      console.log('Document left:', docSnap.data().left);
      setShowCompany(docSnap.data().company);
      setShowDescription(docSnap.data().description);
      setShowWidth(docSnap.data().width);
      setShowHeight(docSnap.data().height);
      setShowLeft(docSnap.data().left);
      setShowTop(docSnap.data().top);
    } else {
      console.log('No document data');
    }
  }

  async function deleteCompany() {
    const docRef = doc(db, '/users/' + currentUser + 'Ads');
    await updateDoc(docRef, {
      company: deleteField()
    });
  }

  async function deleteDescription() {
    const docRef = doc(db, '/users/' + currentUser + 'Ads');
    await updateDoc(docRef, {
      description: deleteField()
    });
  }

  async function deleteHeight() {
    const docRef = doc(db, '/users/' + currentUser + 'Ads');
    await updateDoc(docRef, {
      height: deleteField()
    });
  }

  async function deleteWidth() {
    const docRef = doc(db, '/users/' + currentUser + 'Ads');
    await updateDoc(docRef, {
      width: deleteField()
    });
  }

  async function deleteTop() {
    const docRef = doc(db, '/users/' + currentUser + 'Ads');
    await updateDoc(docRef, {
      top: deleteField()
    });
  }

  async function deleteLeft() {
    const docRef = doc(db, '/users/' + currentUser + 'Ads');
    await updateDoc(docRef, {
      left: deleteField()
    });
  }

  async function deleteAll() {
    const docRef = doc(db, '/users/' + currentUser + 'Ads');
    await updateDoc(docRef, {
      company: deleteField(),
      description: deleteField(),
      height: deleteField(),
      width: deleteField(),
      top: deleteField(),
      left: deleteField()
    });
  }

  const handleImageChange = (e) => {
    if(e.target.files[0]) {
      setSaveImage(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    const imageRef = ref(storage, `image/${currentUser}/advertisement`);
    uploadBytes(imageRef, saveImage).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setUrl(url);
      }).catch((error) => {
        console.log(error.message, 'error getting the image url');
      })
      setSaveImage(null);
    }).catch((error) => {
      console.log(error.message);
    });
  }

  useEffect(() => {
    setClicked(false);
  }, []);

  console.log(url);

  return (
    <>
      <Head>
        <title>Earn and Trade Advertisement Generator</title>
        <meta name='description' content='earnandtrade, advertisement' />
      </Head>
      {/* <div>
        <Button
          color='red'
          onClick={deleteCompany}
        >
          Delete Company
        </Button>
      </div>
      <div>
        <Button
          color='red'
          onClick={deleteDescription}
        >
          Delete Description
        </Button>
      </div>
      <div>
        <Button
          color='red'
          onClick={deleteHeight}
        >
          Delete Height
        </Button>
      </div>
      <div>
        <Button
          color='red'
          onClick={deleteWidth}
        >
          Delete Width
        </Button>
      </div>
      <div>
        <Button
          color='red'
          onClick={deleteTop}
        >
          Delete Top
        </Button>
      </div>
      <div>
        <Button
          color='red'
          onClick={deleteLeft}
        >
          Delete Left
        </Button>
      </div>
      <div>
        <Button
          color='red'
          onClick={deleteMediaPreview}
        >
          Delete MediaPreview
        </Button>
      </div> */}
      {/* <Local
        setCompany={setCompany}
        setDescription={setDescription}
        setWidth={setWidth}
        setHeight={setHeight}
        setLeft={setLeft}
        setTop={setTop}
        setMediaPreview={setMediaPreview}
        company={company}
        description={description}
        width={width}
        height={height}
        left={left}
        top={top}
        mediaPreview={mediaPreview}
      /> */}
      <FocusLock>
        <Container
          as='h1'
          size='massive'
          style={{ margin: '2.8em', boxShadow: '2px 2px 10px black' }}
          onMouseMove={getData}
        >
          <Segment attached textAlign='center'>
            <div
              style={{
                color: '#125CA1',
                fontSize: resize ? '52px' : '40px',
                padding: resize ? '1em 0em .5em 0em' : '0.5em 0em 0.3em 0em',
                lineHeight: resize ? '50px' : '40px',
                fontWeight: '700'
              }}
            >
              Advertisement Generator
            </div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: '400px',
                padding: resize ? '0em 0em 1em 0em' : '0em 0em 0em 0em',
              }}
            >
              Create and Generate Dynamic Ads
            </div>
          </Segment>
          <Form>
            <Segment size='huge' textAlign='left'>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={resize ? 8 : 16}>
                    <Form.Input
                      fluid
                      label='Company Name'
                      placeholder='company'
                      name='company'
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                    <div
                      style={{ 
                        lineHeight: '23px', 
                        marginBottom: '13px'
                      }}
                    >
                      Advertisement Description
                    </div>
                    <Form.Input
                      fluid
                      placeholder='description'
                      name='description'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <div>Upload Logo</div>
                    <div>
                      <input
                        name='media'
                        type='file'
                        accept='image/*'
                        style={{ width: resize ? '30vw' : '40vw', transform: 'translateX(-.2vw)' }}
                        className={styles.file}
                        onChange={handleImageChange}
                        onClick={() => {setSelected(true), setClicked(true)}}
                      />
                      {selected ? (
                      <>
                        <div
                          style={{
                            marginTop: '20px',
                            marginBottom: '-50px',
                            position: 'relative',
                            zIndex: '100'
                          }}
                        >
                          <button
                            onClick={handleSubmit}
                            style={{
                              border: '2px solid #125CA1',
                              background: 'transparent',
                              color: '#125CA1',
                              fontSize: '14px',
                              fontWeight: '700',
                              height: '40px',
                              width: '88.2px',
                              borderRadius: '4px',
                              marginRight: '5px'
                            }}
                            className={selected ? styles.button : null}
                          >
                            Submit
                          </button>
                        </div>
                      </>
                      ): null}
                    </div>
                  </Grid.Column>
                  <Grid.Column width={resize ? 8 : 16}>
                    {company.length > 0 ||
                    description.length > 0 ||
                    url ? (
                      <>
                        <div
                          style={{
                            marginBottom: '-15px'
                          }}
                        >
                          Live Advertisement
                        </div>
                        <Card
                          fluid
                        >
                          <div>
                            <Grid>
                              <Grid.Row>
                                <Grid.Column
                                  style={{
                                    width: '44%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    position: 'relative'
                                  }}
                                >
                                  <input
                                    type='image'
                                    style={{
                                      transform: `translate(${left-20}px, ${top+10}px)`,
                                      width: resize ? `${width/2.8}px` : `${width/2.3}px`,
                                      height: resize ? `${height/2.8}px` : `${width/2.3}px`,
                                      borderRadius: '5%',
                                      maxWidth: '18em',
                                      maxHeight: '18em'
                                    }}
                                    src={clicked ? url : `https://firebasestorage.googleapis.com/v0/b/advertisement-generator-1fa98.appspot.com/o/image%2F${currentUser}%2Fadvertisement?alt=media&token=fa287dea-8216-4bcb-9b68-eb7f3a7672c5`}
                                  />
                                </Grid.Column>
                                <Grid.Column 
                                  style={{ 
                                    width: '56%' 
                                  }}
                                >
                                  <Item
                                    style={{
                                      fontSize: '10px',
                                      fontWeight: '900',
                                      padding: '1em 1em 1.5em 1em'
                                    }}
                                  >
                                    <h1 
                                      style={{ 
                                        display: 'flex', 
                                        justifyContent: 'center',
                                        fontSize: resize ? '13px' : '20px',
                                        marginTop: resize ? null : '10px',
                                        marginBottom: '-10px',
                                        lineHeight: '14px',
                                        wordBreak: 'break-word',
                                        width: '100%'
                                      }}
                                    >
                                      {company} Advertisement
                                    </h1>
                                    <div 
                                      style={{ 
                                        fontSize: resize ? '8.5px' : '13px', 
                                        lineHeight: '30px' 
                                      }}
                                    >
                                      <div 
                                        style={{ 
                                          margin: '2em 0em 1em 0em',
                                          lineHeight: '10px'
                                        }}
                                      >
                                        <Icon name='mouse pointer' />
                                        Click the button below to be transported to watch and
                                        take the comprehensive quiz for {company}.
                                      </div>
                                      <div 
                                        style={{ 
                                          margin: '1em 0em 1em 0em',
                                          lineHeight: '10px'
                                        }}
                                      >
                                        <Icon name='dollar' />
                                        Earn 20 points after successfully watching and
                                        completing the comprehension quiz for {company}.
                                      </div>
                                      <div 
                                        style={{ 
                                          margin: '1em 0em 1em 0em',
                                          lineHeight: '10px' 
                                        }}
                                      >
                                        <Icon name='calendar' />
                                        {`Your account needs to settle, which can take more than 30 days (due to possible returns). In this time, Earn and Trade users are credited with "Pending Points".`}
                                      </div>
                                      <div
                                        style={{ display: 'flex', justifyContent: 'center' }}
                                      >
                                        <Button
                                          content='Earn 20 points'
                                          style={{
                                            color: 'white',
                                            background: '#125CA1',
                                            borderRadius: '15% 15% 15% 15% / 50% 50% 50% 50%',
                                            fontSize: '10px',
                                            transform: resize ? 'scale(0.7)' : 'scale(0.9)'
                                          }}
                                          href='/'
                                        />
                                      </div>
                                    </div>
                                  </Item>
                                </Grid.Column>
                              </Grid.Row>
                            </Grid>
                          </div>
                          <div 
                            style={{ 
                              display: 'flex', 
                              justifyContent: 'center',
                              fontSize: resize ? '8px' : '12px',
                              marginBottom: '10px',
                              marginTop: '-10px',
                              lineHeight: '10px',
                              padding: '0px 20px 0px 20px'
                            }}
                          >
                            {description}
                          </div>
                        </Card>
                      </>
                    ) : (
                      <>
                        <Card fluid style={{ margin: '.5em 0em 0em 0em' }}>
                          <Card.Content
                            content='Create Advertisement'
                            style={{
                              textAlign: 'center',
                              fontSize: '25px',
                              fontWeight: '50',
                              margin: '0em 0em 0em 0em',
                              color: 'gray',
                              padding: '4.5em 0em 4.5em 0em',
                              boxShadow: '2px 2px 10px black',
                            }}
                          />
                        </Card>
                      </>
                    )}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  {selected ? (
                    <>
                      <Segment
                        style={{
                          display: resize ? 'flex' : 'block',
                          justifyContent: 'space-between',
                          width: '100%',
                          fontSize: '20px',
                          marginTop: '40px'
                        }}
                      >
                        <Form.Input
                          label='Logo Width'
                          placeholder='width (pixels)'
                          type='number'
                          style={{ width: resize ? '20vw' : '100%' }}
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                        />
                        <Form.Input
                          label='Logo Height'
                          placeholder='height (pixels)'
                          type='number'
                          style={{ width: resize ? '20vw' : '100%' }}
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                        <Form.Input
                          label='Left Margin'
                          placeholder='left (pixels)'
                          type='number'
                          style={{ width: resize ? '20vw' : '100%' }}
                          value={left}
                          onChange={(e) => setLeft(e.target.value)}
                        />
                        <Form.Input
                          label='Top Margin'
                          placeholder='top (pixels)'
                          type='number'
                          style={{ width: resize ? '20vw' : '100%' }}
                          value={top}
                          onChange={(e) => setTop(e.target.value)}
                        />
                      </Segment>
                    </>
                  ): null}
                </Grid.Row>
                <Grid.Row>
                  {company || description || url ? (
                    <div
                      style={{
                        display: resize ? 'flex' : 'block',
                        marginLeft: resize ? null : '13px'
                      }}
                    >
                      <div style={{ transform: resize ? 'translate(13.5px)' : null }}>
                        <Button
                          onClick={() => {
                            addAdvertisement(
                              company,
                              description,
                              width,
                              height,
                              left,
                              top
                            ),
                              dispatch(incrementCompany(String(company))),
                              dispatch(incrementDescription(String(description))),
                              dispatch(incrementWidth(String(width))),
                              dispatch(incrementHeight(String(height))),
                              dispatch(incrementLeft(String(left))),
                              dispatch(incrementTop(String(top)))
                          }}
                          style={{
                            border: '2px solid #125CA1',
                            background: 'transparent', 
                            color: '#125CA1',
                            padding: resize ? null : '10px 10px 10px 10px',
                            marginBottom: resize ? null : '15px'
                          }}
                        >
                          Save to Database
                        </Button>
                        {/* <Button
                          // onClick={() => {
                          //   deleteAdvertisement(
                          //     company,
                          //     description,
                          //     width,
                          //     height,
                          //     left,
                          //     top,
                          //     mediaPreview
                          //   ),
                          //     setCompany(''),
                          //     setDescription(''),
                          //     setMediaPreview(''),
                          //     dispatch(deleteCompany()),
                          //     dispatch(deleteDescription()),
                          //     dispatch(deleteWidth()),
                          //     dispatch(deleteHeight()),
                          //     dispatch(deleteLeft()),
                          //     dispatch(deleteTop()),
                          //     dispatch(deleteMediaPreview());
                          // }}
                          style={{ background: '#125CA1', color: 'white' }}
                        >
                          Delete
                        </Button> */}
                      </div>
                      <div
                        style={{
                          transform: resize ? 'translate(20px)' : null
                        }}
                      >
                        <Button
                          style={{
                            border: '2px solid red',
                            background: 'transparent',
                            color: 'red',
                            padding: resize ? null : '10px 10px 10px 10px'
                          }}
                          onClick={() => {
                            deleteAll(), 
                            setUrl(null), 
                            setSelected(false), 
                            getData(), 
                            setDescription(''), 
                            setCompany(''), 
                            setWidth(350), 
                            setHeight(350), 
                            setLeft(40), 
                            setTop(20)}}
                        >
                          Delete Advertisement
                        </Button>
                      </div>
                    </div>
                  ) : null}
                </Grid.Row>
              </Grid>
            </Segment>
          </Form>
          <Segment attached>
            <Grid>
              <Grid.Row>
                <Grid.Column
                  style={{
                    transform: resize ? 'translate(0px)' : 'translate(-12%)',
                    width: resize ? '44%' : '100%',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <input
                    type='image'
                    style={{
                      transform: `translate(${showLeft}px, ${showTop}px) scale(.8)`,
                      width: `${showWidth}px`,
                      height: `${showHeight}px`,
                      borderRadius: '5%',
                      maxWidth: '30em',
                      maxHeight: '30em'
                    }}
                    src={clicked ? url : `https://firebasestorage.googleapis.com/v0/b/advertisement-generator-1fa98.appspot.com/o/image%2F${currentUser}%2Fadvertisement?alt=media&token=fa287dea-8216-4bcb-9b68-eb7f3a7672c5`}
                  />
                </Grid.Column>
                <Grid.Column style={{ width: resize ? '56%' : '100%' }}>
                  <Item
                    style={{
                      fontSize: '1.5em',
                      fontWeight: '900',
                      padding: resize ? '1em 1em 1.5em 1em' : '0em 0em 0em 0em',
                    }}
                  >
                    <h1 
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        fontSize: resize ? null : '25px', 
                        marginBottom: resize ? null : '-20px',
                        wordBreak: 'break-word',
                        width: '100%'
                      }}
                    >
                      {showCompany} Advertisement
                    </h1>
                    <div 
                      style={{ 
                        fontSize: resize ? '.91em' : '18px', 
                        lineHeight: resize ? '30px' : '20px' 
                      }}
                    >
                      <div style={{ margin: '2em 0em 1em 0em' }}>
                        <Icon name='mouse pointer' />
                        Click the button below to be transported to watch and
                        take the comprehensive quiz for {showCompany}.
                      </div>
                      <div style={{ margin: '1em 0em 1em 0em' }}>
                        <Icon name='dollar' />
                        Earn 20 points after successfully watching and
                        completing the comprehension quiz for {showCompany}.
                      </div>
                      <div style={{ margin: '1em 0em 1em 0em' }}>
                        <Icon name='calendar' />
                        {`Your account needs to settle, which can take more than 30 days (due to possible returns). In this time, Earn and Trade users are credited with "Pending Points".`}
                      </div>
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <Button
                          content='Earn 20 points'
                          size='large'
                          style={{
                            color: 'white',
                            background: '#125CA1',
                            borderRadius: '15% 15% 15% 15% / 50% 50% 50% 50%',
                            marginTop: '1em',
                            marginBottom: resize ? null : '20px'
                          }}
                          href='/'
                        />
                      </div>
                    </div>
                  </Item>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {showDescription}
            </div>
          </Segment>
        </Container>
      </FocusLock>
    </>
  );
}
