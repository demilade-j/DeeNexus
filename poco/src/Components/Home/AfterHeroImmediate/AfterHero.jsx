import { useNavigate } from "react-router-dom"

export default function AfterHero() {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col h-[140%] px-8 pb-40 gap-20 justify-center">
        <article>
            <br /><br />
            <h1 className="text-4xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">Our Regular Menu Pack</h1>
        </article>

        <article className="flex gap-[1.1rem] h-fit w-full flex-wrap items-center justify-center">
            <main onClick={()=>{
                navigate('/shop')
            }} className="h-63 cursor-pointer bg-pink-100 hover:bg-amber-400 duration-300 gap-6 w-55 rounded-2xl flex flex-col items-center justify-center group">
                <span className="bg-white h-25 w-25 rounded-full">
                    <img className="pt-5 pl-3 group-hover:scale-125 duration-500" src="/burger.webp" alt="" />
                </span>
                <h1 className="font-bold text-[1.05rem] ">BURGERS</h1>
                <p className=" mt-[-1.5rem]">21 products</p>
            </main>

            <main onClick={()=>{
                navigate('/shop')
            }} className="h-63 cursor-pointer bg-pink-100 hover:bg-amber-400 duration-300 w-55 gap-6 rounded-2xl flex flex-col items-center justify-center group">
                <span className="bg-white h-25 w-25 rounded-full">
                    <img className="pt-2 group-hover:scale-125 duration-500" src="/drink poco.webp" alt="" />
                </span>
                <h1 className="font-bold text-[1.05rem] ">COLD DRINKS</h1>
                <p className=" mt-[-1.5rem]">15 products</p>
            </main>

            <main onClick={()=>{
                navigate('/shop')
            }} className="h-63 cursor-pointer bg-pink-100 hover:bg-amber-400 duration-300 w-55 gap-6 rounded-2xl flex flex-col items-center justify-center group">
                <span className="bg-white h-25 w-25 rounded-full">
                    <img className="mt-[-0.5rem] group-hover:scale-125 duration-500" src="/hot drinks.webp" alt="" />
                </span>
                <h1 className="font-bold text-[1.05rem] ">HOT DRINKS</h1>
                <p className=" mt-[-1.5rem]">12 products</p>
            </main>

             <main onClick={()=>{
                navigate('/shop')
             }} className="h-63 cursor-pointer bg-pink-100 hover:bg-amber-400 duration-300 w-55 gap-6 rounded-2xl flex flex-col items-center justify-center group">
                <span className="bg-white h-25 w-25 rounded-full">
                    <img className="mt-[1.4rem] ml-5 size-15 group-hover:scale-125 duration-500" src="/indomie.webp" alt="" />
                </span>
                <h1 className="font-bold text-[1.05rem] ">PASTA</h1>
                <p className=" mt-[-1.5rem]">20 products</p>
            </main>

             <main onClick={()=>{
                navigate('/shop')
             }} className="h-63 cursor-pointer bg-pink-100 hover:bg-amber-400 duration-300 w-55 gap-6 rounded-2xl flex flex-col items-center justify-center group">
                <span className="bg-white h-25 w-25 rounded-full">
                    <img className="mt-[0.9rem] group-hover:scale-125 duration-500" src="/pizza.webp" alt="" />
                </span>
                <h1 className="font-bold text-[1.05rem] ">PIZZA</h1>
                <p className=" mt-[-1.5rem]">3 product</p>
            </main>

             <main onClick={()=>{
                navigate('/shop')
             }} className="h-63 cursor-pointer bg-pink-100 hover:bg-amber-400 duration-300 w-55 gap-6 rounded-2xl flex flex-col items-center justify-center group">
                <span className="bg-white h-25 w-25 rounded-full">
                    <img className="mt-[0.5rem] group-hover:scale-125 duration-500" src="/uncategorized.webp" alt="" />
                </span>
                <h1 className="font-bold text-[1.05rem] ">UNCATEGORIZED</h1>
                <p className=" mt-[-1.5rem]">3 products</p>
            </main>
        </article>
    </div>
  )
}
