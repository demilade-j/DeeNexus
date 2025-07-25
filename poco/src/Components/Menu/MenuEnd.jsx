import { Bike, Pizza, Timer } from 'lucide-react'
import React from 'react'

export default function MenuEnd() {
  return (
    <div className='py-20 md:flex sm:flex sm:flex-col flex flex-col lg:ps-6 gap-6 lg:gap-0 lg:px-0 px-6 lg:flex-row lg:flex items-center justify-evenly'>
        <main className='flex gap-10 cursor-pointer h-37 lg:w-[31.5%] w-full border-4 border-dashed border-gray-400 duration-500 hover:border-amber-400 rounded-xl items-center justify-center'>
            <article><Bike className='text-amber-400 size-20 hover:scale-115 duration-500'/></article>
            <article className='flex flex-wrap flex-col'>
                <h1 className='font-bold text-xl'>Free Shipping</h1>
                <p className='text-sm'>Sign up for updates and get free shipping</p>
            </article>
        </main>

        <main className='flex gap-5 px-3 cursor-pointer h-37 lg:w-[31.5%] w-full border-4 border-dashed border-gray-400 duration-500 hover:border-amber-400 rounded-xl items-center justify-center'>
            <article><Timer className='text-amber-400 size-20 hover:scale-115 duration-500'/></article>
            <article className='flex flex-wrap flex-col'>
                <h1 className='font-bold text-xl'>30 Minutes Delivery</h1>
                <p className='text-sm'>Everything you order will quickly be delivered to your door.</p>
            </article>
        </main>

        <main className='flex gap-9 px-6 cursor-pointer h-37 lg:w-[31.5%] w-full border-4 border-dashed border-gray-400 duration-500 hover:border-amber-400 rounded-xl items-center justify-center'>
            <article><Pizza className='text-amber-400 size-20 hover:scale-115 duration-500'/></article>
            <article className='flex flex-wrap flex-col'>
                <h1 className='font-bold text-xl'>Best Quality Guarantee</h1>
                <p className='text-sm'>DeeNexus is an international chain of family restaurants.</p>
            </article>
        </main>

        <main></main>
        <main></main>
    </div>
  )
}
