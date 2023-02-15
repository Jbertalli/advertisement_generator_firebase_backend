import React, { useEffect, useState } from 'react';
import Advertisement from '../components/advertisement';
import MobileAdvertisement from '../components/mobileAdvertisement';
import { auth } from '../firebase/clientApp';
import { NextRouter, useRouter } from 'next/router';
import Header from '../components/Header';

auth;

export default function Home() {
  const [resize, setResize] = useState<boolean>(false)
  const router: NextRouter = useRouter();

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
      {resize ? (
        <>
          <div
            style={{
              marginTop: '-70px',
              paddingBottom: '30px',
            }}
          >
            <Advertisement />
          </div>
        </>
      ) : (
        <>
          <MobileAdvertisement />
        </>
      )}
    </>
  );
}
