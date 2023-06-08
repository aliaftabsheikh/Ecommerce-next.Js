import { Search, ShoppingCart , MenuIcon} from "lucide-react";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from "../ui/button";

function Navbar() {

    const productsMenu = [
        {
            id:1,
            name: 'Female',
            route: '/female'
        },
        {
            id:2,
            name: 'Male',
            route: '/male'

        },
        {
            id:3,
            name: 'Kids',
            route: '/kids'
        },
        {
            id:4,
            name: 'All Products',
            route: '/products'
        },
    ]

  return (
    <header className="w-full flex justify-center ">
        <section className='flex items-center justify-between w-[1248px] px-6 md:px-4 sm:px-2 py-8'>
            <Link href={'/'}>
            <Image src="/Logo.webp" alt="logo" width={150} height={0}/>
            </Link>
            
            <div className='flex gap-x-6 text-lg font-medium lg:hidden'>
                {
                    productsMenu.map((item)=>(
                        <Link key={item.id} href={item.route} className='flex'>
                        <p>{item.name}</p>
                        </Link>
                    ))
                }
            </div>

            <div className="flex gap-x-2 items-center border px-2 rounded-lg lg:hidden ">
        <Search className="bg-white " />{" "}
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r p-2 outline-none"
        ></input>
      </div>
      <Link href="/cart" className="p-3 rounded-full bg-gray-300 relative hover:scale-110 transition-all cursor-pointer lg:hidden">
        <ShoppingCart className="" />
        <span className="absolute -top-2 right-0 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          0
        </span>
      </Link>


<div className="cursor-pointer hidden lg:block">
    <MenuIcon size={28}/>
</div>


        </section>
    </header>
  )
}

export default Navbar