import React from 'react'

const Notfound = () => {
  return (
    <div className='flex item-center justify-center'>
        <div>
            <img className='block w-1/2 mx-auto' src="/not found.jpg" alt="Not found"/>
            <h1 className='text-9xl font-bold text-center'>404</h1>
            <h4 className='text-3xl text-center '>Page Not Found</h4>
            <a herf="/"
            className='py-2 px-4 rounded-lg bg-gray-200 border mt-4 text-center block'


            >Back to Homepage</a>

        </div>

    </div>

  )
}

export default Notfound