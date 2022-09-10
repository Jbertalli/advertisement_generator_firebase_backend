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

  return (
    <>
      {isDesktop ? (
      <>
        <Advertisement />
      </>
      ):(
      <>
        <MobileAdvertisement />
      </>
      )}
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '-5vh 5vw 0px 0px', paddingBottom: '10px' }}>
        <Button onClick={handleLogOut} style={{ background: 'red', color: 'white' }}>
          Logout
        </Button>
      </div>
      
    </>
  );
}
