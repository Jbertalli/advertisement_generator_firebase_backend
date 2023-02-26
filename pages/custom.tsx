import Head from 'next/head';
import styles from '../styles/advertisement.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Draggable from 'react-draggable';
import LocalCustom from '../components/localStorageCustom';
import { Divider, Container, Segment, Icon, Form, Button } from 'semantic-ui-react';
import { getDoc, getFirestore, doc, setDoc, Timestamp, updateDoc, deleteField } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject } from 'firebase/storage';
import { storage } from '../firebase/clientApp';
import { auth } from '../firebase/clientApp';

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
  const [borderColor, setBorderColor] = useState<string>('#FFFFFF');
  const [color, setColor] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('');
  const [imageWidth, setImageWidth] = useState<any>(150);
  const [imageHeight, setImageHeight] = useState<any>(150);
  const [imageLeft, setImageLeft] = useState<any>(0);
  const [imageTop, setImageTop] = useState<any>(0);
  const [totalWidth, setTotalWidth] = useState<any>(500);
  const [imageRotation, setImageRotation] = useState<any>(0);
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
  const [showImageWidth, setShowImageWidth] = useState<any>(150);
  const [showImageHeight, setShowImageHeight] = useState<any>(150);
  const [showImageLeft, setShowImageLeft] = useState<any>(0);
  const [showImageTop, setShowImageTop] = useState<any>(0);
  const [showTotalWidth, setShowTotalWidth] = useState<any>(500);
  const [showImageRotation, setShowImageRotation] = useState<any>(0);
  const [resize, setResize] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const [saveImage, setSaveImage] = useState(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const [saved, setSaved] = useState<number>(0);
  const [url, setUrl] = useState(null);

  const currentUser = auth.currentUser?.uid;
  // console.log(currentUser);

  const router = useRouter();

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
    imageWidth,
    imageHeight,
    imageLeft,
    imageTop,
    totalWidth,
    imageRotation
  );

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
    imageWidth: string,
    imageHeight: string,
    imageLeft: string,
    imageTop: string,
    totalWidth: string,
    imageRotation: string
  ) {
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
      imageWidth,
      imageHeight,
      imageLeft,
      imageTop,
      totalWidth,
      imageRotation,
      created: Timestamp.now(),
    });
  };

  async function getData() {
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
      console.log('Document ImageWidth:', docSnap.data().imageWidth);
      console.log('Document ImageHeight:', docSnap.data().imageHeight);
      console.log('Document ImageLeft:', docSnap.data().imageLeft);
      console.log('Document ImageTop:', docSnap.data().imageTop);
      console.log('Document TotalWidth:', docSnap.data().totalWidth);
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
      setShowImageWidth(docSnap.data().imageWidth);
      setShowImageHeight(docSnap.data().imageHeight);
      setShowImageLeft(docSnap.data().imageLeft);
      setShowImageTop(docSnap.data().imageTop);
      setShowTotalWidth(docSnap.data().totalWidth);
      setShowImageRotation(docSnap.data().imageRotation);
    } else {
      console.log('No document data');
    }
  }

  async function deleteCompany() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      company: deleteField()
    });
  }

  async function deleteCompanyFontSize() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      companyFontSize: deleteField()
    });
  }

  async function deleteCompanyFontWeight() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      companyFontWeight: deleteField()
    });
  }

  async function deleteDescription() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      description: deleteField()
    });
  }

  async function deleteDescriptionFontSize() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      descriptionFontSize: deleteField()
    });
  }

  async function deleteDescriptionFontWeight() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      descriptionFontWeight: deleteField()
    });
  }

  async function deleteBorderWidth() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      borderWidth: deleteField()
    });
  }

  async function deleteBorderColor() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      borderColor: deleteField()
    });
  }

  async function deleteColor() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      color: deleteField()
    });
  }

  async function deleteBackgroundColor() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      backgroundColor: deleteField()
    });
  }

  async function deleteImageWidth() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      imageWidth: deleteField()
    });
  }

  async function deleteImageHeight() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      imageHeight: deleteField()
    });
  }

  async function deleteImageLeft() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      imageLeft: deleteField()
    });
  }

  async function deleteImageTop() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      imageTop: deleteField()
    });
  }

  async function deleteImageRotation() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      imageRotation: deleteField()
    });
  }

  async function deleteTotalWidth() {
    const docRef = doc(db, '/users/' + currentUser + 'Custom');
    await updateDoc(docRef, {
      totalWidth: deleteField()
    });
  }

  function deleteLocal() {
    localStorage.clear();
  }

  const handleImageChange = (e) => {
    if(e.target.files[0]) {
      setSaveImage(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    const imageRef = ref(storage, `image/${currentUser}/custom`);
    uploadBytes(imageRef, saveImage).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setUrl(url)
      }).catch((error) => {
        console.log(error.message, 'error getting the image url');
      })
      setSaveImage(null);
    }).catch((error) => {
      console.log(error.message);
    });
  }

  const deleteStoredImage = () => {
    const storage = getStorage();
    const imageRef = ref(storage, `image/${currentUser}/custom`);
    deleteObject(imageRef).then(() => {
      console.log('successfully deleted image');
    }).catch((error) => {
      console.log('unable to delete image');
    })
  }

  useEffect(() => {
    setClicked(false);
  }, []);

  useEffect(() => {
    getData();
  }, [saved]);

  console.log(url);

  return (
    <>
      <Head>
        <title>Custom Advertisement Generator</title>
        <meta name='description' content='earnandtrade, advertisement' />
      </Head>
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
              justifyContent: 'center'
            }}
          >
            Custom Advertisement
          </div>
          <div
            style={{
              fontSize: '18px',
              fontWeight: '400px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            Create a Custom Advertisement
          </div>
          {(company.length > 0 || 
            Number(companyFontSize) > 0 || 
            description.length ||
            Number(descriptionFontSize) > 0 || 
            Number(borderWidth) > 0
            ) ? (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '-20px',
                marginBottom: '-20px',
                transform: 'scale(0.7)'
              }}
            >
              <div
                style={{
                  background: `${backgroundColor}`,
                  color: `${color}`,
                  border: `${borderWidth}px solid ${borderColor}`,
                  fontWeight: '100',
                  height: '50vh',
                  width: `${totalWidth}px`
                }}
              >
                <Draggable>
                  <div
                    style={{
                      fontSize: `${companyFontSize}px`,
                      fontWeight: `${companyFontWeight}`,
                      display: 'flex',
                      justifyContent: 'center',
                      cursor: 'grab',
                      marginBottom: '30px',
                      marginTop: '30px',
                      lineHeight: '1em',
                      wordBreak: 'break-word',
                      width: '100%',
                    }}
                  >
                    {company}
                  </div>
                </Draggable>
                <Draggable>
                  <div
                    style={{
                      fontSize: `${descriptionFontSize}px`,
                      fontWeight: `${descriptionFontWeight}`,
                      display: 'flex',
                      justifyContent: 'center',
                      cursor: 'grab',
                      marginBottom: '30px',
                      lineHeight: '1em',
                      wordBreak: 'break-word',
                      width: '100%'
                    }}
                  >
                    {description}
                  </div>
                </Draggable>
                <Draggable>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      transform: 'translateY(50%)'
                    }}
                  >
                    <input
                      type='image'
                      src={clicked ? url : `https://firebasestorage.googleapis.com/v0/b/advertisement-generator-1fa98.appspot.com/o/image%2F${currentUser}%2Fcustom?alt=media&token=509c2369-ca51-406f-8ec2-028d465b24fb`}
                      style={{
                        width: `${imageWidth/1.1}px`,
                        height: `${imageHeight/1.1}px`,
                        transform: `translate(${imageLeft}px, ${imageTop}px) rotate(${showImageRotation}deg)`,
                        cursor: 'grab'
                      }}
                    />
                  </div>
                </Draggable>
              </div>
            </div>
          </>
          ): null}
        </Segment>
        <div
          style={{
            fontSize: '18px',
            fontWeight: '500',
            color: '#125CA1',
            cursor: 'pointer'
          }}
        >
          {editTitle ? (
            <>
              <div
                id='editTitle'
                style={{
                  transform: 'translateY(-16px)'
                }}
              />
              <div
                style={{
                  marginTop: '15px',
                  marginBottom: '20px',
                  fontSize: '25px'
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  Edit Title
                </span>
                <div
                  style={{
                    transform: 'translate(-20px, -20px)',
                    color: 'red',
                    display: 'flex',
                    justifyContent: 'flex-end'
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
                      width: resize ? '50%' : '92%',
                      marginBottom: '25px'
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
                      width: resize ? '50%' : '92%',
                      marginBottom: '25px'
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
                      width: resize ? '50%' : '92%',
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
                      padding: '0px 0px 8px 0px'
                    }}
                  >
                    <Icon name='chevron down' />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      padding: '0px 0px 8px 0px'
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
                  fontSize: '25px'
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
                      width: resize ? '50%' : '92%',
                      marginBottom: '25px'
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
                      width: resize ? '50%' : '92%',
                      marginBottom: '25px'
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
                      width: resize ? '50%' : '92%',
                      marginTop: '15px',
                      marginBottom: '15px',
                      cursor: 'grab'
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
                  transform: 'translateY(-17px)'
                }}
              />
              <div
                style={{
                  marginTop: '15px',
                  marginBottom: '20px',
                  fontSize: '25px'
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
                    justifyContent: 'flex-end'
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
                      width: resize ? '50%' : '92%',
                      marginBottom: '25px'
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
                  fontSize: '25px'
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
              <div style={{ marginBottom: '5px' }}>
                  Advertisement Width (pixels)
                </div>
                <div>
                  <Form.Input
                    min='200'
                    max='10000'
                    step='20'
                    type='number'
                    placeholder='width'
                    value={totalWidth}
                    onChange={(e) => setTotalWidth(e.target.value)}
                    style={{
                      width: resize ? '50%' : '92%',
                      marginBottom: '15px'
                    }}
                  />
                </div>
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
                  fontSize: '25px'
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
                    style={{ 
                      width: resize ? '30vw' : '50vw', 
                      transform: 'translateX(-.2vw)' 
                    }}
                    className={styles.file}
                    onChange={handleImageChange}
                    onClick={() => {setSelected(true), setClicked(true)}}
                  />
                  {selected ? (
                  <>
                    <div
                      style={{
                        marginTop: '20px',
                        marginBottom: '30px',
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
                      <Button
                        onClick={() => {setUrl(null), setSelected(false)}}
                        style={{
                          border: '2px solid red',
                          background: 'transparent',
                          color: 'red'
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </>
                  ): null}
                </div>
                <div style={{ marginBottom: '5px', marginTop: '15px' }}>Image Width (pixels)</div>
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
                      width: resize ? '50%' : '92%',
                      marginBottom: '25px'
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
                      width: resize ? '50%' : '92%',
                      marginBottom: '25px'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '5px' }}>Image Left (pixels)</div>
                <div>
                  <Form.Input
                    min='-1000'
                    max='1000'
                    step='10'
                    type='number'
                    placeholder='left'
                    value={imageLeft}
                    onChange={(e) => setImageLeft(e.target.value)}
                    style={{
                      width: resize ? '50%' : '92%',
                      marginBottom: '25px'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '5px' }}>Image Top (pixels)</div>
                <div>
                  <Form.Input
                    min='-1000'
                    max='1000'
                    step='10'
                    type='number'
                    placeholder='top'
                    value={imageTop}
                    onChange={(e) => setImageTop(e.target.value)}
                    style={{
                      width: resize ? '50%' : '92%',
                      marginBottom: '25px'
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
                      width: resize ? '50%' : '92%',
                      marginBottom: '15px'
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
      <div
        style={{
          marginTop: '30px'
        }}
      >
        <Divider />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '20px 0px 20px 0px'
        }}
      >
        <Button
          onClick={() => {addCustom(
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
            imageWidth,
            imageHeight,
            imageLeft,
            imageTop,
            totalWidth,
            imageRotation
          ), setSaved(saved + 1)}}
          style={{
            border: '2px solid #125CA1',
            background: 'transparent',
            color: '#125CA1'
          }}
        >
          Save Data
        </Button>
        <Button
          style={{
            border: '2px solid red',
            background: 'transparent',
            color: 'red'
          }}
          onClick={() => {
            setBackgroundColor(''),
            setColor(''),
            setBorderWidth(''),
            setBorderColor('#FFFFFF'),
            setTotalWidth(500),
            setCompanyFontSize(''),
            setCompanyFontWeight(''),
            setCompany(''),
            setDescriptionFontSize(''),
            setDescriptionFontWeight(''),
            setDescription(''),
            setClicked(false),
            setImageWidth(150),
            setImageHeight(150),
            setImageLeft(0),
            setImageTop(0)
            deleteLocal(),
            deleteCompany(), 
            deleteCompanyFontSize(),
            deleteCompanyFontWeight(),
            deleteDescription(),
            deleteDescriptionFontSize(),
            deleteDescriptionFontWeight(),
            deleteBorderWidth(),
            deleteBorderColor(),
            deleteColor(),
            deleteBackgroundColor(),
            deleteImageWidth(),
            deleteImageHeight(),
            deleteImageLeft(),
            deleteImageTop(),
            deleteTotalWidth(),
            deleteImageRotation(),
            setShowCompany(''),
            setShowCompanyFontSize(''),
            setShowCompanyFontWeight(''),
            setShowDescription(''),
            setShowDescriptionFontSize(''),
            setShowDescriptionFontWeight(''),
            setShowBorderWidth('0'),
            setShowBorderColor(''),
            setShowColor(''),
            setShowBackgroundColor(''),
            setShowImageWidth(''),
            setShowImageHeight(''),
            setShowImageLeft(''),
            setShowImageTop(''),
            setShowTotalWidth(''),
            setShowImageRotation(''),
            deleteStoredImage()
          }}
        >
          Delete Data
        </Button>
      </div>
      {(company.length > 0 || 
        Number(companyFontSize) > 0 || 
        description.length ||
        Number(descriptionFontSize) > 0 || 
        Number(borderWidth) > 0) ? (
      <>
        <Divider />
        <div
          style={{
            padding: '0px 3vw 1px 3vw',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              color: `${showColor}`,
              background: `${showBackgroundColor}`,
              border: `${showBorderWidth}px solid ${showBorderColor}`,
              width: `${showTotalWidth}px`,
              height: '50vh',
              fontWeight: '100',
              margin: '30px'
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
                  lineHeight: '1em'
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
                  lineHeight: '1em'
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
                  transform: 'translateY(50%)'
                }}
              >
                <input
                  type='image'
                  src={clicked ? url : `https://firebasestorage.googleapis.com/v0/b/advertisement-generator-1fa98.appspot.com/o/image%2F${currentUser}%2Fcustom?alt=media&token=509c2369-ca51-406f-8ec2-028d465b24fb`}
                  style={{
                    width: `${showImageWidth}px`,
                    height: `${showImageHeight}px`,
                    transform: `translate(${showImageLeft}px, ${showImageTop}px) rotate(${showImageRotation}deg)`,
                    cursor: 'grab'
                  }}
                />
              </div>
            </Draggable>
          </div>
        </div>
      </>
      ): null}
    </>
  );
}
