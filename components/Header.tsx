import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Divider } from 'semantic-ui-react';
import { NextRouter, useRouter } from 'next/router';
import { auth } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import styles from '../styles/advertisement.module.css';

export default function Header() {
    const [underline, setUnderline] = useState<boolean>(false);
    const [adUnderline, setAdUnderline] = useState<string>('');
    const [historyUnderline, setHistoryUnderline] = useState<string>('');
    const [customUnderline, setCustomUnderline] = useState<string>('');
    const [ads, setAds] = useState<string>('Advertisements');

    useEffect(() => {
        if (window.innerWidth > 440) {
            setAds('Advertisements');
        } else {
            setAds('Ads');
        }
    
        const updateMedia = () => {
          if (window.innerWidth > 440) {
            setAds('Advertisements');
          } else {
            setAds('Ads');
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

    useEffect(() => {
        if (router.pathname === '/advertisement_generator' || router.pathname === '/custom') {
            setUnderline(true)
        } else {
            return;
        }
    },[]);

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
            <Menu
                secondary
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '15px',
                    marginLeft: '10px'
                }}
            >   
                <Dropdown 
                    simple 
                    text='Advertisements'
                    style={{
                        marginRight: '8vw',
                        zIndex: '2',
                        fontWeight: '600',
                        color: '#125CA1',
                        background: 'transparent',
                        transform: 'translate(5px, 10.5px)'
                    }}
                >
                    <Dropdown.Menu>
                        <Link href="/advertisement_generator">
                            <Dropdown.Item>
                                <div
                                    style={{
                                        textDecoration: `${adUnderline}`,
                                        fontWeight: '600',
                                        color: '#125CA1',
                                        background: 'transparent'
                                    }}
                                >
                                    Earn and Trade {ads}
                                </div>
                            </Dropdown.Item>
                        </Link>
                        <Divider />
                        <Link href="/custom">
                            <Dropdown.Item>
                                <div
                                    style={{
                                        textDecoration: `${customUnderline}`,
                                        fontWeight: '600',
                                        color: '#125CA1',
                                        background: 'transparent'
                                    }}
                                >
                                    Custom {ads}
                                </div>
                            </Dropdown.Item>
                        </Link>
                    </Dropdown.Menu>
                </Dropdown>
                <Link href="/history" passHref>
                    <Menu.Item
                        style={{
                            textDecoration: `${historyUnderline}`,
                            marginRight: '8vw',
                            fontWeight: '600',
                            background: 'white',
                            color: '#125CA1'
                        }}
                    >
                        Saved {ads}
                    </Menu.Item>
                </Link>
                <Menu.Item
                    name='Logout'
                    onClick={handleLogOut} 
                    className={styles.hovering} 
                    style={{ 
                        fontWeight: '600',
                        background: 'white', 
                        color: 'red' 
                    }}
                />
            </Menu>
            {underline ? (
            <>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        transform: 'translate(-23px, -27.5px)',
                        height: '1px'
                    }}
                >
                    <div
                        style={{
                            marginRight: '8vw',
                            // transform: 'translate(-89.8px)',
                            // width: '119px',
                            transform: 'translate(-99.2px)',
                            width: '100px',
                            background: '#125CA1'
                        }}
                    />
                    <div
                        style={{
                            marginRight: '8vw',
                        }}
                    />
                    <div />
                </div>
            </>
            ): null}
        </>
    );
}
