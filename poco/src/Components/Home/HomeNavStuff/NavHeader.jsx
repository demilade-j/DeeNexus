import { MapPinCheck,Truck,Facebook,TwitterIcon, Linkedin, Github } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

export default function NavHeader() {
  const [showBar, setShowBar] = useState(true);
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
        className="bar "
        style={{
          transition: 'transform 0.3s ease',
          transform: showBar ? 'translateY(0)' : 'translateY(-100%)',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1001,
        }}
      >
        <div className="md:flex flex justify-evenly gap-[10%] bg-black text-amber-50 h-18 items-center ps-5 pe-5">
        <section  className='lg:grid-cols-2 md:grid sm:hidden hidden lg:gap-4 md:gap-0.5'>
        <main className="flex gap-3 cursor-pointer hover:text-amber-400">
            <article><MapPinCheck /></article>
            <article>Find a store</article>
        </main>

        <main className="flex gap-3 cursor-pointer hover:text-amber-400">
            <article><Truck/></article>
            <article>Order tracking</article>
        </main>
        </section>

        <section className='md:w-fit'>100% Secure delivery without contacting the courier</section>

        <section className='md:hidden lg:flex hidden gap-3 cursor-pointer'>
            <span><Facebook  fill="white" className='hover:text-amber-400' size={20}/></span>
            <span><TwitterIcon  fill="white" className='hover:text-amber-400' size={20}/></span>
            <span><Linkedin  fill="white" className='hover:text-amber-400' size={20}/></span>
            <span><Github  fill="white" className='hover:text-amber-400' size={20}/></span>
        </section>
    </div>
      </div>
    
  )
}