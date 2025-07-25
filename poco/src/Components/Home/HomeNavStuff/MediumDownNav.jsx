import { Heart, LucideShoppingBasket, Search, Store, User } from "lucide-react";

export default function MediumDownNav() {
  return (
    <>
        <article className="h-21 z-100 fixed bottom-0 w-screen z-90 bg-white items-center justify-between shadow-md md:flex sm:hidden lg:hidden hidden">
        <main className="hover:cursor-pointer w-1/5 flex h-full flex-col border-t-2 border-t-gray-700 border-r-1 border-r-gray-700 items-center justify-center">
            <span><Store size={27}/></span>
            <div className="text-md font-bold">
            Shop
            </div>
        </main>
        <main className="hover:cursor-pointer w-1/5 flex h-full flex-col border-t-2 border-t-gray-700 border-r-1 border-r-gray-700 items-center justify-center">
            <span><User fill="black" size={27}/></span>
            <div className="text-md font-bold">
            My Account
            </div>
        </main>
        <main className="hover:cursor-pointer w-1/5 flex h-full flex-col border-t-2 border-t-gray-700 border-r-1 border-r-gray-700 items-center justify-center">
            <span><Search size={27}/></span>
            <div className="text-md font-bold">
            Search
            </div>
        </main>
        <main className="hover:cursor-pointer w-1/5 flex h-full flex-col border-t-2 border-t-gray-700 border-r-1 border-r-gray-700 items-center justify-center">
            <span><Heart fill="black" size={27}/></span>
            <div className="text-md font-bold">
            Wishlist
            </div>
        </main>
        <main className="hover:cursor-pointer w-1/5 flex h-full flex-col border-t-2 border-t-gray-700 border-r-1 border-r-gray-700 items-center justify-center">
            <span><LucideShoppingBasket fill="black" size={27}/></span>
            <div className="text-md font-bold">
            Cart
            </div>
        </main>
      </article>
    </>
  )
}
