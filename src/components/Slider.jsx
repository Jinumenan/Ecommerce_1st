 import React, { useState } from "react";
 import { RiArrowDropLeftFill } from "react-icons/ri";
 import { RiArrowDropRightFill } from "react-icons/ri";
import { ApiSlides } from "../apifolder/Sliderapi";
import './Slider.css'
import  '../apifolder/Sliderapi'

 export default function Slider(){

    //useState hooks
    const[Slides] = useState(ApiSlides)
    const[activeSllide,setActivesSlide] = useState(0);


    //style
    const arrowStyle = "rounded-full bg-gray flex justfy-center items-center shadow-sm hover:cursor-pointer";
    
    const nextSlide=()=>{
        if(activeSllide === Slides.length-1)
        {
            setActivesSlide(0)
        }
        else{
            setActivesSlide(activeSllide + 1)
        }
    }

    const prvSlide = ()=>{
        if(activeSllide ===0){
            setActivesSlide(Slides.length - 1)
        }
        else{
            setActivesSlide(activeSllide - 1)
        }

    }

    return<div className='parentDiv h-[540px] bg-white flex
    items-center justify-between'>
    
        {/*leftarrow div */}
        <div className={arrowStyle}>
        <RiArrowDropLeftFill style={{fontSize:'50px'}} onClick={prvSlide}/>
        </div>
        
        {/*slide div */}
        {Slides.map((slide,index)=>{
            if(index === activeSllide){
                return(
                    <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden
                    relative` +Slider.background}>
                        <div className="slide flex items-center justify-center h-[100%]">
                            <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                                <img className="h-[100%] object-cover"
                                src={Slider.src} alt="slide_image"/>
                            </div>
            
                            <div className="des flex flex-col flex-1 place-items-start justify-center -ml-11">
                                <h2 className="text-[55px]">{slide.content.h2}</h2>
                                <p className=" text-[30px]">{slide.content.p}</p>
                                <button className="btn">shop Now</button>
                            </div>
                        </div>
                    </div>
                    
                );
            }else{
                return null;
            }
        })}

        {/*rightarrow */}
        <div className={arrowStyle}>
        <RiArrowDropRightFill style={{fontSize:'50px'}} onClick={nextSlide}/>
        </div>

    </div>
 }