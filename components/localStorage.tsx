import React, { useEffect } from 'react';

const LOCAL_STORAGE_KEY_NAME = 'CompanyName';
const LOCAL_STORAGE_KEY_DESCRIPTION = 'AdvertisementDescription';
const LOCAL_STORAGE_KEY_WIDTH = 'ImageWidth';
const LOCAL_STORAGE_KEY_HEIGHT = 'ImageHeight';
const LOCAL_STORAGE_KEY_LEFT = 'ImageLeft';
const LOCAL_STORAGE_KEY_TOP = 'ImageTop';

export default function Local({ company, setCompany, description, setDescription, width, setWidth, height, setHeight, left, setLeft, top, setTop }) {
    
    // Company name
    useEffect(() => {
        const storedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME))
        if (storedName) setCompany(storedName)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, 
        JSON.stringify(company))
      }, [company]);

    // Advertisement Description
    useEffect(() => {
        const storedDescription = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION))
        if (storedDescription) setDescription(storedDescription)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_DESCRIPTION, 
        JSON.stringify(description))
      }, [description]);

      // width
      useEffect(() => {
        const storedWidth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_WIDTH))
        if (storedWidth) setWidth(storedWidth)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_WIDTH, 
        JSON.stringify(width))
      }, [width]);
      
      // height
      useEffect(() => {
        const storedHeight = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_HEIGHT))
        if (storedHeight) setHeight(storedHeight)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_HEIGHT, 
        JSON.stringify(height))
      }, [height]);
      
      // left
      useEffect(() => {
        const storedLeft = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LEFT))
        if (storedLeft) setLeft(storedLeft)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_LEFT, 
        JSON.stringify(left))
      }, [left]);
      
      // top
      useEffect(() => {
        const storedTop = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TOP))
        if (storedTop) setTop(storedTop)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_TOP, 
        JSON.stringify(top))
      }, [top]);

    return (
        <>
            &nbsp;
        </>
    );
}
