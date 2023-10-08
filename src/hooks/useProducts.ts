import { client } from "@/lib/sanityClient";
import { Image } from "sanity";

export const getProducts = async () => {
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
  
 
export const maleProducts = async () => {
    const res = await client.fetch(`*[_type == "product" && category == "Male"]{
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
  
 