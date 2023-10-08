"use client"

import React, { FC } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Image as IImage } from "sanity";

import "swiper/css";


import ProductCard from "../ProductCard/page"

interface IProduct {
    price: number;
    _id: string;
    title: string;
    image: IImage;
    category: {
      name: string;
    };
  }


const Carousel = ({data}: {data: IProduct[]}) => {
  return (
    <Swiper
    spaceBetween={-20}
    slidesPerView={'auto'}
  
    className=" max-w-[900px] lg:max-w-[600px] md:w-[400px] xs:w-[250px] "
  >
    {data.map((item) => (
      <SwiperSlide
        className="w-[400px] h-[400px] md:w-[300px] md:h-[300px] hover:scale-90 transition-all cursor-pointer"
        key={item._id}
      >
        <ProductCard item={item} />
      </SwiperSlide>
    ))}
  </Swiper>

  )
}

export default Carousel