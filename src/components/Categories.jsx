import React from "react";
import {ApiCategories} from '../apifolder/CategoryApi'
import Category from "./Category";

export default function categories(){
    return <div className="flex justify-between items-center p-5 mobile:flex-col">
{
    ApiCategories.map((category,index)=>{
        <Category item ={category} key ={index}/>
    })
}

    </div>
}

