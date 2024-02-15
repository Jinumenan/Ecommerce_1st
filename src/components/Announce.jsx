
import React, { useState } from "react";

import { IoIosClose } from "react-icons/io";


export default function Announce(){
    const[announceStyle,setAnnounceStyle]  = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')

        const handlClose = ()=>{
            setAnnounceStyle(announceStyle + "hidden")
        }
    return <div className={announceStyle}>
        <h2>hyrry up it's 40% off now </h2>
        
        <IoIosClose className='cursor-pointer' onClick={handlClose}/>
        
    </div>
}