"use client"

import React from 'react'
import { urlForImage } from "../../../sanity/lib/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/legacy/image";
import { useShoppingCart } from '@/context/ShoppingCartContext';


type CartItemProps = {
  id: number
  quantity: number
}

const sizes = [
    {
      name: "XS",
    },
    {
      name: "S",
    },
    {
      name: "M",
    },
    {
      name: "L",
    },
    {
      name: "XL",
    },
  ];
  

const ProductDetails = ({data}: any) => {

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart()

  console.log("ID ===========> ", data._id);
  

  const quantity = getItemQuantity(data._id)
  


  console.log("Qantity", quantity);
  

  return (
    <div className="flex flex-row gap-x-6 lg:flex-row-reverse lg:justify-between ">
    <div className="">

      <Image
        width={100}
        height={100}
        src={urlForImage(data.image).url()}
        alt={data.alt}
        layout="fixed"
      />
    </div>

    <div className="flex gap-x-3 xlg:flex-col">
      <Image
        width={500}
        height={500}
        src={urlForImage(data.image).url()}
        alt={data.alt}
        objectFit="contain"
      />

      <div className="xlg:ml-4 xlg:mt-6">
        <p className="text-3xl font-medium tracking-wider sm:text-xl">
          {data.title}
        </p>
        <p className="text-xl font-semibold text-gray-800 opacity-40 sm:text-lg">
          {data.tags}
        </p>

        <div className="mt-6">
          <p className="font-semibold text-lg ">Select Sizes</p>
          <div className="flex gap-x-6 items-center flex-wrap">
            {sizes.map((item, index) => (
              <div
                key={index}
                className="w-12 h-12 flex items-center justify-center  hover:bg-gray-100 hover:shadow-2xl hover:rounded-full cursor-pointer transition-all hover:text-gray-800 text-gray-400 "
              >
                <p className="font-bold text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-x-6 mt-6 items-center flex-wrap">
          <p className="text-lg font-semibold">Quantity : </p>
          <div className="flex gap-x-5 items-center">
            <button
              className="w-12 h-12 flex items-center justify-center  bg-gray-200 shadow-2xl rounded-full cursor-pointer text-gray-800
            text-xl
            "
            onClick={() => decreaseCartQuantity(data._id)}>
              -
            </button>
            {quantity}
            <button
              className="w-12 h-12 flex items-center justify-center  bg-gray-200 shadow-2xl rounded-full cursor-pointer text-gray-800
            text-xl border-black
            "
            onClick={() => increaseCartQuantity({...data})}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center gap-x-6 mt-6 flex-wrap">
          <Button className="space-x-2 rounded-none" onClick={() => increaseCartQuantity({...data})}>
            <ShoppingCart className="mr-2" />
            Add to Cart
          </Button>

          <p className="text-3xl font-bold tracking-wider">
        
            ${quantity === 0 ? data.price : data.price * quantity}
</p>
        </div>
      </div>
    </div>
  </div>

  )
}

export default ProductDetails