import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container, Segment, Button, Form, Icon, Grid, Item, Card } from 'semantic-ui-react';
import FocusLock from 'react-focus-lock';
import styles from '../styles/advertisement.module.css';
import Local from '../components/localStorage';
import { getDoc, getDocs, getFirestore, doc, setDoc, Timestamp, updateDoc, deleteField, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
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
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { app } from '../firebase/clientApp';
import { v4 as uuidv4 } from 'uuid';

auth;
const db = getFirestore();
const storage = getStorage(app);
// console.log(app)

export default function Advertisement() {
  const [company, setCompany] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [mediaPreview, setMediaPreview] = useState<string>('');
  const [image, setImage] = useState({ name: '', media: '' });
  const [width, setWidth] = useState<any>(350);
  const [height, setHeight] = useState<any>(350);
  const [left, setLeft] = useState<any>(40);
  const [top, setTop] = useState<any>(20);
  const [userData, setUserData] = useState([]);
  const [userInfo, setUserInfo] = useState<Object>({});
  const [resize, setResize] = useState<boolean>(false);
  const [showCompany, setShowCompany] = useState<string>('');
  const [showDescription, setShowDescription] = useState<string>('');
  const [showMediaPreview, setShowMediaPreview] = useState<string>('');
  const [showWidth, setShowWidth] = useState<string>('');
  const [showHeight, setShowHeight] = useState<string>('');
  const [showLeft, setShowLeft] = useState<string>('');
  const [showTop, setShowTop] = useState<string>('');

  const currentUser = auth.currentUser?.uid;
  // console.log(currentUser);

  const [user] = useAuthState(auth);
  // console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth > 991) {
      setResize(true);
    } else {
      setResize(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 991) {
        setResize(true);
      } else {
        setResize(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  function handleChange(event) {
    const { name, files } = event.target;
    if (name === 'media') {
      setImage((prevState) => ({ ...prevState, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    }
    const img = files[0].name;
    console.log(img);
    console.log(files[0].name);
    // console.log(image);
  }

  // console.log(mediaPreview);
  // console.log(description.length);
  // console.log(auth);

  // console.log data
  // const logged = async () => {
  //   const colRef = collection(db, 'users');
  //   const docsSnap = await getDocs(colRef);
  //   docsSnap.forEach((doc) => {
  //     setUserInfo(doc.data());
  //     console.log(userInfo);
  //   });
  // };

  // useEffect(() => {
  //   logged();
  // }, []);

  const addAdvertisement = async (
    company: string,
    description: string,
    width: number,
    height: number,
    left: number,
    top: number,
    mediaPreview: string
  ) => {
    await setDoc(doc(db, '/users/' + currentUser + 'Ads'), {
      company,
      description,
      width,
      height,
      left,
      top,
      mediaPreview,
      created: Timestamp.now(),
    });
  };

  useEffect(() => {
    const q = query(collection(db, '/users'), orderBy('created', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      setUserData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          company: doc.data().company,
          created: doc.data().created,
          description: doc.data().description,
          height: doc.data().height,
          left: doc.data().left,
          top: doc.data().top,
          width: doc.data().width,
          mediaPreview: doc.data().mediaPreview,
        }))
      );
    });
  }, []);

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
      console.log('Document mediaPreview:', docSnap.data().mediaPreview);
      setShowCompany(docSnap.data().company);
      setShowDescription(docSnap.data().description);
      setShowMediaPreview(docSnap.data().height);
      setShowWidth(docSnap.data().width);
      setShowHeight(docSnap.data().top);
      setShowLeft(docSnap.data().left);
      setShowTop(docSnap.data().mediaPreview);
    } else {
      console.log('No document data');
    }
  }

  async function deleteCompany() {
    const docRef = doc(db, 'users', currentUser);
    await updateDoc(docRef, {
      company: deleteField()
    });
  }

  async function deleteDescription() {
    const docRef = doc(db, 'users', currentUser);
    await updateDoc(docRef, {
      description: deleteField()
    });
  }

  async function deleteHeight() {
    const docRef = doc(db, 'users', currentUser);
    await updateDoc(docRef, {
      height: deleteField()
    });
  }

  async function deleteWidth() {
    const docRef = doc(db, 'users', currentUser);
    await updateDoc(docRef, {
      width: deleteField()
    });
  }

  async function deleteTop() {
    const docRef = doc(db, 'users', currentUser);
    await updateDoc(docRef, {
      top: deleteField()
    });
  }

  async function deleteLeft() {
    const docRef = doc(db, 'users', currentUser);
    await updateDoc(docRef, {
      left: deleteField()
    });
  }

  async function deleteMediaPreview() {
    const docRef = doc(db, 'users', currentUser);
    await updateDoc(docRef, {
      mediaPreview: deleteField()
    });
  }

  async function deleteAll() {
    const docRef = doc(db, 'users', currentUser);
    await updateDoc(docRef, {
      company: deleteField(),
      description: deleteField(),
      height: deleteField(),
      width: deleteField(),
      top: deleteField(),
      left: deleteField(),
      mediaPreview: deleteField()
    });
  }

  // useEffect(() => {
  //   getData();
  // }, [])

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, 'images/');
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + uuidv4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  }

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Earn and Trade Advertisement Generator</title>
        <meta name='description' content='earnandtrade, advertisement' />
      </Head>
      <div>
        <input 
          type='file'
          onChange={(event) => setImageUpload(event.target.files[0])}
        />
        <button
          onClick={uploadImage}
        >
          Upload Image
        </button>
      </div>
      {imageList.map((url) => {
        return <img src={url} />
      })}
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
      {/* <div>
        <Button
          color='red'
          onClick={deleteAll}
        >
          Delete Advertisement
        </Button>
      </div> */}
      <div>
        {showCompany}
      </div>
      <div>
        {showDescription}
      </div>
      <div>
        {showMediaPreview}
      </div>
      <div>
        {showWidth}
      </div>
      <div>
        {showHeight}
      </div>
      <div>
        {showLeft}
      </div>
      <div>
        {showTop}
      </div>
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
          // onMouseMove={getData}
        >
          <Segment attached textAlign='center'>
            <div
              style={{
                color: '#125CA1',
                fontSize: '52px',
                fontWeight: '700',
                padding: '1em 0em .5em 0em',
                lineHeight: '50px',
              }}
            >
              Advertisement Generator
            </div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: '400px',
                padding: '0em 0em 1em 0em',
              }}
            >
              Create and Generate Dynamic Ads
            </div>
          </Segment>
          <Form>
            <Segment size='huge' textAlign='left'>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Form.Input
                      fluid
                      label='Company Name'
                      placeholder='company'
                      name='company'
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                    <Form.Input
                      fluid
                      label='Advertisement Description'
                      placeholder='description'
                      name='description'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <div>Upload Logo</div>
                    <input
                      name='media'
                      type='file'
                      accept='image/*'
                      style={{ width: '30vw', transform: 'translateX(-.2vw)' }}
                      className={styles.file}
                      onChange={handleChange}
                    />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    {company.length > 0 ||
                    description.length > 0 ||
                    mediaPreview ? (
                      <>
                        <Card
                          fluid
                          style={{
                            textAlign: 'left',
                            fontSize: '22px',
                            margin: '1em 0em 0em 0em',
                            padding: '1em',
                          }}
                        >
                          <div style={{ margin: '1em 0em 0em 0em' }}>
                            Company Name: {JSON.stringify(company, null, 2)}
                          </div>
                          <div style={{ margin: '1em 0em 1em 0em' }}>
                            Advertisement Description:{' '}
                            {JSON.stringify(description, null, 2)}
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
                  {!mediaPreview ? (
                    <>&nbsp;</>
                  ) : (
                    <>
                      <Segment
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '100%',
                          fontSize: '20px',
                        }}
                      >
                        <Form.Input
                          label='Logo Width'
                          placeholder='width (pixels)'
                          type='number'
                          style={{ width: '20vw' }}
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                        />
                        <Form.Input
                          label='Logo Height'
                          placeholder='height (pixels)'
                          type='number'
                          style={{ width: '20vw' }}
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                        <Form.Input
                          label='Left Margin'
                          placeholder='left (pixels)'
                          type='number'
                          style={{ width: '20vw' }}
                          value={left}
                          onChange={(e) => setLeft(e.target.value)}
                        />
                        <Form.Input
                          label='Top Margin'
                          placeholder='top (pixels)'
                          type='number'
                          style={{ width: '20vw' }}
                          value={top}
                          onChange={(e) => setTop(e.target.value)}
                        />
                      </Segment>
                    </>
                  )}
                </Grid.Row>
                <Grid.Row>
                  <div>
                    <Button
                      color='blue'
                      onClick={getData}
                    >
                      Save Advertisement
                    </Button>
                  </div>
                  <div>
                    <Button
                      color='red'
                      onClick={deleteAll}
                    >
                      Delete Advertisement
                    </Button>
                  </div>
                  {company && description ? (
                    <>
                      <div style={{ transform: 'translateX(13.5px)' }}>
                        <Button
                          onClick={() => {
                            addAdvertisement(
                              company,
                              description,
                              width,
                              height,
                              left,
                              top,
                              mediaPreview
                            ),
                              dispatch(incrementCompany(String(company))),
                              dispatch(incrementDescription(String(description))),
                              dispatch(incrementWidth(String(width))),
                              dispatch(incrementHeight(String(height))),
                              dispatch(incrementLeft(String(left))),
                              dispatch(incrementTop(String(top))),
                              dispatch(incrementMediaPreview(String(mediaPreview)));
                          }}
                          style={{ background: '#125CA1', color: 'white' }}
                        >
                          Save
                        </Button>
                        <Button
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
                        </Button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </Grid.Row>
              </Grid>
            </Segment>
          </Form>
          <Segment attached>
            <Grid>
              <Grid.Row>
                <Grid.Column
                  style={{
                    transform: resize ? 'translate(0px)' : 'translate(-6%)',
                    width: resize ? '44%' : '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <input
                    type='image'
                    width={showWidth}
                    height={showHeight}
                    style={{
                      transform: `translate(${showLeft}px, ${showTop}px) scale(.8)`,
                      borderRadius: '5%',
                      maxWidth: '30em',
                      maxHeight: '30em',
                    }}
                    src={mediaPreview}
                  />
                </Grid.Column>
                <Grid.Column style={{ width: resize ? '56%' : '100%' }}>
                  <Item
                    style={{
                      fontSize: '1.5em',
                      fontWeight: '900',
                      padding: '1em 1em 1.5em 1em',
                    }}
                  >
                    <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                      {showCompany} Video Advertisement
                    </h1>
                    <div style={{ fontSize: '.91em', lineHeight: '30px' }}>
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
