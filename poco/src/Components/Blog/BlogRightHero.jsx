import { Search } from 'lucide-react'
import React from 'react'

export default function BlogRightHero() {
  return (
<main className='hidden lg:flex md:hidden sm:hidden flex-col w-[30%] px-3'>
            <form action="">
                <input type="search" className='border-amber-400 h-12 w-full rounded-3xl border-1 flex items-center px-7 pe-15 ouline-1 outline-amber-400' placeholder='Search...' />
                <span><Search className='hover:text-amber-400 absolute -mt-9 ml-[24.5%]'/></span>
            </form>
            <br />

            <aside className='px-2'>
            <article className='py-3 px-2 border-1 rounded-xl border-gray-500 flex flex-col gap-3'>
                <h1 className='font-bold'>Categories</h1>

                <div className='rounded-xl bg-pink-100 px-4 py-2 flex flex-col gap-1'>
                    <span className='border-b-1 border-dotted flex cursor-pointer py-1 text-[1.1rem] font-semibold hover:text-amber-400 items-center justify-between border-b-gray-600'><p>Burgers</p>(21)</span>
                    <span className='border-b-1 border-dotted flex cursor-pointer py-1 text-[1.1rem] font-semibold hover:text-amber-400 items-center justify-between border-b-gray-600'><p>Cold Drinks</p>(15)</span>
                    <span className='border-b-1 border-dotted flex cursor-pointer py-1 text-[1.1rem] font-semibold hover:text-amber-400 items-center justify-between border-b-gray-600'><p>Hot Drinks</p>(12)</span>
                    <span className='border-b-1 border-dotted flex cursor-pointer py-1 text-[1.1rem] font-semibold hover:text-amber-400 items-center justify-between border-b-gray-600'><p>Pasta</p>(20)</span>
                    <span className='border-b-1 border-dotted flex cursor-pointer py-1 text-[1.1rem] font-semibold hover:text-amber-400 items-center justify-between border-b-gray-600'><p>Pizza</p>(3)</span>
                    <span className='border-b-1 border-dotted flex cursor-pointer py-1 text-[1.1rem] font-semibold hover:text-amber-400 items-center justify-between border-b-gray-600'><p>Uncategorized</p>(2)</span>
                </div>
            </article>
            <br />

            <div className='px-4 flex flex-col gap-4'>
                <h1 className='h-9 font-bold text-xl border-b-1 border-dotted'>Recent Posts</h1>

                <article className='flex justify-between gap-4'>
                    <img className='w-30 rounded-lg' src="/digitaldetox.webp" alt="" />
                    <main>
                        <h1 className='text-sm font-semibold'>10 Reasons To Do A Digital Detox Challenge...</h1>
                        <p className='text-sm'>March 3, 2025</p>
                    </main>
                </article>

                <article className='flex justify-between gap-4'>
                    <img className='w-30 rounded-lg' src="/hangoverburger.webp" alt="" />
                    <main>
                        <h1 className='text-sm font-semibold'>The Ultimate Hangover Burger: Egg in a Hole Burger...</h1>
                        <p className='text-sm'>March 3, 2025</p>
                    </main>
                </article>

                <article className='flex justify-between gap-4'>
                    <img className='w-30 rounded-lg' src="/redpotato.webp" alt="" />
                    <main>
                        <h1 className='text-sm font-semibold'>Crispy Stovetop Roasted Red Potatoes...</h1>
                        <p className='text-sm'>March 3, 2025</p>
                    </main>
                </article>

                <article className='flex justify-between gap-4'>
                    <img className='w-30 rounded-lg' src="/softpretzels.webp" alt="" />
                    <main>
                        <h1 className='text-sm font-semibold'>Traditional Soft Pretzels with Sweet Beer Cheese...</h1>
                        <p className='text-sm'>March 3, 2025</p>
                    </main>
                </article>

                <article className='flex justify-between gap-4'>
                    <img className='w-30 rounded-lg' src="/totoro.webp" alt="" />
                    <main>
                        <h1 className='text-sm font-semibold'>Totoro Pancake Tutorial: Easy Totoro Pancake Food Art</h1>
                        <p className='text-sm'>March 3, 2025</p>
                    </main>
                </article>
            </div>
            <br />
            <br />

            <menu>
                <h1 className='h-9 font-bold text-xl border-b-1 border-dotted'>Popular tags</h1>
                <br />
                <article className='flex flex-wrap gap-4 w-[80%]'>
                  <span className='border-1 border-gray-600 hover:border-amber-400 text-xl hover:text-amber-900 font-semibold px-4 py-2 rounded-[1.5rem] duration-300 cursor-pointer'>Digital Detox</span>
                  <span className='border-1 border-gray-600 hover:border-amber-400 text-xl hover:text-amber-900 font-semibold px-4 py-2 rounded-[1.5rem] duration-300 cursor-pointer'>Self Care</span>
                  <span className='border-1 border-gray-600 hover:border-amber-400 text-xl hover:text-amber-900 font-semibold px-4 py-2 rounded-[1.5rem] duration-300 cursor-pointer'>Mental Health</span>
                  <span className='border-1 border-gray-600 hover:border-amber-400 text-xl hover:text-amber-900 font-semibold px-4 py-2 rounded-[1.5rem] duration-300 cursor-pointer'>Wellness</span>
                  <span className='border-1 border-gray-600 hover:border-amber-400 text-xl hover:text-amber-900 font-semibold px-4 py-2 rounded-[1.5rem] duration-300 cursor-pointer'>Technology</span>
                  <span className='border-1 border-gray-600 hover:border-amber-400 text-xl hover:text-amber-900 font-semibold px-4 py-2 rounded-[1.5rem] duration-300 cursor-pointer'>Food</span>
                  <span className='border-1 border-gray-600 hover:border-amber-400 text-xl hover:text-amber-900 font-semibold px-4 py-2 rounded-[1.5rem] duration-300 cursor-pointer'>Burger</span>
                  <span className='border-1 border-gray-600 hover:border-amber-400 text-xl hover:text-amber-900 font-semibold px-4 py-2 rounded-[1.5rem] duration-300 cursor-pointer'>Grilled Cheese</span>
                  <span className='border-1 border-gray-600 hover:border-amber-400 text-xl hover:text-amber-900 font-semibold px-4 py-2 rounded-[1.5rem] duration-300 cursor-pointer'>Recipes</span>
                </article>
            </menu>
            <br /><br />

            <menu className='py-10 rounded-xl flex flex-col items-center justify-center mx-5 gap-6 bg-amber-400'>
              <span className='flex flex-col items-center justify-center'>
                <h1 className='text-white font-[Norican] text-[3rem]'>Super Delicious</h1>
                <h2 className='text-green-800 font-bold text-[3.3rem] text-center -mt-8'>Chicken</h2>
                <h3 className='text-white text-lg font-semibold -mt-2'>call us now:</h3>
                <h4 className='text-red-500 font-bold text-lg'>+234 705-7723-767</h4>
                <br />
              </span>
              <img src="/adblog.webp" alt="" />
            </menu>
            
            </aside>
        </main>
  )
}
