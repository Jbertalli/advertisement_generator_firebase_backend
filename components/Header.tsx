import Link from 'next/link';
import { Button } from 'semantic-ui-react';
import { NextRouter, useRouter } from 'next/router';
import { auth } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';

export default function Header() {

    const router: NextRouter = useRouter();

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
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '2%' }}>
                <Link href="/advertisement_generator">
                    <Button style={{ background: 'white', color: '#125CA1' }}>
                        Advertisement Generator
                    </Button>
                </Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '2%' }}>
                <Link href="/history">
                    <Button style={{ background: 'white', color: '#125CA1' }}>
                        User Information
                    </Button>
                </Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '2%' }}>
                <Button onClick={handleLogOut} style={{ background: 'white', color: 'red' }}>
                    Logout
                </Button>
            </div>
        </>
    );
}
