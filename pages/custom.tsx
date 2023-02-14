import Head from 'next/head';
import styles from '../styles/advertisement.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Draggable from 'react-draggable';
import LocalCustom from '../components/localStorageCustom';
import { Divider, Container, Segment, Icon, Form, Button } from 'semantic-ui-react';
import { auth } from '../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getDoc, getFirestore, doc, getDocs, setDoc, Timestamp, updateDoc, deleteField, collection, query, orderBy,  onSnapshot } from 'firebase/firestore';

auth;
const db = getFirestore();

export default function Custom() {
  const [company, setCompany] = useState<string>('');
  const [companyFontSize, setCompanyFontSize] = useState<string>('');
  const [companyFontWeight, setCompanyFontWeight] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [descriptionFontSize, setDescriptionFontSize] = useState<string>('');
  const [descriptionFontWeight, setDescriptionFontWeight] = useState<string>('');
  const [borderWidth, setBorderWidth] = useState<string>('');
  const [borderColor, setBorderColor] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('');
  const [mediaPreview, setMediaPreview] = useState<string>('');
  const [image, setImage] = useState({ name: '', media: '' });
  const [imageWidth, setImageWidth] = useState<string>('');
  const [imageHeight, setImageHeight] = useState<string>('');
  const [imageRotation, setImageRotation] = useState<string>('');
  const [editTitle, setEditTitle] = useState<boolean>(false);
  const [editDescription, setEditDescription] = useState<boolean>(false);
  const [editBorder, setEditBorder] = useState<boolean>(false);
  const [editGlobal, setEditGlobal] = useState<boolean>(false);
  const [editImage, setEditImage] = useState<boolean>(false);
  const [showCompany, setShowCompany] = useState<string>('');
  const [showCompanyFontSize, setShowCompanyFontSize] = useState<string>('');
  const [showCompanyFontWeight, setShowCompanyFontWeight] = useState<string>('');
  const [showDescription, setShowDescription] = useState<string>('');
  const [showDescriptionFontSize, setShowDescriptionFontSize] = useState<string>('');
  const [showDescriptionFontWeight, setShowDescriptionFontWeight] = useState<string>('');
  const [showBorderWidth, setShowBorderWidth] = useState<string>('');
  const [showBorderColor, setShowBorderColor] = useState<string>('');
  const [showColor, setShowColor] = useState<string>('');
  const [showBackgroundColor, setShowBackgroundColor] = useState<string>('');
  const [showMediaPreview, setShowMediaPreview] = useState<string>('');
  const [showImage, setShowImage] = useState<string>('');
  const [showImageWidth, setShowImageWidth] = useState<string>('');
  const [showImageHeight, setShowImageHeight] = useState<string>('');
  const [showImageRotation, setShowImageRotation] = useState<string>('');
  const [userData, setUserData] = useState([]);

  const currentUser = auth.currentUser?.uid;
  // console.log(currentUser);

  const [user] = useAuthState(auth);
  // console.log(user);

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

  console.log(mediaPreview);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(document.cookie.length);
      if (document.cookie.length > 6) {
        console.log('Authenticated!');
      } else if (document.cookie.length == 5) {
        router.push('/');
      } else {
        return null;
      }
    } else {
      console.log('window == undefined');
    }
  }, []);

  console.log(
    company,
    companyFontSize,
    companyFontWeight,
    description,
    descriptionFontSize,
    descriptionFontWeight,
    borderWidth,
    borderColor,
    color,
    backgroundColor,
    mediaPreview,
    imageWidth,
    imageHeight,
    imageRotation
  );

  let hey  = 0;

  console.log(currentUser);

  async function addCustom(
    company: string,
    companyFontSize: string,
    companyFontWeight: string,
    description: string,
    descriptionFontSize: string,
    descriptionFontWeight: string,
    borderWidth: string,
    borderColor: string,
    color: string,
    backgroundColor: string,
    mediaPreview: string,
    imageWidth: string,
    imageHeight: string,
    imageRotation: string
  ) {
    // await setDoc(doc(db, '/users/' + currentUser + 'Ads'), {
    await setDoc(doc(db, '/users/' + currentUser + 'Custom'), {
      company,
      companyFontSize,
      companyFontWeight,
      description,
      descriptionFontSize,
      descriptionFontWeight,
      borderWidth,
      borderColor,
      color,
      backgroundColor,
      mediaPreview,
      imageWidth,
      imageHeight,
      imageRotation,
      created: Timestamp.now(),
    });
  };

  useEffect(() => {
    const q = query(collection(db, '/users'), orderBy('created', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      setUserData(
        querySnapshot.docs.map((doc) => ({
          company: doc.data().company,
          companyFontSize: doc.data().companyFontSize,
          companyFontWeight: doc.data().companyFontWeight,
          description: doc.data().description,
          descriptionFontSize: doc.data().descriptionFontSize,
          descriptionFontWeight: doc.data().descriptionFontWeight,
          borderWidth: doc.data().borderWidth,
          borderColor: doc.data().borderColor,
          color: doc.data().color,
          backgroundColor: doc.data().backgroundColor,
          mediaPreview: doc.data().mediaPreview,
          imageWidth: doc.data().imageWidth,
          imageHeight: doc.data().imageHeight,
          imageRotation: doc.data().imageRotation
        }))
      );
    });
  }, []);

  console.log(userData);

  async function getData() {
    // const docRef = doc(db, 'users', currentUser);
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
      console.log('Document Company:', docSnap.data().company);
      console.log('Document CompanyFontSize:', docSnap.data().companyFontSize);
      console.log('Document CompanyFontWeight:', docSnap.data().companyFontWeight);
      console.log('Document Description:', docSnap.data().description);
      console.log('Document DescriptionFontSize:', docSnap.data().descriptionFontSize);
      console.log('Document DescriptionFontWeight:', docSnap.data().descriptionFontWeight);
      console.log('Document BorderWidth:', docSnap.data().borderWidth);
      console.log('Document BorderColor:', docSnap.data().borderColor);
      console.log('Document Color:', docSnap.data().color);
      console.log('Document BackgroundColor:', docSnap.data().backgroundColor);
      console.log('Document MediaPreview:', docSnap.data().mediaPreview);
      console.log('Document ImageWidth:', docSnap.data().imageWidth);
      console.log('Document ImageHeight:', docSnap.data().imageHeight);
      console.log('Document ImageRotation:', docSnap.data().imageRotation);
      setShowCompany(docSnap.data().company);
      setShowCompanyFontSize(docSnap.data().companyFontSize);
      setShowCompanyFontWeight(docSnap.data().companyFontWeight);
      setShowDescription(docSnap.data().description);
      setShowDescriptionFontSize(docSnap.data().descriptionFontSize);
      setShowDescriptionFontWeight(docSnap.data().descriptionFontWeight);
      setShowBorderWidth(docSnap.data().borderWidth);
      setShowBorderColor(docSnap.data().borderColor);
      setShowColor(docSnap.data().color);
      setShowBackgroundColor(docSnap.data().backgroundColor);
      setShowMediaPreview(docSnap.data().mediaPreview);
      setShowImageWidth(docSnap.data().imageWidth);
      setShowImageHeight(docSnap.data().imageHeight);
      setShowImageRotation(docSnap.data().imageRotation);
    } else {
      console.log('No document data');
    }
  }

  return (
    <>
      <Head>
        <title>Custom Advertisement Generator</title>
        <meta name='description' content='earnandtrade, advertisement' />
      </Head>
      <Button
        onClick={() => addCustom(
          company,
          companyFontSize,
          companyFontWeight,
          description,
          descriptionFontSize,
          descriptionFontWeight,
          borderWidth,
          borderColor,
          color,
          backgroundColor,
          mediaPreview,
          imageWidth,
          imageHeight,
          imageRotation
        )}
        color='green'
        style={{
          color: 'white',
          marginLeft: '3vw',
        }}
      >
        Save Data
      </Button>
      <Button
        color='blue'
        onClick={getData}
      >
        Get Data
      </Button>
      <div>
        {showCompany}
      </div>
      <div>
        {showCompanyFontSize}
      </div>
      <div>
        {showCompanyFontWeight}
      </div>
      <div>
        {showDescription}
      </div>
      <div>
        {showDescriptionFontSize}
      </div>
      <div>
        {showDescriptionFontWeight}
      </div>
      <div>
        {showBorderWidth}
      </div>
      <div>
        {showBorderColor}
      </div>
      <div>
        {showColor}
      </div>
      <div>
        {showBackgroundColor}
      </div>
      <div>
        {showMediaPreview}
      </div>
      <div>
        {showImageWidth}
      </div>
      <div>
        {showImageHeight}
      </div>
      <div>
        {showImageRotation}
      </div>
      <LocalCustom
        company={company}
        setCompany={setCompany}
        companyFontSize={companyFontSize}
        setCompanyFontSize={setCompanyFontSize}
        companyFontWeight={companyFontWeight}
        setCompanyFontWeight={setCompanyFontWeight}
        description={description}
        setDescription={setDescription}
        descriptionFontSize={descriptionFontSize}
        setDescriptionFontSize={setDescriptionFontSize}
        descriptionFontWeight={descriptionFontWeight}
        setDescriptionFontWeight={setDescriptionFontWeight}
        borderWidth={borderWidth}
        setBorderWidth={setBorderWidth}
        borderColor={borderColor}
        setBorderColor={setBorderColor}
        color={color}
        setColor={setColor}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        mediaPreview={mediaPreview}
        setMediaPreview={setMediaPreview}
        image={image}
        setImage={setImage}
        imageWidth={imageWidth}
        setImageWidth={setImageWidth}
        imageHeight={imageHeight}
        setImageHeight={setImageHeight}
        imageRotation={imageRotation}
        setImageRotation={setImageRotation}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editDescription={editDescription}
        setEditDescription={setEditDescription}
        editBorder={editBorder}
        setEditBorder={setEditBorder}
        editGlobal={editGlobal}
        setEditGlobal={setEditGlobal}
        editImage={editImage}
        setEditImage={setEditImage}
      />
      <Header />
      <Container
        size='massive'
        style={{
          margin: '0.5em',
          boxShadow: '2px 2px 10px black',
        }}
      >
        <Segment attached textAlign='center'>
          <div
            style={{
              color: '#125CA1',
              fontSize: '42px',
              fontWeight: '700',
              padding: '0.8em 0em .5em 0em',
              lineHeight: '40px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Custom Advertisement
          </div>
          <div
            style={{
              fontSize: '18px',
              fontWeight: '400px',
              padding: '0em 0em 1em 0em',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Create a Custom Advertisement
          </div>
        </Segment>
        <div
          style={{
            fontSize: '18px',
            fontWeight: '500',
            color: '#125CA1',
            cursor: 'pointer',
          }}
        >
          {editTitle ? (
            <>
              <div
                id='editTitle'
                style={{
                  transform: 'translateY(-16px)',
                }}
              />
              <div
                style={{
                  marginTop: '15px',
                  marginBottom: '20px',
                  fontSize: '25px',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  Edit Title
                </span>
                <div
                  style={{
                    transform: 'translate(-20px, -20px)',
                    color: 'red',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                  onClick={() => setEditTitle(false)}
                >
                  x
                </div>
              </div>
              <div style={{ color: 'black', marginLeft: '8vw' }}>
                <div style={{ marginBottom: '5px' }}>Company Name</div>
                <div>
                  <Form.Input
                    type='text'
                    placeholder='company'
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{
                      width: '65%',
                      marginBottom: '25px',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '5px' }}>Company Font Size</div>
                <div>
                  <Form.Input
                    type='text'
                    placeholder='font size'
                    value={companyFontSize}
                    onChange={(e) => setCompanyFontSize(e.target.value)}
                    style={{
                      width: '50%',
                      marginBottom: '25px',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '5px' }}>
                  Company Font Weight (Boldness)
                </div>
                <div>
                  <input
                    min='100'
                    max='900'
                    step='100'
                    type='range'
                    placeholder='font weight'
                    value={companyFontWeight}
                    onChange={(e) => setCompanyFontWeight(e.target.value)}
                    style={{
                      width: '50%',
                      marginTop: '15px',
                      marginBottom: '15px',
                      cursor: 'grab',
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <a href='#editTitle'>
                <div
                  onClick={() => {
                    setEditTitle(true),
                      setEditDescription(false),
                      setEditBorder(false),
                      setEditGlobal(false),
                      setEditImage(false);
                  }}
                >
                  <div
                    style={{
                      marginLeft: '-25px',
                      display: 'flex',
                      transform: 'translateY(100%) scale(0.8)',
                    }}
                  >
                    <Icon name='chevron down' />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Edit Title
                  </div>
                </div>
              </a>
            </>
          )}
        </div>
        <Divider />
        <div
          style={{
            fontSize: '18px',
            fontWeight: '500',
            color: '#125CA1',
            cursor: 'pointer',
          }}
        >
          {editDescription ? (
            <>
              <div
                id='editDescription'
                style={{
                  transform: 'translateY(-17px)',
                }}
              />
              <div
                style={{
                  marginTop: '15px',
                  marginBottom: '20px',
                  fontSize: '25px',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  Edit Description
                </span>
                <div
                  style={{
                    transform: 'translate(-20px, -20px)',
                    color: 'red',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                  onClick={() => setEditDescription(false)}
                >
                  x
                </div>
              </div>
              <div style={{ color: 'black', marginLeft: '8vw' }}>
                <div style={{ marginBottom: '5px' }}>
                  Advertisement Description
                </div>
                <div>
                  <Form.Input
                    type='text'
                    placeholder='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{
                      width: '65%',
                      marginBottom: '25px',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '5px' }}>Description Font Size</div>
                <div>
                  <Form.Input
                    type='text'
                    placeholder='font size'
                    value={descriptionFontSize}
                    onChange={(e) => setDescriptionFontSize(e.target.value)}
                    style={{
                      width: '50%',
                      marginBottom: '25px',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '5px' }}>
                  Description Font Weight (Boldness)
                </div>
                <div>
                  <input
                    min='100'
                    max='900'
                    step='100'
                    type='range'
                    placeholder='font weight'
                    value={descriptionFontWeight}
                    onChange={(e) => setDescriptionFontWeight(e.target.value)}
                    style={{
                      width: '50%',
                      marginTop: '15px',
                      marginBottom: '15px',
                      cursor: 'grab',
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <a href='#editDescription'>
                <div
                  style={{ transform: 'translateY(-8px)' }}
                  onClick={() => {
                    setEditDescription(true),
                      setEditTitle(false),
                      setEditBorder(false),
                      setEditGlobal(false),
                      setEditImage(false);
                  }}
                >
                  <div
                    style={{
                      marginLeft: '-25px',
                      display: 'flex',
                      transform: 'translateY(100%) scale(0.8)',
                    }}
                  >
                    <Icon name='chevron down' />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Edit Description
                  </div>
                </div>
              </a>
            </>
          )}
        </div>
        <Divider />
        <div
          style={{
            fontSize: '18px',
            fontWeight: '500',
            color: '#125CA1',
            cursor: 'pointer',
          }}
        >
          {editBorder ? (
            <>
              <div
                id='editBorder'
                style={{
                  transform: 'translateY(-17px)',
                }}
              />
              <div
                style={{
                  marginTop: '15px',
                  marginBottom: '20px',
                  fontSize: '25px',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  Edit Border
                </span>
                <div
                  style={{
                    transform: 'translate(-20px, -20px)',
                    color: 'red',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                  onClick={() => setEditBorder(false)}
                >
                  x
                </div>
              </div>
              <div style={{ color: 'black', marginLeft: '8vw' }}>
                <div style={{ marginBottom: '5px' }}>Border Width (pixels)</div>
                <div>
                  <Form.Input
                    type='text'
                    placeholder='width'
                    value={borderWidth}
                    onChange={(e) => setBorderWidth(e.target.value)}
                    style={{
                      width: '50%',
                      marginBottom: '25px',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '5px' }}>Border Color</div>
              </div>
              <div style={{ marginLeft: '8vw' }}>
                <input
                  type='color'
                  value={borderColor}
                  onChange={(e) => setBorderColor(e.target.value)}
                  style={{
                    width: '100px',
                    height: '100px',
                    marginBottom: '15px',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <a href='#editBorder'>
                <div
                  style={{ transform: 'translateY(-8px)' }}
                  onClick={() => {
                    setEditBorder(true),
                      setEditTitle(false),
                      setEditDescription(false),
                      setEditGlobal(false),
                      setEditImage(false);
                  }}
                >
                  <div
                    style={{
                      marginLeft: '-25px',
                      display: 'flex',
                      transform: 'translateY(100%) scale(0.8)',
                    }}
                  >
                    <Icon name='chevron down' />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Edit Border
                  </div>
                </div>
              </a>
            </>
          )}
        </div>
        <Divider />
        <div
          style={{
            fontSize: '18px',
            fontWeight: '500',
            color: '#125CA1',
            cursor: 'pointer',
          }}
        >
          {editGlobal ? (
            <>
              <div
                id='editGlobal'
                style={{
                  transform: 'translateY(-17px)',
                }}
              />
              <div
                style={{
                  marginTop: '15px',
                  marginBottom: '20px',
                  fontSize: '25px',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  Edit Global
                </span>
                <div
                  style={{
                    transform: 'translate(-20px, -20px)',
                    color: 'red',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                  onClick={() => setEditGlobal(false)}
                >
                  x
                </div>
              </div>
              <div style={{ color: 'black', marginLeft: '8vw' }}>
                <div style={{ marginBottom: '5px' }}>Select Text Color</div>
                <div>
                  <input
                    type='color'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    style={{
                      width: '100px',
                      height: '100px',
                      marginBottom: '25px',
                      cursor: 'pointer'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '5px' }}>
                  Select Background Color
                </div>
                <div>
                  <input
                    type='color'
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    style={{
                      width: '100px',
                      height: '100px',
                      marginBottom: '15px',
                      cursor: 'pointer'
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <a href='#editGlobal'>
                <div
                  style={{ transform: 'translateY(-8px)' }}
                  onClick={() => {
                    setEditGlobal(true),
                      setEditTitle(false),
                      setEditDescription(false),
                      setEditBorder(false),
                      setEditImage(false);
                  }}
                >
                  <div
                    style={{
                      marginLeft: '-25px',
                      display: 'flex',
                      transform: 'translateY(100%) scale(0.8)',
                    }}
                  >
                    <Icon name='chevron down' />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Edit Global
                  </div>
                </div>
              </a>
            </>
          )}
        </div>
        <Divider />
        <div
          style={{
            fontSize: '18px',
            fontWeight: '500',
            color: '#125CA1',
            cursor: 'pointer',
          }}
        >
          {editImage ? (
            <>
              <div
                id='editImage'
                style={{
                  transform: 'translateY(-17px)',
                }}
              />
              <div
                style={{
                  marginTop: '15px',
                  marginBottom: '20px',
                  fontSize: '25px',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  Edit Image
                </span>
                <div
                  style={{
                    transform: 'translate(-20px, -20px)',
                    color: 'red',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                  onClick={() => setEditImage(false)}
                >
                  x
                </div>
              </div>
              <div style={{ color: 'black', marginLeft: '8vw' }}>
                <div>
                  <input
                    name='media'
                    type='file'
                    accept='image/*'
                    // content="Select Image"
                    style={{
                      width: '40vw',
                      transform: 'translateX(-.2vw)',
                      marginBottom: '25px',
                    }}
                    className={styles.file}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ marginBottom: '5px' }}>Image Width (pixels)</div>
                <div>
                  <Form.Input
                    min='0'
                    max='1000'
                    step='10'
                    type='number'
                    placeholder='width'
                    value={imageWidth}
                    onChange={(e) => setImageWidth(e.target.value)}
                    style={{
                      width: '50%',
                      marginBottom: '25px',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '5px' }}>Image Height (pixels)</div>
                <div>
                  <Form.Input
                    min='0'
                    max='1000'
                    step='10'
                    type='number'
                    placeholder='height'
                    value={imageHeight}
                    onChange={(e) => setImageHeight(e.target.value)}
                    style={{
                      width: '50%',
                      marginBottom: '25px',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '5px' }}>
                  Image Rotation (degrees)
                </div>
                <div>
                  <Form.Input
                    min='0'
                    max='360'
                    step='5'
                    type='number'
                    placeholder='rotation'
                    value={imageRotation}
                    onChange={(e) => setImageRotation(e.target.value)}
                    style={{
                      width: '50%',
                      marginBottom: '15px',
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <a href='#editImage'>
                <div
                  style={{ transform: 'translateY(-8px)' }}
                  onClick={() => {
                    setEditImage(true),
                      setEditTitle(false),
                      setEditDescription(false),
                      setEditBorder(false),
                      setEditGlobal(false);
                  }}
                >
                  <div
                    style={{
                      marginLeft: '-25px',
                      display: 'flex',
                      transform: 'translateY(100%) scale(0.8)',
                    }}
                  >
                    <Icon name='chevron down' />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    Edit Image
                  </div>
                </div>
              </a>
            </>
          )}
        </div>
        <Divider />
      </Container>
      {/* <Button
        onClick={addCustom}
        style={{
          background: 'green',
          color: 'white',
          marginLeft: '3vw',
        }}
      >
        Save 1st
      </Button> */}
      {/* <Button
        style={{
          background: 'green',
          color: 'white',
          marginLeft: '3vw',
        }}
        onClick={getData}
      >
        Save 2nd
      </Button> */}
      <Button
        onClick={() => {
            setCompany(''),
            setCompanyFontSize(''),
            setCompanyFontWeight(''),
            setDescription(''),
            setDescriptionFontSize(''),
            setDescriptionFontWeight(''),
            setBorderWidth('0'),
            setBorderColor(''),
            setColor(''),
            setBackgroundColor(''),
            setMediaPreview(''),
            setImageWidth('100'),
            setImageHeight('100'),
            setImageRotation('0'),
            setEditTitle(false),
            setEditDescription(false),
            setEditBorder(false),
            setEditGlobal(false),
            setEditImage(false);
        }}
        style={{
          background: '#125CA1',
          color: 'white',
          marginLeft: '3vw',
        }}
      >
        Clear
      </Button>
      <Divider />
      <div
        style={{
          padding: '0px 3vw 1px 3vw',
        }}
      >
        <Container
          style={{
            background: `${showBackgroundColor}`,
            color: `${showColor}`,
            border: `${showBorderWidth}px solid ${showBorderColor}`,
            fontWeight: '100',
            height: '50vh',
            width: '100vw',
            margin: '30px',
          }}
        >
          <Draggable>
            <div
              style={{
                fontSize: `${showCompanyFontSize}px`,
                fontWeight: `${showCompanyFontWeight}`,
                display: 'flex',
                justifyContent: 'center',
                cursor: 'grab',
                marginBottom: '30px',
                marginTop: '30px',
                lineHeight: '1em',
              }}
            >
              {showCompany}
            </div>
          </Draggable>
          <Draggable>
            <div
              style={{
                fontSize: `${showDescriptionFontSize}px`,
                fontWeight: `${showDescriptionFontWeight}`,
                display: 'flex',
                justifyContent: 'center',
                cursor: 'grab',
                marginBottom: '30px',
                lineHeight: '1em',
              }}
            >
              {showDescription}
            </div>
          </Draggable>
          <Draggable>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                transform: 'translateY(50%)',
              }}
            >
              <input
                type='image'
                src={mediaPreview}
                style={{
                  width: `${showImageWidth}px`,
                  height: `${showImageHeight}px`,
                  transform: `rotate(${showImageRotation}deg)`,
                  cursor: 'grab'
                }}
              />
            </div>
          </Draggable>
        </Container>
      </div>
    </>
  );
}
