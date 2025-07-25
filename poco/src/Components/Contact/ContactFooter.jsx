import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function ContactFooter() {
    const [email,setEmail] = useState('')
  return (
    <div className="flex flex-col">
      <main className="bg-black py-10">
        <fieldset className="text-green-600 border-t-2 border-gray-600 text-2xl font-bold flex items-center justify-center">
          <legend className="ml-[42%]">DeeNexus</legend>
        </fieldset>

        <article className=" py-17">
          <div className="lg:flex md:grid md:grid-cols-2 md:gap-8 lg:pl-[2%] w-full py-8 sm:grid sm:gap-5 lg:pe-3 grid gap-5 sm:grid-cols-1 grid-cols-1 items-center justify-center lg:justify-between">
            <span className="flex flex-col text-gray-500 gap-4 items-center lg:w-[20%]">
              <h1 className="font-bold text-3xl text-white">ADDRESS</h1>
              <p className="text-center"> 
                10 Musibau Adegbola,Ikotun/Idimu Lagos 10001 Nigeria
              </p>
            </span>

            <span className="flex flex-col text-gray-500 gap-4 items-center lg:w-[25%]">
              <h1 className="font-bold text-3xl text-white flex items-center justify-center text-center">BOOK A TABLE</h1>

              <main className="flex flex-col gap-2">
                <p className="text-center">
                  Enjoy delicious meals from DeeNexus Food Truck.
                </p>
                <p className="text-center">
                  Call the Customer care section to learn more.
                </p>
              </main>

              <a className="text-amber-400 font-bold text-lg" href="tel:+234 705-7723-767">+234 705-7723-767</a>
            </span>

            <span className="flex flex-col text-gray-500 gap-4 items-center lg:w-[20%]">
              <h1 className="font-bold text-3xl text-white flex items-center justify-center text-center">OPENING HOURS</h1>
              
              <main className="flex flex-col">
                <span className="text-center">
                  Monday - Friday: <span className="text-white font-semibold">8am - 4pm</span>
                </span>
                <span className="text-center">
                  Saturday: <span className="text-white font-semibold">9am - 5pm</span>
                </span>
              </main>

              <article className="flex gap-3">
              <a href="https://facebook.com" className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center"><Facebook fill="black" size={15}/></a>
              <a href="https://twitter.com" className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center"> <Twitter fill="black" size={15}/> </a>
              <a href="https://linkedin.com" className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center"><Linkedin fill="black" size={15}/></a>
              <a href="https://youtube.com" className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center"><Youtube fill="black" size={15}/></a>
            </article>
            </span>

            <span className="flex flex-col text-gray-500 gap-4 items-center lg:w-[26%]">
              <h1 className="font-bold text-3xl text-white">NEWSLETTER</h1>
              <p className="text-center">
                Subscribe to the weekly newsletter for all the latest updates
              </p>

              <form>
                        <input className="w-full h-15 px-3 border-1 border-white outline-1 outline-white" onSubmit={()=>{}} onChange={(e) => {
                          setEmail(e.target.value)
                          console.log(email);
                          
                        }} type="email" placeholder="Enter your email..." name="" id="" required />
                        <button onClick={(e) =>{
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
                           }} type="submit" className="bg-amber-400 px-3 py-[12px] z-40 absolute ml-[-6.7rem] md:scale-50 md:ml-[-8%] mt-[0.45rem] font-bold cursor-pointer rounded-md text-sm">SUBSCRIBE</button>
                        </form>
            </span>
          </div>
        </article>
      </main>

      <main className="px-5 py-8 border-t-1 bg-green-600 text-xl border-gray-400 lg:flex md:grid md:grid-cols-1 sm:grid-cols-1 grid gap-2 grid-cols-1 items-center justify-between">
        <article className="font-semibold flex items-center justify-center">
          Copyright © 2025{" "}
          <span className="text-amber-400 font-bold">Deenexus</span>. All Right
          Reserved
        </article>

        <article className="flex items-center justify-center">
          <img src="/americanexpress.webp" alt="" />
        </article>
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
