import React from 'react'
import model1 from "../images/model1.png"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, ChevronRight, ChevronUp, CreditCard, GitCompareArrows, MessageSquareText, Shirt, ShoppingCart, Star, Truck } from 'lucide-react'
import ProductDescriptionSection from '../components/ProductDescriptionSection'
import SimilarProducts from '../components/SimilarProducts'

const SingleProduct = () => {
  return (
    <div className=' w-screen '>
      {/* cart section */}
      <div className='w-full flex'>
        <div className='h-[784px] w-[241px]  flex items-center justify-center bg-[#F6F6F6]'>
            <div className='flex flex-col gap-8 justify-center items-center'>
                {/* images */}
                <div className='flex flex-col gap-6'>
                    <div className='h-[68px] w-[68px]'>
                        <img src={model1} className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className='h-[68px] w-[68px]'>
                        <img src={model1} className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                    <div className='h-[68px] w-[68px]'>
                        <img src={model1} className='w-full h-full object-cover rounded-lg' alt="" />
                    </div>
                </div>

                {/* arrow button */}
                <div className='flex flex-col gap-[12.17px]'>
                    <div className='w-[21.7px] h-[21.7px] shadow bg-white rounded-full flex items-center justify-center'>
                        <ChevronUp color='#3C4242' />
                    </div>
                    <div className='w-[21.7px] h-[21.7px] bg-[#3C4242] rounded-full flex items-center justify-center'>
                        <ChevronDown color='white' />
                    </div>
                </div>
            </div>
        </div>

        <div className='h-[785px] w-[520px] '>
            <img src={model1} alt="" className='w-full' />
        </div>

              <div className='py-8 px-24 text-[18px] flex flex-col gap-8'>
                  <Breadcrumb>
                      <BreadcrumbList>
                          <BreadcrumbItem>
                              <BreadcrumbLink asChild>
                                  <Link href="/">Home</Link>
                              </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />


                          <BreadcrumbItem>
                              <BreadcrumbLink asChild>
                                  <Link href="/docs/components">Components</Link>
                              </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
                          <BreadcrumbItem>
                              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                          </BreadcrumbItem>
                      </BreadcrumbList>
                  </Breadcrumb>

                  <div className='w-[393px] text-[34px] font-bold text-[#3C4242]'>
                    <h1>Raven Hoodie With Black colored Design</h1>
                  </div>

                  <div className='flex gap-[25px]'>
                    {/* stars */}
                    <div className='flex gap-[10px] items-center'>
                        <Star color='#EDD146' size={22} fill='#EDD146'/>
                        <Star color='#EDD146' size={22} fill='#EDD146'/>
                        <Star color='#EDD146' size={22} fill='#EDD146'/>
                        <Star color='#EDD146' size={22} fill='#EDD146'/>
                        <Star color='#EDD146' size={22} fill='#EDD146'/>

                        <p className='text-[#807D7E] font-medium'>3.5</p>
                    </div>

                    {/* comments */}

                    <div className='flex items-center gap-[15px]'>
                        <MessageSquareText size={20} color='#807D7E' />

                        <p className='text-[#807D7E] font-medium'>120 comment</p>
                    </div>

                  </div>

                  {/* sizes */}
                  <div className='flex flex-col gap-[25px]'>
                    <div className='flex gap-5'>
                        <h1 className='text-[#3F4646] font-semibold'>Select Size</h1>

                        <p className='text-[#807D7E] font-medium flex gap-[15px]'>Size Guide <ArrowRight /></p>
                    </div>

                    <div className='flex gap-5'>
                        <div className='h-[42px] w-[42px] border-2 border-[#BEBCBD] rounded-[15px] flex items-center justify-center'>
                            <p className='text-[#3C4242] font-medium text-[14px]'>XS</p>
                        </div>
                        <div className='h-[42px] w-[42px] border-2 border-[#BEBCBD] rounded-[15px] flex items-center justify-center'>
                            <p className='text-[#3C4242] font-medium text-[14px]'>S</p>
                        </div>
                        <div className='h-[42px] w-[42px] border-2 border-[#BEBCBD] rounded-[15px] flex items-center justify-center'>
                            <p className='text-[#3C4242] font-medium text-[14px]'>M</p>
                        </div>
                        <div className='h-[42px] w-[42px] bg-[#3C4242] border-2 border-[#3C4242] rounded-[15px] flex items-center justify-center'>
                            <p className='text-[#FFFFFF] font-medium text-[14px]'>L</p>
                        </div>
                        <div className='h-[42px] w-[42px] border-2 border-[#BEBCBD] rounded-[15px] flex items-center justify-center'>
                            <p className='text-[#3C4242] font-medium text-[14px]'>XL</p>
                        </div>
                    </div>
                  </div>

                  {/* Available Colours */}
                  <div className='flex flex-col gap-[25px] text-[18px]'>
                    <div >
                        <h1 className='text-[#3F4646] font-semibold'>Colours Available</h1>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <div className='h-[30px] w-[30px] border border-[#3C4246] rounded-full flex items-center justify-center'>
                            <div className='h-[22px] w-[22px] bg-[#3C4242] rounded-full'></div>
                        </div>

                        <div className='h-[22px] w-[22px] bg-[#EDD146] rounded-full'></div>
                        <div className='h-[22px] w-[22px] bg-[#EB84B0] rounded-full'></div>
                        <div className='h-[22px] w-[22px] bg-[#9C1F35] rounded-full'></div>
                        
                    </div>
                  </div>

                  {/* Add to Cart button */}
                  <div className='text-[18px] flex gap-[25px]'>
                    <button className='px-[40px] py-[12px] bg-[#8A33FD] flex gap-3 text-white items-center rounded-[10px]'>
                        <ShoppingCart color='white' size={20} />
                        <p className='font-semibold'>Add to cart</p>
                    </button>

                    <button className='px-[40px] py-[12px] border border-[#3C4242] flex gap-3 text-[#3C4242] items-center rounded-[10px]'>                       
                        <p className='font-bold'>$63.00</p>
                    </button>
                  </div>

                  <div className='w-[534px] border border-[#BEBCBD]'></div>

                    {/* options */}
                  <div className='grid grid-cols-2 gap-8'>
                    <div className='w-[219px] flex items-center gap-[15px]'>
                        <div className='h-[44px] w-[44px] bg-[#f6f6f6] rounded-full flex items-center justify-center'>
                            <CreditCard color='#3C4242' fill='#f6f6f6' />
                        </div>

                        <h1 className='text-[#3C4242] text-[18px] font-medium'>Secure Payment</h1>
                    </div>
                    <div className='w-[219px] flex items-center gap-[15px]'>
                        <div className='h-[44px] w-[44px] bg-[#f6f6f6] rounded-full flex items-center justify-center'>
                            <Shirt color='#3C4242' fill='#f6f6f6' />
                        </div>

                        <h1 className='text-[#3C4242] text-[18px] font-medium'>Size & Fit</h1>
                    </div>
                    <div className='w-[219px] flex items-center gap-[15px]'>
                        <div className='h-[44px] w-[44px] bg-[#f6f6f6] rounded-full flex items-center justify-center'>
                            <Truck color='#3C4242' fill='#f6f6f6' />
                        </div>

                        <h1 className='text-[#3C4242] text-[18px] font-medium'>Free Shipping</h1>
                    </div>
                    <div className='w-[219px] flex items-center gap-[15px]'>
                        <div className='h-[44px] w-[44px] bg-[#f6f6f6] rounded-full flex items-center justify-center'>
                            <GitCompareArrows color='#3C4242' fill='#f6f6f6' />
                        </div>

                        <h1 className='text-[#3C4242] text-[18px] font-medium'>Free Shipping & Returns</h1>
                    </div>
                  </div>
              </div>
      </div>

      <ProductDescriptionSection />
      <SimilarProducts />
    </div>
  )
}

export default SingleProduct
