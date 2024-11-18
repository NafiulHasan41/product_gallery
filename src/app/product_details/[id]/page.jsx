'use client'

import Details from "@/components/product_details/Details";
import { useEffect, useState } from "react";



export default function Detail({ params }) {

  console.log(params);

  const [ pData , setData] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setData(data);
      
    })
  },[])

  
  
    return (
      <div>
         
        {/* <h1 className=" text-red-500 text-3xl">Details </h1> */}
         <Details product={pData} />
         
      </div>
    );
  }
  