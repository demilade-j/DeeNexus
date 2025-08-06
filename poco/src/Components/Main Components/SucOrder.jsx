import React from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from 'react-router-dom';

export default function SucOrder() {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
         <DotLottieReact
 className="h-130 w-full"
      src="https://lottie.host/fac9a04b-2e29-49bc-8dc7-c35bd0c80c5d/WfF6jblh0z.lottie"
      loop
      autoplay
    />
    <h1 className='text-green-400 text-5xl font-bold text-center'>Order Succesfull!!!</h1>
    <br />
    <button onClick={()=>{
        navigate('/')
    }} className='bg-green-400 rounded-md font-bold px-4 py-3 cursor-pointer'>Return To Homepage</button>
    </div>
  )
}
