import Image from 'next/image';
import { Segment, Button, Icon, Grid, Item, Form, Card, Divider } from 'semantic-ui-react';
import { doc, getDoc, setDoc, Timestamp, updateDoc, deleteField, getFirestore } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject } from 'firebase/storage';
import { storage } from '../firebase/clientApp';
import { incrementCompany } from '../slices/companySlice';
import { incrementDescription } from '../slices/descriptionSlice';
import { incrementWidth } from '../slices/widthSlice';
import { incrementHeight } from '../slices/heightSlice';
import { incrementLeft } from '../slices/leftSlice';
import { incrementTop } from '../slices/topSlice';
import { useDispatch } from 'react-redux';

const db = getFirestore();

export default function AdCard(values) {

    const dispatch = useDispatch();

    const {
        currentUser,
        setSaveImage,
        saveImage,
        setUrl,
        setMediaPreview,
        setFull,
        resize,
        company,
        setCompany,
        mediaPreview,
        description,
        setDescription, 
        setWidth, 
        setHeight, 
        setLeft, 
        setTop,
        selected,
        setSelected, 
        setClicked, 
        setSaved,
        saved,
        url,
        width,
        full,
        height,
        left,
        top,
        setShowCompany,
        setShowDescription,
        setShowWidth,
        setShowHeight,
        setShowLeft,
        setShowTop,
        clicked
    } = values;

    const addAdvertisement = async (
        company: string,
        description: string,
        width: number,
        height: number,
        left: number,
        top: number
    ) => {
        await setDoc(doc(db, '/users/' + currentUser + 'Ads'), {
            company,
            description,
            width,
            height,
            left,
            top,
            created: Timestamp.now(),
        });
    };

    async function getData() {
        const docRef = doc(db, '/users/' + currentUser + 'Ads');
        const docSnap = await getDoc(docRef);
    
        if(docSnap.exists()) {
          setShowCompany(docSnap.data().company);
          setShowDescription(docSnap.data().description);
          setShowWidth(docSnap.data().width);
          setShowHeight(docSnap.data().height);
          setShowLeft(docSnap.data().left);
          setShowTop(docSnap.data().top);
        } else {
          console.log('No document data');
        }
    }

    async function deleteAll() {
        const docRef = doc(db, '/users/' + currentUser + 'Ads');
        await updateDoc(docRef, {
          company: deleteField(),
          description: deleteField(),
          height: deleteField(),
          width: deleteField(),
          top: deleteField(),
          left: deleteField()
        });
    }
    
    const handleImageChange = (e) => {
        if(e.target.files[0]) {
          setSaveImage(e.target.files[0])
        }
    }
    
    const handleSubmit = () => {
        const imageRef = ref(storage, `image/${currentUser}/advertisement`);
        uploadBytes(imageRef, saveImage).then(() => {
          getDownloadURL(imageRef).then((url) => {
            setUrl(url);
          }).catch((error) => {
            console.log(error.message, 'error getting the image url');
          })
        }).catch((error) => {
          console.log(error.message);
        });
    }
    
    const deleteStoredImage = () => {
        const storage = getStorage();
        const imageRef = ref(storage, `image/${currentUser}/advertisement`);
        deleteObject(imageRef).then(() => {
          console.log('successfully deleted image');
        }).catch((error) => {
          console.log('unable to delete image');
        })
    }

    // convert image to base-64
    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64: any = await convertBase64(file);
        setMediaPreview(base64);
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        if (file ) {
            fileReader.readAsDataURL(file);
        }

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        }
        })
    }

    const imageRef = ref(storage, `image/${currentUser}/advertisement`);

    function getImg() {
        getDownloadURL(imageRef).then(onResolve, onReject);
    }

    function onResolve(foundURL) {
        console.log('full');
        setFull(true);
    }

    function onReject(error) {
        console.log(error.code);
    }

    return (
        <>
            <Form>
                <Segment size='huge' textAlign='left'>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width={resize ? 8 : 16}>
                        <Form.Input
                          fluid
                          label='Company Name'
                          placeholder='company'
                          name='company'
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                        <div
                          style={{ 
                            lineHeight: '23px', 
                            marginBottom: '13px'
                          }}
                        >
                          Advertisement Description
                        </div>
                        <Form.Input
                          fluid
                          placeholder='description'
                          name='description'
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        <div>Upload Logo</div>
                        <div
                          style={{
                            display: 'flex'
                          }}
                        >
                          {currentUser === undefined ? (
                          <>
                            <div>
                              <input
                                name="media"
                                type="file"
                                id='actual-btn'
                                hidden
                                accept="image/*"
                                onChange={(e) => {uploadImage(e)}}
                              />
                              <label
                                htmlFor="actual-btn" 
                                style={{ 
                                  background: '#125CA1',
                                  color: '#FFF',
                                  cursor: 'pointer',
                                  padding: '0.2em 1.5em',
                                  display: 'inline-block',
                                  fontWeight: '700',
                                  fontSize: '14px',
                                  borderRadius: '6px',
                                  position: 'relative',
                                  zIndex: '1',
                                  marginRight: '20px'
                                }}
                              >
                                Choose File
                              </label>
                            </div>
                            {mediaPreview.length > 0 || company.length > 0 || description.length > 0 ? (
                            <>
                              <Button
                                onClick={() => {
                                  setMediaPreview(''), 
                                  setCompany(''), 
                                  setDescription(''), 
                                  setWidth(350), 
                                  setHeight(350), 
                                  setLeft(20), 
                                  setTop(20)
                                }}
                                style={{
                                  background: 'transparent',
                                  color: 'red',
                                  cursor: 'pointer',
                                  padding: '0.2em 1.5em',
                                  display: 'inline-block',
                                  fontWeight: '700',
                                  fontSize: '14px',
                                  borderRadius: '6px',
                                  border: '2px solid red',
                                  position: 'relative',
                                  zIndex: '1'
                                }}
                              >
                                Delete
                              </Button>
                            </>
                            ): null}
                          </>
                          ):(
                          <>
                            <input
                              name='media'
                              type='file'
                              id='actual-btn'
                              hidden
                              accept='image/*'
                              style={{ 
                                width: '150px', 
                                transform: 'translateX(-.2vw)'
                              }}
                              onChange={handleImageChange}
                              onClick={() => {
                                setSelected(true), 
                                setClicked(true), 
                                setSaved(saved + 1),
                                setFull(false)
                              }}
                            />
                            <label 
                              htmlFor="actual-btn" 
                              style={{ 
                                background: '#125CA1',
                                color: '#FFF',
                                cursor: 'pointer',
                                padding: '0.2em 1.5em',
                                display: 'inline-block',
                                fontWeight: '700',
                                fontSize: '14px',
                                borderRadius: '6px',
                                position: 'relative',
                                zIndex: '1'
                              }}
                              onClick={() => {
                                deleteAll(), 
                                setUrl(null)
                              }}
                            >
                              Choose File
                            </label>
                          </>
                          )}
                        </div>
                        {(selected && saved > 0) || mediaPreview.length > 0 || url !== null || full ? (
                        <>
                          {resize ? (
                          <>
                            <Grid.Row>
                              <div
                                style={{
                                  display: 'flex',
                                  width: '200%',
                                  fontSize: '15px'
                                }}
                              >
                                <div>
                                  Logo Width
                                  <Form.Input
                                    placeholder='width (pixels)'
                                    type='text'
                                    min="0"
                                    max="400"
                                    maxLength="3"
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value)}
                                    style={{ 
                                      width: '18vw', 
                                      marginRight: '20px', 
                                      maxWidth: '145px', 
                                      minWidth: '90px'  
                                    }}
                                  />
                                </div>
                                <div>
                                  Logo Height
                                  <Form.Input
                                    placeholder='height (pixels)'
                                    type='text'
                                    min="0"
                                    max="500"
                                    maxLength="3"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    style={{ 
                                      width: '18vw', 
                                      marginRight: '20px', 
                                      maxWidth: '145px', 
                                      minWidth: '90px'  
                                    }}
                                  />
                                </div>
                                <div>
                                  Left Margin
                                  <Form.Input
                                    placeholder='left (pixels)'
                                    type='text'
                                    min="-300"
                                    max="300"
                                    maxLength="3"
                                    value={left}
                                    onChange={(e) => setLeft(e.target.value)}
                                    style={{ 
                                      width: '18vw', 
                                      marginRight: '20px', 
                                      maxWidth: '145px', 
                                      minWidth: '90px'  
                                    }}
                                  />
                                </div>
                                <div>
                                  Top Margin
                                  <Form.Input
                                    placeholder='top (pixels)'
                                    type='text'
                                    min="-300"
                                    max="300"
                                    maxLength="3"
                                    value={top}
                                    onChange={(e) => setTop(e.target.value)}
                                    style={{ 
                                      width: '18vw', 
                                      marginRight: '20px', 
                                      maxWidth: '145px', 
                                      minWidth: '90px'  
                                    }}
                                  />
                                </div>
                              </div>
                            </Grid.Row>
                          </>
                          ):(
                          <>
                            <Grid 
                              columns='equal'
                              style={{
                                marginTop: '0px',
                                fontSize: '15px'
                              }}
                            >
                              <Grid.Row>
                                <Grid.Column>
                                  <div
                                    style={{
                                      marginBottom: '-2px'
                                    }}
                                  >
                                    Logo Width
                                  </div>
                                  <Form.Input
                                    placeholder='width (pixels)'
                                    type='text'
                                    min="0"
                                    max="400"
                                    maxLength='3'
                                    style={{ width: resize ? '20vw' : '35vw' }}
                                    value={width}
                                    onChange={(e) => setWidth(e.target.value)}
                                  />
                                </Grid.Column>
                                <Grid.Column>
                                  <div
                                    style={{
                                      marginBottom: '-2px'
                                    }}
                                  >
                                    Logo Height
                                  </div>
                                  <Form.Input
                                    placeholder='height (pixels)'
                                    type='text'
                                    min="0"
                                    max="500"
                                    maxLength='3'
                                    style={{ width: resize ? '20vw' : '35vw' }}
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                  />
                                </Grid.Column>
                              </Grid.Row>
                              <Grid.Row
                                style={{
                                  marginTop: '-20px'
                                }}
                              >
                                <Grid.Column>
                                  <div
                                    style={{
                                      marginBottom: '-2px'
                                    }}
                                  >
                                    Left Margin
                                  </div>
                                  <Form.Input
                                    placeholder='left (pixels)'
                                    type='text'
                                    min="-300"
                                    max="300"
                                    maxLength='3'
                                    style={{ width: resize ? '20vw' : '35vw' }}
                                    value={left}
                                    onChange={(e) => setLeft(e.target.value)}
                                  />
                                </Grid.Column>
                                <Grid.Column>
                                  <div
                                    style={{
                                      marginBottom: '-2px'
                                    }}
                                  >
                                    Top Margin
                                  </div>
                                  <Form.Input
                                    placeholder='top (pixels)'
                                    type='text'
                                    min="-300"
                                    max="300"
                                    maxLength='3'
                                    style={{ width: resize ? '20vw' : '35vw' }}
                                    value={top}
                                    onChange={(e) => setTop(e.target.value)}
                                  />
                                </Grid.Column>
                              </Grid.Row>
                            </Grid>
                          </>
                          )}
                        </>
                        ): null}
                        {currentUser === undefined ? null : (
                        <>
                          <div
                            style={{
                              display: 'flex',
                              marginTop: '20px'
                            }}
                          >
                            {full ? (
                            <>
                              <div>
                                <Button
                                  disabled={!company && !description && !full && !selected && saved == 0}
                                  onClick={() => {
                                    addAdvertisement(
                                      company,
                                      description,
                                      width,
                                      height,
                                      left,
                                      top
                                    ),
                                      dispatch(incrementCompany(String(company))),
                                      dispatch(incrementDescription(String(description))),
                                      dispatch(incrementWidth(String(width))),
                                      dispatch(incrementHeight(String(height))),
                                      dispatch(incrementLeft(String(left))),
                                      dispatch(incrementTop(String(top))),
                                      getData(),
                                      setFull(true)
                                  }}
                                  style={{
                                    border: '2px solid #125CA1',
                                    background: 'transparent', 
                                    color: '#125CA1',
                                    padding: '10px 10px 10px 10px',
                                    marginBottom: resize ? '-60px' : '15px'
                                  }}
                                >
                                  Update
                                </Button>
                              </div>
                            </>
                            ):(
                            <>
                              <div>
                                <Button
                                  disabled={!company && !description && !full && !selected && saved == 0}
                                  onClick={() => {
                                    addAdvertisement(
                                      company,
                                      description,
                                      width,
                                      height,
                                      left,
                                      top
                                    ),
                                      dispatch(incrementCompany(String(company))),
                                      dispatch(incrementDescription(String(description))),
                                      dispatch(incrementWidth(String(width))),
                                      dispatch(incrementHeight(String(height))),
                                      dispatch(incrementLeft(String(left))),
                                      dispatch(incrementTop(String(top))),
                                      handleSubmit(),
                                      getData(),
                                      getImg(),
                                      setFull(true)
                                  }}
                                  style={{
                                    border: '2px solid #125CA1',
                                    background: 'transparent', 
                                    color: '#125CA1',
                                    padding: '10px 10px 10px 10px',
                                    marginBottom: resize ? '-60px' : '15px'
                                  }}
                                >
                                  Save to Database
                                </Button>
                              </div>
                            </>
                            )}
                            <div
                              style={{
                                transform: 'translate(15.1px)'
                              }}
                            >
                              <Button
                                disabled={!company && !description && !full && !selected && saved == 0}
                                onClick={() => {
                                  deleteAll(), 
                                  setUrl(null), 
                                  setSelected(false), 
                                  getData(), 
                                  setDescription(''), 
                                  setCompany(''), 
                                  setWidth(350), 
                                  setHeight(350), 
                                  setLeft(20), 
                                  setTop(20),
                                  deleteStoredImage(),
                                  setSaved(0),
                                  setFull(false)
                                }}
                                style={{
                                  border: '2px solid red',
                                  background: 'transparent',
                                  color: 'red',
                                  padding: '10px 10px 10px 10px'
                                }}
                              >
                                Delete Advertisement
                              </Button>
                            </div>
                          </div>
                        </>
                        )}
                      </Grid.Column>
                      <Grid.Column 
                        width={resize ? 8 : 16} 
                        style={{ 
                            height: '75%', 
                            marginBottom: mediaPreview.length > 0 ? null : '60px' 
                        }}
                      >
                        {company.length > 0 ||
                        description.length > 0 ||
                        url !== null ||
                        selected ||
                        saved > 0 ||
                        mediaPreview.length > 0 ||
                        full ? (
                          <>
                            {currentUser === undefined && !resize ? (
                            <>
                              <div
                                style={{
                                  marginTop: '30px'
                                }}
                              >
                                <Divider />
                              </div>
                            </>
                            ): null}
                            <div
                              style={{
                                marginBottom: '45px',
                                display: resize ? null : 'flex',
                                justifyContent: resize ? null : 'center'
                              }}
                            >
                              Live Advertisement
                            </div>
                            <Card
                              fluid
                              style={{
                                transform: resize ? null : 'scale(0.7)',
                                marginBottom: resize ? null : (height < 300 ? '-120px' : '-170px'),
                                top: resize ? '-40px' : '-15%',
                                marginTop: ((resize && currentUser === undefined) && (company.length > 0 || description.length > 0)) ? '45px' : null
                              }}
                            >
                              <div>
                                <Grid>
                                  <Grid.Row>
                                    <Grid.Column
                                      style={{
                                        width: resize ? '44%' : '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        position: 'relative'
                                      }}
                                    >
                                      {currentUser === undefined ? (
                                      <>
                                        <div
                                          style={{
                                            transform: resize ? `translate(${(left/2.8)+10}px, ${(top/4.8)+10}px)` : `translate(${(left/1.3)-15}px, ${(top/1.3)-5}px)`,
                                          }}
                                        >
                                          <Image
                                            src={mediaPreview.length > 0 ? mediaPreview : '/images/blank.png'}
                                            width={mediaPreview.length > 0 ? (resize ? `${width/2.8}` : `${width/1.5}`) : 1}
                                            height={mediaPreview.length > 0 ? (resize ? `${height/2.8}` : `${height/1.5}`) : 1}
                                            alt='image'
                                          />
                                        </div>
                                      </>
                                      ):(
                                      <>
                                        <input
                                          type='image'
                                          alt='image'
                                          style={{
                                            transform: resize ? `translate(${(left/2.8)}px, ${(top/2.8)+15}px)` : `translate(${(left/1.3)-15}px, ${(top/1.3)-5}px)`,
                                            width: resize ? `${width/2.8}px` : `${width/1.5}px`,
                                            height: resize ? `${height/2.8}px` : `${height/1.5}px`,
                                            borderRadius: '5%',
                                            maxWidth: '18em',
                                            maxHeight: '18em'
                                          }}
                                          src={clicked ? url : `https://firebasestorage.googleapis.com/v0/b/advertisement-generator-1fa98.appspot.com/o/image%2F${currentUser}%2Fadvertisement?alt=media&token=fa287dea-8216-4bcb-9b68-eb7f3a7672c5`}
                                        />
                                      </>
                                      )}
                                    </Grid.Column>
                                    <Grid.Column style={{ width: resize ? '56%' : '100%' }}>
                                      <Item
                                        style={{
                                          fontSize: '10px',
                                          fontWeight: '900',
                                          padding: '1em 1em 1.5em 1em'
                                        }}
                                      >
                                        <h1 
                                          style={{ 
                                            display: 'flex', 
                                            justifyContent: 'center',
                                            fontSize: resize ? '13px' : '20px',
                                            marginTop: resize ? null : '10px',
                                            lineHeight: resize ? '14px' : '20px',
                                            marginBottom: '-10px',
                                            wordBreak: 'break-word',
                                            width: '100%'
                                          }}
                                        >
                                          {company} Advertisement
                                        </h1>
                                        <div 
                                          style={{ 
                                            fontSize: resize ? '8.5px' : '16px', 
                                            lineHeight: '30px',
                                            wordBreak: 'break-word'
                                          }}
                                        >
                                          <div 
                                            style={{ 
                                              margin: '2em 0em 1em 0em',
                                              lineHeight: resize ? '10px' : '12px'
                                            }}
                                          >
                                            <div>
                                              <Icon name='mouse pointer' />
                                              Click the button below to be transported to watch and
                                              take the comprehensive quiz for {company}.
                                            </div>
                                          </div>
                                          <div 
                                            style={{ 
                                              margin: '1em 0em 1em 0em',
                                              lineHeight: resize ? '10px' : '12px'
                                            }}
                                          >
                                            <div>
                                              <Icon name='dollar' />
                                              Earn 20 points after successfully watching and
                                              completing the comprehension quiz for {company}.
                                            </div>
                                          </div>
                                          <div 
                                            style={{ 
                                              margin: '1em 0em 1em 0em',
                                              lineHeight: '10px' 
                                            }}
                                          >
                                            <div
                                              style={{
                                                lineHeight: resize ? null : '18px' 
                                              }}
                                            >
                                              <Icon name='calendar' />
                                              {`Your account needs to settle, which can take more than 30 days (due to possible returns). In this time, Earn and Trade users are credited with "Pending Points".`}
                                            </div>
                                          </div>
                                          <div
                                            style={{ display: 'flex', justifyContent: 'center' }}
                                          >
                                            <Button
                                              content='Earn 20 points'
                                              style={{
                                                color: 'white',
                                                background: '#125CA1',
                                                borderRadius: '15% 15% 15% 15% / 50% 50% 50% 50%',
                                                fontSize: '10px',
                                                transform: resize ? 'scale(0.7)' : 'scale(0.9)'
                                              }}
                                              href='/'
                                            />
                                          </div>
                                        </div>
                                      </Item>
                                    </Grid.Column>
                                  </Grid.Row>
                                </Grid>
                              </div>
                              <div 
                                style={{ 
                                  display: 'flex', 
                                  justifyContent: 'center',
                                  fontSize: resize ? '8px' : '12px',
                                  marginBottom: '10px',
                                  marginTop: '-10px',
                                  lineHeight: '10px',
                                  padding: '0px 20px 0px 20px'
                                }}
                              >
                                {description}
                              </div>
                            </Card>
                          </>
                        ) : (
                          <>
                            <Card fluid style={{ marginTop: '2em' }}>
                              <Card.Content
                                content='Create Advertisement'
                                style={{
                                  textAlign: 'center',
                                  fontSize: '25px',
                                  fontWeight: '50',
                                  margin: '0em 0em 0em 0em',
                                  color: 'gray',
                                  padding: '3.6em 0em 3.6em 0em',
                                  boxShadow: '2px 2px 10px black'
                                }}
                              />
                            </Card>
                          </>
                        )}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
            </Form>
        </>
    );
}
