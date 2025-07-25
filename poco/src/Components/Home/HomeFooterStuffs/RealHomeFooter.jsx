import { Facebook, GithubIcon, Linkedin, Twitter } from "lucide-react";

export default function RealHomeFooter() {
  return (
    <div className="flex flex-col">
        <main className="grid-cols-1 px-5 items-end justify-between py-20 lg:flex md:grid-cols-1 sm:grid-cols-1">
            <article className="flex gap-20 items-end justify-center pt-18">
                <menu className="flex flex-col gap-1">
                    <h1 className="text-green-600 text-2xl font-bold">DeeNexus</h1>
                    <p>We believe it has the power to do <br /> amazing things</p>
                    <a className="text-amber-400 lg:text-2xl text-xl font-semibold" href="tel:+234-705-7723-767">+234-705-7723-767</a>
                    <a classname='text-[0.7rem] text-gray-600' href="mailto:demilade228@gmail.com">Contact: demilade228@gmail.com</a>
                </menu>

                
                    <memu className="flex flex-col gap-2">
                        <p><span className="font-bold text-lg">Address: </span>10 Musibau, <br /> Lagos 10001 Nigeria</p>
                        <p><span className="font-bold text-lg">Hours: </span>9.30am-6.30pm <br /> Monday to Saturday</p>
                    </memu>
            </article>

            <article className = 'lg:flex lg:flex-row flex-wrap flex flex-col lg:w-fit w-full gap-20 justify-center items-center mr-35 lg:justify-end lg:items-end'>
                <menu className="flex flex-col gap-1">
                    <h1 className="font-bold text-xl">USEFUL LINKS</h1>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">New Products</a>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">Best Sellers</a>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">Bundle & Save</a>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">Online Gift Card</a>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">Discount</a>
                </menu>

                <menu className="flex flex-col gap-1">
                    <h1 className="font-bold text-xl">MY ACCOUNT</h1>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">My Profile</a>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">My Order History</a>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">My Wish List</a>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">Order Tracking</a>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">Shopping Cart</a>
                </menu>

                <menu className="flex flex-col gap-1">
                    <h1 className="font-bold text-xl">INFORMATION</h1>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">Privacy policy</a>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">Refund policy</a>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">Shipping & Return</a>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">Term of Use</a>
                    <a href="#" className="cursor-pointer text-lg text-gray-800">Advertise</a>
                </menu>
            </article>
        </main>

        <main className="px-5 py-8 border-t-1 border-gray-400 flex items-center justify-between">
            <article className="flex gap-8">
              <span className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center"><Facebook fill="black" size={15}/></span>
              <span className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center"> <Twitter fill="black" size={15}/> </span>
              <span className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center"><Linkedin fill="black" size={15}/></span>
              <span className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center"><GithubIcon fill="black" size={15}/></span>
            </article>

            <article>
                Copyright © 2025 <span className="text-amber-400 font-bold">Deenexus</span>. All Right Reserved
            </article>

            <article>
                <img src="/americanexpress.webp" alt="" />
            </article>
        </main>
    </div>
  )
}
