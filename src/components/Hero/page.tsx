import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Image from 'next/legacy/image';


const Hero = () => {
  return (
      <main className="bg-secondary-color flex justify-center ">
        <section className="w-[1248px] px-6 md:px-4 sm:px-2 py-4 flex justify-between items-center ">
        <div className="w-1/3 lg:w-full">
          <p className="bg-[#e1edff] w-fit px-5 py-2 rounded-lg font-bold text-blue-600">
            Sale 70%
          </p>

          <h2 className="text-6xl font-bold mt-5 lg:text-5xl lg:font-bold xs:text-4xl">An Industrial Take on Streetwear</h2>

          <p className="text-base text-slate-600 font-Light mt-5">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>

          <Link href="/products" >
            <Button className="px-6 py-9 rounded-none text-lg font-bold mt-8">
              <ShoppingCart className="mr-4 h-5 w-5" />
              Start <br />
              Shopping
            </Button>
          </Link>
        </div>

        <div className="relative lg:hidden">
          <Image className="" width="550" height="550"  src="/heroImg1.webp" alt="heroImg" />
          <span className="bg-[#ffece3] w-[500px] h-[500px] rounded-full absolute top-10 left-5 -z-10"></span>
        </div>
      </section>
    </main>
  );
};

export default Hero;
