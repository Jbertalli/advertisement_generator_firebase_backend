// import React from "react";
// import Head from 'next/head';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from '../firebase/clientApp';
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// //Configure FirebaseUI
// const uiConfig = {
//     // Redirect / after successful signin
//     signInSuccessUrl: "/",
//     // Display GitHub auth providers
//     signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
// };

// function SignInScreen() {

//     const auth = getAuth();

//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//        console.log("Current user:", user);
//         const uid = user.uid;
//       } else {
//         console.log("No user signed in");
//       }
//     });

//     return (
//       <>
//         <Head>
//             <title>Sign In</title>
//             <meta name="description" content="sign in" />
//             <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <div
//             style={{
//             maxWidth: "320px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             }}
//         >
//             <h1>Zip Code Login</h1>
//             <p>Please Sign-In:</p>
//             <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth()} />
//         </div>
//       </>
//     );
// }

// export default SignInScreen;


