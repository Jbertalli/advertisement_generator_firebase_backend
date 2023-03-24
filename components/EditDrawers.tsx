import { Divider, Icon, Form, Button } from 'semantic-ui-react';

export default function EditDrawers(values) {

    const {
        editTitle,
        setEditTitle,
        company,
        setCompany,
        resize,
        companyFontSize,
        setCompanyFontSize,
        companyFontWeight,
        setCompanyFontWeight,
        setEditDescription,
        setEditBorder,
        setEditGlobal,
        setEditImage,
        editDescription,
        description,
        setDescription,
        descriptionFontSize,
        setDescriptionFontSize,
        descriptionFontWeight,
        setDescriptionFontWeight,
        editBorder,
        borderWidth,
        setBorderWidth,
        borderColor,
        setBorderColor,
        editGlobal,
        totalWidth,
        setTotalWidth,
        color,
        setColor,
        backgroundColor,
        setBackgroundColor,
        editImage,
        currentUser,
        uploadImage,
        mediaPreview,
        setMediaPreview,
        setImageWidth,
        setImageHeight,
        setImageLeft,
        setImageTop,
        setImageRotation,
        setImageSaved,
        imageSaved,
        setSelected, 
        setClicked,
        setSaved,
        saved,
        setFull,
        setUrl,
        deleteStoredImage,
        imageLeft,
        imageWidth,
        imageHeight,
        imageTop,
        imageRotation,
        setSaveImage
    } = values;

    const handleImageChange = (e) => {
        if(e.target.files[0]) {
            setSaveImage(e.target.files[0])
        }
    }

    return (
        <>
            <div
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#125CA1',
                cursor: 'pointer'
              }}
            >
              {editTitle ? (
                <>
                  <div
                    id='editTitle'
                    style={{
                      transform: 'translateY(-16px)'
                    }}
                  />
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
                    <div style={{ marginBottom: '5px' }}>Company Name</div>
                    <div>
                      <Form.Input
                        type='text'
                        placeholder='company'
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginBottom: '25px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '5px' }}>Company Font Size</div>
                    <div>
                      <Form.Input
                        type='text'
                        placeholder='font size'
                        value={companyFontSize}
                        onChange={(e) => setCompanyFontSize(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginBottom: '25px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                      Company Font Weight (Boldness)
                    </div>
                    <div>
                      <input
                        min='100'
                        max='900'
                        step='100'
                        type='range'
                        placeholder='font weight'
                        value={companyFontWeight}
                        onChange={(e) => setCompanyFontWeight(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginTop: '15px',
                          marginBottom: '15px',
                          cursor: 'grab',
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <a href='#editTitle'>
                    <div
                      onClick={() => {
                        setEditTitle(true),
                        setEditDescription(false),
                        setEditBorder(false),
                        setEditGlobal(false),
                        setEditImage(false);
                      }}
                    >
                      <div
                        style={{
                          marginLeft: '-25px',
                          display: 'flex',
                          transform: 'translateY(100%) scale(0.8)',
                          padding: '0px 0px 8px 0px'
                        }}
                      >
                        <Icon name='chevron down' />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          padding: '0px 0px 8px 0px'
                        }}
                      >
                        Edit Title
                      </div>
                    </div>
                  </a>
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
                    id='editDescription'
                    style={{
                      transform: 'translateY(-17px)',
                    }}
                  />
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
                        justifyContent: 'center',
                      }}
                    >
                      Edit Description
                    </span>
                    <div
                      style={{
                        transform: 'translate(-20px, -20px)',
                        color: 'red',
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                      onClick={() => setEditDescription(false)}
                    >
                      x
                    </div>
                  </div>
                  <div style={{ color: 'black', marginLeft: '8vw' }}>
                    <div style={{ marginBottom: '5px' }}>
                      Advertisement Description
                    </div>
                    <div>
                      <Form.Input
                        type='text'
                        placeholder='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginBottom: '25px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '5px' }}>Description Font Size</div>
                    <div>
                      <Form.Input
                        type='text'
                        placeholder='font size'
                        value={descriptionFontSize}
                        onChange={(e) => setDescriptionFontSize(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginBottom: '25px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                      Description Font Weight (Boldness)
                    </div>
                    <div>
                      <input
                        min='100'
                        max='900'
                        step='100'
                        type='range'
                        placeholder='font weight'
                        value={descriptionFontWeight}
                        onChange={(e) => setDescriptionFontWeight(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginTop: '15px',
                          marginBottom: '15px',
                          cursor: 'grab'
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <a href='#editDescription'>
                    <div
                      style={{ transform: 'translateY(-8px)' }}
                      onClick={() => {
                        setEditDescription(true),
                        setEditTitle(false),
                        setEditBorder(false),
                        setEditGlobal(false),
                        setEditImage(false);
                      }}
                    >
                      <div
                        style={{
                          marginLeft: '-25px',
                          display: 'flex',
                          transform: 'translateY(100%) scale(0.8)',
                        }}
                      >
                        <Icon name='chevron down' />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        Edit Description
                      </div>
                    </div>
                  </a>
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
                    id='editBorder'
                    style={{
                      transform: 'translateY(-17px)'
                    }}
                  />
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
                        justifyContent: 'center',
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
                  <div style={{ color: 'black', marginLeft: '8vw' }}>
                    <div style={{ marginBottom: '5px' }}>Border Width (pixels)</div>
                    <div>
                      <Form.Input
                        type='text'
                        placeholder='width'
                        value={borderWidth}
                        onChange={(e) => setBorderWidth(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginBottom: '25px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '5px' }}>Border Color</div>
                  </div>
                  <div style={{ marginLeft: '8vw' }}>
                    <input
                      type='color'
                      value={borderColor}
                      onChange={(e) => setBorderColor(e.target.value)}
                      style={{
                        width: '100px',
                        height: '100px',
                        marginBottom: '15px',
                        cursor: 'pointer'
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <a href='#editBorder'>
                    <div
                      style={{ transform: 'translateY(-8px)' }}
                      onClick={() => {
                        setEditBorder(true),
                        setEditTitle(false),
                        setEditDescription(false),
                        setEditGlobal(false),
                        setEditImage(false);
                      }}
                    >
                      <div
                        style={{
                          marginLeft: '-25px',
                          display: 'flex',
                          transform: 'translateY(100%) scale(0.8)',
                        }}
                      >
                        <Icon name='chevron down' />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        Edit Border
                      </div>
                    </div>
                  </a>
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
                    id='editGlobal'
                    style={{
                      transform: 'translateY(-17px)',
                    }}
                  />
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
                        justifyContent: 'center',
                      }}
                    >
                      Edit Global
                    </span>
                    <div
                      style={{
                        transform: 'translate(-20px, -20px)',
                        color: 'red',
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                      onClick={() => setEditGlobal(false)}
                    >
                      x
                    </div>
                  </div>
                  <div style={{ color: 'black', marginLeft: '8vw' }}>
                  <div style={{ marginBottom: '5px' }}>
                      Advertisement Width (pixels)
                    </div>
                    <div>
                      <Form.Input
                        min='200'
                        max='10000'
                        step='20'
                        type='number'
                        placeholder='width'
                        value={totalWidth}
                        onChange={(e) => setTotalWidth(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginBottom: '15px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '5px' }}>Select Text Color</div>
                    <div>
                      <input
                        type='color'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        style={{
                          width: '100px',
                          height: '100px',
                          marginBottom: '25px',
                          cursor: 'pointer'
                        }}
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
                        style={{
                          width: '100px',
                          height: '100px',
                          marginBottom: '15px',
                          cursor: 'pointer'
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <a href='#editGlobal'>
                    <div
                      style={{ transform: 'translateY(-8px)' }}
                      onClick={() => {
                        setEditGlobal(true),
                        setEditTitle(false),
                        setEditDescription(false),
                        setEditBorder(false),
                        setEditImage(false);
                      }}
                    >
                      <div
                        style={{
                          marginLeft: '-25px',
                          display: 'flex',
                          transform: 'translateY(100%) scale(0.8)',
                        }}
                      >
                        <Icon name='chevron down' />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        Edit Global
                      </div>
                    </div>
                  </a>
                </>
              )}
            </div>
            <Divider />
            <div
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#125CA1',
                cursor: 'pointer'
              }}
            >
              {editImage ? (
                <>
                  <div
                    id='editImage'
                    style={{
                      transform: 'translateY(-17px)',
                    }}
                  />
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
                        justifyContent: 'center',
                      }}
                    >
                      Edit Image
                    </span>
                    <div
                      style={{
                        transform: 'translate(-20px, -20px)',
                        color: 'red',
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                      onClick={() => setEditImage(false)}
                    >
                      x
                    </div>
                  </div>
                  <div style={{ color: 'black', marginLeft: '8vw' }}>
                    {currentUser === undefined ? (
                      <>
                        <span>
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
                              padding: '11px 21px 11px 21px',
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
                        </span>
                        {mediaPreview.length > 0 ? (
                        <>
                          <span>
                            <Button
                              onClick={() => {
                                setMediaPreview(''),
                                setBackgroundColor(''), 
                                setColor(''), 
                                setBorderWidth(''), 
                                setBorderColor('#FFFFFF'), 
                                setTotalWidth(500), 
                                setCompanyFontSize(''), 
                                setCompanyFontWeight(''), 
                                setCompany(''), 
                                setDescriptionFontSize(''), 
                                setDescriptionFontWeight(''), 
                                setDescription(''),
                                setImageWidth(150),
                                setImageHeight(150),
                                setImageLeft(0),
                                setImageTop(0),
                                setImageRotation(0)
                              }}
                              style={{
                                background: 'transparent',
                                color: 'red',
                                cursor: 'pointer',
                                display: 'inline-block',
                                fontWeight: '700',
                                fontSize: '14px',
                                borderRadius: '6px',
                                border: '2px solid red',
                                position: 'relative',
                                zIndex: '1'
                              }}
                            >
                              Delete Image
                            </Button>
                          </span>
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
                          onChange={(e) => {handleImageChange(e), setImageSaved(imageSaved + 1)}}
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
                            padding: '11px 19.5px 11px 19.5px',
                            display: 'inline-block',
                            fontWeight: '700',
                            fontSize: '14px',
                            borderRadius: '6px',
                            position: 'relative',
                            zIndex: '1'
                          }}
                          onClick={() => {
                            setUrl(null),
                            deleteStoredImage(),
                            setSaved(0)
                          }}
                        >
                          Choose File
                        </label>
                      </>
                      )}
                    <div style={{ marginBottom: '5px', marginTop: '15px' }}>
                      Image Width (pixels)
                    </div>
                    <div>
                      <Form.Input
                        min='0'
                        max='1000'
                        step='10'
                        type='text'
                        maxLength='3'
                        placeholder='width'
                        value={imageWidth}
                        onChange={(e) => setImageWidth(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginBottom: '25px'
                        }}
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
                        type='text'
                        maxLength='3'
                        placeholder='height'
                        value={imageHeight}
                        onChange={(e) => setImageHeight(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginBottom: '25px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                      Image Left (pixels)
                    </div>
                    <div>
                      <Form.Input
                        min='-1000'
                        max='1000'
                        step='10'
                        type='text'
                        maxLength='3'
                        placeholder='left'
                        value={imageLeft}
                        onChange={(e) => setImageLeft(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginBottom: '25px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                      Image Top (pixels)
                    </div>
                    <div>
                      <Form.Input
                        min='-1000'
                        max='1000'
                        step='10'
                        type='text'
                        maxLength='4'
                        placeholder='top'
                        value={imageTop}
                        onChange={(e) => setImageTop(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginBottom: '25px'
                        }}
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
                        type='text'
                        maxLength='3'
                        placeholder='rotation'
                        value={imageRotation}
                        onChange={(e) => setImageRotation(e.target.value)}
                        style={{
                          width: resize ? '50%' : '92%',
                          marginBottom: '15px'
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <a href='#editImage'>
                    <div
                      style={{ transform: 'translateY(-8px)' }}
                      onClick={() => {
                        setEditImage(true),
                        setEditTitle(false),
                        setEditDescription(false),
                        setEditBorder(false),
                        setEditGlobal(false);
                      }}
                    >
                      <div
                        style={{
                          marginLeft: '-25px',
                          display: 'flex',
                          transform: 'translateY(100%) scale(0.8)',
                        }}
                      >
                        <Icon name='chevron down' />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        Edit Image
                      </div>
                    </div>
                  </a>
                </>
              )}
            </div>
        </>
    );
}
