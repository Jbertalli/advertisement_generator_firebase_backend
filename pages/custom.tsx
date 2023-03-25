import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import LocalCustom from '../components/localStorageCustom';
import { Divider, Container, Segment, Button } from 'semantic-ui-react';
import { getDoc, getFirestore, doc, setDoc, Timestamp, updateDoc, deleteField } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject } from 'firebase/storage';
import { storage } from '../firebase/clientApp';
import { auth } from '../firebase/clientApp';
import LiveCustom from '../components/LiveCustom';
import EditDrawers from '../components/EditDrawers';

auth;
const db = getFirestore();

export default function Custom() {
  const [mediaPreview, setMediaPreview] = useState<string>('');
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
  const [imageSaved, setImageSaved] = useState<number>(0);
  const [saved, setSaved] = useState<number>(0);
  const [url, setUrl] = useState(null);
  const [full, setFull] = useState<boolean>(false);

  const currentUser = auth.currentUser?.uid;

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

  const handleSubmit = () => {
    const imageRef = ref(storage, `image/${currentUser}/custom`);
    uploadBytes(imageRef, saveImage).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setUrl(url)
      }).catch((error) => {
        console.log(error.message, 'error getting the image url');
      })
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

  // convert image to base-64
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64: any = await convertBase64(file);
    // console.log(base64);
    setMediaPreview(base64);
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (file ) {
        fileReader.readAsDataURL(file);
      }

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  useEffect(() => {
    if (currentUser !== undefined) {
      getData();
    } else {
      console.log('Login to get data');
    }
  }, [saved]);

  auth.onAuthStateChanged(function(user) {
    if (user) {
      getData();
    } else {
      console.log('NO USER');
    }
  });

  const imageRef = ref(storage, `image/${currentUser}/custom`);

  function getImg() {
    getDownloadURL(imageRef).then(onResolve, onReject);
  }

  function onResolve(foundURL) {
    console.log('full');
    setFull(true);
  }

  function onReject(error) {
    console.log(error.code);
  }

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
        selected={selected}
        setSelected={setSelected}
        mediaPreview={mediaPreview}
        setMediaPreview={setMediaPreview}
        saved={saved}
        setSaved={setSaved}
        url={url}
        setUrl={setUrl}
        full={full}
        setFull={setFull}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            width: '95vw',
            maxWidth: '700px'
          }}
        >
          <Container
            size='massive'
            style={{
              margin: '0.5em',
              boxShadow: '2px 2px 10px black',
              marginBottom: '60px'
            }}
          >
            <Segment 
              attached={'top'}
              textAlign='center'
            >
              <div
                style={{
                  color: '#125CA1',
                  fontSize: '42px',
                  fontWeight: '700',
                  padding: '.5em 0em 0em 0em',
                  lineHeight: '40px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                Custom Advertisement
              </div>
              <h1
                style={{
                  fontSize: '18px',
                  fontWeight: '400px',
                  display: 'flex',
                  justifyContent: 'center', 
                  marginBottom: '0px',
                  transform: 'translateY(-7px)'
                }}
              >
                Create a Custom Advertisement
              </h1>
              <LiveCustom 
                company={company}
                companyFontSize={companyFontSize}
                description={description}
                descriptionFontSize={descriptionFontSize}
                borderWidth={borderWidth}
                selected={selected}
                saved={saved}
                mediaPreview={mediaPreview}
                backgroundColor={backgroundColor}
                color={color}
                borderColor={borderColor}
                totalWidth={totalWidth}
                descriptionFontWeight={descriptionFontWeight}
                companyFontWeight={companyFontWeight}
                currentUser={currentUser}
                resize={resize}
                imageLeft={imageLeft}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                imageTop={imageTop}
                imageRotation={imageRotation}
                clicked={clicked}
                url={url}
              />
            </Segment>
            <EditDrawers 
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              company={company}
              setCompany={setCompany}
              resize={resize}
              companyFontSize={companyFontSize}
              setCompanyFontSize={setCompanyFontSize}
              companyFontWeight={companyFontWeight}
              setCompanyFontWeight={setCompanyFontWeight}
              setEditDescription={setEditDescription}
              setEditBorder={setEditBorder}
              setEditGlobal={setEditGlobal}
              setEditImage={setEditImage}
              editDescription={editDescription}
              description={description}
              setDescription={setDescription}
              descriptionFontSize={descriptionFontSize}
              setDescriptionFontSize={setDescriptionFontSize}
              descriptionFontWeight={descriptionFontWeight}
              setDescriptionFontWeight={setDescriptionFontWeight}
              editBorder={editBorder}
              borderWidth={borderWidth}
              setBorderWidth={setBorderWidth}
              borderColor={borderColor}
              setBorderColor={setBorderColor}
              editGlobal={editGlobal}
              totalWidth={totalWidth}
              setTotalWidth={setTotalWidth}
              color={color}
              setColor={setColor}
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
              editImage={editImage}
              currentUser={currentUser}
              uploadImage={uploadImage}
              mediaPreview={mediaPreview}
              setMediaPreview={setMediaPreview}
              setImageWidth={setImageWidth}
              setImageHeight={setImageHeight}
              setImageLeft={setImageLeft}
              setImageTop={setImageTop}
              setImageRotation={setImageRotation}
              setImageSaved={setImageSaved}
              imageSaved={imageSaved}
              setSelected={setSelected} 
              setClicked={setClicked}
              setSaved={setSaved}
              saved={saved}
              setFull={setFull}
              setUrl={setUrl}
              deleteStoredImage={deleteStoredImage}
              imageLeft={imageLeft}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              imageTop={imageTop}
              imageRotation={imageRotation}
              setSaveImage={setSaveImage}
            />
            {currentUser === undefined ? (
            <>
              <Segment
                attached={'top'}
                style={{
                  fontSize: resize ? '18px' : '14px',
                  fontWeight: '600',
                  marginTop: '15px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Link 
                  href='/'
                >
                  <span
                    style={{
                      textDecoration: 'underline',
                      color: '#125CA1',
                      cursor: 'pointer'                    
                    }}
                  >
                    Login
                  </span>
                </Link>
                <span>
                  &nbsp;to Save Custom Advertisement
                </span>
              </Segment>
            </>
            ):(
            <>
              <Divider />
            </>
            )}
          </Container>
        </div>
      </div>
      {currentUser === undefined ? null : (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            transform: 'translateY(-30px)',
            marginBottom: '-15px'
          }}
        >
          {full ? (
          <>
            <Button
              disabled={!company &&
                !description &&
                !selected &&
                saved == 0 &&
                !full
              }
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
              ), getData(),
                 setFull(true)
              }}
              style={{
                border: '2px solid #125CA1',
                background: 'transparent',
                color: '#125CA1'
              }}
            >
              Update
            </Button>
          </>
          ):(
          <>
            <Button
              disabled={!company &&
                !description &&
                !selected &&
                saved == 0 &&
                !full
              }
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
              ), handleSubmit(),
                 getData(),
                 getImg(),
                 setFull(true)
              }}
              style={{
                border: '2px solid #125CA1',
                background: 'transparent',
                color: '#125CA1'
              }}
            >
              Save to Database
            </Button>
          </>
          )}
          <Button
            disabled={!company &&
              !description &&
              !selected &&
              saved == 0 &&
              !full
            }
            style={{
              border: '2px solid red',
              background: 'transparent',
              color: 'red',
              transform: 'translate(15.1px)'
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
              setSelected(false),
              setImageWidth(150),
              setImageHeight(150),
              setImageLeft(0),
              setImageTop(0),
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
              deleteStoredImage(),
              setSaved(0),
              setFull(false)
            }}
          >
            Delete Advertisement
          </Button>
        </div>
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
                    alt='image'
                    src={clicked ? url : `https://firebasestorage.googleapis.com/v0/b/advertisement-generator-1fa98.appspot.com/o/image%2F${currentUser}%2Fcustom?alt=media&token=509c2369-ca51-406f-8ec2-028d465b24fb`}
                    style={{
                      width: `${showImageWidth/1.2}px`,
                      height: `${showImageHeight/1.2}px`,
                      transform: `translate(${showImageLeft}px, ${showImageTop-20}px) rotate(${showImageRotation}deg)`,
                      cursor: 'grab'
                    }}
                  />
                </div>
              </Draggable>
            </div>
          </div>
      </>
      )}
    </>
  );
}
