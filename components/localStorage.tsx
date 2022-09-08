import React, { useEffect } from 'react';

const LOCAL_STORAGE_KEY_NAME = 'CompanyName';
const LOCAL_STORAGE_KEY_DESCRIPTION = 'Advertisement Description';

export default function Local({ company, setCompany, description, setDescription }) {
    
    // Company name
    useEffect(() => {
        const storedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME))
        if (storedName) setCompany(storedName)
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, 
        JSON.stringify(company))
      }, [company]);

    
    //Advertisement Description
    
    return (
        <>
            &nbsp;
        </>
    );
}
