import Image from "next/legacy/image";
import React from "react";

const promotionCardMens = [
  {
    name: "Flex Sweatshirt",
    price: "$100",
    discountedPrice: "$75",
    image: "/promotion2.webp",
    color: "bg-[#efe1c7]",
  },
  {
    name: "Flex Push Button Bomber",
    price: "$225",
    discountedPrice: "$190",
    image: "/heroImg.webp",
    color: "bg-[#d6d6d8]",
  },
];

const Promotion = () => {
  return (
    <main className="bg-secondary-color flex justify-center mt-12">
      <section className="w-[1248px] px-6 md:px-4 sm:px-2 py-4 ">
        <div className="text-center">
          <h3 className="text-[#0062F5] text-base font-bold tracking-wider uppercase">
            Promotions
          </h3>
          <p className="text-4xl font-bold mt-2 tracking-wide">
            Our Promotions Events
          </p>
        </div>

        <div className="mt-10 grid grid-cols-[1.5fr,1fr,1fr] gap-x-3 lg:grid-cols-2 lg:gap-y-4">
          <div className="lg:col-span-2">
            <div className="flex bg-[#d6d6d8] items-center justify-between px-8 py-2 sm:flex-col">
              <div>
                <p className="text-3xl uppercase font-bold sm:text-2xl">
                  Get up to <br />{" "}
                  <span className="font-bold text-5xl sm:text-3xl">60%</span>
                </p>
                <p className="pt-4 text-xl">For the summer season</p>
              </div>
              <Image
                src="/promotion1.webp"
                width={280}
                height={200}
                alt="promotion"
              />
            </div>

            <div className="bg-primary px-4 text-center mt-2 py-6">
              <p className="text-4xl uppercase font-bold text-white sm:text-2xl">
                Get 30% Off
              </p>
              <p className="pt-3 text-base uppercase font-bold text-white">
                Use Promo Code
              </p>
                <p className="uppercase text-2xl md:text-xl md:px-4 md:mt-2 bg-gray-800 border border-black mx-auto px-12 rounded-lg text-white py-1 font-semibold w-fit">
                  dineweekendsale
                </p>
            </div>
          </div>
          {promotionCardMens.map((item, index) => (
            <div
              key={index}
              className={`${item.color} px-6 flex flex-col justify-between sm:col-span-2`}
            >
              <div>
                <h6 className="mt-4 text-lg ">{item.name}</h6>
                <div className="flex gap-x-2 text-xl">
                  <p className="text-decoration-line: line-through">
                    {item.price}
                  </p>
                  <p className="font-semibold">{item.discountedPrice}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={item.image}
                  width={260}
                  height={275}
                  alt={item.name}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Promotion;
