import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/clientApp';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    onAuthStateChanged(auth, (user) => {
      if (user) {
       console.log("Current user:", user.email);
        const uid = user.uid;
      } else {
        console.log("No user signed in");
      }
    });

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('logged in');
    })
    .catch((error) => {
      console.log(error, "User not found");
    });
  }

  function handleSignup(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('You are registered');
    })
    .catch((error) => {
      console.log(error, "You are not registered");
    });
  }

  return (
    <>
      <div>
        <h1>Firebase Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            Email
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            Password
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
      <div>
        Don't have an account? <a style={{ cursor: 'pointer', color: '#125CA1' }}>Signup</a>
      </div>



      <div>
        <h1>Firebase Signup</h1>
        <form onSubmit={handleSignup}>
          <div>
              Email
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            Password
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <input type="submit" value="Signup" />
          </div>
        </form>
      </div>
      <div>
        Already have an account? <a style={{ cursor: 'pointer', color: '#125CA1' }}>Login</a>
      </div>
    </>
  );
}
