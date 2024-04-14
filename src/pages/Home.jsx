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

const Home = () => {
  return (
    <div className="w-screen flex flex-col gap-[150px]">
      <div className="w-full h-[716px]">
        <img
          src={hero}
          alt=""
          className="w-full h-[716px] min-h-fit absolute"
        />
        <div className="w-[439px] h-[455px] relative top-[129px] left-[193px] flex flex-col justify-between text-white">
          <p className="text-[32px] font-medium leading-[37.77px]">
            T-Shirt / Tops
          </p>
          <h1 className="text-[78px] font-extrabold leading-[93.62px]">
            Summer Value Pack
          </h1>
          <p className="text-[32px] font-medium leading-[47.21px]">
            Cool / Colourful / Comfy
          </p>
          <button className="w-[250px] h-[61px] bg-white py-4 px-[72px] rounded-lg">
            <p className="text-[#3C4242] text-[24px] leading-[28.8px] font-bold w-[117px]">
              Shop Now
            </p>
          </button>
        </div>
      </div>

      <div className="w-[1239.87px] h-[356.2px] mx-auto flex justify-between">
        {/* Banner Cards */}
        <div className="w-[604.93px] h-[356.2px] drop-shadow-3xl">
          <img src={banner1} alt="" className="absolute rounded-[12px]" />
          <div className="relative text-white top-[67.29px] left-[28.12px] ">
            <h3 className="text-[18px] font-extrabold">Low Price</h3>
            <div className="mt-9">
              <h2 className="text-[32px] font-extrabold">High Coziness</h2>
              <h6 className="text-[16px] font-medium">UPTO 50% OFF</h6>
            </div>
            <h6 className="text-[20px] font-extrabold mt-9">Explore Items</h6>
          </div>
        </div>
        <div className="w-[604.93px] h-[356.2px] drop-shadow-3xl">
          <img src={banner2} alt="" className="absolute rounded-[12px]" />
          <div className="relative text-white top-[57px] left-[30.07px] ">
            <h3 className="text-[18px] font-extrabold">Beyoung Presents</h3>
            <div className="mt-9">
              <h2 className="text-[32px] font-extrabold w-[20rem]">
                Breezy Summer Style
              </h2>
              <h6 className="text-[16px] font-medium">UPTO 50% OFF</h6>
            </div>
            <h6 className="text-[20px] font-extrabold mt-9">Explore Items</h6>
          </div>
        </div>
      </div>

      {/* New Arrival */}
      <div className="w-[1238.59px] h-[415.67px] mx-auto flex flex-col gap-7 ">
        <div className="flex items-center">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8A33FD]"></div>
          <h3 className="text-[34px] font-semibold ml-4 text-[#3C4242]">
            New Arrival
          </h3>
        </div>

        {/* products */}
        <div className="w-[1237.59px] h-[313.67px] flex items-center justify-between">
          <IoMdArrowBack style={{ color: "#3C4242" }} />
          <div className="w-[1167px] h-[319.67px] flex gap-[38.58px]">
            {/* product 1 */}
            <div className="w-[262.81px] h-[319.67px] flex flex-col justify-between">
              <img src={product1} alt="" />
              <p className="text-[20px] font-bold text-[#3C4242]">
                Knitted Joggers
              </p>
            </div>
            <div className="w-[262.81px] h-[319.67px] flex flex-col justify-between">
              <img src={product2} alt="" />
              <p className="text-[20px] font-bold text-[#3C4242]">
                Full Sleeve
              </p>
            </div>
            <div className="w-[262.81px] h-[319.67px] flex flex-col justify-between">
              <img src={product3} alt="" />
              <p className="text-[20px] font-bold text-[#3C4242]">
                Active T-Shirts
              </p>
            </div>
            <div className="w-[262.81px] h-[319.67px] flex flex-col justify-between">
              <img src={product4} alt="" />
              <p className="text-[20px] font-bold text-[#3C4242]">
                Urban Shirts
              </p>
            </div>
          </div>
          <IoMdArrowForward style={{ color: "#3C4242" }} />
        </div>
      </div>

      {/* Big Saving Zone */}
      <div className="w-[1240px] h-[908px] mx-auto flex flex-col justify-between">
        <div className="flex items-center">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8A33FD]"></div>
          <h3 className="text-[34px] font-semibold ml-4 text-[#3C4242]">
            Big Saving Zone
          </h3>
        </div>

        <div className="w-[1240px] h-[806px] grid grid-cols-6 gap-5 ">
          <div className="col-span-2 text-white">
            <img src={product5} alt="" className="absolute" />
            <div className="w-[147px] h-[263.84px] top-[64.4px] left-[20px] relative flex flex-col justify-between">
              <h3 className="text-[28px] leading-[38.43px] font-semibold">
                Hawaiian Shirts
              </h3>
              <p className="text-[13px] font-semibold">
                Dress up in summer vibe
              </p>
              <p className="text-[18px] font-bold -mt-5">UPTO 50% OFF</p>
              <GoArrowDown
                style={{ height: "23.85px", width: "27px", marginLeft: "41px" }}
              />
              <button className="py-4 px-2 border-white border-[1px] w-[111px] h-[34px] flex justify-center items-center rounded-[4px] text-[12px]">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <img src={product6} alt="" className="absolute" />
            <div className="w-[153px] h-[317.67px] top-[34.33px] left-[222px] relative flex flex-col row-end-1 justify-between text-white">
              <button className="py-4 px-2 bg-[#3C4242] w-[104px] h-[34px] flex justify-center items-center rounded-[4px] text-[12px] font-bold">
                Limited Stock
              </button>
              <h3 className="text-[28px] leading-[38.43px] font-semibold">
                Printed T-Shirt
              </h3>
              <p className="text-[13px] font-semibold">
                New Designs Every Week
              </p>
              <p className="text-[18px] font-bold -mt-5">UPTO 40% OFF</p>
              <GoArrowDown
                style={{ height: "23.85px", width: "27px", marginLeft: "41px" }}
              />
              <button className="py-4 px-2 border-white border-[1px] w-[111px] h-[34px] flex justify-center items-center rounded-[4px] text-[12px]">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <img src={product7} alt="" className="absolute" />
            <div className="w-[147px] h-[263.84px] top-[64.4px] left-[227px] relative flex flex-col justify-between text-[#3C4242]">
              <h3 className="text-[28px] leading-[38.43px] font-semibold">
                Cargo Joggers
              </h3>
              <p className="text-[13px] font-semibold w-[157px]">
                Move with style & comfort
              </p>
              <p className="text-[18px] font-bold -mt-5">UPTO 50% OFF</p>
              <GoArrowDown
                style={{ height: "23.85px", width: "27px", marginLeft: "41px" }}
              />
              <button className="py-4 px-2 border-[#3C4242] border-[1px] w-[111px] h-[34px] flex justify-center items-center rounded-[4px] text-[12px]">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <img src={product8} alt="" className="absolute" />
            <div className="w-[133px] h-[296.91px] top-[45.42px] left-[357px] relative flex flex-col justify-between text-[#3C4242]">
              <h3 className="text-[32px] leading-[43.92px] font-semibold">
                Urban Shirts
              </h3>
              <p className="text-[16px] font-semibold w-[157px]">
                Live In Confort
              </p>
              <p className="text-[20px] font-bold -mt-5">FLAT 60% OFF</p>
              <GoArrowDown
                style={{ height: "23.85px", width: "27px", marginLeft: "41px" }}
              />
              <button className="py-4 px-2 border-[#3C4242] border-[1px] w-[111px] h-[34px] flex justify-center items-center rounded-[4px] text-[12px] font-semibold">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <img src={product9} alt="" className="absolute" />
            <div className="w-[133px] h-[296.91px] top-[45.42px] left-[357px] relative flex flex-col justify-between text-[#3C4242]">
              <h3 className="text-[32px] leading-[43.92px] font-semibold">
                Oversized T-Shirts
              </h3>
              <p className="text-[16px] font-semibold w-[157px]">
                Street Style Icon
              </p>
              <p className="text-[20px] font-bold -mt-5">FLAT 60% OFF</p>
              <GoArrowDown
                style={{ height: "23.85px", width: "27px", marginLeft: "41px" }}
              />
              <button className="py-4 px-2 border-[#3C4242] border-[1px] w-[111px] h-[34px] flex justify-center items-center rounded-[4px] text-[12px] font-semibold">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="w-[1240px] h-[640.06px] flex mx-auto justify-between">
        <div>
          <img src={photo2} alt="" className="absolute" />
          <div className="w-[466px] h-[282px] relative top-[183px] left-[74px] text-white flex flex-col justify-between">
            <h1 className="text-[34px] font-extrabold ">
              WE MADE YOUR EVERYDAY FASHION BETTER!
            </h1>
            <p className="text-[20px] font-light ">
              In our journey to improve everyday fashion, euphoria presents
              EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </p>
            <div>
              <button className="bg-white text-[18px] text-[#3C4242] font-semibold py-3 px-11 rounded-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={photo1} alt="" />
        </div>
      </div>

      {/* categories for men */}
      <div className="w-[1240px] h-[1054px] mx-auto flex flex-col justify-between">
        <div className="flex items-center">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8A33FD]"></div>
          <h3 className="text-[34px] font-semibold ml-4 text-[#3C4242]">
            Categories For Men
          </h3>
        </div>

        <div className="w-[1240px] h-[952px] grid grid-cols-4">
          {/* Cards */}

          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <img src={shirt1} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight style={{ color: "#797979", width: "17.88px" }} />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <img src={shirt1} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight style={{ color: "#797979", width: "17.88px" }} />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <img src={shirt1} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight style={{ color: "#797979", width: "17.88px" }} />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <img src={shirt1} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight style={{ color: "#797979", width: "17.88px" }} />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <img src={shirt1} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight style={{ color: "#797979", width: "17.88px" }} />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <img src={shirt1} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight style={{ color: "#797979", width: "17.88px" }} />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <img src={shirt1} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight style={{ color: "#797979", width: "17.88px" }} />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <img src={shirt1} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight style={{ color: "#797979", width: "17.88px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* categories for Women */}
      <div className="w-[1240px] h-[553px] mx-auto flex flex-col justify-between">
        <div className="flex items-center">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8A33FD]"></div>
          <h3 className="text-[34px] font-semibold ml-4 text-[#3C4242]">
            Categories For Women
          </h3>
        </div>

        <div className="w-[1240px] h-[451px] grid grid-cols-4">
          {/* Cards */}

          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <img src={women1} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight style={{ color: "#797979", width: "17.88px" }} />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <img src={women2} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight style={{ color: "#797979", width: "17.88px" }} />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <img src={women3} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight style={{ color: "#797979", width: "17.88px" }} />
              </div>
            </div>
          </div>
          <div className="w-[270.36px] h-[451.35px] flex flex-col justify-between ">
            <img src={women4} alt="" className="rounded-[10px]" />
            <div className="w-full h-[42.45px] flex justify-between items-center">
              <div className="left w-[179.31px] h-full flex flex-col justify-between">
                <h2 className="text-[#2A2F2F] text-[17.88px] font-bold">
                  Shirts
                </h2>
                <p className="text-[#7F7F7F] text-[13.41px]">Explore Now!</p>
              </div>
              <div className="right">
                <GoArrowRight style={{ color: "#797979", width: "17.88px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Brands */}
      <div className="h-[357.17px] w-[1233px] mx-auto rounded-xl bg-[#323232] flex flex-col justify-around">
        <div>
          <h2 className="text-white text-[50px] font-extrabold text-center">
            Top Brands Deal
          </h2>
          <p className="text-[22px] font-normal text-white text-center mt-5">
            Up To <span className="font-bold text-[#FBD103]">60%</span> off on
            brands
          </p>
        </div>

        <div className="h-[85.55px] w-[985.97px] mx-auto flex gap-5">
          <div className="h-full w-[177.52px] bg-white rounded-xl flex items-center justify-center">
            <img src={nike} alt="" />
          </div>
          <div className="h-full w-[177.52px] bg-white rounded-xl flex items-center justify-center">
            <img src={hm} alt="" />
          </div>
          <div className="h-full w-[177.52px] bg-white rounded-xl flex items-center justify-center">
            <img src={levis} alt="" />
          </div>
          <div className="h-full w-[177.52px] bg-white rounded-xl flex items-center justify-center">
            <img src={polo} alt="" />
          </div>
          <div className="h-full w-[177.52px] bg-white rounded-xl flex items-center justify-center">
            <img src={puma} alt="" />
          </div>
        </div>
      </div>

      {/* In the Limelight */}
      <div className="w-[1238px] h-[543px] mx-auto flex flex-col justify-between">
        <div className="flex items-center">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8A33FD]"></div>
          <h3 className="text-[34px] font-semibold ml-4 text-[#3C4242]">
            In The Limelight
          </h3>
        </div>

        <div className="w-[1236px] h-[441px] flex gap-9">
          {/* product card */}

          <div className="w-[282px] h-full flex flex-col justify-between">
            <div>
              <img src={fem1} alt="" className="rounded-xl absolute" />
              <div className="w-[32.36px] h-[32.36px] relative left-[221px] top-5 bg-white rounded-[50%] flex items-center justify-center">
                <CiHeart />
              </div>
            </div>

            <div className="w-full h-[41px] flex justify-between">
              <div className="left w-[166px] h-full">
                <h3 className="text-[15px] text-[#3C4242] font-semibold">
                  Black Sweatshirt with ....
                </h3>
                <p className="text-[14px] font-medium text-[#807D7E]">
                  Jhanvi’s Brand
                </p>
              </div>
              <div className="right">
                <div className="h-[36.58px] w-[82.31px] bg-[#F6F6F6] rounded-lg flex items-center justify-center">
                  <p className="text-[14px] font-bold">$123.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[282px] h-full flex flex-col justify-between">
            <div>
              <img src={fem2} alt="" className="rounded-xl absolute" />
              <div className="w-[32.36px] h-[32.36px] relative left-[221px] top-5 bg-white rounded-[50%] flex items-center justify-center">
                <CiHeart />
              </div>
            </div>

            <div className="w-full h-[41px] flex justify-between">
              <div className="left w-[166px] h-full">
                <h3 className="text-[15px] text-[#3C4242] font-semibold">
                  line Pattern Black H...
                </h3>
                <p className="text-[14px] font-medium text-[#807D7E]">
                  AS’s Brand
                </p>
              </div>
              <div className="right">
                <div className="h-[36.58px] w-[82.31px] bg-[#F6F6F6] rounded-lg flex items-center justify-center">
                  <p className="text-[14px] font-bold">$123.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[282px] h-full flex flex-col justify-between">
            <div>
              <img src={fem3} alt="" className="rounded-xl absolute" />
              <div className="w-[32.36px] h-[32.36px] relative left-[221px] top-5 bg-white rounded-[50%] flex items-center justify-center">
                <CiHeart />
              </div>
            </div>

            <div className="w-full h-[41px] flex justify-between">
              <div className="left w-[166px] h-full">
                <h3 className="text-[15px] text-[#3C4242] font-semibold">
                  Black Shorts
                </h3>
                <p className="text-[14px] font-medium text-[#807D7E]">
                  MM’s Brand
                </p>
              </div>
              <div className="right">
                <div className="h-[36.58px] w-[82.31px] bg-[#F6F6F6] rounded-lg flex items-center justify-center">
                  <p className="text-[14px] font-bold">$37.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[282px] h-full flex flex-col justify-between">
            <div>
              <img src={fem4} alt="" className="rounded-xl absolute" />
              <div className="w-[32.36px] h-[32.36px] relative left-[221px] top-5 bg-white rounded-[50%] flex items-center justify-center">
                <CiHeart />
              </div>
            </div>

            <div className="w-full h-[41px] flex justify-between">
              <div className="left w-[166px] h-full">
                <h3 className="text-[15px] text-[#3C4242] font-semibold">
                  Levender Hoodie with
                </h3>
                <p className="text-[14px] font-medium text-[#807D7E]">
                  Nike’s Brand
                </p>
              </div>
              <div className="right">
                <div className="h-[36.58px] w-[82.31px] bg-[#F6F6F6] rounded-lg flex items-center justify-center">
                  <p className="text-[14px] font-bold">$119.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback */}

      <div className="w-[1237px] h-[430.19px] mx-auto flex flex-col justify-between">

        <div className="flex items-center">
          <div className="w-[6px] h-[30px] rounded-[10px] bg-[#8A33FD]"></div>
          <h3 className="text-[34px] font-semibold ml-4 text-[#3C4242]">
            Feedback
          </h3>
        </div>

        <div className='w-full h-[292px]  flex gap-[23.19px]'>

          {/* reviews box */}
          <div className='border-[#BEBCBD] w-[396.87px] h-full border-[1.8px] rounded-[10px] p-[23.19px] flex flex-col justify-between'>
            
            <div className='w-full h-[292px] flex flex-col justify-between'>
            <div className='w-full flex justify-between'>
              <div><img src={profile1} alt="" /></div>
              <div><img src={star} alt="" /></div>
            </div>

            <h2 className='text-[21px] font-medium text-[#3C4242]'>Floyd Miles</h2>
            <p className='text-[13px] text-[#807D7E]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            
          </div>
          <div className='border-[#BEBCBD] w-[396.87px] h-full border-[1.8px] rounded-[10px] p-[23.19px] flex flex-col justify-between'>
            
            <div className='w-full h-[292px] flex flex-col justify-between'>
            <div className='w-full flex justify-between'>
              <div><img src={profile2} alt="" /></div>
              <div><img src={star} alt="" /></div>
            </div>

            <h2 className='text-[21px] font-medium text-[#3C4242]'>Ronald Richards</h2>
            <p className='text-[13px] h-[125.63px] text-[#807D7E]'>ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            
          </div>
          <div className='border-[#BEBCBD] w-[396.87px] h-full border-[1.8px] rounded-[10px] p-[23.19px] flex flex-col justify-between'>
            
            <div className='w-full h-[292px] flex flex-col justify-between'>
            <div className='w-full flex justify-between'>
              <div><img src={profile3} alt="" /></div>
              <div><img src={star} alt="" /></div>
            </div>

            <h2 className='text-[21px] font-medium text-[#3C4242]'>Savannah Nguyen</h2>
            <p className='text-[13px] text-[#807D7E]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home