import React, { useEffect, useState } from 'react';
import Advertisement from '../components/advertisement';
import MobileAdvertisement from '../components/mobileAdvertisement';

export default function Home() {
  const [isDesktop, setDesktop] = useState(false);

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
    </>
  );
}
