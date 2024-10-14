'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ProductList = () => {

  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  const fetchProductData = async () => {
    const res = await axios.get('http://localhost:5000/product/getbyid/' + id)
    console.log(res.data);
    setProductData(res.data);

  }

  useEffect(() => {
    fetchProductData();
  }, [])


  return (
    <div>
      <>
        {/* Blog Article */}
        <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl">
            {
              productData !== null ? (

                <div className="space-y-5 md:space-y-8 grid-cols-2">
                  <div>
                    <figure>
                      <img
                        className="w-full object-cover rounded-xl"
                        src={productData.image}
                        alt="Blog Image"
                      />
                    </figure>

                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold md:text-3xl dark:text-white">
                      {productData.name}
                    </h2>
                    <p>{productData.description}</p>
                    <p>₹{productData.price}</p>
                  </div>

                </div>
              ) : (
                  <h2 className='text-center font-bold text-2xl'>Loading ...</h2>
                )
            }
          </div>
        </div>
      </>

    </div>
  )
}

export default ProductList; 