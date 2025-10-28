import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../App.css"

const UI = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const demo = async() => {

            const pro = await fetch("https://fakestoreapi.com/products").then((response) => response.json())
            console.log(pro)
            setProducts(pro)
        }
        demo()
    },[])

  return (
    <>
        <div className="card">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {
                    products.map((pro) => {
                        return(
                            <div className='group relative' key={pro.id}>
                                {/* <img src={pro.} alt="" /> */}
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            {pro.title}
                                        </a>
                                        </h3>
                                        <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            {pro.category}
                                        </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{pro.description}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{pro.price}</p>
                                </div>
                            </div>
                        )
                            
                        
                    })
                }
            </div>
        </div>
    </>
  )
}

export default UI

// <div class="bg-white">
//   <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//     <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

//     <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//       <div class="group relative">
//         <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
//         <div class="mt-4 flex justify-between">
//           <div>
//             <h3 class="text-sm text-gray-700">
//               <a href="#">
//                 <span aria-hidden="true" class="absolute inset-0"></span>
//                 Basic Tee
//               </a>
//             </h3>
//             <p class="mt-1 text-sm text-gray-500">Black</p>
//           </div>
//           <p class="text-sm font-medium text-gray-900">$35</p>
//         </div>
//       </div>