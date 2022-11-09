import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const LOCAL_STORAGE_KEY_NAME = 'CompanyName';
const LOCAL_STORAGE_KEY_DESCRIPTION = 'AdvertisementDescription';
const LOCAL_STORAGE_KEY_WIDTH = 'ImageWidth';
const LOCAL_STORAGE_KEY_HEIGHT = 'ImageHeight';
const LOCAL_STORAGE_KEY_LEFT = 'ImageLeft';
const LOCAL_STORAGE_KEY_TOP = 'ImageTop';
const LOCAL_STORAGE_KEY_IMAGE = 'Image';

export default function Local({ setCompany, setDescription, setWidth, setHeight, setLeft, setTop, mediaPreview, setMediaPreview }) {
    
    const companyName = useSelector((state: RootState) => state.company.value);
    const descriptionName = useSelector((state: RootState) => state.description.value);
    const widthName = useSelector((state: RootState) => state.width.value);
    const heightName = useSelector((state: RootState) => state.height.value);
    const leftName = useSelector((state: RootState) => state.left.value);
    const leftTop = useSelector((state: RootState) => state.top.value);

    // Company name
    useEffect(() => {
        const storedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME))
        if (storedName) setCompany(storedName)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, 
        JSON.stringify(companyName))
      }, [companyName]);

    // Advertisement Description
    useEffect(() => {
        const storedDescription = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION))
        if (storedDescription) setDescription(storedDescription)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_DESCRIPTION, 
        JSON.stringify(descriptionName))
      }, [descriptionName]);

      // width
      useEffect(() => {
        const storedWidth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_WIDTH))
        if (storedWidth) setWidth(storedWidth)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_WIDTH, 
        JSON.stringify(widthName))
      }, [widthName]);
      
      // height
      useEffect(() => {
        const storedHeight = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_HEIGHT))
        if (storedHeight) setHeight(storedHeight)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_HEIGHT, 
        JSON.stringify(heightName))
      }, [heightName]);
      
      // left
      useEffect(() => {
        const storedLeft = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LEFT))
        if (storedLeft) setLeft(storedLeft)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_LEFT, 
        JSON.stringify(leftName))
      }, [leftName]);
      
      // top
      useEffect(() => {
        const storedTop = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TOP))
        if (storedTop) setTop(storedTop)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_TOP, 
        JSON.stringify(leftTop))
      }, [leftTop]);

      // Image
      useEffect(() => {
        const storedImage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_IMAGE))
        if (storedImage) setMediaPreview(storedImage)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_IMAGE, 
        JSON.stringify(mediaPreview))
      }, [mediaPreview]);

    return (
        <>
            &nbsp;
        </>
    );
}
