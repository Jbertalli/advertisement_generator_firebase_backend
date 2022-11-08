import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const LOCAL_STORAGE_KEY_NAME_MOBILE = 'CompanyNameMobile';
const LOCAL_STORAGE_KEY_DESCRIPTION_MOBILE = 'AdvertisementDescriptionMobile';

export default function Local({ setCompany, setDescription }) {
  
    const companyName = useSelector((state: RootState) => state.company.value);
    const descriptionName = useSelector((state: RootState) => state.description.value);

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
      
    return (
        <>
            &nbsp;
        </>
    );
}
