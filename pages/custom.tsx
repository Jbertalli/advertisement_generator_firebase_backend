import Head from 'next/head';
import styles from '../styles/advertisement.module.css';
import React, { useEffect, useState } from 'react';
import { Divider, Container, Segment } from 'semantic-ui-react';
import Draggable from 'react-draggable';

const LOCAL_STORAGE_KEY_COMPANY = 'Company';
const LOCAL_STORAGE_KEY_COMPANY_FONT = 'Company_Font';
const LOCAL_STORAGE_KEY_COMPANY_WEIGHT = 'Company_Weight';
const LOCAL_STORAGE_KEY_DESCRIPTION = 'Description';
const LOCAL_STORAGE_KEY_DESCRIPTION_FONT = 'Description_Font';
const LOCAL_STORAGE_KEY_DESCRIPTION_WEIGHT = 'Description_Weight';
const LOCAL_STORAGE_KEY_BORDER_WIDTH = 'Border_Width';
const LOCAL_STORAGE_KEY_BORDER_COLOR = 'Border_Color';
const LOCAL_STORAGE_KEY_COLOR = 'Color';
const LOCAL_STORAGE_KEY_BACKGROUND = 'Background';
const LOCAL_STORAGE_KEY_CUSTOM_IMAGE = 'Custom_Image';
const LOCAL_STORAGE_KEY_IMAGE_WIDTH = 'Image_Width';
const LOCAL_STORAGE_KEY_IMAGE_HEIGHT = 'Image_Height';
const LOCAL_STORAGE_KEY_IMAGE_ROTATION = 'Image_Rotation';

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
    const [imageHeight, setImageHeight] = useState<string>('100');
    const [imageRotation, setImageRotation] = useState<string>('0');

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

    useEffect(() => {
        const storedCompany = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_COMPANY))
        if (storedCompany) setCompany(storedCompany)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_COMPANY, 
        JSON.stringify(company))
    }, [company]);

    useEffect(() => {
        const storedCompanyFontSize = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_COMPANY_FONT))
        if (storedCompanyFontSize) setCompanyFontSize(storedCompanyFontSize)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_COMPANY_FONT, 
        JSON.stringify(companyFontSize))
    }, [companyFontSize]);

    useEffect(() => {
        const storedCompanyFontWeight = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_COMPANY_WEIGHT))
        if (storedCompanyFontWeight) setCompanyFontWeight(storedCompanyFontWeight)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_COMPANY_WEIGHT, 
        JSON.stringify(companyFontWeight))
    }, [companyFontWeight]);

    useEffect(() => {
        const storedDescription = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION))
        if (storedDescription) setDescription(storedDescription)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_DESCRIPTION, 
        JSON.stringify(description))
    }, [description]);

    useEffect(() => {
        const storedDescriptionFontSize = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION_FONT))
        if (storedDescriptionFontSize) setDescriptionFontSize(storedDescriptionFontSize)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_DESCRIPTION_FONT, 
        JSON.stringify(descriptionFontSize))
    }, [descriptionFontSize]);

    useEffect(() => {
        const storedDescriptionFontWeight = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION_WEIGHT))
        if (storedDescriptionFontWeight) setDescriptionFontWeight(storedDescriptionFontWeight)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_DESCRIPTION_WEIGHT, 
        JSON.stringify(descriptionFontWeight))
    }, [descriptionFontWeight]);

    useEffect(() => {
        const storedBorderWidth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_BORDER_WIDTH))
        if (storedBorderWidth) setBorderWidth(storedBorderWidth)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_BORDER_WIDTH, 
        JSON.stringify(borderWidth))
    }, [borderWidth]);

    useEffect(() => {
        const storedBorderColor = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_BORDER_COLOR))
        if (storedBorderColor) setBorderColor(storedBorderColor)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_BORDER_COLOR, 
        JSON.stringify(borderColor))
    }, [borderColor]);

    useEffect(() => {
        const storedColor = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR))
        if (storedColor) setColor(storedColor)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_COLOR, 
        JSON.stringify(color))
    }, [color]);

    useEffect(() => {
        const storedBackgroundColor = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_BACKGROUND))
        if (storedBackgroundColor) setBackgroundColor(storedBackgroundColor)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_BACKGROUND, 
        JSON.stringify(backgroundColor))
    }, [backgroundColor]);

    useEffect(() => {
        const storedImage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CUSTOM_IMAGE))
        if (storedImage) setMediaPreview(storedImage)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_CUSTOM_IMAGE, 
        JSON.stringify(mediaPreview))
    }, [mediaPreview]);

    useEffect(() => {
        const storedImageWidth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_IMAGE_WIDTH))
        if (storedImageWidth) setImageWidth(storedImageWidth)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_IMAGE_WIDTH, 
        JSON.stringify(imageWidth))
    }, [imageWidth]);

    return (
        <>
            <Head>
                <title>Custom Advertisement Generator</title>
                <meta name="description" content="earnandtrade, advertisement" />
            </Head>
            <Container 
                size="massive" 
                style={{ 
                    margin: '2em', 
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
                <div style={{ margin: '20px' }}>
                    <div>
                        Company Name
                    </div>
                    <div>
                        <input
                            type='text'
                            placeholder='company'
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div>
                        Company Font Size
                    </div>
                    <div>
                        <input
                            type='text'
                            value={companyFontSize}
                            onChange={(e) => setCompanyFontSize(e.target.value)}
                            style={{ width: '80px' }}
                            className={styles.input}
                        />
                    </div>
                    <div>
                        Company Font Weight (Boldness)
                    </div>
                    <div>
                        <input
                            min='100'
                            max='900'
                            step='100'
                            type='number'
                            value={companyFontWeight}
                            onChange={(e) => setCompanyFontWeight(e.target.value)}
                            style={{ width: '80px' }}
                            className={styles.input}
                        />
                    </div>
                    <div>
                        Advertisement Description
                    </div>
                    <div>
                        <input
                            type='text'
                            placeholder='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div>
                        Description Font Size
                    </div>
                    <div>
                        <input
                            type='text'
                            value={descriptionFontSize}
                            onChange={(e) => setDescriptionFontSize(e.target.value)}
                            style={{ width: '80px' }}
                            className={styles.input}
                        />
                    </div>
                    <div>
                        Description Font Weight (Boldness)
                    </div>
                    <div>
                        <input
                            min='100'
                            max='900'
                            step='100'
                            type='number'
                            value={descriptionFontWeight}
                            onChange={(e) => setDescriptionFontWeight(e.target.value)}
                            style={{ width: '80px' }}
                            className={styles.input}
                        />
                    </div>
                    <div>
                        Border Width
                    </div>
                    <div>
                        <input
                            type='text'
                            value={borderWidth}
                            onChange={(e) => setBorderWidth(e.target.value)}
                            style={{ width: '80px' }}
                            className={styles.input}
                        />
                    </div>
                    <div>
                        Border Color
                    </div>
                    <div>
                        <input
                            type='color'
                            value={borderColor}
                            onChange={(e) => setBorderColor(e.target.value)}
                            style={{ width: '100px', height: '100px' }}
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
                    <div>
                        Image Width (pixels)
                    </div>
                    <div>
                        <input
                            min='0'
                            max='1000'
                            step='10'
                            type='number'
                            value={imageWidth}
                            onChange={(e) => setImageWidth(e.target.value)}
                            style={{ width: '80px' }}
                            className={styles.input}
                        />
                    </div>
                    <div>
                        Image Height (pixels)
                    </div>
                    <div>
                        <input
                            min='0'
                            max='1000'
                            step='10'
                            type='number'
                            value={imageHeight}
                            onChange={(e) => setImageHeight(e.target.value)}
                            style={{ width: '80px' }}
                            className={styles.input}
                        />
                    </div>
                    <div>
                        Image Rotation (degrees)
                    </div>
                    <div>
                        <input
                            min='0'
                            max='360'
                            step='5'
                            type='number'
                            value={imageRotation}
                            onChange={(e) => setImageRotation(e.target.value)}
                            style={{ width: '80px', marginBottom: '30px' }}
                            className={styles.input}
                        />
                    </div>
                </div>
            </Container>
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
                    <div style={{ 
                            fontSize: `${companyFontSize}px`, 
                            fontWeight: `${companyFontWeight}`, 
                            display: 'flex', 
                            justifyContent: 'center', 
                            cursor: 'move', 
                            marginBottom: '30px',
                            marginTop: '30px' 
                        }}
                    >
                        {company}
                    </div>
                </Draggable>
                <Draggable>
                    <div style={{ 
                            fontSize: `${descriptionFontSize}px`, 
                            fontWeight: `${descriptionFontWeight}`, 
                            display: 'flex', 
                            justifyContent: 'center', 
                            cursor: 'move', 
                            marginBottom: '30px' 
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
