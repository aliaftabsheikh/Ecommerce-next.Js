import React from "react";
import { Button } from "../ui/button";

const NewsLetter = () => {
  return (
    <main className="bg-secondary-color flex justify-center mt-12">
      <section className="w-[1248px] px-6 md:px-4 sm:px-2 py-4 flex justify-center relative mt-10">
        <div className="text-center max-w-[500px] z-20">
          <h3 className="text-3xl font-bold tracking-wider">
            Subscribe Our Newsletter
          </h3>
          <p className="mt-2">Get the latest information and promo offers directly</p>
          <div className="flex items-center w-full justify-center space-x-3 mt-4 ">
          <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r p-2 outline-none border border-gray-600 flex flex-1 "
        ></input>
        <Button className="rounded-none">
            Get Started
        </Button>

          </div>
        </div>
        <h3 className="absolute top-0 text-8xl font-bold tracking-widest text-[#eaebee] opacity-80 z-10 md:text-6xl text-center">Newsletter</h3>
      </section>
    </main>
  );
};

export default NewsLetter;
