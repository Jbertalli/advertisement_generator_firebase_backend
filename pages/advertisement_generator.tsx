import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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

  // useEffect(() => {
  //   const isProtectedRoute = router.pathname === '/advertisement_generator';
  //   if (!auth.currentUser && isProtectedRoute) {
  //     router.push('/')
  //   }
  // }, [auth.currentUser])

  // console.log(router.pathname);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '2%' }}>
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
