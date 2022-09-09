import React, { useState } from 'react';
import { auth } from '../firebase/clientApp';
import { sendPasswordResetEmail } from '@firebase/auth';
import Link from 'next/link';

export default function password() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    function handleReset(e) {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('Password reset email sent');
                setMessage("Check your email to reset password");
            })
            .catch((error) => {
                console.log(error);
                setError("Email not found");
            });
    }

    return (
        <>
            <form onSubmit={handleReset}>
                <div>
                    <label>
                        Email
                    </label>
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
            </form>
        </>
    );
}