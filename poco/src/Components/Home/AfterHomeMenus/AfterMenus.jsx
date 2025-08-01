import { Link } from "react-router-dom";

export default function AfterMenus() {
  return (
    <div className="flex items-center justify-center px-4 lg:gap-4 flex-wrap gap-10 lg:flex">
    <main className="h-120 w-160 rounded-4xl bg-[#213148] overflow-hidden ">
      <article className="flex flex-col gap-2 pt-20 justify-center items-center text-white">
      <h1 className="text-amber-300 text-3xl  font-[Norican] ">Today's Best Deal</h1>
      <h2 className="font-extrabold text-4xl">Delicious Pizza</h2>
      <p className="font-bold text-xl">The best options of the day in your town</p>
      </article>
      <div className="relative mix-blend-overlay">
        <img
          src="/pizza2.jpeg"
          className="scale-170 opacity-100 hover:translate-y-[-4rem] hover:translate-x-[4rem] duration-1000 cursor-pointer"
        />
        <div className="absolute -z-10 bg-gradient-to-t from-red-100 via-red-100 to-red-100 w-fit" />
      </div>
    </main>

    <article className="flex gap-4 flex-wrap items-center justify-center md:flex lg:flex  ">
      <main className="h-120 w-100 rounded-4xl bg-[#63243d] overflow-hidden">
      <article className="flex flex-col gap-2 pt-60 justify-center items-center text-white">
      <h1 className="text-amber-300 text-3xl  font-[Norican] ">Spooks Delicious</h1>
      <h2 className="font-extrabold text-4xl">STRAWBERRY CAKE</h2>
      <p className="font-bold text-xl">This weekend only</p>
      <br />
      <Link to='/shop' className='z-40'>
      <button className="px-5 py-3 bg-amber-400 cursor-pointer rounded-xl text-xl text-black z-50 font-bold">SHOP NOW</button>
      </Link>
      </article>
      <div className="relative mix-blend-overlay">
        <img
          src="/cake.jpeg"
          className="scale-130 mt-[-23rem] opacity-100 hover:translate-y-[-4rem] hover:translate-x-[4rem] duration-1000 cursor-pointer"
        />
        <div className="absolute -z-10 bg-gradient-to-t from-red-100 via-red-100 to-red-100 w-fit" />
      </div>
    </main>

    <main className="h-120 w-100 rounded-4xl bg-[#494702] overflow-hidden ">
      <article className="flex flex-col gap-2 pt-20 justify-center items-center text-white">
      <h1 className="text-3xl text-amber-100 font-[Norican] tracking-widest">Pasta Menu</h1>
      <h2 className="font-extrabold text-4xl">Super Delicious</h2>
      <p className="font-bold text-xl">Available at affordable prices</p>
      <Link to='/shop' className="z-40">
      <button className="px-5 py-3 bg-amber-400 cursor-pointer rounded-xl text-xl text-black z-50 font-bold">SHOP NOW</button>
      </Link>
      </article>
      <div className="relative mix-blend-overlay">
        <img
          src="/Spaghetti Arrabbiata - Insanely Good.jpeg"
          className="scale-130 mt-[-16rem] opacity-100 hover:translate-y-[-4rem] hover:translate-x-[4rem] duration-1000 cursor-pointer"
        />
        <div className="absolute -z-10 bg-gradient-to-t from-red-100 via-red-100 to-red-100 w-fit" />
      </div>
    </main>
    </article>

    </div>
  );
}
