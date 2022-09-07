import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container, Segment, Button, Form, Icon, Grid, Item, Card } from 'semantic-ui-react';
import FocusLock from 'react-focus-lock';
import styles from '../styles/advertisement.module.css';

export default function Advertisement () {
    const [company, setCompany] = useState('');
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

    // useEffect(() => {
    //     document.body.style.overflow = "hidden";
    // return () => {
    //     document.body.style.overflow = "visible";
    //     }
    // }, []);

    // const handleInput = () => {
    //     console.log("advertisement", { company, header, description });
    // }

    //console.log(description.length);

    return (
        <>
            <Head>
                <title>Earn and Trade Advertisement Generator</title>
                <meta name="description" content="earnandtrade, advertisement" />
            </Head>
            <FocusLock>
                <Container as="h1" size="massive" style={{ margin: '2em', boxShadow: '2px 2px 10px black' }}>
                    <Segment attached textAlign="center">
                        <div style={{ color: '#125CA1', fontSize: '52px', fontWeight: '700', padding: '1em 0em .5em 0em' }}>
                            Advertisement Generator
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: '400px', padding: '0em 0em 1em 0em' }}>
                            Create and Generate Dynamic Ads
                        </div>
                    </Segment>
                    <Form>
                        <Segment size="huge" textAlign="left">
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Form.Input
                                            fluid
                                            // icon="chart bar"
                                            // size="large"
                                            // iconPosition="left"
                                            label="Company Name"
                                            placeholder="company"
                                            name="company"
                                            value={company}
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
                                            label="Advertisement Description"
                                            placeholder="description"
                                            name="description"
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                        <div>
                                            Upload Logo
                                        </div>
                                        <input
                                            name="media"
                                            type="file"
                                            accept="image/*"
                                            content="Select Image"
                                            style={{ width: '10vw', transform: 'translateX(-.2vw)' }}
                                            className={styles.file}
                                            onChange={handleChange}
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        { company.length > 0 || description.length > 0 || mediaPreview ? (<>
                                            {/* <strong style={{ fontSize: '1em', display: 'flex', justifyContent: 'center' }}>Advertisement</strong> */}
                                            <Card fluid stackable style={{ textAlign: 'left', fontSize: '1.2em', margin: '1em 0em 0em 0em', padding: '1em' }}>
                                                <div style={{ margin: '1em 0em 0em 0em' }}>Company Name: {JSON.stringify(company, null, 2)}</div>
                                                {/* <div style={{ margin: '1em 0em 0em 0em' }}>{JSON.stringify(header, null, 2)}</div> */}
                                                <div style={{ margin: '1em 0em 1em 0em' }}>Advertisement Description: {JSON.stringify(description, null, 2)}</div>
                                                {/* <input type="image" src={mediaPreview}/> */}
                                            </Card>
                                        </>
                                        ) : (
                                        <>
                                            <Card fluid stackable itemsPerRow={1} style={{ margin: '.5em 0em 0em 0em' }}>
                                                <Card.Content
                                                    content="Create Advertisement"
                                                    style={{ 
                                                        textAlign: 'center', 
                                                        fontSize: '1.5em', 
                                                        fontWeight: '50', 
                                                        margin: '0em 0em 0em 0em', 
                                                        color: 'gray', 
                                                        padding: '4.5em 0em 4.5em 0em', 
                                                        boxShadow: '2px 2px 10px black' 
                                                    }}
                                                />
                                            </Card>
                                        </>)}
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    { !mediaPreview ? (<>
                                        &nbsp;
                                    </>
                                    ) : (
                                    <>  
                                        <Segment style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '20px' }}>
                                            <Form.Input
                                                label="Logo Width"
                                                placeholder="width (pixels)"
                                                type="number"
                                                style={{ width: '200px' }}
                                                // value={width}
                                                onChange = {e => setWidth(e.target.value)}
                                            />
                                            <Form.Input
                                                label="Logo Height"
                                                placeholder="height (pixels)"
                                                type="number"
                                                style={{ width: '200px' }}
                                                // value={height}
                                                onChange = {e => setHeight(e.target.value)}
                                            />
                                            <Form.Input
                                                label="Left Margin"
                                                placeholder="left (pixels)"
                                                type="number"
                                                style={{ width: '200px' }}
                                                // value={left}
                                                onChange = {e => setLeft(e.target.value)}
                                            />
                                            <Form.Input
                                                label="Top Margin"
                                                placeholder="top (pixels)"
                                                type="number"
                                                style={{ width: '200px' }}
                                                // value={top}
                                                onChange = {e => setTop(e.target.value)}
                                            />
                                        </Segment>
                                    </>)}
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Form>
                    <Segment attached>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={7}>
                                    <input 
                                        type="image" 
                                        width={width}
                                        height={height}
                                        style={{ transform: `translate(${left}px, ${top}px) scale(.8)`, borderRadius: '5%', maxWidth: '30em', maxHeight: '30em' }}
                                        src={mediaPreview}
                                    />
                                </Grid.Column>
                                <Grid.Column width={9}>
                                    <Item style={{ fontSize: '1.5em', fontWeight: '900', padding: '1em 1em 1.5em 1em' }}>
                                        <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                                            {company} Video Advertisement
                                        </h1>
                                        <div style={{ fontSize: '.91em', lineHeight: '30px' }}>
                                            <div style={{ margin: '2em 0em 1em 0em' }}>
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
                                        <Button
                                            content="Earn 20 points"
                                            size="large"
                                            rounded
                                            style={{ color: 'white', background: '#125CA1', borderRadius: '15% 15% 15% 15% / 50% 50% 50% 50%', transform: 'translateX(138%)', marginTop: '1em' }}
                                            href="/"
                                        />
                                    </Item>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {description}
                        </div>
                    </Segment>
                </Container>
            </FocusLock>
        </>
    );
}
