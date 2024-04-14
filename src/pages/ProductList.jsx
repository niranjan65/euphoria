import React from 'react'
import { GiSettingsKnobs } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa6";

const ProductList = () => {
  return (
    <div className='bg-red-400 w-screen'>
        <div className='flex w-[1240px] justify-between mx-auto'>
            <div className='w-[295px] h-[1708px] border-[#BEBCBD] border-[1px] '>

              <div className='w-full h-[86px] border-b-[#BEBCBD] opacity-[80%] border-[1px] flex items-center justify-center'>
                <div className='h-[26px] w-[234.67px] flex justify-between'>
                  <h1 className='text-[22px] text-[#807D7E] font-semibold'>Filter</h1>
                  <GiSettingsKnobs style={{color: "#807D7E"}} />
                </div>
              </div>

              <div className='h-[315px] w-[230px] bg-blue-500 mx-auto flex flex-col justify-between'>

                <div className='flex justify-between'>
                  <p className='text-[#8A8989]'>Tops</p>
                  <FaChevronRight style={{color: "#8A8989"}} />
                </div>
                <div className='flex justify-between'>
                  <p className='text-[#8A8989]'>Printed T-shirts</p>
                  <FaChevronRight style={{color: "#8A8989"}} />
                </div>
                <div className='flex justify-between'>
                  <p className='text-[#8A8989]'>Tops</p>
                  <FaChevronRight style={{color: "#8A8989"}} />
                </div>
                <div className='flex justify-between'>
                  <p className='text-[#8A8989]'>Tops</p>
                  <FaChevronRight style={{color: "#8A8989"}} />
                </div>
                <div className='flex justify-between'>
                  <p className='text-[#8A8989]'>Tops</p>
                  <FaChevronRight style={{color: "#8A8989"}} />
                </div>
                <div className='flex justify-between'>
                  <p className='text-[#8A8989]'>Tops</p>
                  <FaChevronRight style={{color: "#8A8989"}} />
                </div>
                <div className='flex justify-between'>
                  <p className='text-[#8A8989]'>Tops</p>
                  <FaChevronRight style={{color: "#8A8989"}} />
                </div>
                <div className='flex justify-between'>
                  <p className='text-[#8A8989]'>Tops</p>
                  <FaChevronRight style={{color: "#8A8989"}} />
                </div>
                <div className='flex justify-between'>
                  <p className='text-[#8A8989]'>Tops</p>
                  <FaChevronRight style={{color: "#8A8989"}} />
                </div>

              </div>

            </div>
            <div className='w-[900px] h-2 bg-green-400'></div>
        </div>
    </div>
  )
}

export default ProductList