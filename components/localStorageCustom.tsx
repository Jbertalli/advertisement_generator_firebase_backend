import React, { useEffect } from 'react';

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
const LOCAL_STORAGE_KEY_EDIT_TITLE = 'Edit_Title';

export default function LocalCustom({ company, setCompany, companyFontSize, setCompanyFontSize, companyFontWeight, setCompanyFontWeight, description, setDescription, descriptionFontSize, setDescriptionFontSize, descriptionFontWeight, setDescriptionFontWeight, borderWidth, setBorderWidth, borderColor, setBorderColor, color, setColor, backgroundColor, setBackgroundColor, mediaPreview, setMediaPreview, image, setImage, imageWidth, setImageWidth, imageHeight, setImageHeight, imageRotation, setImageRotation, editTitle, setEditTitle }) {

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

    useEffect(() => {
        const storedImageHeight = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_IMAGE_HEIGHT))
        if (storedImageHeight) setImageHeight(storedImageHeight)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_IMAGE_HEIGHT, 
        JSON.stringify(imageHeight))
    }, [imageHeight]);

    useEffect(() => {
        const storedImageRotation = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_IMAGE_ROTATION))
        if (storedImageRotation) setImageRotation(storedImageRotation)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_IMAGE_ROTATION, 
        JSON.stringify(imageRotation))
    }, [imageRotation]);

    useEffect(() => {
        const storedEditTitle = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_EDIT_TITLE))
        if (storedEditTitle) setEditTitle(storedEditTitle)
      }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_EDIT_TITLE, 
        JSON.stringify(editTitle))
    }, [editTitle]);

    return (
        <></>
    );
}
