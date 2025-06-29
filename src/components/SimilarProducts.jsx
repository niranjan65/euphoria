import React from 'react'
import fem1 from '../images/fem1.png'
import fem2 from '../images/fem2.png'
import fem3 from '../images/fem3.png'
import fem4 from '../images/fem4.png'
import Similar1 from '../images/similar1.png'
import Similar2 from '../images/similar2.png'
import Similar4 from '../images/similar4.png'
import Similar5 from '../images/similar5.png'
import Similar6 from '../images/similar6.png'
import Similar7 from '../images/similar7.png'
import { CiHeart } from 'react-icons/ci'

const SimilarProducts = () => {
  // Product data array to avoid repetition
  const products = [
    { id: 1, image: Similar1, name: "Black Sweatshirt with ....", brand: "Jhanvi's Brand", price: "$123.00" },
    { id: 2, image: Similar2, name: "line Pattern Black H...", brand: "AS's Brand", price: "$123.00" },
    { id: 3, image: fem3, name: "Black Shorts", brand: "MM's Brand", price: "$37.00" },
    { id: 4, image: fem4, name: "Levender Hoodie with", brand: "Nike's Brand", price: "$119.00" },
    { id: 5, image: Similar4, name: "Black Sweatshirt with ....", brand: "Jhanvi's Brand", price: "$123.00" },
    { id: 6, image: Similar5, name: "Black Sweatshirt with ....", brand: "Jhanvi's Brand", price: "$123.00" },
    { id: 7, image: Similar6, name: "line Pattern Black H...", brand: "AS's Brand", price: "$123.00" },
    { id: 8, image: Similar7, name: "Black Shorts", brand: "MM's Brand", price: "$37.00" },
   
  ];

  return (
    <div className="container mx-auto px-4 py-16">
            <div className="flex items-center mb-8">
              <div className="w-1.5 h-8 rounded-full bg-purple-600 mr-4"></div>
              <h3 className="text-3xl font-semibold text-gray-800">Similar Products</h3>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div key={index} className="group">
                  <div className="relative mb-4">
                    <img src={product.image} alt={product.title} className="w-full rounded-xl" />
                    <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <CiHeart className="text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500">{product.brand}</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg px-3 py-2 ml-4">
                      <p className="text-sm font-bold">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  )
}

export default SimilarProducts