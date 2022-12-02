import Head from 'next/head';
import styles from '../styles/advertisement.module.css';
import React, { useState } from 'react';
import Header from '../components/Header';
import Draggable from 'react-draggable';
import LocalCustom from '../components/localStorageCustom';
import { Divider, Container, Segment, Icon, Form, Button } from 'semantic-ui-react';

export default function Custom() {
    const [company, setCompany] = useState<string>('');
    const [companyFontSize, setCompanyFontSize] = useState<string>('');
    const [companyFontWeight, setCompanyFontWeight] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [descriptionFontSize, setDescriptionFontSize] = useState<string>('');
    const [descriptionFontWeight, setDescriptionFontWeight] = useState<string>('');
    const [borderWidth, setBorderWidth] = useState<string>('');
    const [borderColor, setBorderColor] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [backgroundColor, setBackgroundColor] = useState<string>('');
    const [mediaPreview, setMediaPreview] = useState<string>('');
    const [image, setImage] = useState({name: '', media: ''});
    const [imageWidth, setImageWidth] = useState<string>('');
    const [imageHeight, setImageHeight] = useState<string>('');
    const [imageRotation, setImageRotation] = useState<string>('');
    const [editTitle, setEditTitle] = useState<boolean>(false);
    const [editDescription, setEditDescription] = useState<boolean>(false);
    const [editBorder, setEditBorder] = useState<boolean>(false);
    const [editGlobal, setEditGlobal] = useState<boolean>(false);
    const [editImage, setEditImage] = useState<boolean>(false);

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
            <LocalCustom company={company} setCompany={setCompany} companyFontSize={companyFontSize} setCompanyFontSize={setCompanyFontSize} companyFontWeight={companyFontWeight} setCompanyFontWeight={setCompanyFontWeight} description={description} setDescription={setDescription} descriptionFontSize={descriptionFontSize} setDescriptionFontSize={setDescriptionFontSize} descriptionFontWeight={descriptionFontWeight} setDescriptionFontWeight={setDescriptionFontWeight} borderWidth={borderWidth} setBorderWidth={setBorderWidth} borderColor={borderColor} setBorderColor={setBorderColor} color={color} setColor={setColor} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} mediaPreview={mediaPreview} setMediaPreview={setMediaPreview} image={image} setImage={setImage} imageWidth={imageWidth} setImageWidth={setImageWidth} imageHeight={imageHeight} setImageHeight={setImageHeight} imageRotation={imageRotation} setImageRotation={setImageRotation} editTitle={editTitle} setEditTitle={setEditTitle} editDescription={editDescription} setEditDescription={setEditDescription} editBorder={editBorder} setEditBorder={setEditBorder} editGlobal={editGlobal} setEditGlobal={setEditGlobal} editImage={editImage} setEditImage={setEditImage} />
            <Header />
            <Container 
                size="massive" 
                style={{ 
                    margin: '0.5em', 
                    boxShadow: '2px 2px 10px black'
                }}
            >
                <Segment attached textAlign="center">
                    <div 
                        style={{ 
                            color: '#125CA1', 
                            fontSize: '32px', 
                            fontWeight: '700', 
                            padding: '1em 0em .5em 0em', 
                            lineHeight: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        Custom Advertisement 
                    </div>
                    <div style={{ 
                            fontSize: '18px', 
                            fontWeight: '400px', 
                            padding: '0em 0em 1em 0em',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        Create a Custom Advertisement
                    </div>
                </Segment>
                <div
                    style={{
                        fontSize: '18px', 
                        fontWeight: '500',
                        color: '#125CA1',
                        cursor: 'pointer',
                    }}
                >
                    {editTitle ? (
                    <>
                        <div
                            style={{
                                marginTop: '15px',
                                marginBottom: '20px',
                                fontSize: '25px'
                            }}
                        >
                            <span
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                Edit Title
                            </span>
                            <div
                                style={{ 
                                    transform: 'translate(-20px, -20px)',
                                    color: 'red',
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                 }}
                                 onClick={() => setEditTitle(false)}
                            >
                                x
                            </div>
                        </div>
                        <div style={{ color: 'black', marginLeft: '8vw' }}>
                            <div style={{ marginBottom: '5px' }}>
                                Company Name
                            </div>
                            <div>
                                <Form.Input
                                    type='text'
                                    placeholder='company'
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    // className={styles.input}
                                    style={{ 
                                        width: '65%',
                                        marginBottom: '25px' 
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '5px' }}>
                                Company Font Size
                            </div>
                            <div>
                                <Form.Input
                                    type='text'
                                    placeholder='font size'
                                    value={companyFontSize}
                                    onChange={(e) => setCompanyFontSize(e.target.value)}
                                    style={{ 
                                        width: '50%', 
                                        marginBottom: '25px' 
                                    }}
                                    // className={styles.input}
                                />
                            </div>
                            <div style={{ marginBottom: '5px' }}>
                                Company Font Weight (Boldness)
                            </div>
                            <div>
                                <Form.Input
                                    min='100'
                                    max='900'
                                    step='100'
                                    type='number'
                                    placeholder='font weight'
                                    value={companyFontWeight}
                                    onChange={(e) => setCompanyFontWeight(e.target.value)}
                                    style={{ 
                                        width: '50%', 
                                        marginBottom: '15px' 
                                    }}
                                    // className={styles.input}
                                />
                            </div>
                        </div>
                    </>
                    ):(
                    <>
                        <div
                            onClick={() => {setEditTitle(true), setEditDescription(false), setEditBorder(false), setEditGlobal(false), setEditImage(false)}}
                        >
                            <div 
                                style={{ 
                                    marginLeft: '-25px',
                                    display: 'flex',
                                    transform: 'translateY(100%) scale(0.8)'
                                }}
                            >
                                <Icon
                                    name='chevron down'
                                />
                            </div>
                            <div
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                Edit Title
                            </div>
                        </div>
                    </>
                    )}
                </div>
                <Divider />
                <div
                    style={{
                        fontSize: '18px', 
                        fontWeight: '500',
                        color: '#125CA1',
                        cursor: 'pointer',
                    }}
                >
                    {editDescription ? (
                    <>
                        <div
                            style={{
                                marginTop: '15px',
                                marginBottom: '20px',
                                fontSize: '25px'
                            }}
                        >
                            <span
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                Edit Description
                            </span>
                            <div
                                style={{ 
                                    transform: 'translate(-20px, -20px)',
                                    color: 'red',
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                 }}
                                 onClick={() => setEditDescription(false)}
                            >
                                x
                            </div>
                        </div>
                        <div style={{  color: 'black', marginLeft: '8vw' }}>
                            <div style={{ marginBottom: '5px' }}>
                                Advertisement Description
                            </div>
                            <div>
                                <Form.Input
                                    type='text'
                                    placeholder='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    // className={styles.input}
                                    style={{ 
                                        width: '65%',
                                        marginBottom: '25px' 
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '5px' }}>
                                Description Font Size
                            </div>
                            <div>
                                <Form.Input
                                    type='text'
                                    placeholder='font size'
                                    value={descriptionFontSize}
                                    onChange={(e) => setDescriptionFontSize(e.target.value)}
                                    style={{ 
                                        width: '50%', 
                                        marginBottom: '25px' 
                                    }}
                                    // className={styles.input}
                                />
                            </div>
                            <div style={{ marginBottom: '5px' }}>
                                Description Font Weight (Boldness)
                            </div>
                            <div>
                                <Form.Input
                                    min='100'
                                    max='900'
                                    step='100'
                                    type='number'
                                    placeholder='font weight'
                                    value={descriptionFontWeight}
                                    onChange={(e) => setDescriptionFontWeight(e.target.value)}
                                    style={{ 
                                        width: '50%', 
                                        marginBottom: '15px' 
                                    }}
                                    // className={styles.input}
                                />
                            </div>
                        </div>
                    </>
                    ):(
                    <>
                        <div
                            style={{ transform: 'translateY(-8px)' }}
                            onClick={() => {setEditDescription(true), setEditTitle(false), setEditBorder(false), setEditGlobal(false), setEditImage(false)}}
                        >
                            <div 
                                style={{ 
                                    marginLeft: '-25px',
                                    display: 'flex',
                                    transform: 'translateY(100%) scale(0.8)'
                                }}
                            >
                                <Icon
                                    name='chevron down'
                                />
                            </div>
                            <div
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                Edit Description
                            </div>
                        </div>
                    </>
                    )}
                </div>
                <Divider />
                <div
                    style={{
                        fontSize: '18px', 
                        fontWeight: '500',
                        color: '#125CA1',
                        cursor: 'pointer',
                    }}
                >
                    {editBorder ? (
                    <>
                        <div
                            style={{
                                marginTop: '15px',
                                marginBottom: '20px',
                                fontSize: '25px'
                            }}
                        >
                            <span
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                Edit Border
                            </span>
                            <div
                                style={{ 
                                    transform: 'translate(-20px, -20px)',
                                    color: 'red',
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                 }}
                                 onClick={() => setEditBorder(false)}
                            >
                                x
                            </div>
                        </div>
                        <div style={{  color: 'black', marginLeft: '8vw' }}>
                            <div style={{ marginBottom: '5px' }}>
                                Border Width (pixels)
                            </div>
                            <div>
                                <Form.Input
                                    type='text'
                                    placeholder='width'
                                    value={borderWidth}
                                    onChange={(e) => setBorderWidth(e.target.value)}
                                    style={{ 
                                        width: '50%', 
                                        marginBottom: '25px' 
                                    }}
                                    // className={styles.input}
                                />
                            </div>
                            <div style={{ marginBottom: '5px' }}>
                                Border Color
                            </div>
                        </div>
                        <div style={{ marginLeft: '8vw' }}>
                            <input
                                type='color'
                                value={borderColor}
                                onChange={(e) => setBorderColor(e.target.value)}
                                style={{ 
                                    width: '100px', 
                                    height: '100px', 
                                    marginBottom: '15px' 
                                }}
                            />
                        </div>
                    </>
                    ):(
                    <>
                        <div
                            style={{ transform: 'translateY(-8px)' }}
                            onClick={() => {setEditBorder(true), setEditTitle(false), setEditDescription(false), setEditGlobal(false), setEditImage(false)}}
                        >
                            <div 
                                style={{ 
                                    marginLeft: '-25px',
                                    display: 'flex',
                                    transform: 'translateY(100%) scale(0.8)'
                                }}
                            >
                                <Icon
                                    name='chevron down'
                                />
                            </div>
                            <div
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                Edit Border
                            </div>
                        </div>
                    </>
                    )}
                </div>
                <Divider />
                <div
                    style={{
                        fontSize: '18px', 
                        fontWeight: '500',
                        color: '#125CA1',
                        cursor: 'pointer',
                    }}
                >
                    {editGlobal ? (
                    <>
                        <div
                            style={{
                                marginTop: '15px',
                                marginBottom: '20px',
                                fontSize: '25px'
                            }}
                        >
                            <span
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                Edit Global
                            </span>
                            <div
                                style={{ 
                                    transform: 'translate(-20px, -20px)',
                                    color: 'red',
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                 }}
                                 onClick={() => setEditGlobal(false)}
                            >
                                x
                            </div>
                        </div>
                        <div style={{  color: 'black', marginLeft: '8vw' }}>
                            <div style={{ marginBottom: '5px' }}>
                                Select Text Color
                            </div>
                            <div>
                                <input 
                                    type='color'
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    style={{ width: '100px', height: '100px', marginBottom: '25px' }}
                                />
                            </div>
                            <div style={{ marginBottom: '5px' }}>
                                Select Background Color
                            </div>
                            <div>
                                <input 
                                    type='color'
                                    value={backgroundColor}
                                    onChange={(e) => setBackgroundColor(e.target.value)}
                                    style={{ width: '100px', height: '100px', marginBottom: '15px' }}
                                />
                            </div>
                        </div>
                    </>
                    ):(
                    <>
                        <div
                            style={{ transform: 'translateY(-8px)' }}
                            onClick={() => {setEditGlobal(true), setEditTitle(false), setEditDescription(false), setEditBorder(false), setEditImage(false)}}
                        >
                            <div 
                                style={{ 
                                    marginLeft: '-25px',
                                    display: 'flex',
                                    transform: 'translateY(100%) scale(0.8)'
                                }}
                            >
                                <Icon
                                    name='chevron down'
                                />
                            </div>
                            <div
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                Edit Global
                            </div>
                        </div>
                    </>
                    )}
                </div>
                <Divider />
                <div
                    style={{
                        fontSize: '18px', 
                        fontWeight: '500',
                        color: '#125CA1',
                        cursor: 'pointer',
                    }}
                >
                    {editImage ? (
                    <>
                        <div
                            style={{
                                marginTop: '15px',
                                marginBottom: '20px',
                                fontSize: '25px'
                            }}
                        >
                            <span
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                Edit Image
                            </span>
                            <div
                                style={{ 
                                    transform: 'translate(-20px, -20px)',
                                    color: 'red',
                                    display: 'flex',
                                    justifyContent: 'flex-end'
                                 }}
                                 onClick={() => setEditImage(false)}
                            >
                                x
                            </div>
                        </div>
                        <div style={{  color: 'black', marginLeft: '8vw' }}>
                            <div>
                                <input
                                    name="media"
                                    type="file"
                                    accept="image/*"
                                    // content="Select Image"
                                    style={{ 
                                        width: '40vw', 
                                        transform: 'translateX(-.2vw)' ,
                                        marginBottom: '25px'
                                    }}
                                    className={styles.file}
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{ marginBottom: '5px' }}>
                                Image Width (pixels)
                            </div>
                            <div>
                                <Form.Input
                                    min='0'
                                    max='1000'
                                    step='10'
                                    type='number'
                                    placeholder='width'
                                    value={imageWidth}
                                    onChange={(e) => setImageWidth(e.target.value)}
                                    style={{ 
                                        width: '50%', 
                                        marginBottom: '25px',

                                    }}
                                    // className={styles.input}
                                />
                            </div>
                            <div style={{ marginBottom: '5px' }}>
                                Image Height (pixels)
                            </div>
                            <div>
                                <Form.Input
                                    min='0'
                                    max='1000'
                                    step='10'
                                    type='number'
                                    placeholder='height'
                                    value={imageHeight}
                                    onChange={(e) => setImageHeight(e.target.value)}
                                    style={{ 
                                        width: '50%', 
                                        marginBottom: '25px' 
                                    }}
                                    // className={styles.input}
                                />
                            </div>
                            <div style={{ marginBottom: '5px' }}>
                                Image Rotation (degrees)
                            </div>
                            <div>
                                <Form.Input
                                    min='0'
                                    max='360'
                                    step='5'
                                    type='number'
                                    placeholder='rotation'
                                    value={imageRotation}
                                    onChange={(e) => setImageRotation(e.target.value)}
                                    style={{ 
                                        width: '50%', 
                                        marginBottom: '15px' 
                                    }}
                                    // className={styles.input}
                                />
                            </div>
                        </div>
                    </>
                    ):(
                    <>
                        <div
                            style={{ transform: 'translateY(-8px)' }}
                            onClick={() => {setEditImage(true), setEditTitle(false), setEditDescription(false), setEditBorder(false), setEditGlobal(false)}}
                        >
                            <div 
                                style={{ 
                                    marginLeft: '-25px',
                                    display: 'flex',
                                    transform: 'translateY(100%) scale(0.8)'
                                }}
                            >
                                <Icon
                                    name='chevron down'
                                />
                            </div>
                            <div
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                Edit Image
                            </div>
                        </div>
                    </>
                    )}
                </div>
                <Divider />
            </Container>
            <Button 
                onClick={() => {
                    setCompany(''), 
                    setCompanyFontSize(''), 
                    setCompanyFontWeight(''), 
                    setDescription(''), 
                    setDescriptionFontSize(''), 
                    setDescriptionFontWeight(''), 
                    setBorderWidth('0'), 
                    setBorderColor(''), 
                    setColor(''), 
                    setBackgroundColor(''), 
                    setMediaPreview(''), 
                    setImageWidth('100'), 
                    setImageHeight('100'), 
                    setImageRotation('0'), 
                    setEditTitle(false), 
                    setEditDescription(false), 
                    setEditBorder(false), 
                    setEditGlobal(false), 
                    setEditImage(false)
                }}
                style={{ 
                    background: '#125CA1', 
                    color: 'white',
                    marginLeft: '3vw'
                }}
            >
               Clear
            </Button>
            <Divider />
            <Container 
                style={{ 
                    background: `${backgroundColor}`, 
                    color: `${color}`,
                    border: `${borderWidth}px solid ${borderColor}`,
                    fontWeight: '100',
                    height: '50vh',
                    width: '100vw', 
                    marginTop: '30px'
                }}>
                <Draggable>
                    <div 
                        style={{ 
                            fontSize: `${companyFontSize}px`, 
                            fontWeight: `${companyFontWeight}`, 
                            display: 'flex', 
                            justifyContent: 'center', 
                            cursor: 'grab', 
                            marginBottom: '30px',
                            marginTop: '30px',
                            lineHeight: '1em'
                        }}
                    >
                        {company}
                    </div>
                </Draggable>
                <Draggable>
                    <div 
                        style={{ 
                            fontSize: `${descriptionFontSize}px`, 
                            fontWeight: `${descriptionFontWeight}`, 
                            display: 'flex', 
                            justifyContent: 'center', 
                            cursor: 'grab', 
                            marginBottom: '30px',
                            lineHeight: '1em'
                        }}
                    >
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
                                width: `${imageWidth}px`, 
                                height: `${imageHeight}px`,
                                transform: `rotate(${imageRotation}deg)`,
                                cursor: 'grab'
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
