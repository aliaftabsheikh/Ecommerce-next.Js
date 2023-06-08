import Image from "next/legacy/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const ProductAbout = () => {
  const brandDesc = [
    {
      heading: "Using Good Quality Materials",
      description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
    },
    {
      heading: "100% Handmade Products",
      description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
    },
    {
      heading: "Modern Fashion Design",
      description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
    },
    {
      heading: "Discount for Bulk Orders",
      description: "Lorem ipsum dolor sit amt, consectetur adipiscing elit.",
    },
  ];

  return (
    <main className="flex justify-center mt-12 ">
      <section className="w-[1248px] px-6 md:px-4 sm:px-2 py-4 ">
        <div className="flex justify-end md:justify-start">
          <p className="text-4xl w-1/2 tracking-widest font-semibold px-10 md:w-full md:px-0">
            Unique and Authentic Vintage Designer Jewellery
          </p>
        </div>

        <div className="grid grid-cols-2 mt-12 lg:grid-cols-1">
          <div className="grid grid-cols-2 gap-4 relative xs:grid-cols-1">
            {brandDesc.map((item, index) => (
              <div key={index} className="w-[230px] lg:w-full  z-20">
                <h3 className="font-medium text-xl ">{item.heading}</h3>
                <p className="mt-3 font-base ">{item.description}</p>
              </div>
            ))}

            <h3 className="absolute top-0 left-0 text-8xl font-bold tracking-widest text-[#eaebee] opacity-80 z-10 md:text-6xl">
              Different from others
            </h3>
          </div>

          <div className="flex justify-between lg:mt-12 sm:flex-col">
            <div className="">
              <Image
                src={"/featureBrand.webp"}
                alt="featureBrand"
                width={1600}
                height={1600}
                objectFit="contain"
              />
            </div>
            <div className="">
              <p className="tracking-widest">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>

              <Link href={"/products"}>
                <Button className="rounded-none py-8 px-8 text-base mt-4">
                  See All <br /> Product
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductAbout;
