import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Table, Divider } from 'semantic-ui-react';

auth;
const db = getFirestore();

export default function History() {
    const [userData, setUserData] = useState([]);
    const [user] = useAuthState(auth);
    // console.log(user.email);

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
                width: doc.data().width
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

    return (
        <>
            <Head>
                <title>User History</title>
                <meta name="description" content="information" />
            </Head>
            <center>
                <div style={{ transform: 'translateY(-15px)', padding: '70px', position: 'relative', zIndex: '10', maxWidth: '600px' }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        background: 'linear-gradient(to right, rgb(0, 255, 255), #1F51FF', 
                        color: 'white',  
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
                            {/* {user.email} Information */}
                            User Information
                        </div>
                    </div>
                    {/* <ul>
                        Ternary: {dbDescription ? (
                        <>
                            Full
                        </>
                        ):(
                        <>
                            Empty
                        </>
                        )}
                    </ul> */}
                </div>
                <div style={{ margin: '-140px  40px 0px 40px', position: 'relative', zIndex: '0' }}>
                    <Table striped celled textAlign="center" unstackable style={{ maxWidth: '600px' }}>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    &nbsp;
                                </Table.Cell>
                                <Table.Cell>
                                    &nbsp;
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <b>Database ID</b>
                                </Table.Cell>
                                <Table.Cell>
                                    {dbId}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{ width: '50%' }}>
                                    <b>Company Name</b>
                                </Table.Cell>
                                <Table.Cell>
                                    {dbCompany}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <b>Company Description</b>
                                </Table.Cell>
                                <Table.Cell>
                                    {dbDescription}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <b>Image Height</b> 
                                </Table.Cell>
                                <Table.Cell>
                                    {dbHeight}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <b>Image Left</b> 
                                </Table.Cell>
                                <Table.Cell>
                                    {dbLeft}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <b>Image Top</b> 
                                </Table.Cell>
                                <Table.Cell>
                                    {dbTop}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <b>Image Width</b> 
                                </Table.Cell>
                                <Table.Cell>
                                    {dbWidth}
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>      
                </div>
            </center>
        </>
    );
}
