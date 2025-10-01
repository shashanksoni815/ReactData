import React, { useEffect } from 'react'
import axios from 'axios'

const UI = () => {

    useEffect(() => {
        const product = axios("https://fakestoreapi.com/products").then((response) => response.data).then((data) => data)
        console.log(product);
    })

  return (
    <>
        <div className="card">
            <div className="card-data">
                {
                    product.map((pro) => {
                    
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