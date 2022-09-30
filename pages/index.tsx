import Head from 'next/head';
import FocusLock from 'react-focus-lock';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, setPersistence, browserSessionPersistence } from '@firebase/auth';
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/clientApp';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from '../styles/advertisement.module.css';
import { Container, Icon, Card, Button, Loader } from 'semantic-ui-react';

export default function Authentication() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [account, setAccount] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const [user, loading] = useAuthState(auth);

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
    // signInWithEmailAndPassword(auth, email, password)
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
    .then((userCredential) => {
      document.cookie = 'name=Signed In';
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
      document.cookie = 'name=Signed Up';
      console.log('You are registered');
      router.push('/advertisement_generator');
    })
    .catch((error) => {
      console.log(error, "You are not registered");
      setError("Invalid email or password");
    });
  }
  
  console.log(auth.currentUser);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((re) => {
      document.cookie = 'name=Google Signed In';
      console.log(re);
      router.push('/advertisement_generator');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    signOut(auth)
    .then(() => {
        document.cookie = 'name=; expires=Thu, 01 Jan 1970';
        console.log("you are logged out");
        router.push('/');
    })
    .catch((error) => {
        console.log(error);
    });
  }, [])

   // access to window or document object 
  if (typeof window !== "undefined") {
    useEffect(() => {
      console.log(document.cookie.length);
      if (document.cookie.length > 6) {
        console.log('Authenticated!')
      } else if (document.cookie.length == 5) {
        router.push('/');
      } else {
        return null;
      }
    }, [])

  // if (document.cookie.length == 5) {
  //   return null;
  // }
}

