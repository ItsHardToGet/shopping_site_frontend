import React from 'react'
import { Link } from 'react-router-dom'
 

const ProductServices = ({children} ) => {

  //  console.log(children[1])
  return (
    <div>
      
    
<div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{children[1].title}</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={children[1].thumbnail
} alt="Front of men&#039;s Basic Tee in black." className="size-full object-cover object-center lg:size-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link to={`/Desc/${children[1].id}`}>
                <span aria-hidden="true" className="absolute inset-0"></span>
                Description
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500"> <button> Ratings: {children[1].rating}/5</button> </p>
          </div>
          <p className="text-sm font-medium text-gray-900">{children[1].price}</p>
        </div>
      </div>

     
    </div>
  </div>
</div>

    </div>
  )
}

export default ProductServices
