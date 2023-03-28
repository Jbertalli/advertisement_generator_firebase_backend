import React from 'react';
import { QRCode } from 'react-qrcode-logo';

export default function qrCode() {
    return (
        <>
            <div
                style={{
                    color: '#125CA1',
                    cursor: 'pointer',
                    fontSize: '30px',
                    margin: '20px 0px 10px 0px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <a href='https://www.testandgrade.com'>
                    TestAndGrade.com
                </a>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'scale(2.1)',
                    marginTop: '100px',
                    marginBottom: '100px'
                }}
            >
                <QRCode 
                    value='https://www.testandgrade.com'
                    logoImage='/images/test1.png'
                    eyeColor='#125CA1'
                    fgColor='#125CA1'
                    removeQrCodeBehindLogo={true}
                />
            </div>
            <div
                style={{
                    color: '#125CA1',
                    cursor: 'pointer',
                    fontSize: '30px',
                    margin: '20px 0px 10px 0px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <a href='https://www.antinodelocation.com'>
                    AntinodeLocation.com
                </a>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'scale(2.1)',
                    marginTop: '100px',
                    marginBottom: '100px'
                }}
            >
                <QRCode
                    value='https://www.antinodelocation.com'
                    logoImage='/images/antinode_logo.png'
                    eyeColor='#125CA1'
                    fgColor='#125CA1'
                    removeQrCodeBehindLogo={true}
                />
            </div>
            <div
                style={{
                    color: '#999999',
                    cursor: 'pointer',
                    fontSize: '30px',
                    margin: '20px 0px 10px 0px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <a href='https://cssclone.com'>
                    cssClone.com
                </a>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'scale(2.1)',
                    marginTop: '100px',
                    marginBottom: '100px'
                }}
            >
                <QRCode
                    value='https://cssclone.com'
                    logoImage='/images/apple1.png'
                    eyeColor='#999999'
                    fgColor='#999999'
                    removeQrCodeBehindLogo={true}
                />
            </div>
            <div
                style={{
                    color: '#13a557',
                    cursor: 'pointer',
                    fontSize: '30px',
                    margin: '20px 0px 10px 0px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <a href='https://www.advertisementgenerator.com'>
                    AdvertisementGenerator.com
                </a>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'scale(2.1)',
                    marginTop: '100px',
                    marginBottom: '100px'
                }}
            >
                <QRCode
                    value='https://www.advertisementgenerator.com'
                    logoImage='/images/E&T_logo.png'
                    eyeColor='#13a557'
                    fgColor='#13a557'
                    removeQrCodeBehindLogo={true}
                />
            </div>
            <div
                style={{
                    color: 'black',
                    cursor: 'pointer',
                    fontSize: '30px',
                    margin: '20px 0px 10px 0px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <a href='https://www.healthstatcalculator.com'>
                    HealthStat.com
                </a>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'scale(2.1)',
                    marginTop: '100px',
                    marginBottom: '100px'
                }}
            >
                <QRCode
                    value='https://www.healthstatcalculator.com'
                    logoImage='/images/healthstat.png'
                    eyeColor='black'
                    fgColor='black'
                    removeQrCodeBehindLogo={true}
                />
            </div>
            <div
                style={{
                    color: 'black',
                    cursor: 'pointer',
                    fontSize: '30px',
                    margin: '20px 0px 10px 0px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <a href='https://github.com/Jbertalli'>
                    Jbertalli GitHub
                </a>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'scale(2.1)',
                    marginTop: '100px',
                    marginBottom: '100px'
                }}
            >
                <QRCode
                    value='https://github.com/Jbertalli'
                    logoImage='/images/GitHub_logo.png'
                    eyeColor='black'
                    fgColor='black'
                    removeQrCodeBehindLogo={true}
                />
            </div>
        </>
    );
}
