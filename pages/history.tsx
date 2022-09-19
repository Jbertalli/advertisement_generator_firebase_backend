import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/clientApp';
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';

auth;
const db = getFirestore();

export default function History() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "Advertisement"), orderBy('created', 'desc'))
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
                <meta name="description" content="history" />
            </Head>
            <li style={{ transform: 'translateY(50px)' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    User History
                </div>
                <ul>
                    ID: {dbId}
                </ul>
                <ul>
                    Company: {dbCompany}
                </ul>
                <ul>
                    Description: {dbDescription}
                </ul>
                <ul>
                    Height: {dbHeight}
                </ul>
                <ul>
                    Left: {dbLeft}
                </ul>
                <ul>
                    Top: {dbTop}
                </ul>
                <ul>
                    Width: {dbWidth}
                </ul>
                <ul>
                    Ternary: {dbDescription ? (
                    <>
                        Full
                    </>
                    ):(
                    <>
                        Empty
                    </>
                    )}
                </ul>
            </li>
        </>
    );
}
