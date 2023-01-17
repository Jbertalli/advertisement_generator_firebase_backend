import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Button, Form, Icon, Item, Card } from 'semantic-ui-react';
import FocusLock from 'react-focus-lock';
import styles from '../styles/advertisement.module.css';
import Local from '../components/mobileLocalStorage';
// import firebase from '../firebase/clientApp';
import { getFirestore, doc, getDocs, setDoc, collection, Timestamp, updateDoc, deleteField, query, orderBy, onSnapshot  } from 'firebase/firestore';
import { auth } from '../firebase/clientApp';
import { useDispatch } from 'react-redux';
import { incrementCompany, deleteCompany } from '../slices/companySlice';
import { incrementDescription, deleteDescription } from '../slices/descriptionSlice';
import { incrementWidth, deleteWidth } from '../slices/widthSlice';
import { incrementHeight, deleteHeight } from '../slices/heightSlice';
import { incrementLeft, deleteLeft } from '../slices/leftSlice';
import { incrementTop, deleteTop } from '../slices/topSlice';
import { incrementMediaPreview, deleteMediaPreview } from '../slices/mediaSlice';

auth;
const db = getFirestore();
const LOCAL_STORAGE_KEY_MOBILE_IMAGE = 'MobileImage';

export default function MobileAdvertisement() {
  const [company, setCompany] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [mediaPreview, setMediaPreview] = useState<string>('');
  const [image, setImage] = useState({ name: '', media: '' });
  const [width, setWidth] = useState<any>(400);
  const [height, setHeight] = useState<any>(400);
  const [left, setLeft] = useState<any>(40);
  const [top, setTop] = useState<any>(20);
  const [userData, setUserData] = useState([]);

  // const companyName = useSelector((state: RootState) => state.company.value);
  const dispatch = useDispatch();

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
    // console.log(mediaPreview);
  }

  // Image
  useEffect(() => {
    const storedImage = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_MOBILE_IMAGE)
    );
    if (storedImage) setMediaPreview(storedImage);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_MOBILE_IMAGE,
      JSON.stringify(mediaPreview)
    );
  }, [mediaPreview]);

  // console.log data
  const logged = async () => {
    const colRef = collection(db, 'Advertisement');
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach((doc) => {
      console.log(doc.data());
    });
  };

  useEffect(() => {
    logged();
  }, []);

  const addAdvertisement = async (
    company: string,
    description: string,
    width: number,
    height: number,
    left: number,
    top: number,
    mediaPreview: string
  ) => {
    await setDoc(doc(db, 'Advertisement', 'Company'), {
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
    const q = query(
      collection(db, 'Advertisement'),
      orderBy('created', 'desc')
    );
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

  let dbId = userData?.[0]?.id;
  let dbCompany = userData?.[0]?.company;
  let dbDescription = userData?.[0]?.description;
  let dbHeight = userData?.[0]?.height;
  let dbLeft = userData?.[0]?.left;
  let dbTop = userData?.[0]?.top;
  let dbWidth = userData?.[0]?.width;
  let dbImage = userData?.[0]?.mediaPreview;

  const deleteAdvertisement = async (
    company: string,
    description: string,
    width: number,
    height: number,
    left: number,
    top: number,
    mediaPreview: string
  ) => {
    await updateDoc(doc(db, 'Advertisement', 'Company'), {
      company: deleteField(),
      description: deleteField(),
      width: deleteField(),
      height: deleteField(),
      left: deleteField(),
      top: deleteField(),
      mediaPreview: deleteField(),
    });
  };

  return (
    <>
      <Head>
        <title>Earn and Trade Advertisement Generator</title>
        <meta name='description' content='earnandtrade, advertisement' />
      </Head>
      <Local
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
      />
      <FocusLock>
        <div>
          <div
            style={{
              color: '#125CA1',
              fontSize: '52px',
              fontWeight: '700',
              padding: '.5em 0em 0em 0em',
              lineHeight: '50px',
              textAlign: 'center',
            }}
          >
            Advertisement Generator
          </div>
          <div
            style={{
              fontSize: '18px',
              fontWeight: '400px',
              padding: '0em 0em 1em 0em',
              textAlign: 'center',
            }}
          >
            Create and Generate Dynamic Ads
          </div>
        </div>
        <Form>
          <Form.Input
            fluid
            label='&nbsp;&nbsp;&nbsp;Company Name'
            placeholder='company'
            name='company'
            value={company}
            style={{ padding: '0em .5em 0em .5em' }}
            onChange={(e) => setCompany(e.target.value)}
          />
          <Form.Input
            fluid
            label='&nbsp;&nbsp;&nbsp;Advertisement Description'
            placeholder='description'
            name='description'
            value={description}
            style={{ padding: '0em .5em 0em .5em' }}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div>&nbsp;&nbsp;&nbsp;Upload Logo</div>
          <input
            name='media'
            type='file'
            accept='image/*'
            // content="Select Image"
            style={{ width: '40vw', transform: 'translate(2vw)' }}
            className={styles.file}
            onChange={handleChange}
          />
          {company.length > 0 || description.length > 0 || mediaPreview ? (
            <>
              {/* <strong style={{ fontSize: '1em', display: 'flex', justifyContent: 'center' }}>Advertisement</strong> */}
              <Card
                fluid
                style={{
                  textAlign: 'left',
                  fontSize: '1.2em',
                  margin: '1em 1em 1em .6em',
                  padding: '1em',
                  width: '96vw',
                }}
              >
                <div style={{ margin: '1em 0em 0em 0em' }}>
                  Company Name: {JSON.stringify(company, null, 2)}
                </div>
                {/* <div style={{ margin: '1em 0em 0em 0em' }}>{JSON.stringify(header, null, 2)}</div> */}
                <div style={{ margin: '1em 0em 1em 0em' }}>
                  Advertisement Description:{' '}
                  {JSON.stringify(description, null, 2)}
                </div>
                {/* <input type="image" src={mediaPreview}/> */}
              </Card>
            </>
          ) : (
            <>
              <div>
                <Card centered style={{ marginTop: '2em', width: '90vw' }}>
                  <Card.Content
                    content='Create Advertisement'
                    style={{
                      textAlign: 'center',
                      fontSize: '1.5em',
                      fontWeight: '50',
                      color: 'gray',
                      padding: '4.5em 0em 4.5em 0em',
                      boxShadow: '2px 2px 10px black',
                    }}
                  />
                </Card>
              </div>
            </>
          )}
          {!mediaPreview ? (
            <>&nbsp;</>
          ) : (
            <>
              <div style={{ marginLeft: '.6em' }}>
                <Form.Input
                  label='Logo Width'
                  placeholder='width (pixels)'
                  type='number'
                  // value={width}
                  style={{ width: '96vw', marginLeft: '.2em' }}
                  onChange={(e) => setWidth(e.target.value)}
                />
                <Form.Input
                  label='Logo Height'
                  placeholder='height (pixels)'
                  type='number'
                  // value={height}
                  style={{ width: '96vw', marginLeft: '.2em' }}
                  onChange={(e) => setHeight(e.target.value)}
                />
                <Form.Input
                  label='Left Margin'
                  placeholder='left (pixels)'
                  type='number'
                  // value={left}
                  style={{ width: '96vw', marginLeft: '.2em' }}
                  onChange={(e) => setLeft(e.target.value)}
                />
                <Form.Input
                  label='Top Margin'
                  placeholder='top (pixels)'
                  type='number'
                  // value={top}
                  style={{ width: '96vw', marginLeft: '.2em' }}
                  onChange={(e) => setTop(e.target.value)}
                />
              </div>
            </>
          )}
          <div>
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
                    onClick={() => {
                      deleteAdvertisement(
                        company,
                        description,
                        width,
                        height,
                        left,
                        top,
                        mediaPreview
                      ),
                        setCompany(''),
                        setDescription(''),
                        setMediaPreview(''),
                        dispatch(deleteCompany()),
                        dispatch(deleteDescription()),
                        dispatch(deleteWidth()),
                        dispatch(deleteHeight()),
                        dispatch(deleteLeft()),
                        dispatch(deleteTop()),
                        dispatch(deleteMediaPreview());
                    }}
                    style={{ background: '#125CA1', color: 'white' }}
                  >
                    Delete
                  </Button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </Form>
        {company.length === 0 || description.length === 0 || !mediaPreview ? (
          <>&nbsp;</>
        ) : (
          <>
            <input
              type='image'
              width={width}
              height={height}
              style={{
                transform: `translate(${left}px, ${top}px) scale(.8)`,
                borderRadius: '5%',
                maxWidth: '30em',
                maxHeight: '30em',
              }}
              src={mediaPreview}
            />
          </>
        )}
        <Item
          style={{
            fontSize: '1.3em',
            fontWeight: '900',
            padding: '1em 1em 1.5em 1em',
          }}
        >
          <div>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>
              {company} Video Advertisement
            </h1>
          </div>
          <div style={{ fontSize: '.91em', lineHeight: '20px' }}>
            <div style={{ margin: '1em 0em 1em 0em' }}>
              <Icon name='mouse pointer' />
              Click the button below to be transported to watch and take the
              comprehensive quiz for {company}.
            </div>
            <div style={{ margin: '1em 0em 1em 0em' }}>
              <Icon name='dollar' />
              Earn 20 points after successfully watching and completing the
              comprehension quiz for {company}.
            </div>
            <div style={{ margin: '1em 0em 1em 0em' }}>
              <Icon name='calendar' />
              {`Your account needs to settle, which can take more than 30 days (due to possible returns). In this time, Earn and Trade users are credited with "Pending Points".`}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
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
        </Item>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '3em',
          }}
        >
          {description}
        </div>
      </FocusLock>
    </>
  );
}
