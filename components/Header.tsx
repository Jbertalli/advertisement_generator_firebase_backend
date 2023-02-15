import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Divider } from 'semantic-ui-react';
import { NextRouter, useRouter } from 'next/router';
import { auth } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import styles from '../styles/advertisement.module.css';

export default function Header() {
  const [underline, setUnderline] = useState<boolean>(false);
  const [histUnderline, setHistUnderline] = useState<boolean>(false);
  const [adUnderline, setAdUnderline] = useState<string>('');
  const [customUnderline, setCustomUnderline] = useState<string>('');
  const [historyUnderline, setHistoryUnderline] = useState<string>('');
  const [customHistoryUnderline, setCustomHistoryUnderline] = useState<string>('');
  const [resize, setResize] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth > 440) {
      setResize(true);
    } else {
      setResize(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 440) {
        setResize(true);
      } else {
        setResize(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const router: NextRouter = useRouter();

  useEffect(() => {
    if (router.pathname === '/advertisement_generator') {
      setAdUnderline('underline');
    } else if (router.pathname === '/custom') {
      setCustomUnderline('underline');
    } else if (router.pathname === '/history') {
      setHistoryUnderline('underline');
    } else if (router.pathname === '/customHistory') {
      setCustomHistoryUnderline('underline');
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    if (router.pathname === '/advertisement_generator' || router.pathname === '/custom') {
      setUnderline(true);
    } else if (router.pathname === '/history' || router.pathname === '/customHistory') {
      setHistUnderline(true);
    } else {
      return;
    }
  }, []);

  function handleLogOut(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log('you are logged out');
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
          marginLeft: '10px',
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
            transform: 'translate(5px, 10.5px)',
          }}
        >
          <Dropdown.Menu>
            <Link href='/advertisement_generator'>
              <Dropdown.Item>
                <div
                  style={{
                    textDecoration: `${adUnderline}`,
                    fontWeight: '600',
                    color: '#125CA1',
                    background: 'transparent',
                  }}
                >
                  Earn and Trade {resize ? 'Advertisements' : 'Ads'}
                </div>
              </Dropdown.Item>
            </Link>
            <Divider />
            <Link href='/custom'>
              <Dropdown.Item>
                <div
                  style={{
                    textDecoration: `${customUnderline}`,
                    fontWeight: '600',
                    color: '#125CA1',
                    background: 'transparent',
                  }}
                >
                  Custom {resize ? 'Advertisements' : 'Ads'}
                </div>
              </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown
          simple
          text={resize ? 'Saved Advertisements' : 'Saved Ads'}
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
            <Link href='/history'>
              <Dropdown.Item>
                <div
                  style={{
                    textDecoration: `${historyUnderline}`,
                    fontWeight: '600',
                    color: '#125CA1',
                    background: 'transparent'
                  }}
                >
                  {resize ? 'Earn and Trade Advertisement History' : 'Earn and Trade Ad History'}
                </div>
              </Dropdown.Item>
            </Link>
            <Divider />
            <Link href='/customHistory'>
              <Dropdown.Item>
                <div
                  style={{
                    textDecoration: `${customHistoryUnderline}`,
                    fontWeight: '600',
                    color: '#125CA1',
                    background: 'transparent',
                  }}
                >
                  Custom {resize ? 'Advertisement History' : 'Ad History'}
                </div>
              </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          name='Logout'
          onClick={handleLogOut}
          className={styles.hovering}
          style={{
            fontWeight: '600',
            background: 'white',
            color: 'red',
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
              height: '1px',
            }}
          >
            <div
              style={{
                marginRight: '8vw',
                transform: resize ? 'translate(-93px)' : 'translate(-55.5px)',
                width: '100px',
                background: '#125CA1',
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
      ) : null}
      {histUnderline ? (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            transform: 'translate(-23px, -27.5px)',
            height: '1px',
          }}
        >
          <div
            style={{
              marginRight: '8vw',
              transform: resize ? 'translate(85.6px)' : 'translate(76.6px)',
              width: resize ? '139.4px' : '63px',
              background: '#125CA1',
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
