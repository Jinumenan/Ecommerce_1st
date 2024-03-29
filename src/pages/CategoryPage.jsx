import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Products from "../components/products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


export default function CategoryPage(){
    return <div>
        <div>{/*1st add another commponent  */}
            <Announce/>
            <Navbar/>
            <div className='flex flex-col p-5 '>{/*2nd */}
                <h1 className='text-[30px]'>Men's Cloth</h1>
                <div className='flex items-center justify-between mt-3'>
                    <div className='flex mobile:flex-col'>
                        <p>Filter by</p>
                        <select className='ml-3 border-2 border-silver'>
                            <option Selected disabled>Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                        <select className='ml-3 border-2 border-silver mobile:mt-3'>
                            <option selected disabled>Color</option>
                            <option>yellow</option>
                            <option>Blue</option>
                            <option>Red</option>
                        </select>
                    </div>
                    <div className='flex'>
                        <p>Sort by</p>
                        <select className='ml-3 border-2 border-silver'>
                            <option>Newset (firset)</option>
                            <option>Oldset (firset)</option>
                            <option>Price (Asc)</option>
                            <option>Price (Des)</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* <Products/> */}
            <Newsletter/>
            <Footer/>
        </div>
    </div>
}