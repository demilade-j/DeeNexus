import React from 'react'

export default function GroupAboutPizza2() {
  return (
    <div className='z-100 flex flex-col gap-1 groupAbtPizza2 w-[60%] items-center justify-center'>
        <img className='size-25 bg-cover bg-center rounded-full' src="/danielreview.jpg" alt="" />
        <span className='flex scale-120'>⭐⭐⭐⭐⭐</span>
        <p className='text-[1.5rem] text-center'>"With my hectic work life, Deenexus is a lifesaver! Fresh, tasty meals delivered fast. It&apos;s like having a personal chef without the hassle."</p>
        <main className='flex flex-col items-center justify-center'>
        <h1 className='font-bold text-3xl'>Deestars R.</h1>
        <p>Founder,TechSavvy Inc</p>
        </main>
    </div>
  )
}
