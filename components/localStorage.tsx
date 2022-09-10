import React, { useEffect } from 'react';

const LOCAL_STORAGE_KEY_NAME = 'CompanyName';
const LOCAL_STORAGE_KEY_DESCRIPTION = 'AdvertisementDescription';
const LOCAL_STORAGE_KEY_WIDTH = 'ImageWidth';
// const LOCAL_STORAGE_KEY_HEIGHT = 'ImageHeight';
// const LOCAL_STORAGE_KEY_LEFT = 'ImageLeft';
// const LOCAL_STORAGE_KEY_TOP = 'ImageTop';

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
      // useEffect(() => {
      //   const storedDescription = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION))
      //   if (storedDescription) setDescription(storedDescription)
      // }, [])
    
      // useEffect(() => {
      //   localStorage.setItem(LOCAL_STORAGE_KEY_DESCRIPTION, 
      //   JSON.stringify(description))
      // }, [description]);
      
      // left
      // useEffect(() => {
      //   const storedDescription = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION))
      //   if (storedDescription) setDescription(storedDescription)
      // }, [])
    
      // useEffect(() => {
      //   localStorage.setItem(LOCAL_STORAGE_KEY_DESCRIPTION, 
      //   JSON.stringify(description))
      // }, [description]);
      
      // top
      // useEffect(() => {
      //   const storedDescription = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION))
      //   if (storedDescription) setDescription(storedDescription)
      // }, [])
    
      // useEffect(() => {
      //   localStorage.setItem(LOCAL_STORAGE_KEY_DESCRIPTION, 
      //   JSON.stringify(description))
      // }, [description]);

    return (
        <>
            &nbsp;
        </>
    );
}
