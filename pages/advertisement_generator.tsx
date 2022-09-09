import React, { useEffect, useState } from 'react';
import Advertisement from '../components/advertisement';
import MobileAdvertisement from '../components/mobileAdvertisement';
import { auth } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Home() {
  const [isDesktop, setDesktop] = useState(false);

  const router = useRouter();

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
      <button onClick={handleLogOut}>
        Logout
      </button>
      {isDesktop ? (
      <>
        <Advertisement />
      </>
      ):(
      <>
        <MobileAdvertisement />
      </>
      )}
    </>
  );
}
