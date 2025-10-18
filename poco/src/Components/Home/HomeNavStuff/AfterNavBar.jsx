import React, { useState, useEffect, useRef } from "react";
import { Gift, Heart, Truck, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FavOnclick from "../../FavOnclick";
import CartOnclick from "../../CartOnclick";
import { useApp } from "../../../Context/useApp";

export default function AfterNavBar() {
  const navigate = useNavigate();
  const [showBar, setShowBar] = useState(true);
  const lastScrollY = useRef(0);

  // ✅ Use global context instead of props
  const {
    cart,
    favorites,
    cartModal,
    setCartModal,
    favModal,
    setFavModal,
  } = useApp();

  // Calculate total cart items (sum quantities). If quantity is missing, treat as 1.
  const cartCount = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + (item.quantity ?? 1), 0)
    : 0;

  // ✅ Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowBar(false);
      } else {
        setShowBar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="absolute -left-10">
      {/* 💖 Favorites Modal */}
      <FavOnclick modal2={favModal} setModal2={setFavModal} />

      {/* 🛒 Cart Modal */}
      <CartOnclick modal={cartModal} setModal={setCartModal} />
    </div>

      {/* 🔽 Main Navbar */}
      <div
        className="bar fixed left-0"
        style={{
          transition: "transform 0.3s ease",
          transform: showBar ? "translateY(199%)" : "translateY(-100%)",
          top: 0,
          width: "100%",
          zIndex: 1001,
        }}
      >
        <div className="h-18 px-3 text-black grid-cols-5 items-center justify-between bg-[#ccc] lg:flex md:hidden sm:hidden hidden">
          {/* 🌿 Brand */}
          <h1 className="text-green-700 font-extrabold text-2xl">
            DeeNexus
          </h1>

          {/* 🔍 Search */}
          <article className="flex items-center justify-between">
            <input
              onClick={() => navigate("/search")}
              type="search"
              className="h-10 w-2xs ps-10 pe-11 outline-amber-400 border-amber-400 border-2 rounded-3xl"
              placeholder="Search products"
            />
          </article>

          {/* 🚚 Delivery Info */}
          <article className="flex gap-4 items-center justify-between">
            <main>
              <Truck size={39} />
            </main>
            <main className="flex flex-col justify-center">
              <span>Free Delivery</span>
              <span>Details & restrictions</span>
            </main>
          </article>

          {/* 🎁 Offers */}
          <article className="flex gap-4 items-center">
            <main>
              <Gift size={39} />
            </main>
            <main className="flex flex-col justify-center">
              <span>Daily Offers</span>
              <span>Discount 20% off</span>
            </main>
          </article>

          {/* 💖 Wishlist + 🛒 Cart Triggers */}
          <article className="flex gap-6 items-center">
            {/* ❤️ Favorites */}
            <span
              title="Wishlist"
              className="relative border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-full hover:bg-amber-400 transition"
              onClick={() => setFavModal(true)}
            >
              <Heart color="black" fill='black' size={24} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full px-1.5">
                  {favorites.length}
                </span>
              )}
            </span>

            {/* 🛒 Cart */}
            <span
              title="Cart"
              className="relative border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-full hover:bg-amber-400 transition"
              onClick={() => setCartModal(true)}
            >
              <ShoppingCart fill="black" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full px-1.5">
                  {cartCount}
                </span>
              )}
            </span>
          </article>
        </div>
      </div>
    </>
  );
}
