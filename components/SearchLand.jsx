'use client'
import { useState } from "react";
const SearchLand = () => {
   const [land,setLand]=useState(1);
   const handleLand = (el)=>{
      setLand(el.target.value);
   }
 return <div className="flex w-full flex-row flex-wrap justify-stretch items-center gap-4 px-3 py-2">
      <input type="text" placeholder="Go to land" onChange={handleLand} className=" outline-1 outline-blue-900 border-blue-500 border-b-[1px]"/>
      <a className="text-white bg-blue-500 rounded-md p-1 border-[1px] border-white " href={`#${land}`}>Go to</a>
     </div>

};

export default SearchLand;