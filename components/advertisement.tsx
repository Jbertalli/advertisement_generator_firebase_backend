import Head from 'next/head';
import Link from 'next/link';
import FocusLock from 'react-focus-lock';
import Local from '../components/localStorage';
import React, { useState, useEffect } from 'react';
import { Container, Segment, Button, Icon, Grid, Item } from 'semantic-ui-react';
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import { auth } from '../firebase/clientApp';
import AdCard from '../components/AdCard';

auth;
const db = getFirestore();

export default function Advertisement() {
  const [mediaPreview, setMediaPreview] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [width, setWidth] = useState<any>(350);
  const [height, setHeight] = useState<any>(350);
  const [left, setLeft] = useState<any>(20);
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

  async function getData() {
    const docRef = doc(db, '/users/' + currentUser + 'Ads');
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
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

  useEffect(() => {
    setClicked(false);
  }, []);

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
        setSelected={setSelected}
        setMediaPreview={setMediaPreview}
        setSaved={setSaved}
        setUrl={setUrl}
        setFull={setFull}
        company={company}
        description={description}
        width={width}
        height={height}
        left={left}
        top={top}
        selected={selected}
        mediaPreview={mediaPreview}
        saved={saved}
        url={url}
        full={full}
      />
      <FocusLock>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              width: '95vw',
              maxWidth: '900px'
            }}
          >
            <Container
              as='h1'
              size='massive'
              style={{ 
                margin: '2.8em',
                boxShadow: '2px 2px 10px black',
                transform: 'translateY(-20px)'
              }}
            >
              <Segment attached={'top'} textAlign='center'>
                <div
                  style={{
                    color: '#125CA1',
                    fontSize: resize ? '52px' : '40px',
                    padding: resize ? '.5em 0em .5em 0em' : '0.5em 0em 0.3em 0em',
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
                    lineHeight: '20px'
                  }}
                >
                  Create and Generate Dynamic Ads
                </div>
              </Segment>
              <AdCard 
                currentUser={currentUser}
                setSaveImage={setSaveImage}
                saveImage={saveImage}
                setUrl={setUrl}
                setMediaPreview={setMediaPreview}
                setFull={setFull}
                resize={resize}
                company={company}
                setCompany={setCompany}
                mediaPreview={mediaPreview}
                description={description}
                setDescription={setDescription}
                setWidth={setWidth}
                setHeight={setHeight}
                setLeft={setLeft}
                setTop={setTop}
                selected={selected}
                setSelected={setSelected} 
                setClicked={setClicked} 
                setSaved={setSaved}
                saved={saved}
                url={url}
                width={width}
                full={full}
                height={height}
                left={left}
                top={top}
                setShowCompany={setShowCompany}
                setShowDescription={setShowDescription}
                setShowWidth={setShowWidth}
                setShowHeight={setShowHeight}
                setShowLeft={setShowLeft}
                setShowTop={setShowTop}
                clicked={clicked}
              />
              {currentUser === undefined ? (
              <>
                <div
                  style={{
                    fontSize: resize ? '18px' : '14px',
                    fontWeight: '600',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50px'
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
                    &nbsp;to Save Advertisement
                  </span>
                </div>
              </>
              ) : (
              <>
                <Segment 
                  attached={'top'} 
                  style={{ 
                    transform: 'translateY(-15px)',
                    borderBottom: currentUser ? '1px solid transparent' : null
                  }}
                >
                  <Grid>
                    <Grid.Row>
                      <Grid.Column
                        style={{
                          transform: resize ? 'translate(0px)' : 'translate(-6%)',
                          width: resize ? '44%' : '100%',
                          display: 'flex',
                          justifyContent: 'center'
                        }}
                      >
                        <input
                          type='image'
                          alt='image'
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
                  <div 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'center',
                      fontSize: '20px'
                    }}
                  >
                    {showDescription}
                  </div>
                </Segment>
              </>
              )}
            </Container>
          </div>
        </div>
      </FocusLock>
    </>
  );
}
