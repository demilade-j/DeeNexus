import { Link } from "react-router-dom";

export default function HomeDiscoverMenu() {
  return (
    <div className="lg:flex md:grid-cols-1  p-20 bg-white items-center justify-center px-10 gap-20">
      <main className="flex flex-col items-start gap-3">
        <h2 className="font-medium text-4xl font-[Norican] text-amber-400">Discover Menu</h2>
        <h3 className="font-extrabold text-5xl">We deliver <br /> anywhere in the <br /> tri-state area</h3>
        <p>Each freshly meal is perfectly sized for one person to enjoy at  one sitting. Out fully prepared meals are delivered fresh, and ready to eat in 3 minutes</p>
        <article className="flex gap-7 items-center justify-center">
          <Link to='/menu'><button className="bg-amber-400 px-8 py-3 cursor-pointer font-bold rounded-lg text-xl">View Our Menu</button></Link> 
          <span className="bg-none flex gap-3 font-medium text-lg items-center justify-center">View All Products
            <button className="bg-green-700 h-7 w-7 flex rounded-md pb-[0.4rem] border-3 border-black font-extrabold text-2xl items-center justify-center">{">"}</button>
          </span>
        </article>
      </main>

      <main>
        <img className='discoverMenuPizza' src="/discover home pic.png" alt="" />
        <img className="absolute right-36 mt-[-4rem]" src="/Chilli 2 poco.png" alt="" />
      </main>
    </div>
  )
}
