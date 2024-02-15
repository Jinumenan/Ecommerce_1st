import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home(){
    return<div>
        <Announce/>
        <Navbar/>
        <Slider/>
        <Categories/>
        {/* <Products/> */}
        <Newsletter/>
        <Footer/>
    </div>
}