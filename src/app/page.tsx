import { DisplayProducts, Footer, Hero, ProductAbout, Promotion, NewsLetter } from "@/components";
import { client } from '../lib/sanityClient'

// export const getProductData = async ()=>{
//   const res = await client.fetch(`*[_type=="product"]
//   `)
//   return res
// } 

interface IProduct {
  title:string,
  description:string
  _id: string
}



export default async function Home() {
  
  return (
    <>
    <Hero/>
    <Promotion/>
    <DisplayProducts/>
    <ProductAbout/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}
