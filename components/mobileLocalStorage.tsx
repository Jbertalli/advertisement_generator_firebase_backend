import React, { useEffect } from 'react';

const LOCAL_STORAGE_KEY_NAME_MOBILE = 'CompanyNameMobile';
const LOCAL_STORAGE_KEY_DESCRIPTION_MOBILE = 'AdvertisementDescriptionMobile';

export default function Local({ company, setCompany, description, setDescription }) {
    
    // Company name
    useEffect(() => {
        const storedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME_MOBILE))
        if (storedName) setCompany(storedName)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME_MOBILE, 
        JSON.stringify(company))
      }, [company]);

    //Advertisement Description
    useEffect(() => {
        const storedDescription = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DESCRIPTION_MOBILE))
        if (storedDescription) setDescription(storedDescription)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_DESCRIPTION_MOBILE, 
        JSON.stringify(description))
      }, [description]);
    return (
        <>
            &nbsp;
        </>
    );
}
