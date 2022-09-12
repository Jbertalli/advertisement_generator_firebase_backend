import React, { useEffect, useState } from 'react';
import Advertisement from '../components/advertisement';
import MobileAdvertisement from '../components/mobileAdvertisement';
import { auth } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import { NextRouter, useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';

export default function Home() {
  const [isDesktop, setDesktop] = useState<boolean>(false);

  const router: NextRouter = useRouter();

  useEffect(() => {
    if (window.innerWidth > 440) {
        setDesktop(true);
    } else {
        setDesktop(false);
    }

    const updateMedia = () => {
    if (window.innerWidth > 440) {
        setDesktop(true);
    } else {
        setDesktop(false);
    }
    };
      window.addEventListener('resize', updateMedia);
      return () => window.removeEventListener('resize', updateMedia);
  }, []);

  function handleLogOut(e) {
    e.preventDefault();
    signOut(auth)
    .then(() => {
        console.log("you are logged out");
        router.push('/');
    })
    .catch((error) => {
        console.log(error);
    });
  }

  useEffect(() => {
    if (!auth.currentUser) {
      const isProtectedRoute = router.pathname === '/advertisement_generator';
      if (isProtectedRoute) {
        router.push('/');
      }
    }
  }, [])

  console.log(router.pathname);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '2%' }}>
        <Button onClick={handleLogOut} style={{ background: 'white', color: 'red' }}>
          Logout
        </Button>
      </div>
      {isDesktop ? (
      <>
        <div style={{ marginTop: '-70px', paddingBottom: '30px' }}>
           <Advertisement />
        </div>
      </>
      ):(
      <>
        <MobileAdvertisement />
      </>
      )}
    </>
  );
}
