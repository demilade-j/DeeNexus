import { Play, PlayIcon } from 'lucide-react'
import React, { useState } from 'react';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

export default function AboutVideoPizza() {
    const [open ,setOpen] =useState(false)
    useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  // Cleanup on unmount just in case
  return () => {
    document.body.style.overflow = "";
  };
}, [open]);
  return (
    <div className='bg-[#272727]'>
    <article className='absolute lg:pt-0 pt-7 z-20 w-full h-[70%] flex flex-col gap-4 items-center justify-center'>
        <div onClick={()=>{setOpen(true)}} className='bg-amber-400 lg:flex hidden hover:bg-amber-600 duration-500 h-20 w-20 rounded-full pt-2 hover:pt-0 hover:animate-bounce hover:scale-105 items-center justify-center'>
        <span><PlayIcon className='text-white pizzaAboutVideo' size={40} fill='white'/></span>
        </div>
        <h1 className='text-white text-6xl font-bold text-center'>Make the thing Anything is Possible</h1>
        <h2 className='text-white text-2xl'>Enjoy our luscious dishes wherever you want</h2>
        <Link to='/shop'><button className='bg-amber-400 px-8 py-3 rounded-md font-bold cursor-pointer'>ORDER NOW</button></Link>
    </article>

    <main className=" mix-blend-overlay relative">
        <img className='h-150 w-screen' src="/pizzaaboutbg.jpg" alt="" />
    </main>

{open && (
        <div
          className="fixed inset-0 bg-[#000000c9] bg-opacity-90 z-99990 "
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed left-[20%] top-[20%] w-[60%] h-[60%] z-99999 text-white shadow transform transition-transform duration-1000 ${
          open ? '-translate-y-5' : '-translate-y-200'
        }`}
      >
          <button onClick={() => setOpen(false)} className="text-4xl ml-[102%] absolute -mt-10 hover:text-amber-400">&times;</button>
          <iframe
          className='w-full h-full'
        // width="900"
        // height="450"
        src="https://www.youtube.com/embed/sv3TXMSv6Lw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
          </div>
    </div>
  )
}
