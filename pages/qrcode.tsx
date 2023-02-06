import React from 'react';
import { QRCode } from 'react-qrcode-logo';


export default function qrCode() {
    return (
        <>
            <div>
                <QRCode 
                    value="https://www.testandgrade.com" 
                    logoImage='/images/test1.png'
                    size={290}
                    logoWidth={80}
                    eyeColor='#125CA1'
                    fgColor='#125CA1'
                    removeQrCodeBehindLogo={true}
                />
            </div>
        </>
    );
}
