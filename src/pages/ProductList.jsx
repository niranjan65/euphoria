// import React from 'react'
// import { GiSettingsKnobs } from "react-icons/gi";
// import { FaChevronRight } from "react-icons/fa6";

// const ProductList = () => {
//   return (
//     <div className='bg-red-400 w-screen'>
//         <div className='flex w-[1240px] justify-between mx-auto'>
//             <div className='w-[295px] h-[1708px] border-[#BEBCBD] border-[1px] '>

//               <div className='w-full h-[86px] border-b-[#BEBCBD] opacity-[80%] border-[1px] flex items-center justify-center'>
//                 <div className='h-[26px] w-[234.67px] flex justify-between'>
//                   <h1 className='text-[22px] text-[#807D7E] font-semibold'>Filter</h1>
//                   <GiSettingsKnobs style={{color: "#807D7E"}} />
//                 </div>
//               </div>

//               <div className='h-[315px] w-[230px] bg-blue-500 mx-auto flex flex-col justify-between'>

//                 <div className='flex justify-between'>
//                   <p className='text-[#8A8989]'>Tops</p>
//                   <FaChevronRight style={{color: "#8A8989"}} />
//                 </div>
//                 <div className='flex justify-between'>
//                   <p className='text-[#8A8989]'>Printed T-shirts</p>
//                   <FaChevronRight style={{color: "#8A8989"}} />
//                 </div>
//                 <div className='flex justify-between'>
//                   <p className='text-[#8A8989]'>Tops</p>
//                   <FaChevronRight style={{color: "#8A8989"}} />
//                 </div>
//                 <div className='flex justify-between'>
//                   <p className='text-[#8A8989]'>Tops</p>
//                   <FaChevronRight style={{color: "#8A8989"}} />
//                 </div>
//                 <div className='flex justify-between'>
//                   <p className='text-[#8A8989]'>Tops</p>
//                   <FaChevronRight style={{color: "#8A8989"}} />
//                 </div>
//                 <div className='flex justify-between'>
//                   <p className='text-[#8A8989]'>Tops</p>
//                   <FaChevronRight style={{color: "#8A8989"}} />
//                 </div>
//                 <div className='flex justify-between'>
//                   <p className='text-[#8A8989]'>Tops</p>
//                   <FaChevronRight style={{color: "#8A8989"}} />
//                 </div>
//                 <div className='flex justify-between'>
//                   <p className='text-[#8A8989]'>Tops</p>
//                   <FaChevronRight style={{color: "#8A8989"}} />
//                 </div>
//                 <div className='flex justify-between'>
//                   <p className='text-[#8A8989]'>Tops</p>
//                   <FaChevronRight style={{color: "#8A8989"}} />
//                 </div>

//               </div>

//             </div>
//             <div className='w-[900px] h-2 bg-green-400'></div>
//         </div>
//     </div>
//   )
// }

// export default ProductList














import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Heart, Filter } from 'lucide-react';

