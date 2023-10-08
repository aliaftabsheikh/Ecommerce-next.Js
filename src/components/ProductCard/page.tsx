"use client"

import Image from "next/legacy/image";
import React, { FC } from "react";
import { urlForImage } from "../../../sanity/lib/image";


const ProductCard: FC<{item: any}> = ({item}) => {


  return (
    <div className="flex items-center justify-center ">
      <Image
        layout="fill"
        src={urlForImage(item.image).url()}
        alt="product"
        objectFit="contain"
      />

    </div>
  );
};

export default ProductCard;
