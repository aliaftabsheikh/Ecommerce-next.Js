"use client"

import { client } from "@/lib/sanityClient";
import React, { useState } from "react";
import { Image as IImage } from "sanity";
import Carousel from "../Carousel/page";
import { getProducts } from "@/hooks/useProducts";




interface IProduct {
  price: number;
  _id: string;
  title: string;
  image: IImage;
  category: {
    name: string;
  };
}
const DisplayProducts =  async () => {
  
  const data: IProduct[] = await getProducts();

  
  return (
    <main className="flex justify-center mt-12">
      <section className="w-[1248px] px-6 md:px-4 sm:px-2 py-4 ">
        <div className="text-center ">
          <h3 className="text-[#0062F5] text-base font-bold tracking-wider uppercase">
            Products
          </h3>
          <p className="text-4xl font-bold mt-2 tracking-wide">
            Check What We Have
          </p>
        </div>

        <div className="mt-10">
          <Carousel data={data} />
        </div>
      </section>
    </main>
  );
};

export default DisplayProducts;
