import React, { useEffect } from 'react';
import Advertisement from '../components/advertisement';
import { auth } from '../firebase/clientApp';

auth;

export default function Home() {

  return (
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
  );
}
