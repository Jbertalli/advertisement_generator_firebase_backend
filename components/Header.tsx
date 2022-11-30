import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Divider } from 'semantic-ui-react';
import { NextRouter, useRouter } from 'next/router';
import { auth } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import styles from '../styles/advertisement.module.css';

export default function Header() {
    const [adUnderline, setAdUnderline] = useState<string>('');
    const [historyUnderline, setHistoryUnderline] = useState<string>('');
    const [customUnderline, setCustomUnderline] = useState<string>('');
    const [menuAspect, setMenuAspect] = useState<string>('');
    const [ads, setAds] = useState('Advertisements');

    useEffect(() => {
        if (window.innerWidth > 440) {
            setMenuAspect('8vw');
            setAds('Advertisements');
        } else {
            setMenuAspect('8vw');
            setAds('Ads');
        }
    
        const updateMedia = () => {
          if (window.innerWidth > 440) {
            setMenuAspect('8vw');
            setAds('Advertisements');
          } else {
            setMenuAspect('8vw');
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
                    justifyContent: 'center'
                }}
            >   
                <Dropdown 
                    simple 
                    text='Advertisements'
                    style={{
                        marginRight: `${menuAspect}`,
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
                            marginRight: `${menuAspect}`,
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
        </>
    );
}
