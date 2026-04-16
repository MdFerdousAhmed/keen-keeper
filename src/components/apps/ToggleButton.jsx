"use client"
import React, { useContext } from 'react';
import TextImg from "@/assets/text.png"
import VideoImg from "@/assets/video.png"
import CallImg from "@/assets/call.png"
import Image from 'next/image';
import Contact, { ContactContext } from '@/context/ContactProvider';
import { toast } from 'react-toastify';


const ToggleButton = ({app}) => {
  
  const {contact,setContact} = useContext(ContactContext)
  console.log(contact,"something")

  const handelCallNow = () =>{
    console.log("Handel call now")
    setContact([...contact, app])
    toast.success(`${app.name} is successfully call added!`);

  }
  const handelTextNow = () =>{
    console.log("Handel text now")
    setContact([...contact, app])
    toast.success(`${app.name} is successfully text added!`);


  }
  const handelVideoNow = () =>{
    console.log("Handel video now")
    setContact([...contact, app])
    toast.success(`${app.name} is successfully video added!`);
   
  }
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div onClick={handelCallNow} className='border border-gray-400 rounded-md text-center grid justify-center items-center p-4'>
        <Image src={CallImg} alt=''></Image>
        <p>Call</p>
      </div>
      <div onClick={handelTextNow} className='border border-gray-400 rounded-md text-center grid justify-center items-center p-4'>
        <Image src={TextImg} alt=''></Image>
        <p>Text</p>
      </div>
      <div onClick={handelVideoNow} className='border border-gray-400 rounded-md text-center grid justify-center items-center p-4'>
        <Image src={VideoImg} alt=''></Image>
        <p>Video</p>
      </div>
    </div>
  );
};

export default ToggleButton;