import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import jack from "../assets/jacket1.jpg"

export default function ProductPage(){
    
    
    
    return<div>
        <Announce/>
        <Navbar/>
            <div className='flex justify-center mobile:flex-col mobile:mt-3 mobile:p-3'>
                <div className='flex flex-1 items-center justify-center'>
                    <img src={jack}
                    alt='product_img'
                    className='w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1]
                    ease-in duration-300'
                    />
                </div>
                <div
                className='flex-[1.3] flex item-Start justify-items-start flex-col
                mt-10  moblie:items-center'
                >
                    <h1 className="title text-[40px] mobile:text-[30px]">Creamy Hoody Orignal</h1>
                    <p className="peer-[4rem] text-justify mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium in fugiat dolorum nemo, iure sint! Quidem dolorem consequatur voluptate magnam assumenda cumque cum expedita illo ipsa aperiam, ratione tempore similique.
                    </p>
                    <p className="mt-7 text-3xl">Price:<b>$70</b></p>

                    {/*color variantes */}
                    <div className='flex text-2xl mt-7'>
                        Colors
                        <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5
                        hover:border-[#8a4af3]"></div>
                        <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5
                        hover:border-[#8a4af3]"></div>
                        <div className="bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5
                        hover:border-[#8a4af3]"></div>
                    </div>
                    <div className="mt-7 text-2xl">
                        Size
                        <select className="ml-5 border-2"> 
                            <option selected disabled>Select</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>
                    <div className="mt-5">
                    <Counter/>
                    </div>
                    <button className="btn mt-7" >Add to card</button>
                </div>
            </div>
        <Newsletter/>
        <Footer/>
    </div>
}