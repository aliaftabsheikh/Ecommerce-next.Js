"use client"

import Image from "next/legacy/image";
import React, { FC } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

const AllProductCard: FC<{item: any}> = ({item}) => {

    const handleAddToCart = async()=>{
        const res = fetch("api/cart", {
            method: "POST",
            body: JSON.stringify({
                product_id : item._id
            })
        })

        const result = (await res).json()
        console.log(result);
        
    }


  return (
    <Link href={`/products/${item.slug.current}`} className="flex items-start justify-center flex-col">
      <Image
      width={280}
      height={300}
        src={urlForImage(item.image).url()}
        alt="product"
        objectFit="cover"
      />

      <div className="flex flex-col gap-y-1 my-3 ">
        <p className="text-lg font-medium">{item.title}</p>
        <p className=" font-semibold text-gray-800 opacity-40 ">{item.tags}</p>
        <p className="text-2xl font-medium">${item.price}</p>
      </div>

    </Link>
  );
};

export default AllProductCard;
