import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { NextRouter, useRouter } from 'next/router';
import { auth } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import styles from '../styles/advertisement.module.css';

export default function Header() {
    const [adUnderline, setAdUnderline] = useState<string>('');
    const [historyUnderline, setHistoryUnderline] = useState<string>('');
    const [headerAspect, setHeaderAspect] = useState<string>("Saved Advertisements");

    useEffect(() => {
        if (window.innerWidth > 440) {
            setHeaderAspect("Saved Advertisements");
        } else {
            setHeaderAspect("Saved Ads");
        }
    
        const updateMedia = () => {
          if (window.innerWidth > 440) {
            setHeaderAspect("Saved Advertisements");
          } else {
            setHeaderAspect("Saved Ads");
          }
        };
          window.addEventListener('resize', updateMedia);
          return () => window.removeEventListener('resize', updateMedia);
    }, []);

    const router: NextRouter = useRouter();

    useEffect(() => {
        if (router.pathname === '/advertisement_generator') {
            setAdUnderline('underline');
        } else if (router.pathname === '/history') {
            setHistoryUnderline('underline');
        } else {
            return;
        }
    }, []);

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
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ paddingRight: '2%', textDecoration: `underline` }}>
                    <Link href="/advertisement_generator">
                        <Button style={{ background: 'white', color: '#125CA1', textDecoration: `${adUnderline}` }}>
                            Advertisement
                        </Button>
                    </Link>
                </div>
                <div style={{ paddingRight: '2%' }}>
                    <Link href="/history">
                        <Button style={{ background: 'white', color: '#125CA1', textDecoration: `${historyUnderline}` }}>
                            {headerAspect}
                        </Button>
                    </Link>
                </div>
                <div style={{ paddingRight: '2%' }}>
                    <Button onClick={handleLogOut} className={styles.hovering} style={{ background: 'white', color: 'red' }}>
                        Logout
                    </Button>
                </div>
            </div>
        </>
    );
}
