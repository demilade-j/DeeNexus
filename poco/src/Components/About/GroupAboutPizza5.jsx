import React from 'react'

export default function GroupAboutPizza2() {
  return (
    <div className='z-100 flex flex-col gap-1 groupAbtPizza2 w-[60%] items-center justify-center'>
        <img className='size-25 bg-cover bg-center rounded-full' src="/jamesreview.jpg" alt="" />
        <span className='flex scale-120'>⭐⭐⭐⭐⭐</span>
        <p className='text-[1.5rem] text-center'>"As someone who works long hours, I don&apos;t always have time to cook. Deenexus makes it so easy to get quality meals. Plus, their website is smooth and user-friendly. Love it!"</p>
        <main className='flex flex-col items-center justify-center'>
        <h1 className='font-bold text-3xl'>James K.</h1>
        <p>Sotware Engineering</p>
        </main>
    </div>
  )
}
