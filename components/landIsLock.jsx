'use client'

import { useEffect, useState } from "react";

const LandIsLock = ({land}) => {
const [isLock,setIslock] = useState(null);
useEffect(()=>{
   let metadata = JSON.parse(localStorage.getItem(land.plot));
   if(metadata !== null){
      if(metadata?.lock!=false){
         setIslock(metadata.lock);
      }
   }
 },[land,setIslock]);

 const handledLock = ()=>{
    localStorage.setItem(land.plot,JSON.stringify({...land,lock:!isLock}));
    setIslock(!isLock);
 }
 return <span onClick={handledLock} className="cursor-pointer font-bold text-2xl">{`${isLock?"❌ lock":"✅"}`}</span>

};

export default LandIsLock;

