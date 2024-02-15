import React from "react";
import { ApiTopPropducts } from "../apifolder/TopProductsApi";
import Product from "./Product";

export default function Products(){
    return <div className='flex flex-wrap p-5 items-center justify-center'>
        {
            ApiTopPropducts.map((Product, index)=>(
                <Product item = {Product} key ={index}/>
            ))
        }
    </div>
}