"use client"

import { Button } from "@/components/ui/button";
import { Delete, Trash2Icon, TrashIcon } from "lucide-react";
import Image from "next/legacy/image";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const Cart = () => {

    // const {cartDetails} = useShoppingCart()
    // console.log(cartDetails);
    

  return (
    <main className="flex justify-center mt-12 ">
      <section className="w-[1160px] px-12 md:px-4 sm:px-2 py-4 ">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>

        <div className="grid grid-cols-4 gap-x-12 mt-6 lg:grid-cols-1">
          <div className="col-span-3">
            <div className="flex justify-between">
              <div className="flex gap-x-12">
                <Image
                  src={"/featureBrand.webp"}
                  width={180}
                  height={230}
                  className="w-full h-full object-contain rounded-xl"
                  alt="coer"
                />

                <div className="flex flex-col justify-between">
                  <p className="text-xl">Cameryn Sash Tie Dress</p>
                  <p className="text-lg font-semibold opacity-50 ">Dress</p>
                  <p className="font-semibold text-lg">Delivery Estimation</p>
                  <p className="font-lg text-yellow-500 font-bold">5 Working Days</p>

                  <p className="font-bold text-lg">$2180</p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <div className="cursor-pointer">
                  <Trash2Icon />
                </div>
                <div className="flex gap-x-5 items-center">
                  <button
                    className="w-12 h-12 flex items-center justify-center  bg-gray-200 shadow-2xl rounded-full cursor-pointer text-gray-800
            text-xl
            "
                  >
                    -
                  </button>
                  0
                  <button
                    className="w-12 h-12 flex items-center justify-center  bg-gray-200 shadow-2xl rounded-full cursor-pointer text-gray-800
            text-xl border-black
            "
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between ">
            <h3 className="text-center font-bold text-lg">Order Summary</h3>

            <div className="flex gap-x-2 justify-between">
                <p>
                Quantity
                </p>

                <p>4 Product</p>
            </div>

            <div className="flex gap-x-2 justify-between">
                <p>Sub Total</p>
                <p>$2180</p>
            </div>

            <Button>
                Process to Checkout
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
