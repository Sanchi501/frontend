'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const BrowseProducts = () => {

  const [productList, setProductList] = useState([]);;

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/product/getall')
    console.log(res.data);
    setProductList(res.data);
    
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  



  return (
    <div>
      <>
        {/* Card Blog */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-green-600">
              Every Purchase Brings A Step Towards A Greener Future.
            </h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Join a movememnt towards a wastefree world .
            </p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              productList.map(product => (
            <Link
              className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10"
              href={'/productdetails/'+product._id}
            >
              <div className="aspect-w-16 aspect-h-10">
                <img
                  className="w-full object-cover rounded-xl"
                  src={product.image}
                  alt="Blog Image"
                />
              </div>
              <p>{product.brand}</p>
              <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                {product.name}
              </h3>
              <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-teal-95  0 dark:text-teal-950">
                View Products
                <svg
                  className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </Link>
              ))
            }
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Blog */}
      </>

    </div>
  )
}

export default BrowseProducts;