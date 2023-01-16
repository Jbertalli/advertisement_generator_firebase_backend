import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Advertisement from '../components/advertisement';
import MobileAdvertisement from '../components/mobileAdvertisement';
import { auth } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import { NextRouter, useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
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

  // function handleLogOut(e) {
  //   e.preventDefault();
  //   signOut(auth)
  //   .then(() => {
  //       console.log("you are logged out");
  //       router.push('/');
  //   })
  //   .catch((error) => {
  //       console.log(error);
  //   });
  // }

  // console.log(auth);

  // const isProtectedRoute1 = router.pathname === '/advertisement_generator';
  // const isProtectedRoute2 = router.pathname === '/history';

  // useEffect(() => {
  //   if () {
  //     console.log('Authenticated!');
  //   } else if ( && (isProtectedRoute1 || isProtectedRoute2)) {
  //     router.push('/');
  //   }
  // }, [])

  // if (!) {
  //   return null;
  // }

  // useEffect(() => {
  //   const isProtectedRoute = router.pathname === '/advertisement_generator' || router.pathname === '/history';
  //   if (!auth.currentUser && isProtectedRoute) {
  //     router.push('/')
  //   }
  // }, [auth.currentUser])

  // console.log(router.pathname);

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
      {/* <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '2%' }}>
        <Link href="/history">
          <Button style={{ background: 'white', color: '#125CA1' }}>
            User Information
          </Button>
        </Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '2%' }}>
        <Button onClick={handleLogOut} style={{ background: 'white', color: 'red' }}>
          Logout
        </Button>
      </div> */}
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
