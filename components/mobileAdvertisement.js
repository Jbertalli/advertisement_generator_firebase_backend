import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Button, Form, Icon, Item, Card } from 'semantic-ui-react';
import FocusLock from 'react-focus-lock';
import styles from '../styles/advertisement.module.css';

export default function MobileAdvertisement () {
    const [company, setCompany] = useState('');
    // const [header, setHeader] = useState('');
    const [description, setDescription] = useState('');
    const [mediaPreview, setMediaPreview] = useState('');
    const [image, setImage] = useState({name: '', media: ''});
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(400);
    const [left, setLeft] = useState(40);
    const [top, setTop] = useState(20);

    function handleChange(event) {
        const { name, files } = event.target;
        if (name === 'media') {
            setImage(prevState => ({ ...prevState, media: files[0] }
            ));
            setMediaPreview(window.URL.createObjectURL(files[0]));
        }
        console.log(image);
        console.log(files[0].name);
        console.log(mediaPreview);
    }

    return (
        <>
            <Head>
                <title>Earn and Trade Advertisement Generator</title>
                <meta name="description" content="earnandtrade, advertisement" />
            </Head>
            <FocusLock>
                <div>
                    <center style={{ color: '#125CA1', fontSize: '52px', fontWeight: '700', padding: '.5em 0em 0em 0em', lineHeight: '50px' }}>
                        Advertisement Generator
                    </center>
                    <center style={{ fontSize: '18px', fontWeight: '400px', padding: '0em 0em 1em 0em' }}>
                        Create and Generate Dynamic Ads
                    </center>
                </div>  
                <Form>
                    <Form.Input
                        fluid
                        // icon="chart bar"
                        // size="large"
                        // iconPosition="left"
                        label="&nbsp;&nbsp;&nbsp;Company Name"
                        placeholder="company"
                        name="company"
                        value={company}
                        style={{ padding: '0em .5em 0em .5em' }}
                        onChange={e => setCompany(e.target.value)}
                    />
                    {/* <Form.Input
                        fluid
                        //icon="chart bar"
                        // size="large"
                        // iconPosition="left"
                        label="Advertisement Header"
                        placeholder="header"
                        name="header"
                        value={header}
                        onChange={e => setHeader(e.target.value)}
                    /> */}
                    <Form.Input
                        fluid
                        // icon="chart bar"
                        // size="large"
                        // iconPosition="left"
                        label="&nbsp;&nbsp;&nbsp;Advertisement Description"
                        placeholder="description"
                        name="description"
                        value={description}
                        style={{ padding: '0em .5em 0em .5em' }}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <div>
                        &nbsp;&nbsp;&nbsp;Upload Logo
                    </div>
                    <input
                        name="media"
                        type="file"
                        accept="image/*"
                        content="Select Image"
                        style={{ width: '40vw', transform: 'translate(2vw)' }}
                        className={styles.file}
                        onChange={handleChange}
                    />
                    { company.length > 0 || description.length > 0 || mediaPreview ? (<>
                        {/* <strong style={{ fontSize: '1em', display: 'flex', justifyContent: 'center' }}>Advertisement</strong> */}
                        <Card fluid stackable style={{ textAlign: 'left', fontSize: '1.2em', margin: '1em 1em 1em .6em', padding: '1em', width: '96vw' }}>
                            <div style={{ margin: '1em 0em 0em 0em' }}>Company Name: {JSON.stringify(company, null, 2)}</div>
                            {/* <div style={{ margin: '1em 0em 0em 0em' }}>{JSON.stringify(header, null, 2)}</div> */}
                            <div style={{ margin: '1em 0em 1em 0em' }}>Advertisement Description: {JSON.stringify(description, null, 2)}</div>
                            {/* <input type="image" src={mediaPreview}/> */}
                        </Card>
                    </>
                    ) : (
                    <>
                        <center>
                            <Card stackable itemsPerRow={1} style={{ marginTop: '2em', width: '90vw' }}>
                                <Card.Content
                                    content="Create Advertisement"
                                    style={{ 
                                        textAlign: 'center', 
                                        fontSize: '1.5em', 
                                        fontWeight: '50',
                                        color: 'gray', 
                                        padding: '4.5em 0em 4.5em 0em', 
                                        boxShadow: '2px 2px 10px black'
                                    }}
                                />
                            </Card>
                        </center>
                    </>)}
                    { !mediaPreview ? (<>
                        &nbsp;
                    </>
                    ) : (
                    <>  
                        <div style={{ marginLeft: '.6em' }}>
                            <Form.Input
                                label="Logo Width"
                                placeholder="width (pixels)"
                                type="number"
                                // value={width}
                                style={{ width: '96vw', marginLeft: '.2em' }}
                                onChange = {e => setWidth(e.target.value)}
                            />
                            <Form.Input
                                label="Logo Height"
                                placeholder="height (pixels)"
                                type="number"
                                // value={height}
                                style={{ width: '96vw', marginLeft: '.2em' }}
                                onChange = {e => setHeight(e.target.value)}
                            />
                            <Form.Input
                                label="Left Margin"
                                placeholder="left (pixels)"
                                type="number"
                                // value={left}
                                style={{ width: '96vw', marginLeft: '.2em' }}
                                onChange = {e => setLeft(e.target.value)}
                            />
                            <Form.Input
                                label="Top Margin"
                                placeholder="top (pixels)"
                                type="number"
                                // value={top}
                                style={{ width: '96vw', marginLeft: '.2em' }}
                                onChange = {e => setTop(e.target.value)}
                            />
                        </div>
                    </>)}
                </Form>
                { company.length === 0 || description.length === 0 || !mediaPreview ? (
                <>
                    &nbsp;
                </>
                ):(
                <>
                    <input
                        type="image" 
                        width={width}
                        height={height}
                        style={{ transform: `translate(${left}px, ${top}px) scale(.8)`, borderRadius: '5%', maxWidth: '30em', maxHeight: '30em' }}
                        src={mediaPreview}
                    />
                </>
                )}
                <Item style={{ fontSize: '1.3em', fontWeight: '900', padding: '1em 1em 1.5em 1em' }}>
                    <center>
                        <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                            {company} Video Advertisement
                        </h1>
                    </center>
                    <div style={{ fontSize: '.91em', lineHeight: '20px' }}>
                        <div style={{ margin: '1em 0em 1em 0em' }}>
                            <Icon
                                name="mouse pointer"
                            />
                            Click the button below to be transported to watch and take the comprehensive quiz for {company}.
                        </div>
                        <div style={{ margin: '1em 0em 1em 0em' }}>
                            <Icon
                                name="dollar"
                            />
                            Earn 20 points after successfully watching and completing the comprehension quiz for {company}.
                        </div>
                        <div style={{ margin: '1em 0em 1em 0em' }}>
                            <Icon
                                name="calendar"
                            />
                            {`Your account needs to settle, which can take more than 30 days (due to possible returns). In this time, Earn and Trade users are credited with "Pending Points".`}
                        </div>
                    </div>
                    <center>
                        <Button
                            content="Earn 20 points"
                            size="large"
                            rounded
                            style={{ color: 'white', background: '#125CA1', borderRadius: '15% 15% 15% 15% / 50% 50% 50% 50%', marginTop: '1em' }}
                            href="/"
                        /> 
                    </center>
                </Item>
                <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '3em' }}>
                    {description}
                </div>
            </FocusLock>
        </>
    );
}
