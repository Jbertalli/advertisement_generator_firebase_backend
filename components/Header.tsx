import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { NextRouter, useRouter } from 'next/router';
import { auth } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import styles from '../styles/advertisement.module.css';

export default function Header() {
    const [adUnderline, setAdUnderline] = useState<string>('');
    const [historyUnderline, setHistoryUnderline] = useState<string>('');
    const [customUnderline, setCustomUnderline] = useState<string>('');
    const [headerAspect, setHeaderAspect] = useState<string>("Saved Advertisements");
    const [customAspect, setCustomAspect] = useState<string>("Custom Advertisement");
    const [dropdown, setDropdown] = useState<boolean>(false);

    useEffect(() => {
        if (window.innerWidth > 440) {
            setHeaderAspect("Saved Advertisements");
            setCustomAspect('Custom Advertisement');
        } else {
            setHeaderAspect("Saved Ads");
            setCustomAspect('Custom Ads');
        }
    
        const updateMedia = () => {
          if (window.innerWidth > 440) {
            setHeaderAspect("Saved Advertisements");
            setCustomAspect('Custom Advertisement');
          } else {
            setHeaderAspect("Saved Ads");
            setCustomAspect('Custom Ads');
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
        } else if (router.pathname === '/custom') {
            setCustomUnderline('underline');
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
                <div
                    onMouseOver={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                    style={{ 
                        cursor: 'pointer'
                    }}
                >
                    {dropdown ? (
                    <>
                        <div
                            style={{
                                position: 'fixed',
                                zIndex: '1000'
                            }}
                        >
                            <table>
                                <tr>
                                    <div style={{ paddingRight: '0%', textDecoration: `underline` }}>
                                        <Link href="/advertisement_generator">
                                            <Button style={{ background: 'white', color: '#125CA1', textDecoration: `${adUnderline}` }}>
                                                Earn and Trade Advertisement
                                            </Button>
                                        </Link>
                                    </div>
                                </tr>
                                <tr>
                                    <div style={{ paddingRight: '0%' }}>
                                        <Link href="/custom">
                                            <Button style={{ background: 'white', color: '#125CA1', textDecoration: `${customUnderline}` }}>
                                                {customAspect}
                                            </Button>
                                        </Link>
                                    </div>
                                </tr>
                            </table>
                        </div>
                    </>
                    ):(
                    <>
                        <span>
                            <Button style={{ background: 'white', color: '#125CA1' }}>
                                Advertisements 
                            </Button>
                        </span>
                        <span>
                            <Icon
                                name='chevron down'
                                style={{ 
                                    color: '#125CA1',
                                    transform: 'translate(-20px)'
                                }}
                            />
                        </span>
                    </>
                    )}
                </div>
                <div style={{ paddingRight: '0%' }}>
                    <Link href="/history">
                        <Button style={{ background: 'white', color: '#125CA1', textDecoration: `${historyUnderline}` }}>
                            {headerAspect}
                        </Button>
                    </Link>
                </div>
                <div style={{ paddingRight: '0%' }}>
                    <Button onClick={handleLogOut} className={styles.hovering} style={{ background: 'white', color: 'red' }}>
                        Logout
                    </Button>
                </div>
            </div>
        </>
    );
}
