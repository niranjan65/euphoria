import React from 'react'
import hero from '../images/shop-hero1.jpg'
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.png'
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'
import product4 from '../images/product4.png'
import product5 from '../images/Rectangle 74.png'
import product6 from '../images/Rectangle 75.png'
import product7 from '../images/Rectangle 76.png'
import product8 from '../images/Rectangle 77.png'
import product9 from '../images/Rectangle 78.png'
import photo1 from '../images/photo1.png'
import photo2 from '../images/photo2.png'
import shirt1 from '../images/shirt1.png'
import nike from '../images/nike.png'
import hm from '../images/hm.png'
import polo from '../images/polo.png'
import levis from '../images/levis.png'
import puma from '../images/puma.png'
import fem1 from '../images/fem1.png'
import fem2 from '../images/fem2.png'
import fem3 from '../images/fem3.png'
import fem4 from '../images/fem4.png'
import star from '../images/star.png'
import profile1 from '../images/profile1.png'
import profile2 from '../images/profile2.png'
import profile3 from '../images/profile3.png'
import women1 from '../images/women1.png'
import women2 from '../images/women2.png'
import women3 from '../images/women3.png'
import women4 from '../images/women4.png'
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { GoArrowDown, GoArrowRight } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
// import { Link } from 'react-router-dom' // Commented out for artifact compatibility

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[716px] overflow-hidden">
        <img
          src={hero}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg text-white space-y-6">
              <p className="text-2xl md:text-3xl font-medium">
                T-Shirt / Tops
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Summer Value Pack
              </h1>
              <p className="text-xl md:text-2xl font-medium">
                Cool / Colourful / Comfy
              </p>
              <button className="bg-white text-gray-800 text-xl font-bold py-4 px-12 rounded-lg hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img src={banner1} alt="Low Price Banner" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 p-8 text-white flex flex-col justify-center">
              <h3 className="text-lg font-extrabold mb-6">Low Price</h3>
              <div className="space-y-2 mb-6">
                <h2 className="text-3xl font-extrabold">High Coziness</h2>
                <h6 className="text-base font-medium">UPTO 50% OFF</h6>
              </div>
              <h6 className="text-xl font-extrabold">Explore Items</h6>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img src={banner2} alt="Summer Style Banner" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 p-8 text-white flex flex-col justify-center">
              <h3 className="text-lg font-extrabold mb-6">Beyoung Presents</h3>
              <div className="space-y-2 mb-6">
                <h2 className="text-3xl font-extrabold">Breezy Summer Style</h2>
                <h6 className="text-base font-medium">UPTO 50% OFF</h6>
              </div>
              <h6 className="text-xl font-extrabold">Explore Items</h6>
            </div>
          </div>
        </div>
      </div>

      {/* New Arrival */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <div className="w-1.5 h-8 rounded-full bg-purple-600 mr-4"></div>
          <h3 className="text-3xl font-semibold text-gray-800">New Arrival</h3>
        </div>

        <div className="flex items-center justify-between">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <IoMdArrowBack className="text-gray-800 text-2xl" />
          </button>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-1 mx-8">
            <div className="text-center">
              <img src={product1} alt="Knitted Joggers" className="w-full rounded-lg mb-4" />
              <a href="/product/1" className="text-xl font-bold text-gray-800 hover:text-purple-600 transition-colors">
                Knitted Joggers
              </a>
            </div>
            <div className="text-center">
              <img src={product2} alt="Full Sleeve" className="w-full rounded-lg mb-4" />
              <p className="text-xl font-bold text-gray-800">Full Sleeve</p>
            </div>
            <div className="text-center">
              <img src={product3} alt="Active T-Shirts" className="w-full rounded-lg mb-4" />
              <p className="text-xl font-bold text-gray-800">Active T-Shirts</p>
            </div>
            <div className="text-center">
              <img src={product4} alt="Urban Shirts" className="w-full rounded-lg mb-4" />
              <p className="text-xl font-bold text-gray-800">Urban Shirts</p>
            </div>
          </div>
          
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <IoMdArrowForward className="text-gray-800 text-2xl" />
          </button>
        </div>
      </div>

      {/* Big Saving Zone */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <div className="w-1.5 h-8 rounded-full bg-purple-600 mr-4"></div>
          <h3 className="text-3xl font-semibold text-gray-800">Big Saving Zone</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hawaiian Shirts */}
          <div className="relative col-span-1 lg:col-span-1 rounded-lg overflow-hidden">
            <img src={product5} alt="Hawaiian Shirts" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 p-6 text-white flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Hawaiian Shirts</h3>
                <p className="text-sm">Dress up in summer vibe</p>
                <p className="text-lg font-bold">UPTO 50% OFF</p>
              </div>
              <div className="space-y-4">
                <GoArrowDown className="text-2xl mx-auto" />
                <button className="border border-white px-6 py-2 rounded text-sm hover:bg-white hover:text-gray-800 transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Printed T-Shirt */}
          <div className="relative col-span-1 lg:col-span-1 rounded-lg overflow-hidden">
            <img src={product6} alt="Printed T-Shirt" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 p-6 text-white flex flex-col justify-between">
              <div className="space-y-4">
                <button className="bg-gray-800 px-4 py-2 rounded text-xs font-bold w-fit">
                  Limited Stock
                </button>
                <h3 className="text-2xl font-semibold">Printed T-Shirt</h3>
                <p className="text-sm">New Designs Every Week</p>
                <p className="text-lg font-bold">UPTO 40% OFF</p>
              </div>
              <div className="space-y-4">
                <GoArrowDown className="text-2xl mx-auto" />
                <button className="border border-white px-6 py-2 rounded text-sm hover:bg-white hover:text-gray-800 transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Cargo Joggers */}
          <div className="relative col-span-1 lg:col-span-1 rounded-lg overflow-hidden">
            <img src={product7} alt="Cargo Joggers" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 p-6 text-gray-800 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Cargo Joggers</h3>
                <p className="text-sm">Move with style & comfort</p>
                <p className="text-lg font-bold">UPTO 50% OFF</p>
              </div>
              <div className="space-y-4">
                <GoArrowDown className="text-2xl mx-auto" />
                <button className="border border-gray-800 px-6 py-2 rounded text-sm hover:bg-gray-800 hover:text-white transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Urban Shirts */}
          <div className="relative col-span-1 md:col-span-2 lg:col-span-2 rounded-lg overflow-hidden">
            <img src={product8} alt="Urban Shirts" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 p-6 text-gray-800 flex flex-col justify-center items-center text-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold">Urban Shirts</h3>
                <p className="text-lg">Live In Comfort</p>
                <p className="text-xl font-bold">FLAT 60% OFF</p>
                <GoArrowDown className="text-2xl mx-auto" />
                <button className="border border-gray-800 px-8 py-3 rounded text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Oversized T-Shirts */}
          <div className="relative col-span-1 rounded-lg overflow-hidden">
            <img src={product9} alt="Oversized T-Shirts" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 p-6 text-gray-800 flex flex-col justify-center text-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Oversized T-Shirts</h3>
                <p className="text-base">Street Style Icon</p>
                <p className="text-xl font-bold">FLAT 60% OFF</p>
                <GoArrowDown className="text-2xl mx-auto" />
                <button className="border border-gray-800 px-6 py-2 rounded text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fashion Banner */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="relative rounded-lg overflow-hidden">
            <img src={photo2} alt="Fashion Banner" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 p-8 text-white flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-6">
                WE MADE YOUR EVERYDAY FASHION BETTER!
              </h1>
              <p className="text-lg mb-8 leading-relaxed">
                In our journey to improve everyday fashion, euphoria presents
                EVERYDAY wear range - Comfortable & Affordable fashion 24/7
              </p>
              <button className="bg-white text-gray-800 text-lg font-semibold py-3 px-8 rounded-lg w-fit hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={photo1} alt="Fashion Model" className="rounded-lg max-w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Categories For Men */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <div className="w-1.5 h-8 rounded-full bg-purple-600 mr-4"></div>
          <h3 className="text-3xl font-semibold text-gray-800">Categories For Men</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array(8).fill(null).map((_, index) => (
            <div key={index} className="group cursor-pointer">
              <img src={shirt1} alt="Shirts" className="w-full rounded-lg mb-4 group-hover:shadow-lg transition-shadow" />
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    Shirts
                  </h2>
                  <p className="text-sm text-gray-500">Explore Now!</p>
                </div>
                <GoArrowRight className="text-gray-400 group-hover:text-purple-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories For Women */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <div className="w-1.5 h-8 rounded-full bg-purple-600 mr-4"></div>
          <h3 className="text-3xl font-semibold text-gray-800">Categories For Women</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[women1, women2, women3, women4].map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <img src={image} alt="Women's Fashion" className="w-full rounded-lg mb-4 group-hover:shadow-lg transition-shadow" />
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    Shirts
                  </h2>
                  <p className="text-sm text-gray-500">Explore Now!</p>
                </div>
                <GoArrowRight className="text-gray-400 group-hover:text-purple-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Brands */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gray-800 rounded-xl p-12 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
            Top Brands Deal
          </h2>
          <p className="text-white text-xl mb-12">
            Up To <span className="font-bold text-yellow-400">60%</span> off on brands
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[nike, hm, levis, polo, puma].map((brand, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-lg transition-shadow">
                <img src={brand} alt="Brand Logo" className="max-h-12 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* In The Limelight */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <div className="w-1.5 h-8 rounded-full bg-purple-600 mr-4"></div>
          <h3 className="text-3xl font-semibold text-gray-800">In The Limelight</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { image: fem1, title: "Black Sweatshirt with ....", brand: "Jhanvi's Brand", price: "$123.00" },
            { image: fem2, title: "line Pattern Black H...", brand: "AS's Brand", price: "$123.00" },
            { image: fem3, title: "Black Shorts", brand: "MM's Brand", price: "$37.00" },
            { image: fem4, title: "Levender Hoodie with", brand: "Nike's Brand", price: "$119.00" }
          ].map((product, index) => (
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

      {/* Feedback */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center mb-8">
          <div className="w-1.5 h-8 rounded-full bg-purple-600 mr-4"></div>
          <h3 className="text-3xl font-semibold text-gray-800">Feedback</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              profile: profile1, 
              name: "Floyd Miles", 
              review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." 
            },
            { 
              profile: profile2, 
              name: "Ronald Richards", 
              review: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." 
            },
            { 
              profile: profile3, 
              name: "Savannah Nguyen", 
              review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." 
            }
          ].map((feedback, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <img src={feedback.profile} alt={feedback.name} className="w-12 h-12 rounded-full" />
                <img src={star} alt="Rating" className="h-6" />
              </div>
              <h2 className="text-xl font-medium text-gray-800 mb-4">{feedback.name}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{feedback.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home