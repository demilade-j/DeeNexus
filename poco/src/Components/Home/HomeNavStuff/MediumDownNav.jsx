import { Heart, LucideShoppingBasket, Search, ShoppingCart, Store, User } from "lucide-react";
import { useApp } from "../../../Context/useApp";
import FavOnclick from "../../FavOnclick";
import CartOnclick from "../../CartOnclick";
import { useNavigate } from "react-router-dom";

export default function MediumDownNav() {
  const {
    cart,
    favorites,
    cartModal,
    setCartModal,
    favModal,
    setFavModal,
  } = useApp();

  const navigate = useNavigate()

  // Calculate total cart items (sum quantities). If quantity is missing, treat as 1.
  const cartCount = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + (item.quantity ?? 1), 0)
    : 0;
  return (
    <>
    <div className="absolute -left-10">
      {/* 💖 Favorites Modal */}
      <FavOnclick modal2={favModal} setModal2={setFavModal} />

      {/* 🛒 Cart Modal */}
      <CartOnclick modal={cartModal} setModal={setCartModal} />
    </div>
    {/* <article className="flex gap-6 items-center">
          </article> */}
        <article className="h-21 z-100 fixed bottom-0 w-screen bg-white items-center justify-between shadow-md md:flex sm:hidden lg:hidden hidden">
        <main onClick={() => navigate("/shop")} title="Shop big now" className="hover:cursor-pointer w-1/4 flex h-full flex-col border-t-2 border-t-gray-700 border-r-1 border-r-gray-700 items-center justify-center">
            <span><Store size={27}/></span>
            <div className="text-md font-bold">
            Shop
            </div>
        </main>
        
        <main onClick={() => navigate("/search")} title="Search Products" className="hover:cursor-pointer w-1/4 flex h-full flex-col border-t-2 border-t-gray-700 border-r-1 border-r-gray-700 items-center justify-center">
            <span><Search size={27}/></span>
            <div className="text-md font-bold">
            Search
            </div>
        </main>

        <main  title="Wishlist" onClick={() => setFavModal(true)} className="hover:cursor-pointer w-1/4 flex h-full flex-col border-t-2 border-t-gray-700 border-r-1 border-r-gray-700 items-center relative justify-center">
              <Heart color="black" size={27}/>
            <div className="text-md font-bold">
            Wishlist
              {favorites.length > 0 && (
                <span className="absolute -top-1 right-7 bg-pink-500 text-black text-xs rounded-full px-1.5">
                  {favorites.length}
                </span>
              )}
            </div>
        </main>

        <main title="Cart"
              onClick={() => setCartModal(true)} className="hover:cursor-pointer relative w-1/4 flex h-full flex-col border-t-2 border-t-gray-700 border-r-1 border-r-gray-700 items-center justify-center">
            <span><ShoppingCart color="black" size={27}/></span>
            <div className="text-md font-bold">
            Cart
              {cartCount > 0 && (
                <span className="absolute -top-1 right-7 bg-green-500 text-white text-xs rounded-full px-1.5">
                  {cartCount}
                </span>
              )}
            </div>
        </main>
      </article>
    </>
  )
}
