import React, { useState, useEffect, useRef } from 'react';
import { Gift, Heart, LucideShoppingBasket, Search,Truck, User } from "lucide-react";
import CartOnclick from '../../CartOnclick';

export default function AfterNavBar() {
  const [showBar, setShowBar] = useState(true);
  const [cart,setCart] = useState(0) 
  const lastScrollY = useRef(0);
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down and scrolled more than 50px: hide bar
        setShowBar(false);
      } else {
        // Scrolling up: show bar
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
        <input type="search" className="h-10 w-2xs ps-10 pe-11 outline-amber-400 border-amber-400 border-2 rounded-3xl" placeholder="Search products" />
        <Search className="absolute text-black mx-56 pointer transition-all ease-in-out 1s hover:text-amber-500 cursor-pointer"/>
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

        <article className="flex gap-6">
          <span className="border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-[100%] hover:bg-amber-400"><User fill="black"/></span>
          <span className="border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-[100%] hover:bg-amber-400"><Heart fill="black"/></span>
          <span className="border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-[100%] hover:bg-amber-400"><LucideShoppingBasket fill="black"/>
          <span className='px-0.5 py-0.5 absolute rounded-full flex items-center justify-center bg-amber-500' onClick={() => {
            {setCart(cart+1)}
          }}>{cart}</span>
          </span>
          
        </article>
    </div>
      </div>
  )
}