import { createUserWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/clientApp';

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
