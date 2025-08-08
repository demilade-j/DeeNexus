import React, { useState, useEffect, useRef } from 'react';
import { Bike, Gift, Heart, LucideShoppingBasket, Search,Truck, User } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function AfterNavBar() {
  const navigate = useNavigate();
  const [showBar, setShowBar] = useState(true);
  const lastScrollY = useRef(0);
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowBar(false);
      } else {
        setShowBar(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<div
        className="bar"
        style={{
          transition: 'transform 0.3s ease',
          transform: showBar ? 'translateY(199%)' : 'translateY(-100%)',
          top: 0,
          width: '100%',
          zIndex: 1001,
        }}
      >
         <div className="h-18 px-3 lg: text-black grid-cols-5 items-center justify-between bg-white lg:flex md:hidden sm:hidden hidden">
        <h1 className="text-green-700 font-extrabold text-2xl">DeeNexus</h1>

        <article className="flex items-center justify-between">
        <input onClick={()=>{
          navigate('/search')
        }} type="search" className="h-10 w-2xs ps-10 pe-11 outline-amber-400 border-amber-400 border-2 rounded-3xl" placeholder="Search products" />
        {/* <Search className="absolute text-black mx-56 pointer transition-all ease-in-out 1s hover:text-amber-500 cursor-pointer"/> */}
        </article>

        <article className="flex gap-4 items-center justify-between">
          <main><Truck size={39}/></main>
          <main className="flex flex-col justify-center">
            <span>Free Delivery</span>
            <span>Details & restrictions</span>
          </main>
        </article>

        <article className="flex gap-4 items-center">
          <main><Gift size={39}/></main>
          <main className="flex flex-col justify-center">
            <span>Daily Offers</span>
            <span>Discount 20% off</span>
          </main>
        </article>

        <article className="flex gap-4 items-center">
          <main><Bike size={39}/></main>
          <main className="flex flex-col justify-center">
            <span>Big Offers</span>
            <span>Best of the best</span>
          </main>
        </article>

        {/* <article className="flex gap-6">
          <span className="border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-[100%] hover:bg-amber-400"><User fill="black"/></span>
          <span className="border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-[100%] hover:bg-amber-400"><Heart fill="black"/></span>
          <span className="border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-[100%] hover:bg-amber-400"><LucideShoppingBasket fill="black"/>
          </span>
          
        </article> */}
    </div>
      </div>
  )
}