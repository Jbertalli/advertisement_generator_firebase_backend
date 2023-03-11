import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFirestore, collection, query, orderBy, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { Table } from 'semantic-ui-react';
import { NextRouter, useRouter } from 'next/router';
import Header from '../components/Header';
import { Loader, Dimmer } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

auth;
const db = getFirestore();

export default function History() {
  const [userData, setUserData] = useState([]);
  const [resize,  setResize] = useState<boolean>(false);
  const [showCompany, setShowCompany] = useState<string>('');
  const [showDescription, setShowDescription] = useState<string>('');
  const [showMediaPreview, setShowMediaPreview] = useState<string>('');
  const [showWidth, setShowWidth] = useState<string>('');
  const [showHeight, setShowHeight] = useState<string>('');
  const [showLeft, setShowLeft] = useState<string>('');
  const [showTop, setShowTop] = useState<string>('');
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
  console.log(user);
  console.log(user?.uid);
  console.log(userData);

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

  const isDesktop = useMediaQuery(
    { minWidth: 1450, maxWidth: 10000 }
  );

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
      setShowHeight(docSnap.data().height);
      setShowWidth(docSnap.data().width);
      setShowTop(docSnap.data().top);
      setShowLeft(docSnap.data().left);
      setShowMediaPreview(docSnap.data().mediaPreview);
    } else {
      console.log('No document data');
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>User History</title>
        <meta name='description' content='information' />
      </Head>
      <Header />
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
            onMouseMove={getData}
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
                  height: '40vh', 
                  color: '#125CA1',
                  boxShadow: '2px 2px 15px black',
                  background: 'rgb(255, 255, 255, 0.8',
                  transform: resize ?  'translateY(150px) scale(1.2)' : 'translateY(10vh)'
                }}
              >
                <Table.Body>
                  <Table.Header
                    style={{ 
                      fontSize: '30px', 
                      transform: 'translateX(50%)' 
                    }}
                  >
                    <div
                      style={{
                        padding: '10px',
                        lineHeight: '30px'
                      }}
                    >
                      {resize ? 'Saved Advertisements' : 'Saved Ads'}
                    </div>
                  </Table.Header>
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
                    <Table.Cell>Company Description</Table.Cell>
                    <Table.Cell>{showDescription}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Image Width</Table.Cell>
                    <Table.Cell>{showWidth}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Image Height</Table.Cell>
                    <Table.Cell>{showHeight}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Image Left</Table.Cell>
                    <Table.Cell>{showLeft}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Image Top</Table.Cell>
                    <Table.Cell>{showTop}</Table.Cell>
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
