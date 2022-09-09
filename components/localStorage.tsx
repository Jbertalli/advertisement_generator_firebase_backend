import React, { useEffect } from 'react';

const LOCAL_STORAGE_KEY_NAME = 'CompanyName';
const LOCAL_STORAGE_KEY_DESCRIPTION = 'AdvertisementDescription';

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
      // useEffect(() => {
      //   const storedDescription = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION))
      //   if (storedDescription) setDescription(storedDescription)
      // }, [])
    
      // useEffect(() => {
      //   localStorage.setItem(LOCAL_STORAGE_KEY_DESCRIPTION, 
      //   JSON.stringify(description))
      // }, [description]);
      
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
