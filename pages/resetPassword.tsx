import React, { useState } from 'react';
import { auth } from '../firebase/clientApp';
import { sendPasswordResetEmail } from '@firebase/auth';

export default function password() {
  // const [email, setEmail] = useState<string>("");
  // const [message, setMessage] = useState<string>("");
  // const [error, setError] = useState<string>("");

  // function handleReset(e) {
  //     e.preventDefault();
  //     sendPasswordResetEmail(auth, email)
  //         .then(() => {
  //             console.log('Password reset email sent');
  //             setMessage("Check your email to reset password");
  //         })
  //         .catch((error) => {
  //             console.log(error);
  //             setError("Email not found");
  //         });
  // }

  return (
    <>
      Hello world
      {/* <form onSubmit={handleReset}>
          <div>
              Email
              <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="email"
              />
          </div>
          <input
              type="submit"
          />
      </form> */}
    </>
  );
}
