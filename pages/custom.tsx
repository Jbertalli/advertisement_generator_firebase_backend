import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Divider } from 'semantic-ui-react';

export default function Custom() {
    const [company, setCompany] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [backgroundColor, setBackgroundColor] = useState<string>('');

    return (
        <>
            <Head>
                <title>Custom Advertisement Generator</title>
                <meta name="description" content="earnandtrade, advertisement" />
            </Head>
            <div>
                <div>
                    Company Name
                </div>
                <input
                    type='text'
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                <div>
                    Advertisement Description
                </div>
                <input
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div>
                    Select Text Color
                </div>
                <input 
                    type='color'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    style={{ width: '100px', height: '100px' }}
                />
                 <div>
                    Select Background Color
                </div>
                <input 
                    type='color'
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    style={{ width: '100px', height: '100px' }}
                />
            </div>
            <Divider />
            <div>
                {company}
            </div>
            <div>
                {description}
            </div>
            <div>
                {color}
            </div>
            <div>
                {backgroundColor}
            </div>
        </>
    );
}
