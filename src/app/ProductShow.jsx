'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/product_details/ProductCard';

const ProductShow = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
        .then((res) => res.json())
        .then((data) => {
           
            setProduct(data.products);
        })
    }, [])
    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-2 md:p-5'>
      {product?.length === 0 ? (
        <p>Loading.....</p>
      ) : (
        product?.map((item) => (
          <ProductCard key={item?.id} product={item} />
        ))
      )}
    </div>
    );
};

export default ProductShow;