const ProductList = () => {
  const [priceRange, setPriceRange] = useState([70, 600]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [activeTab, setActiveTab] = useState('New');

  const products = [
    {
      id: 1,
      name: "Black Sweatshirt with ...",
      brand: "Jhanvi's Brand",
      price: 123.00,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop",
      colors: ["black"]
    },
    {
      id: 2,
      name: "White T-shirt",
      brand: "Helen's Brand",
      price: 111.00,
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=400&fit=crop",
      colors: ["white"]
    },
    {
      id: 3,
      name: "Lavender Hoodie with ...",
      brand: "Mia's Brand",
      price: 119.00,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      colors: ["purple"]
    },
    {
      id: 4,
      name: "Leaves Pattern White...",
      brand: "paypal's Brand",
      price: 77.00,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
      colors: ["white", "green"]
    },
    {
      id: 5,
      name: "White Graphic Crop Top",
      brand: "weden's Brand",
      price: 29.00,
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
      colors: ["white"]
    },
    {
      id: 6,
      name: "Black Shorts",
      brand: "Mia's Brand",
      price: 37.00,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
      colors: ["black"]
    },
    {
      id: 7,
      name: "Barboreal Gray Sweats...",
      brand: "Priya's Brand",
      price: 77.00,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop",
      colors: ["grey"]
    },
    {
      id: 8,
      name: "Yellow Sweatshirt",
      brand: "weden's Brand",
      price: 29.00,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      colors: ["yellow"]
    },
    {
      id: 9,
      name: "Flower Pattern Black C...",
      brand: "Mia's Brand",
      price: 37.00,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
      colors: ["black"]
    },
    {
      id: 10,
      name: "I Don't Graphic T-shirt",
      brand: "weden's Brand",
      price: 77.00,
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
      colors: ["beige"]
    },
    {
      id: 11,
      name: "Blue Flower Print Crop ...",
      brand: "weden's Brand",
      price: 29.00,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      colors: ["blue"]
    },
    {
      id: 12,
      name: "line Pattern Black H...",
      brand: "weden's Brand",
      price: 37.00,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop",
      colors: ["black"]
    }
  ];

  const categories = [
    "Tops", "Printed T-shirts", "Plain T-shirts", "Kurti", "Boxers", 
    "Full sleeve T-shirts", "Joggers", "Payjamas", "Jeans"
  ];

  const colors = [
    { name: "Purple", value: "purple", bg: "bg-purple-500" },
    { name: "Black", value: "black", bg: "bg-black" },
    { name: "Red", value: "red", bg: "bg-red-500" },
    { name: "Orange", value: "orange", bg: "bg-orange-500" },
    { name: "Navy", value: "navy", bg: "bg-blue-900" },
    { name: "White", value: "white", bg: "bg-white border border-gray-300" },
    { name: "Brown", value: "brown", bg: "bg-amber-800" },
    { name: "Green", value: "green", bg: "bg-green-500" },
    { name: "Yellow", value: "yellow", bg: "bg-yellow-400" },
    { name: "Grey", value: "grey", bg: "bg-gray-400" },
    { name: "Pink", value: "pink", bg: "bg-pink-400" },
    { name: "Blue", value: "blue", bg: "bg-blue-400" }
  ];

  const sizes = ["XXS", "XL", "XS", "S", "M", "L", "XXL", "3XL", "4XL"];

  const dressStyles = [
    "Classic", "Casual", "Business", "Sport", "Elegant", "Formal (evening)"
  ];

  const toggleColor = (color) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen overflow-y-auto border-r border-gray-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600 font-medium">Filter</span>
          </div>

          {/* Categories */}
          <div className="mb-8">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center justify-between py-2 text-gray-700 hover:text-black cursor-pointer">
                <span className="text-sm">{category}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            ))}
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-gray-800">Price</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="mb-4">
              <div className="relative">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{width: '60%'}}></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs bg-white border border-gray-300 px-2 py-1 rounded">$70</span>
                  <span className="text-xs bg-white border border-gray-300 px-2 py-1 rounded">$600</span>
                </div>
              </div>
            </div>
          </div>

          {/* Colors Filter */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-gray-800">Colors</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {colors.map((color) => (
                <div key={color.value} className="text-center">
                  <div 
                    className={`w-8 h-8 rounded-full ${color.bg} cursor-pointer mx-auto mb-1 ${
                      selectedColors.includes(color.value) ? 'ring-2 ring-blue-500 ring-offset-1' : ''
                    }`}
                    onClick={() => toggleColor(color.value)}
                  ></div>
                  <span className="text-xs text-gray-600">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-gray-800">Size</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-2 text-sm border rounded ${
                    selectedSizes.includes(size)
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => toggleSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Dress Style Filter */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-gray-800">Dress Style</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            {dressStyles.map((style, index) => (
              <div key={index} className="flex items-center justify-between py-2 text-gray-700 hover:text-black cursor-pointer">
                <span className="text-sm">{style}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Women's Clothing</h1>
            <div className="flex gap-4">
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-full ${
                  activeTab === 'New' 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab('New')}
              >
                New
              </button>
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-full ${
                  activeTab === 'Recommended' 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setActiveTab('Recommended')}
              >
                Recommended
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative group">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                  <p className="font-bold text-gray-800">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;