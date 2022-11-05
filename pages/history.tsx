import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Table } from 'semantic-ui-react';
import { NextRouter, useRouter } from 'next/router';
import Header from '../components/Header';
import { Loader, Dimmer } from 'semantic-ui-react';

auth;
const db = getFirestore();

export default function History() {
    const [userData, setUserData] = useState([]);
    const [tableMargin, setTableMargin] = useState<string>('0px  40px 0px 40px');
    const [tableScale, setTableScale] = useState<string>('');
    const [savedAd, setSavedAd] = useState<string>('Saved Advertisements');
    const [transform, setTransform] = useState<string>('0px');
    const [top, setTop] = useState<string>('60px');
    const [user, loading] = useAuthState(auth);
    const router: NextRouter = useRouter();
    // console.log(user.email);

    useEffect(() => {
        if (window.innerWidth > 440) {
            setTableMargin('0px  40px 0px 40px');
            setTableScale('');
            setSavedAd('Saved Advertisements');
            setTransform('0px');
            setTop('60px');
        } else {
            setTableMargin('0px 10px 0px 0px');
            setTableScale('translate(0.8vw) scale(0.8)');
            setSavedAd('Saved Ads');
            setTransform('40px');
            setTop('30px');
        }
    
        const updateMedia = () => {
          if (window.innerWidth > 440) {
            setTableMargin('0px  40px 0px 40px');
            setTableScale("");
            setSavedAd('Saved Advertisements');
            setTransform('0px');
            setTop('60px');
          } else {
            setTableMargin('0px 10px 0px 0px');
            setTableScale('translate(0.8vw) scale(0.8)');
            setSavedAd('Saved Ads');
            setTransform('40px');
            setTop('30px');
          }
        };
          window.addEventListener('resize', updateMedia);
          return () => window.removeEventListener('resize', updateMedia);
    }, []);

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

      useEffect(() => {
        if (typeof window !== "undefined") {
          console.log(document.cookie.length);
          if (document.cookie.length > 6) {
            console.log('Authenticated!')
          } else if (document.cookie.length == 5) {
            router.push('/');
          } else {
            return null;
          }
        } else {
          console.log('window == undefined');
        }
      }, [])

    return (
        <>
            <Head>
                <title>User History</title>
                <meta name="description" content="information" />
            </Head>
            <Header />
            {loading ? (
            <>
                <Dimmer active>
                    <Loader />
                </Dimmer>
            </>
            ):(
            <>
                <div style={{ background: 'linear-gradient(to top, blue, #125CA180)', height: '100vh' }}>
                    {/* <div style={{ transform: 'translateY(-15px)', padding: '70px', position: 'relative', zIndex: '10', maxWidth: '600px' }}>
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            background: 'white', 
                            color: '#125CA1',  
                            height: '60px', 
                            fontSize: '30px', 
                            fontWeight: '300',
                            marginBottom: '30px',
                            marginTop: '-30px',
                            borderRadius: '3px',
                            boxShadow: '2px 2px 15px black',
                            position: 'relative'
                        }}>
                            <div style={{ transform: 'translateY(20px)' }}>
                                Saved Advertisements
                            </div>
                        </div>
                    </div> */}
                    <div style={{ margin: `${tableMargin}`, transform: `${tableScale}`, position: 'relative', zIndex: '0', fontSize: '20px', display: 'flex', justifyContent: 'center' }}>
                        <Table 
                            striped 
                            celled 
                            textAlign="center" 
                            unstackable 
                            style={{ 
                                maxWidth: '600px', 
                                height: '60vh',
                                color: '#125CA1', 
                                boxShadow: '2px 2px 15px black',
                                background: 'rgb(255, 255, 255, 0.8', 
                                transform:`translateY(${top})`,
                            }}
                        >
                            <Table.Body>
                                <Table.Header style={{ fontSize: '30px', transform: 'translateX(50%)' }}>
                                    <div style={{ padding: '10px', lineHeight: '30px', transform: `translate(${transform})` }}>
                                        {`${savedAd}`}
                                    </div>
                                </Table.Header>
                                <Table.Row>
                                    <Table.Cell>
                                        Database ID
                                    </Table.Cell>
                                    <Table.Cell>
                                        {dbId}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell style={{ width: '50%' }}>
                                        Company Name
                                    </Table.Cell>
                                    <Table.Cell>
                                        {dbCompany}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        Company Description
                                    </Table.Cell>
                                    <Table.Cell>
                                        {dbDescription}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        Image Height 
                                    </Table.Cell>
                                    <Table.Cell>
                                        {dbHeight}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        Image Left 
                                    </Table.Cell>
                                    <Table.Cell>
                                        {dbLeft}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        Image Top 
                                    </Table.Cell>
                                    <Table.Cell>
                                        {dbTop}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        Image Width 
                                    </Table.Cell>
                                    <Table.Cell>
                                        {dbWidth}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        Image String 
                                    </Table.Cell>
                                    <Table.Cell style={{ wordBreak: 'break-all' }}>
                                        {dbImage}
                                    </Table.Cell>
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
