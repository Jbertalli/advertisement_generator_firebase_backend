import Head from 'next/head';
import FocusLock from 'react-focus-lock';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/clientApp';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from '../styles/advertisement.module.css';
import { Container, Grid, Icon, Card } from 'semantic-ui-react';

export default function authentication() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [account, setAccount] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const [loading] = useAuthState(auth);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Current user:", user.email);
      const uid: string = user.uid;
    } else {
      console.log("No user signed in");
    }
  });

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('logged in');
      router.push('/advertisement_generator');
    })
    .catch((error) => {
      console.log(error, "User not found");
      setError("Invalid email or password");
    });
  }

  function handleSignup(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('You are registered');
      router.push('/advertisement_generator');
    })
    .catch((error) => {
      console.log(error, "You are not registered");
      setError("Invalid email or password");
    });
  }
  
  console.log(auth.currentUser);

  return (
    <>
      <Head>
          <title>Advertisement Generator Authentication</title>
          <meta name="description" content="auth, advertisement, login, signup" />
      </Head>
      <Container>
        <Card style={{ display: 'flex', justifyContent: 'center', boxShadow: '-2px 2px 10px black' }}>
          {/* {loading && <h4>Loading...</h4>} */}
          {account ? (
          <>
            <FocusLock>
              <div>
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>Firebase Login</h1>
                <form onSubmit={handleLogin}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      placeholder="Email"
                      style={{ borderRight: 'transparent', borderLeft: 'transparent', borderTop: 'transparent', margin: '20px 0px 20px' }}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      placeholder="Password"
                      style={{ borderRight: 'transparent', borderLeft: 'transparent', borderTop: 'transparent', borderBottom: '.5px solid gray', margin: '20px 0px 20px', padding: '4px', width: '80%', fontSize: '17px' , fontWeight: '300' }}
                    />
                    <Icon
                      name="eye"
                      style={{ transform: 'translate(-23px, 24px) scale(1.3)', color: 'gray' }}
                    />
                  </div>
                  <div style={{ color: 'red' }}>
                    {error && (
                      <p>{error}</p>
                    )}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input type="submit" value="Login" className={styles.buttons} />
                  </div>
                </form>
              </div>
            </FocusLock>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              Don't have an account?&nbsp;<a onClick={() => {setAccount(false), setEmail(""), setPassword("")}} style={{ cursor: 'pointer', color: '#125CA1' }}>Signup</a>
            </div>
          </>
          ):(
          <>
            <FocusLock>
              <div>
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>Firebase Signup</h1>
                <form onSubmit={handleSignup}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      placeholder="Email"
                      style={{ borderRight: 'transparent', borderLeft: 'transparent', borderTop: 'transparent', margin: '20px 0px 20px' }}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      placeholder="Password"
                      style={{ borderRight: 'transparent', borderLeft: 'transparent', borderTop: 'transparent', margin: '20px 0px 20px' }}
                    />
                  </div>
                  <div style={{ color: 'red' }}>
                    {error && (
                      <p>{error}</p>
                    )}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <input type="submit" value="Signup" className={styles.buttons} />
                  </div>
                </form>
              </div>
            </FocusLock>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              Already have an account?&nbsp;<a onClick={() => {setAccount(true), setEmail(""), setPassword("")}} style={{ cursor: 'pointer', color: '#125CA1' }}>Login</a>
            </div>
          </>
          )}
        </Card>
      </Container>
    </>
  );
}
