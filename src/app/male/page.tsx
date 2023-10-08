import AllProductCard from "@/components/AllProductCard/page";
import ProductCard from "@/components/ProductCard/page";
import {maleProducts} from "@/hooks/useProducts";
import { client } from "@/lib/sanityClient";
import Link from "next/link";
import React from "react";
import { Image as IImage } from "sanity";

interface IProduct {
  price: number;
  _id: string;
  title: string;
  image: IImage;
  slug: string;
  tags: string;
  category: {
    name: string;
  };
}

const Male = async () => {
  const data: IProduct[] = await maleProducts();

  return (
    <main className="flex justify-center mt-12">
      <section className="w-[1248px] px-6 md:px-4 sm:px-2 py-4 flex justify-center">
        <div className="grid grid-cols-4 xs:grid-cols-1 xlg:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item._id} className="">
              <AllProductCard item={item} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Male;
