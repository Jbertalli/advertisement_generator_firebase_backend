import Image from 'next/image';
import Draggable from 'react-draggable';

export default function LiveCustom(values) {
    
    const {
        company,
        companyFontSize,
        description,
        descriptionFontSize,
        borderWidth,
        selected,
        saved,
        mediaPreview,
        backgroundColor,
        color,
        borderColor,
        totalWidth,
        descriptionFontWeight,
        companyFontWeight,
        currentUser,
        resize,
        imageLeft,
        imageWidth,
        imageHeight,
        imageTop,
        imageRotation,
        clicked,
        url
    } = values;

    return (
        <>
            {(company.length > 0 || 
                Number(companyFontSize) > 0 || 
                description.length ||
                Number(descriptionFontSize) > 0 || 
                Number(borderWidth) > 0 ||
                selected ||
                saved > 0 ||
                mediaPreview.length > 0
                ) ? (
              <>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '-20px',
                    marginBottom: '-20px',
                    transform: 'scale(0.7)'
                  }}
                >
                  <div
                    style={{
                      background: `${backgroundColor}`,
                      color: `${color}`,
                      border: `${borderWidth}px solid ${borderColor}`,
                      fontWeight: '100',
                      height: '50vh',
                      width: `${totalWidth}px`
                    }}
                  >
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
                          lineHeight: '1em',
                          wordBreak: 'break-word',
                          width: '100%'
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
                          lineHeight: '1em',
                          wordBreak: 'break-word',
                          width: '100%'
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
                          transform: 'translateY(50%)'
                        }}
                      >
                        {currentUser === undefined ? (
                        <>
                          <div
                            style={{
                              transform: resize ? `translate(${(imageLeft/2.8)}px, ${(imageTop/4.8)}px) rotate(${imageRotation}deg)` : `translate(${(imageLeft/1.3)}px, ${(imageTop/1.3)}px) rotate(${imageRotation}deg)`
                            }}
                          >
                            <Image
                              src={mediaPreview.length > 0 ? mediaPreview : '/images/blank.png'}
                              width={mediaPreview.length > 0 ? (resize ? `${imageWidth/1.5}` : `${imageWidth/1.5}`) : 100}
                              height={mediaPreview.length > 0 ? (resize ? `${imageHeight/1.5}` : `${imageHeight/1.5}`) : 100}
                              alt='image'
                            />
                          </div>
                        </>
                        ):(
                        <>
                          <input
                            type='image'
                            alt='image'
                            src={clicked ? url : `https://firebasestorage.googleapis.com/v0/b/advertisement-generator-1fa98.appspot.com/o/image%2F${currentUser}%2Fcustom?alt=media&token=509c2369-ca51-406f-8ec2-028d465b24fb`}
                            style={{
                              width: `${imageWidth/1.5}px`,
                              height: `${imageHeight/1.5}px`,
                              transform: `translate(${imageLeft}px, ${imageTop}px) rotate(${imageRotation}deg)`,
                              cursor: 'grab'
                            }}
                          />
                        </>
                        )}
                      </div>
                    </Draggable>
                  </div>
                </div>
              </>
              ): null}
        </>
    );
}
