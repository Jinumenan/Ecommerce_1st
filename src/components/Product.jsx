import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";


export default function Product(item){

    const[hoverEffect,setHovereffect] = useState(' opp]acity-0')
    const handleHoverEnter = ()=>{
        setHovereffect(' opacity-1 bg-[rgba(0,0,0,0.2)]')
    }
    const handleHoverExit = ()=>{
        setHovereffect(' opacity-0')
    }

    const itemStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover: scale-[1.1] ease-in duration-100 cursor-pointer"

    return<div className='flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden
    rounded-md shadow-lg m-2 relative ' onMouseEnter={handleHoverEnter}
    onMouseLeave={handleHoverExit}>
            <img src={item.src} alt='product_image'/>
            <div 
             className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100` + hoverEffect}>
                {/*icons */}
            </div>

            <div className={itemStyle}>
                <MdOutlineShoppingCart />
            </div>
            <div className={itemStyle}>
                <HiOutlineHeart />
            </div>
            <div className={itemStyle}>
                <IoSearchOutline />
            </div>
    </div>
}