"use client"
import React, { createContext, useState } from 'react';

export const ContactContext = createContext();
const ContactProvider = ({children}) => {
  const [contact, setContact] = useState([]);

  const data ={
    contact,
    setContact,
  };
  return (
    <ContactContext.Provider value={data}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;