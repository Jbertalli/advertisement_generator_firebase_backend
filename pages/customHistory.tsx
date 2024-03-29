import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFirestore, collection, query, orderBy, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { Table } from 'semantic-ui-react';
import { NextRouter, useRouter } from 'next/router';
import { Loader, Dimmer } from 'semantic-ui-react';

auth;
const db = getFirestore();

export default function History() {
  const [userData, setUserData] = useState([]);
  const [resize,  setResize] = useState<boolean>(false);
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
  const [showImageWidth, setShowImageWidth] = useState<string>('');
  const [showImageHeight, setShowImageHeight] = useState<string>('');
  const [showImageRotation, setShowImageRotation] = useState<string>('');
  const [user, loading] = useAuthState(auth);
  const router: NextRouter = useRouter();

  const currentUser = auth.currentUser?.uid;
  console.log(currentUser);

  useEffect(() => {
    if (window.innerWidth > 440) {
      setResize(true);
    } else {
      setResize(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 440) {
        setResize(true);
      } else {
        setResize(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'users'), orderBy('created', 'desc'));
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

  console.log(userData.length);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // console.log(document.cookie.length);
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
      setShowMediaPreview(docSnap.data().mediaPreview);
      setShowImageWidth(docSnap.data().imageWidth);
      setShowImageHeight(docSnap.data().imageHeight);
      setShowImageRotation(docSnap.data().imageRotation);
    } else {
      console.log('No document data');
    }
  }

  useEffect(() => {
    window.scrollTo(0, -10);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  auth.onAuthStateChanged(function(user) {
    if (user) {
      getData();
    } else {
      console.log('NO USER');
    }
  })

  return (
    <>
      <Head>
        <title>User History</title>
        <meta name='description' content='information' />
      </Head>
      {loading ? (
        <>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </>
      ) : (
        <>
          <div
            style={{
              background: 'linear-gradient(to top, blue, #125CA180)',
              height: '100vh'
            }}
          >
            <div
              style={{
                margin: resize ? '0px  40px 0px 40px' : '0px 10px 0px 0px',
                transform: resize ? 'translateY(-60px) scale(0.8)' : 'translate(0.8vw, -60px) scale(0.7)',
                position: 'relative',
                zIndex: '0',
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Table
                fixed
                striped
                celled
                textAlign='center'
                unstackable
                style={{
                  maxWidth: '600px',
                  height: '60vh',
                  color: '#125CA1',
                  boxShadow: '2px 2px 15px black',
                  background: 'rgb(255, 255, 255, 0.8',
                  transform: resize ?  'translateY(60px)' : 'translateY(0vh)'
                }}
              >
                <Table.Body>
                  <Table.Row>
                    <Table.Cell
                      style={{ 
                        fontSize: '30px', 
                        transform: 'translateX(50%)', 
                        padding: '20px 0px 20px 0px'
                      }}
                    >
                      <div
                        style={{
                          lineHeight: '30px'
                        }}
                      >
                        {resize ? 'Custom Advertisements' : 'Custom Ads'}
                      </div>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Database ID</Table.Cell>
                    <Table.Cell>{currentUser}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ width: '50%' }}>
                      Company Name
                    </Table.Cell>
                    <Table.Cell>{showCompany}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Company Font Size</Table.Cell>
                    <Table.Cell>{showCompanyFontSize}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Company Font Weight</Table.Cell>
                    <Table.Cell>{showCompanyFontWeight}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Description</Table.Cell>
                    <Table.Cell>{showDescription}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Description Font Size</Table.Cell>
                    <Table.Cell>{showDescriptionFontSize}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Description Font Weight</Table.Cell>
                    <Table.Cell>{showDescriptionFontWeight}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Border Width</Table.Cell>
                    <Table.Cell>{showBorderWidth}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Border Color</Table.Cell>
                    <Table.Cell>{showBorderColor}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Color</Table.Cell>
                    <Table.Cell>{showColor}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Background Color</Table.Cell>
                    <Table.Cell>{showBackgroundColor}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Image Width</Table.Cell>
                    <Table.Cell>{showImageWidth}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Image Height</Table.Cell>
                    <Table.Cell>{showImageHeight}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Image Rotation</Table.Cell>
                    <Table.Cell>{showImageRotation}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </>
      )}
    </>
  );
}
