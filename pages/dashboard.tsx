import React from 'react';
import { auth } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function dashboard() {
    const router = useRouter();

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
        </>
    );
}
