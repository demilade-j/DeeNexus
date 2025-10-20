import { Donut, Hamburger, Store, Truck } from "lucide-react";

export default function GreenHomeFooter() {
  return (
    <div className="bg-green-700 px-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-7 text-white justify-center gap-20 items-center">
        <main className="flex flex-col gap-2 justify-center items-center">
            <article className="flex gap-5 items-center">
                <span className="text-amber-400"><Truck size={43}/></span>
                <h1 className="font-bold text-2xl">Free Shipping</h1>
            </article>
            <article className="font-semibold text-[1rem]">Sign up for updates and get free shipping</article>
        </main>

        <main className="flex flex-col gap-2 justify-center items-center">
            <article className="flex gap-5 items-center">
                <span className="text-amber-400"><Hamburger size={43}/></span>
                <h1 className="font-bold text-2xl">Fast Delivery</h1>
            </article>
            <article className="font-semibold text-[1rem]">We deliver goods around the world</article>
        </main>

        <main className="flex flex-col gap-2 justify-center items-center">
            <article className="flex gap-5 items-center">
                <span className="text-amber-400"><Donut size={43}/></span>
                <h1 className="font-bold text-2xl">Best Quality</h1>
            </article>
            <article className="font-semibold text-[1rem]">We are international chain of restaurants</article>
        </main>

        <main className="flex flex-col gap-2 justify-center items-center">
            <article className="flex gap-5 items-center">
                <span className="text-amber-400"><Store size={43}/></span>
                <h1 className="font-bold text-2xl">Our Store</h1>
            </article>
            <article className="font-semibold text-[1rem]">You can see our "here and now" products</article>
        </main>
    </div>
  )
}
