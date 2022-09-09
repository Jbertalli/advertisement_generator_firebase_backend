// import React, { useEffect, useState } from 'react';
// import Advertisement from '../components/advertisement';
// import MobileAdvertisement from '../components/mobileAdvertisement';

// export default function Home() {
//   const [isDesktop, setDesktop] = useState(false);

//   useEffect(() => {
//     if (window.innerWidth > 440) {
//         setDesktop(true);
//     } else {
//         setDesktop(false);
//     }

//     const updateMedia = () => {
//     if (window.innerWidth > 440) {
//         setDesktop(true);
//     } else {
//         setDesktop(false);
//     }
//     };
//       window.addEventListener('resize', updateMedia);
//       return () => window.removeEventListener('resize', updateMedia);
//   }, []);

//   return (
//     <>
//       {isDesktop ? (
//       <>
//         <Advertisement />
//       </>
//       ):(
//       <>
//         <MobileAdvertisement />
//       </>
//       )}
//     </>
//   );
// }

import { signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/clientApp';

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <>
      <div>
        <h1>Firebase Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label>
              Password
            </label>
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
    </>
  );
}
