import React from "react";
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";


export default function Cart(){


    return <div>
        <Announce/>
        <Navbar/>
            <div className="p-5">
                <div className="flex justify-center text-5xl">Cart</div>
            {/*uper div of cart */}
                <div className="flex items-center justify-between
                mt-4 mobile:flex-col">
                    <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] 
                    hover:bg-white">Continue Shopping</button>
                    <div className="flex underline text-lg hover:cursor-pointer mobile:mt-3 mobile:mb-3">
                        <p>Iterms in your Cart : 3</p>
                        <p className="ml-5">Whitlist Item: 0</p>
                    </div>
                    <button className="btn">Checkout</button>
                </div>

                {/*central div  */}

                <div className="flex mt-7 mobile:flex-col">
                    <div className="flex flex-col flex-1">
                        {/*list of products*/}
                        <div className="flex w-[100%] h-auto items-center mobile:flex-col">
                            <div className="product flex self-start pl-5">
                                <img 
                                className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] easse-in duration-300 "
                                src="" alt="product"/>
                                <div className="description flex flex-col ml-5 h-auto
                                justify-between">
                                    <p>
                                        <b className="mr-2">ID:</b>122344567
                                    </p>
                                    <p>
                                        <b className="mr-2">Product:</b>Dazzing sky Shirt
                                    </p>
                                    <p className="flex items-center justify-start">
                                        <b className="mr-2">Color:</b>
                                        <div className="rounded-full border-2 p-[10px] cursor-pointer bg-stone-700
                                        ml-1 w-[20px] h-[20px]"></div>
                                    </p>
                                    <p>
                                        <b className="mr-2">Size:</b>Large
                                    </p>
                                    
                                    
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center
                             flex-auto mobile:mt-3">
                                <Counter/>
                                <p className="flex items-center justify-center text-3xl
                                mt-3">
                                    <b>rs.7000</b>
                                </p>
                            </div>
                        </div>
                        <hr className="mt-7 mb-7"/>
                        
                        {/*2nd product */}

                        <div className="flex w-[100%] h-auto items-center mobile:flex-col">
                            <div className="product flex self-start pl-5">
                                <img 
                                className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] easse-in duration-300 "
                                src="" alt="product"/>
                                <div className="description flex flex-col ml-5 h-auto
                                justify-between">
                                    <p>
                                        <b className="mr-2">ID:</b>122344567
                                    </p>
                                    <p>
                                        <b className="mr-2">Product:</b>Dazzing sky Shirt
                                    </p>
                                    <p className="flex items-center justify-start">
                                        <b className="mr-2">Color:</b>
                                        <div className="rounded-full border-2 p-[10px] cursor-pointer
                                        bg-sky-500 ml-1 w-[20px] h-[20px]"></div>
                                    </p>
                                    <p>
                                        <b className="mr-2">Size:</b>Large
                                    </p>
                                    
                                    
                                </div>
                            </div>
                            <div className=" flex flex-col justify-center items-center
                             flex-auto  mobile:mt-3">
                                <Counter/>
                                <p className="flex items-center justify-center text-3xl
                                mt-3">
                                    <b>rs.7700</b>
                                </p>
                            </div>
                        </div>
                        <hr className="mt-7 mb-7"/>
                    </div>
                    <div className="p-5 flex-[0.4] w-auto h-[40vh] border-[#8a4af3] rounded-md shadow-lg
                    flex-col items-center flex">
                        <h1 className="text-[2rem]">Summary</h1>
                        <div className="flex justify-between mt-3 w-[100%]">
                            <p>Subtotal</p>
                            <p>rs.14000</p>
                        </div>
                        <div className="flex justify-between mt-3 w-[100%]">
                            <p>Shipping</p>
                            <p>rs.50</p>
                        </div>
                        <div className="flex justify-between mt-3 w-[100%]">
                            <p>Shipping Discount</p>
                            <p>rs.0</p>
                        </div>
                        <div className="flex justify-between mt-3 w-[100%] text-3xl font-bold">
                            <p>Total</p>
                            <p>rs.14050</p>
                        </div>
                    </div>
                </div>
            </div>

        <Newsletter/>
        <Footer/>
        
    </div>
}