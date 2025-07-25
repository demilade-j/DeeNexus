import React from "react";

export default function AfterAboutVideo() {
  return (
    <div className="py-30 px-5 w-full flex flex-col gap-20">
      <main className="lg:flex md:flex sm:grid sm:gap-9 gap-4 lg:items-center lg:justify-between sm:justify-between">
        <article className="flex flex-col gap-2 lg:w-[45%] md:w-[43%] sm:w-full">
          <h1 className="text-amber-400 font-[Norican] text-4xl">
            Our Quality
          </h1>
          <h2 className="font-bold text-5xl">Chicken</h2>
          <p className="text-gray-500 text-[1.1rem]">
            Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken
            Bites and Grilled Chicken Topping are made from chickens raised
            without antibiotics and fed an all vegetable-grain diet, with no
            animal by-products. Plus, our Bites are made with 100% chicken
            breast meat.
          </p>
          <button className="bg-amber-400 py-3 w-38 rounded-md font-bold">
            ORDER NOW
          </button>
        </article>

          <img className="lg:w-[40%] md:w-[40%] sm:w-full " src="/about-imager-5.webp" alt="" />
      </main>

      <main className="lg:flex lg:flex-row-reverse md:flex-row-reverse md:flex sm:grid sm:gap-9 gap-4 lg:items-center lg:justify-between sm:justify-between">
        <article className="flex flex-col gap-2 lg:w-[45%] md:w-[43%] sm:w-full">
          <h1 className="text-amber-400 font-[Norican] text-4xl">
            Our Quality
          </h1>
          <h2 className="font-bold text-5xl">Burger</h2>
          <p className="text-gray-500 text-[1.1rem]">
            Some of the world’s best cheese is made close to home! All our deliciously melty Mozzarella is made with 100% Canadian milk. We’re proud to support Canadian dairy farmers.
          </p>
          <button className="bg-amber-400 py-3 w-38 rounded-md font-bold">
            ORDER NOW
          </button>
        </article>

          <img className="lg:w-[40%] md:w-[40%] sm:w-full " src="/about-imager-6.webp" alt="" />
      </main>

      <main className="lg:flex md:flex sm:grid sm:gap-9 gap-4 lg:items-center lg:justify-between sm:justify-between">
        <article className="flex flex-col gap-2 lg:w-[45%] md:w-[43%] sm:w-full">
          <h1 className="text-amber-400 font-[Norican] text-4xl">
            Our Quality
          </h1>
          <h2 className="font-bold text-5xl">Pizza Douch</h2>
          <p className="text-gray-500 text-[1.1rem]">
            Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100% chicken breast meat.
          </p>
          <button className="bg-amber-400 py-3 w-38 rounded-md font-bold">
            ORDER NOW
          </button>
          <svg stroke="yellow" fill="yellow" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg>
        </article>

          <img className="lg:w-[40%] md:w-[40%] sm:w-full " src="/about-imager-7.webp" alt="" />
      </main>
    </div>
  );
}
