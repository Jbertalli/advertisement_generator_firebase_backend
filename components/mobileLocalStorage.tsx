import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import type { RootState } from '../store';
import { companyValue } from '../slices/companySlice';
import { descriptionValue } from '../slices/descriptionSlice';
import { widthValue } from '../slices/widthSlice';
import { heightValue } from '../slices/heightSlice';
import { leftValue } from '../slices/leftSlice';
import { topValue } from '../slices/topSlice';
import { mediaPreviewValue } from '../slices/mediaSlice';

const LOCAL_STORAGE_KEY_NAME_MOBILE = 'CompanyNameMobile';
const LOCAL_STORAGE_KEY_DESCRIPTION_MOBILE = 'AdvertisementDescriptionMobile';
const LOCAL_STORAGE_KEY_WIDTH_MOBILE = 'ImageWidthMobile';
const LOCAL_STORAGE_KEY_HEIGHT_MOBILE = 'ImageHeightMobile';
const LOCAL_STORAGE_KEY_LEFT_MOBILE = 'ImageLeftMobile';
const LOCAL_STORAGE_KEY_TOP_MOBILE = 'ImageTopMobile';
const LOCAL_STORAGE_KEY_IMAGE_MOBILE = 'ImageMobile';

export default function Local({ setCompany, setDescription, setWidth, setHeight, setLeft, setTop, setMediaPreview }) {
  
    const companyName = useSelector(companyValue);
    const descriptionName = useSelector(descriptionValue);
    const widthName = useSelector(widthValue);
    const heightName = useSelector(heightValue);
    const leftName = useSelector(leftValue);
    const topName = useSelector(topValue);
    const mediaPreviewName = useSelector(mediaPreviewValue);

    // Company name
    useEffect(() => {
        const storedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME_MOBILE))
        if (storedName) setCompany(storedName)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME_MOBILE, 
        JSON.stringify(companyName))
      }, [companyName]);

    //Advertisement Description
    useEffect(() => {
        const storedDescription = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION_MOBILE))
        if (storedDescription) setDescription(storedDescription)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_DESCRIPTION_MOBILE, 
        JSON.stringify(descriptionName))
      }, [descriptionName]);

    // width
    useEffect(() => {
      const storedWidth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_WIDTH_MOBILE))
      if (storedWidth) setWidth(storedWidth)
    }, [])
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY_WIDTH_MOBILE, 
      JSON.stringify(widthName))
    }, [widthName]);
    
    // height
    useEffect(() => {
      const storedHeight = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_HEIGHT_MOBILE))
      if (storedHeight) setHeight(storedHeight)
    }, [])
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY_HEIGHT_MOBILE, 
      JSON.stringify(heightName))
    }, [heightName]);
    
    // left
    useEffect(() => {
      const storedLeft = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LEFT_MOBILE))
      if (storedLeft) setLeft(storedLeft)
    }, [])
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY_LEFT_MOBILE, 
      JSON.stringify(leftName))
    }, [leftName]);
    
    // top
    useEffect(() => {
      const storedTop = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TOP_MOBILE))
      if (storedTop) setTop(storedTop)
    }, [])
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY_TOP_MOBILE, 
      JSON.stringify(topName))
    }, [topName]);

    // Image
    useEffect(() => {
      const storedImage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_IMAGE_MOBILE))
      if (storedImage) setMediaPreview(storedImage)
    }, [])
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY_IMAGE_MOBILE, 
      JSON.stringify(mediaPreviewName))
    }, [mediaPreviewName]);
      
    return (
        <>
            &nbsp;
        </>
    );
}