// console.log(document.cookie.length);

  return (
    <>
      <Head>
          <title>Advertisement Generator Authentication</title>
          <meta name="description" content="auth, advertisement, login, signup" />
      </Head>
      <div style={{ background: 'linear-gradient(45deg, #0f0ade, #52b3d9)', height: '100vh' }}>
        <Container style={{ display: 'flex', justifyContent: 'center', paddingTop: '20vh' }}>
          <Card style={{ display: 'flex', justifyContent: 'center', boxShadow: '-2px 2px 10px black', width: '55vw', maxWidth: '500px', paddingTop: '30px' }}>
            {loading && 
              <div style={{ display: 'flex', justifyContent: 'center', fontSize: '17px', fontWeight: '300' }}>
                <div style={{ transform: 'translateY(-10px)' }}>
                  Loading...
                </div>
                <Loader active size="large" />
              </div>
            }
            {account ? (
            <>
              <FocusLock>
                <div>
                  <h1 style={{ display: 'flex', justifyContent: 'center', fontWeight: '100' }}>
                  <Icon
                    name="lightning"
                    style={{ position: 'absolute', transform: 'translate(-45px, 1px) scale(0.8)', color: '#0f0ade' }}
                  />
                    Login
                  </h1>
                  <div style={{ display: 'flex', justifyContent: 'center', transform: 'translate(-5px, 10px)' }}>
                    <Button onClick={signInWithGoogle} style={{ background: '#FFFFFF', position: 'absolute', paddingLeft: '50px', borderRadius: '50px', border: '.5px solid #80808099', color: 'black' }}>
                      <div className={styles.google} style={{ transform: 'translate(-170px, -225px) scale(0.07)', position: 'fixed', marginTop: '82px' }} />
                      Sign in with Google
                    </Button>
                  </div>
                  <div style={{ transform: 'translate(-7px, 75px)', fontSize: '10px', color: '#808080', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ background: '#808080', width: '18.5%', height: '0.5px', transform: 'translate(-10px, 10px)' }} />
                      or Sign in with Email
                    <div style={{ background: '#808080', width: '18.5%', height: '0.5px', transform: 'translate(10px, 10px)' }} />
                  </div>
                  <form onSubmit={handleLogin}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Email"
                        style={{ 
                          borderRight: 'transparent', 
                          borderLeft: 'transparent', 
                          borderTop: 'transparent', 
                          borderBottom: '.5px solid gray', 
                          margin: '100px 0px 20px', 
                          padding: '4px', 
                          width: '80%', 
                          maxWidth: '300px',
                          fontSize: '17px' , 
                          fontWeight: '300' 
                        }}
                      />
                      <Icon
                        name="user"
                        style={{ transform: 'translate(-23px, 103px) scale(1.2)', color: '#80808099' }}
                      />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                        style={{ 
                          borderRight: 'transparent', 
                          borderLeft: 'transparent', 
                          borderTop: 'transparent', 
                          borderBottom: '.5px solid gray', 
                          margin: '20px 0px 20px', 
                          padding: '4px', 
                          width: '80%', 
                          maxWidth: '300px',
                          fontSize: '17px' , 
                          fontWeight: '300' 
                        }}
                      />
                      <Icon
                        name="eye"
                        style={{ transform: 'translate(-23px, 24px) scale(1.3)', color: '#80808099' }}
                      />
                    </div>
                    <div style={{ color: 'red', display: 'flex', justifyContent: 'center' }}>
                      {error && (
                        <p>{error}</p>
                      )}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', color: '#808080' }}>
                      Don't have an account?&nbsp;<a onClick={() => {setAccount(false), setEmail(""), setPassword("")}} style={{ cursor: 'pointer', color: '#125CA1' }}>Signup</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0px 30px' }}>
                      <input type="submit" value="Login" className={styles.buttons} />
                    </div>
                  </form>
                </div>
              </FocusLock>
            </>
            ):(
            <>
              <FocusLock>
                <div>
                  <h1 style={{ display: 'flex', justifyContent: 'center', fontWeight: '100' }}>
                    <Icon
                      name="lightning"
                      style={{ position: 'absolute', transform: 'translate(-55px, 1px) scale(0.8)', color: '#0f0ade' }}
                    />
                    Signup
                  </h1>
                  <div style={{ display: 'flex', justifyContent: 'center', transform: 'translate(-5px, 10px)' }}>
                    <Button onClick={signInWithGoogle} style={{ background: '#FFFFFF', position: 'absolute', paddingLeft: '50px', borderRadius: '50px', border: '.5px solid #80808099', color: 'black' }}>
                      <div className={styles.google} style={{ transform: 'translate(-170px, -225px) scale(0.07)', position: 'fixed', marginTop: '82px' }} />
                      Sign up with Google
                    </Button>
                  </div>
                  <div style={{ transform: 'translate(-7px, 75px)', fontSize: '10px', color: '#808080', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ background: '#808080', width: '18.5%', height: '0.5px', transform: 'translate(-10px, 10px)' }} />
                      or Sign up with Email
                    <div style={{ background: '#808080', width: '18.5%', height: '0.5px', transform: 'translate(10px, 10px)' }} />
                  </div>
                  <form onSubmit={handleSignup}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Email"
                        style={{ 
                          borderRight: 'transparent', 
                          borderLeft: 'transparent', 
                          borderTop: 'transparent', 
                          borderBottom: '.5px solid gray', 
                          margin: '100px 0px 20px', 
                          padding: '4px', 
                          width: '80%', 
                          maxWidth: '300px',
                          fontSize: '17px' , 
                          fontWeight: '300' 
                        }}
                      />
                      <Icon
                        name="user"
                        style={{ transform: 'translate(-23px, 103px) scale(1.2)', color: '#80808099' }}
                      />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                        style={{ 
                          borderRight: 'transparent', 
                          borderLeft: 'transparent', 
                          borderTop: 'transparent', 
                          borderBottom: '.5px solid gray', 
                          margin: '20px 0px 20px', 
                          padding: '4px', 
                          width: '80%', 
                          maxWidth: '300px',
                          fontSize: '17px' , 
                          fontWeight: '300' 
                        }}
                      />
                      <Icon
                        name="eye"
                        style={{ transform: 'translate(-23px, 24px) scale(1.3)', color: '#80808099' }}
                      />
                    </div>
                    <div style={{ color: 'red', display: 'flex', justifyContent: 'center' }}>
                      {error && (
                        <p>{error}</p>
                      )}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', color: '#808080' }}>
                      Already have an account?&nbsp;<a onClick={() => {setAccount(true), setEmail(""), setPassword("")}} style={{ cursor: 'pointer', color: '#125CA1' }}>Login</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0px 30px' }}>
                      <input type="submit" value="Signup" className={styles.buttons} />
                    </div>
                  </form>
                </div>
              </FocusLock>
            </>
            )}
          </Card>
        </Container>
      </div>
    </>
  );
}
