"use client";

import React from "react";
import Image from "next/legacy/image";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import { formatCurrency } from "@/lib/formatCurrency";
import { ShoppingBag, Trash2Icon } from "lucide-react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Button } from "../ui/button";

type CartItem = {
  _id: number;
  quantity: number;
  image: IImage;
  price: number;
  title: string;
  tags: string;
};

const CartItems = () => {
  const {
    cartItems,
    removeFromCart,
    cartQuantity,
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
  } = useShoppingCart();

  async function handleProcessCheckout() {
    const linkOrg: any = await fetch("/api/checkout-session", {
      method: "POST",
      body: JSON.stringify(cartItems),
    });

    const { link } = await linkOrg.json();
    window.location.href = link;

    console.log("LINK CLIENT", link);
  }

  if (!cartItems[0]) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <div className="flex justify-center items-center flex-col">
          <ShoppingBag size={120}/>
          <h1 className="text-4xl font-bold mt-4">Your shopping bag is empty
 !</h1>
        </div>
      </div>
    );
  }

  console.log("CARTITEMSFC", cartItems);
  return (
    <div className="grid grid-cols-4 gap-x-12 mt-6 lg:grid-cols-1 place-content-start relative ">
      {cartItems.map((item: CartItem) => (
        <div className="col-span-3" key={item._id}>
          <div className="flex justify-between mb-10">
            <div className="flex gap-x-12 justify-between">
              <Image
                src={urlForImage(item.image).url()}
                width={280}
                height={230}
                className="w-full h-full object-contain rounded-xl"
                alt={item.title}
              />

              <div className="flex flex-col justify-between">
                <p className="text-xl">{item.title}</p>
                <p className="text-lg font-semibold opacity-50 ">{item.tags}</p>
                <p className="font-semibold text-lg">Delivery Estimation</p>
                <p className="font-lg text-yellow-500 font-bold">
                  5 Working Days
                </p>

                <p className="font-bold text-lg">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <button
                className="cursor-pointer"
                onClick={() => {
                  removeFromCart(item._id);
                }}
              >
                <Trash2Icon />
              </button>
              {/* <div className="flex gap-x-5 items-center">
              {getItemQuantity(item._id) > 1 && (
                <div className="text-lg font-bold">
                  {getItemQuantity(item._id)}X
                </div>
              )}
            </div> */}

              <div className="flex gap-x-5 items-center">
                <button
                  className="w-12 h-12 flex items-center justify-center  bg-gray-200 shadow-2xl rounded-full cursor-pointer text-gray-800
            text-xl
            "
                  onClick={() => decreaseCartQuantity(item._id)}
                >
                  -
                </button>
                {getItemQuantity(item._id)}
                <button
                  className="w-12 h-12 flex items-center justify-center  bg-gray-200 shadow-2xl rounded-full cursor-pointer text-gray-800
            text-xl border-black
            "
                  onClick={() => increaseCartQuantity(item)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute lg:relative top-0 right-0">
        <div className="flex justify-center flex-col">
          <h3 className="text-center font-bold text-lg">Order Summary</h3>

          <div className="flex gap-x-2 justify-between mt-3">
            <p className="mt-3">Quantity</p>

            <p className="mt-3">{cartQuantity}</p>
          </div>

          <div className="flex gap-x-2 justify-between">
            <p>Sub Total</p>
            {/* <p>$2180</p> */}
            <p>
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = cartItems.find((i) => i._id === cartItem._id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </p>
          </div>

          <Button
            onClick={() => handleProcessCheckout()}
            className="mt-4 lg:max-w-md mx-auto"
          >
            Process to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
