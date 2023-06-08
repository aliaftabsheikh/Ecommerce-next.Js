import ProductDetails from "@/components/ProductDetails/page";
import { client } from "@/lib/sanityClient";
import { PortableText } from "@portabletext/react";
import Image from "next/legacy/image";
import React from "react";
import { Image as IImage } from "sanity";


const getProductData = async (slug: string) => {
  const res =
    await client.fetch(`*[_type == "product" && slug.current == "${slug}"][0]{
    price,
    _id,
    title,
    image,
    "slug" : slug.current,
    tags,
    care,
    alt,
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
  care: any;
  alt: string;
  category: {
    name: string;
  };
}

type Props = {
  params: {
    product: string;
  };
};



// const {decQty, incQty, qty, onAdd} = useCartContext();



const product = async ({ params }: Props) => {
  let slug = params.product;

  const data: IProduct = await getProductData(slug);

  return (
    <main className="flex justify-center ">
      <section className="w-[1248px] px-6 md:px-4 sm:px-2 py-4 ">
        <ProductDetails data={data}/>
             </section>
    </main>
  );
};

export default product;
