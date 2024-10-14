import Link from 'next/link';
import React from 'react';


const Home = () => {

  return (
    
    
    <>
    
  {/* Hero */}
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Grid */}
    <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
      <div className="lg:col-span-3">
        <h1 className="block text-3xl font-bold text-emerald-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-emrald-600">
          Choose Eco-friendly, Choose A Better Future
        </h1>
        <p className="mt-3 text-lg text-gray-500 dark:text-neutral-500">
          Introducing a new way to harness the power of renewable energy and change the world.
        </p>
        <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          
          <Link
            className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="/browse"
          >
            Explore Products
          </Link>
          
        </div>
      </div>
      {/* End Col */}
      <div className="lg:col-span-4 mt-10 lg:mt-0">
        <img
          className="w-full rounded-xl"
          src="https://etimg.etb2bimg.com/photo/95217315.cms"
          alt="Hero Image"
        />

      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}


    <div>
    <>
  {/* Card Blog */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card */}
      <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div>
          <img src="https://img.freepik.com/free-photo/flat-lay-frame-with-make-up-products-flowers_23-2148301828.jpg?w=740&t=st=1728220374~exp=1728220974~hmac=a63116699cc36c8aecf370dbb8d442aea5b421b5ea3b812bd8f3c8e8d176cf3c"/>
           </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
            BEAUTY
          </span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Beauty
          </h3>
          <p className="mt-3 text-gray-500 dark:text-neutral-500">
            Enduring charm and refined beauty through eco-friendly products.

          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          <a
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            href="#"
          >
            View product
          </a>

        </div>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div>
          <img src='https://img.freepik.com/free-vector/new-arrival-shopping-template-vector-aesthetic-fashion-ad-poster-dual-set_53876-125740.jpg'/>

        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
            CLOTHING
          </span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-rose-600 dark:hover:text-white">
            Clothing
          </h3>
          <p className="mt-3 text-gray-500 dark:text-neutral-500">
            Minimalist and modern, exuding confidence and sophistication.
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          <a
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            href="#"
          >
            View products
          </a>
         
        </div>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div>
          <img src='https://img.freepik.com/free-photo/small-cacti-with-white-wall-background_53876-134297.jpg'/>

        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
            HOME AND GARDEN
          </span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Home And Garden
          </h3>
          <p className="mt-3 text-gray-500 dark:text-neutral-500">
            Step into the lush garden, where the vibrant flower create a serene escape.
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          <a
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            href="#"
          >
            View products
          </a>
          
        </div>
      </div>
      {/* End Card */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Card Blog */}
</>

    </div>
  </div>
  {/* End Hero */}

</>
  

    
  )
}

export default Home;
