import React from "react";

export default function AfterMenuHeroes() {
  return (
    <div className="h-fit w-full lg:flex lg:flex-row md:flex sm:flex md:flex-col sm:flex-col flex flex-col bg-pink-100">
      <main className="bg-[#1f1f21] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] h-full">
        <article className="absolute z-20 flex flex-col items-center justify-center h-140 lg:w-[50%] md:w-full sm:w-full w-full">
          <h1 className="text-white text-center text-[3.5rem]">
            Explore the new taste
          </h1>
          <p className="text-center mb-6 text-[1.2rem] text-white">
            Enjoy our luscious dishes wherever you want
          </p>
          <button className="px-6 py-3 rounded-md bg-amber-400 font-bold">
            ORDER NOW
          </button>
        </article>

        <article className=" mix-blend-overlay relative w-fit">
          <img
            className="bg-cover bg-center h-150  w-screen"
            src="/bugerintray.jpg"
            alt=""
          />
        </article>
      </main>

      <main className="lg:w-[50%] md:w-full sm:w-full w-full h-150 flex flex-col items-center justify-center gap-4">
        <article className="lg:w-[27%] md:w-[27%] sm:w-[50%] w-[50%] flex-wrap flex py-1 flex-col">
          <span className="border-dashed border-b-3 flex h-9 items-center justify-between  border-b-black">
            <h1 className="font-bold">Pizza Hut</h1>
            <p className="text-amber-400 font-semibold">£4.95</p>
          </span>
          <span className="text-gray-600">Mozarella, Tomato Sauce, Basil</span>
        </article>

        <article className="lg:w-[27%] md:w-[27%] sm:w-[50%] w-[50%] flex-wrap flex flex-col py-1">
          <span className="border-dashed border-b-3 flex h-9 items-center justify-between  border-b-black">
            <h1 className="font-bold">Pepperoni Pizza</h1>
            <p className="text-amber-400 font-semibold">£5.95</p>
          </span>
          <span className="text-gray-600">Pepperoni, Mozarella, Tomato Sauce</span>
        </article>

        <article className="lg:w-[27%] md:w-[27%] sm:w-[50%] w-[50%] flex-wrap flex flex-col py-1">
          <span className="border-dashed border-b-3 flex h-9 items-center justify-between  border-b-black">
            <h1 className="font-bold">Apricot Chicken</h1>
            <p className="text-amber-400 font-semibold">£5.65</p>
          </span>
          <span className="text-gray-600">Apricot, Grilled Chicken, Cheese</span>
        </article>

        <article className="lg:w-[27%] md:w-[27%] sm:w-[50%] w-[50%] flex-wrap flex flex-col py-1">
          <span className="border-dashed border-b-3 flex h-9 items-center justify-between  border-b-black">
            <h1 className="font-bold">Summer Pizza</h1>
            <p className="text-amber-400 font-semibold">£8.95</p>
          </span>
          <span className="text-gray-600">Pineapple, Ham, BBQ Sauce</span>
        </article>

      </main>
    </div>
  );
}
