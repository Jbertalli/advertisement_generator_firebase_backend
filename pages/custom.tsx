import Head from 'next/head';
import styles from '../styles/advertisement.module.css';
import React, { useEffect, useState } from 'react';
import { Divider, Container } from 'semantic-ui-react';
import Draggable from 'react-draggable';

export default function Custom() {
    const [company, setCompany] = useState<string>('');
    const [companyFontSize, setCompanyFontSize] = useState<string>('');
    const [companyFontWeight, setCompanyFontWeight] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [descriptionFontSize, setDescriptionFontSize] = useState<string>('');
    const [descriptionFontWeight, setDescriptionFontWeight] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [backgroundColor, setBackgroundColor] = useState<string>('');
    const [mediaPreview, setMediaPreview] = useState<string>('');
    const [image, setImage] = useState({name: '', media: ''});

    function handleChange(event) {
        const { name, files } = event.target;
        if (name === 'media') {
            setImage(prevState => ({ ...prevState, media: files[0] }
            ));
            setMediaPreview(window.URL.createObjectURL(files[0]));
        }
        const img = files[0].name;
        console.log(img);
        console.log(files[0].name);
        // console.log(image);
        // console.log(mediaPreview);
    }

    console.log(mediaPreview);

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
                <div>
                    <input
                        type='text'
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>
                <div>
                    Advertisement Description
                </div>
                <div>
                    <input
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    Select Text Color
                </div>
                <div>
                    <input 
                        type='color'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        style={{ width: '100px', height: '100px' }}
                    />
                </div>
                 <div>
                    Select Background Color
                </div>
                <div>
                    <input 
                        type='color'
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        style={{ width: '100px', height: '100px' }}
                    />
                </div>
                <div>
                    <input
                        name="media"
                        type="file"
                        accept="image/*"
                        // content="Select Image"
                        style={{ width: '30vw', transform: 'translateX(-.2vw)' }}
                        className={styles.file}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Divider />
            <Container 
                style={{ 
                    background: `${backgroundColor}`, 
                    color: `${color}`,
                    fontSize: '50px',
                    fontWeight: '100',
                    height: '50vh',
                    width: '100vw'
                }}>
                <Draggable>
                    <div style={{ display: 'flex', justifyContent: 'center', cursor: 'move' }}>
                        {company}
                    </div>
                </Draggable>
                <Draggable>
                    <div style={{ display: 'flex', justifyContent: 'center', cursor: 'move' }}>
                        {description}
                    </div>
                </Draggable>
                <Draggable>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            transform: 'translateY(50%)',
                        }}
                    >
                        <input 
                            type="image" 
                            src={mediaPreview}
                            style={{ 
                                width: '100px', 
                                height: '100px',
                                cursor: 'move'
                            }}
                        />    
                    </div>
                </Draggable>
                {/* <div>
                    {color}
                </div>
                <div>
                    {backgroundColor}
                </div> */}
            </Container>
        </>
    );
}
