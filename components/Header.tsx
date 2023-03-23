import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Divider } from 'semantic-ui-react';
import { NextRouter, useRouter } from 'next/router';
import { auth } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import styles from '../styles/advertisement.module.css';

auth;

export default function Header() {
  const [resize, setResize] = useState<boolean>(false);
  const currentUser = auth.currentUser?.uid;

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

  function deleteLocal() {
    // localStorage.clear();
  }

  return (
    <>
      {currentUser === undefined ? (
      <>
        <Menu
          secondary
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px'
          }}
        >
          <Link href='/advertisement_generator'>
            <Menu.Item>
              <div
                style={{
                  textDecoration: router.pathname === '/advertisement_generator' ? 'underline' : null,
                  fontWeight: '600',
                  color: '#125CA1',
                  background: 'transparent'
                }}
              >
                Earn and Trade Ad
              </div>
            </Menu.Item>
          </Link>
          <Link href='/custom'>
            <Menu.Item>
              <div
                style={{
                  textDecoration: router.pathname === '/custom' ? 'underline' : null,
                  fontWeight: '600',
                  color: '#125CA1',
                  background: 'transparent'
                }}
              >
                {resize ? 'Custom Advertisement' : 'Custom Ad'}
              </div>
            </Menu.Item>
          </Link>
          <Link href='/'>
            <Menu.Item>
              <div
                style={{
                  textDecoration: router.pathname === '/' ? 'underline' : null,
                  fontWeight: '600',
                  color: '#125CA1',
                  background: 'transparent'
                }}
              >
                Login
              </div>
            </Menu.Item>
          </Link>
        </Menu>
      </>
      ):(
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
              transform: 'translate(5px, 10.5px)',
            }}
          >
            <Dropdown.Menu>
              <Link href='/advertisement_generator'>
                <Dropdown.Item>
                  <div
                    style={{
                      textDecoration: router.pathname === '/advertisement_generator' ? 'underline' : null,
                      fontWeight: '600',
                      color: '#125CA1',
                      background: 'transparent'
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
                      textDecoration: router.pathname === '/custom' ? 'underline' : null,
                      fontWeight: '600',
                      color: '#125CA1',
                      background: 'transparent'
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
                      textDecoration: router.pathname === '/history' ? 'underline' : null,
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
                      textDecoration: router.pathname === '/customHistory' ? 'underline' : null,
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
            onClick={(e) => {handleLogOut(e), deleteLocal()}}
            className={styles.hovering}
            style={{
              fontWeight: '600',
              background: 'white',
              color: 'red',
            }}
          />
        </Menu>
        {router.pathname === '/advertisement_generator' || router.pathname === '/custom' ? (
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
        {router.pathname === '/history' || router.pathname === '/customHistory' ? (
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
                transform: resize ? 'translate(45.6px)' : 'translate(45.6px)',
                width: resize ? '139.4px' : '63px',
                background: '#125CA1'
              }}
            />
            <div
            />
            <div />
          </div>
        </>
        ): null}
      </>
      )}
    </>
  );
}
