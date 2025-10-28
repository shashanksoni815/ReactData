import React, { useEffect } from 'react'
import all_product from '../assets/Frontend_Assets/all_product.js'

const Home = () => {

    // useEffect(() => {
    //     const productInfo = fetch(all_product).then((res) => res)
    //     console.log(productInfo)
    // })

  return (
    <div>
        {
            all_product.map((item) => {
                return <div key={item.id}>
                    <h1>{item.name}</h1>
                    <img src={item.image} alt="" />
                    <h3>{item.new_price}</h3>
                </div>
            })
        }
    </div>
  )
}

export default Home