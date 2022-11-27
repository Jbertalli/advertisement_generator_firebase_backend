import Head from 'next/head';
import styles from '../styles/advertisement.module.css';
import React, { useState } from 'react';
import { Divider, Container, Segment, Icon } from 'semantic-ui-react';
import Draggable from 'react-draggable';
import LocalCustom from '../components/localStorageCustom';

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
            <LocalCustom company={company} setCompany={setCompany} companyFontSize={companyFontSize} setCompanyFontSize={setCompanyFontSize} companyFontWeight={companyFontWeight} setCompanyFontWeight={setCompanyFontWeight} description={description} setDescription={setDescription} descriptionFontSize={descriptionFontSize} setDescriptionFontSize={setDescriptionFontSize} descriptionFontWeight={descriptionFontWeight} setDescriptionFontWeight={setDescriptionFontWeight} borderWidth={borderWidth} setBorderWidth={setBorderWidth} borderColor={borderColor} setBorderColor={setBorderColor} color={color} setColor={setColor} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} mediaPreview={mediaPreview} setMediaPreview={setMediaPreview} image={image} setImage={setImage} imageWidth={imageWidth} setImageWidth={setImageWidth} imageHeight={imageHeight} setImageHeight={setImageHeight} imageRotation={imageRotation} setImageRotation={setImageRotation} />
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
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '15px',
                                marginBottom: '20px',
                                fontSize: '25px'
                            }}
                        >
                            <span>
                                Edit Title
                            </span>
                            <div
                                style={{ 
                                    transform: 'translate(32vw, -4px)',
                                    color: 'red'
                                 }}
                                 onClick={() => setEditTitle(false)}
                            >
                                x
                            </div>
                        </div>
                        <div style={{  color: 'black' }}>
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
                        </div>
                    </>
                    ):(
                    <>
                        <div
                            onClick={() => setEditTitle(true)}
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
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '15px',
                                marginBottom: '20px',
                                fontSize: '25px'
                            }}
                        >
                            <span>
                                Edit Description
                            </span>
                            <div
                                style={{ 
                                    transform: 'translate(24vw, -4px)',
                                    color: 'red'
                                 }}
                                 onClick={() => setEditDescription(false)}
                            >
                                x
                            </div>
                        </div>
                        <div style={{  color: 'black' }}>
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
                        </div>
                    </>
                    ):(
                    <>
                        <div
                            style={{ transform: 'translateY(-8px)' }}
                            onClick={() => setEditDescription(true)}
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
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '15px',
                                marginBottom: '20px',
                                fontSize: '25px'
                            }}
                        >
                            <span>
                                Edit Border
                            </span>
                            <div
                                style={{ 
                                    transform: 'translate(29.2vw, -4px)',
                                    color: 'red'
                                 }}
                                 onClick={() => setEditBorder(false)}
                            >
                                x
                            </div>
                        </div>
                        <div style={{  color: 'black' }}>
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
                        </div>
                        <div>
                            <input
                                type='color'
                                value={borderColor}
                                onChange={(e) => setBorderColor(e.target.value)}
                                style={{ width: '100px', height: '100px' }}
                            />
                        </div>
                    </>
                    ):(
                    <>
                        <div
                            style={{ transform: 'translateY(-8px)' }}
                            onClick={() => setEditBorder(true)}
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
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '15px',
                                marginBottom: '20px',
                                fontSize: '25px'
                            }}
                        >
                            <span>
                                Edit Global
                            </span>
                            <div
                                style={{ 
                                    transform: 'translate(29.5vw, -4px)',
                                    color: 'red'
                                 }}
                                 onClick={() => setEditGlobal(false)}
                            >
                                x
                            </div>
                        </div>
                        <div style={{  color: 'black' }}>
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
                        </div>
                    </>
                    ):(
                    <>
                        <div
                            style={{ transform: 'translateY(-8px)' }}
                            onClick={() => setEditGlobal(true)}
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
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    Edit Image
                </div>
                <Divider />
                <div style={{ margin: '20px' }}>
                    {/* <div>
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
                    </div> */}
                    {/* <div>
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
                    </div> */}
                    {/* <div>
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
                    </div> */}
                    {/* <div>
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
                    </div> */}
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
