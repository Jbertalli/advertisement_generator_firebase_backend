import React, { useEffect } from 'react';
import Advertisement from '../components/advertisement';
import { auth } from '../firebase/clientApp';
import { NextRouter, useRouter } from 'next/router';
import Header from '../components/Header';

auth;

export default function Home() {
  const router: NextRouter = useRouter();

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

  return (
    <>
      <Header />
      <div
        style={{
          marginTop: '-70px',
          paddingBottom: '30px',
        }}
      >
        <Advertisement />
      </div>
    </>
  );
}
