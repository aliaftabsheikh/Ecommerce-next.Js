import AllProductCard from "@/components/AllProductCard/page";
import ProductCard from "@/components/ProductCard/page";
import { client } from "@/lib/sanityClient";
import Link from "next/link";
import React from "react";
import { Image as IImage } from "sanity";

const getProductData = async () => {
  const res = await client.fetch(`*[_type == "product"]{
          price,
          _id,
          title,
          image,
          slug,
          tags,
          category -> {
              name
          }
      }`);

  return res;
};

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

const Products = async () => {
  const data: IProduct[] = await getProductData();

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

export default Products;
