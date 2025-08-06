import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function NewsLetter() {
  const [email,setEmail] = useState('')
  return (
    <div className="py-30 w-full pt-[-10rem] relative flex justify-center gap-3">
      <main className="mt-50 scale-80 left-5 newletterLeft absolute lg:flex md:hidden sm:hidden hidden">
        <img className="h-40" src="/NewsletterOther.webp" alt="" />
        <img className="h-20" src="/NewsletterTomato.png" alt="" />
      </main>
    
    <main className="mt-20 flex items-center  flex-col gap-3 md:scale-75 sm:scale-75 lg:scale-100 scale-55">
        <h1 className="text-green-500 font-[Norican] text-3xl tracking-wide">NEWS LETTER</h1>
        <h2 className="text-5xl font-bold">Get <span className="text-amber-400">10%</span> off your order</h2>
        <p className="font-medium text-2xl">Enter your email and receive a 10% discount on your next order</p>

        <menu>
          <form>
          <input className="w-200 h-15 px-10 border-1 border-black outline-1 outline-black" onSubmit={()=>{}} onChange={(e) => {
            setEmail(e.target.value)
            console.log(email);
            
          }} type="email" placeholder="Enter your email..." name="" id="" required />
          <button onClick={(e) =>{
            toast.dismiss()
            e.preventDefault()
             if(email === ''){
               toast.error('Enter a valid field OR try inputing again')
             }else{
              if(email.match(/@.+\.+./)){
                toast.success('You have Successfuly Subscribed!!!')
              }else{
                toast.error('Input a valid email')
              }
              setEmail('')
             }
             }} type="submit" className="bg-amber-400 px-3 py-[6px] z-40 absolute ml-[-9rem] mt-[0.6rem] cursor-pointer rounded-lg font-bold text-xl">SUBSCRIBE</button>
          </form>
        </menu>
    </main>

    <main className="mt-20 scale-75 lg:flex md:hidden sm:hidden hidden absolute right-10 newletterRight">
      <img src="/NewsletterPizza.png" alt="" />
    </main>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}
