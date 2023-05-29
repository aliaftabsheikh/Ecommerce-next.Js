import Image from 'next/image'
import { client } from './lib/sanityClient'

export const getProductData = async ()=>{
  const res = await client.fetch(`*[_type=="product"]
  `)
  return res
} 

interface IProduct {
  title:string,
  description:string
  _id: string
}



export default async function Home() {
  const data:IProduct[] = await getProductData();
  console.log(data);
  

  return (
    <div>
      {data.map((item)=>(
        <div key={item._id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}
