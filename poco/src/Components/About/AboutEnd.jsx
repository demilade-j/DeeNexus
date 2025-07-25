import React from "react";

export default function AboutEnd() {
  return (
    <div className="bg-[#272727] w-full h-full">
      <main className="absolute z-20 flex flex-col gap-2 items-center justify-center h-140 w-full">
        <h1 className='text-amber-400 text-[1.8rem]'>We guarantee</h1>
        <h2 className="text-white font-bold text-7xl text-center">30 Minutes Delivery!</h2>
        <p className="text-center text-[1.2rem] text-white">If you’re having a meeting, working late at night and need an extra push. Let us know and we will be there</p>
        <button className="px-6 py-3 rounded-md bg-amber-400 font-bold">MAKE AN ORDER</button>
      </main>

      <main className=" mix-blend-overlay relative h-150">
        <img className="h-150 w-full bg-cover bg-center" src="/pizzaman1.jpg" alt="" />
      </main>
    </div>
  );
}
