import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { useState, useEffect } from "react";
import { useApp } from "../Context/useApp";

export default function FavOnclick() {
  // ✅ Get everything from global context
  const { favorites, setFavorites, favModal, setFavModal, setCart, setCartModal } = useApp();
  const [modal4, setModal4] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const handleRemove = (name) => {
    setFavorites((prevFavs) => prevFavs.filter((item) => item.name !== name));
    setModal4(true);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((p) => p.name === product.name);
      if (existingIndex !== -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: (updated[existingIndex].quantity || 1) + 1,
        };
        return updated;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // show a small toast and optionally open cart modal
    setAddedToast(true);
    setCartModal(true);
  };

  useEffect(() => {
    if (favModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [favModal]);

  useEffect(() => {
    if (modal4) setTimeout(() => setModal4(false), 3000);
  }, [modal4]);

  useEffect(() => {
    if (addedToast) setTimeout(() => setAddedToast(false), 2000);
  }, [addedToast]);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section
      className={`bg-[#1e1d1be8] w-full h-full fixed flex top-0 right-0 z-[200000] justify-center items-center duration-500 ${
        favModal ? "translate-y-0 opacity-100" : "-translate-y-900 opacity-0"
      }`}
      onClick={() => setFavModal(false)}
    >
      <div
        className="overflow-x-hidden w-120 bg-white text-black z-[20000]"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="font-semibold bg-green-500 flex items-center justify-between h-15 text-2xl px-5">
          Wishlist ({favorites.length})
          <span
            className="cursor-pointer"
            onClick={() => setFavModal(false)}
          >
            &times;
          </span>
        </h1>
        <hr className="text-gray-300 bg-gray-300" />

        {favorites.length > 0 ? (
          <div className="flex flex-col max-h-90 overflow-y-scroll">
            {favorites.map((item, index) => (
              <nav
                key={index}
                className="flex items-center justify-between border-b min-h-25 even:bg-gray-200 border-gray-400 px-2"
              >
                <span
                  onClick={() => handleRemove(item.name)}
                  className="text-3xl cursor-pointer text-amber-400"
                >
                  &times;
                </span>
                <span className="flex items-center gap-3">
                  <img
                    className="size-30 rounded-lg scale-80"
                    src={item.src}
                    alt={item.name}
                  />
                  <div className="text-left w-40">
                    <p className="font-bold text-amber-400">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.price}</p>
                    <p className="text-sm text-gray-600">{formattedDate}</p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-amber-400 px-4 py-3 rounded-md text-sm font-bold"
                  >
                    ADD TO CART
                  </button>
                </span>
              </nav>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 py-20 text-center text-gray-600 font-medium">
            No product in wishlist
            <DotLottieReact
              className="h-0 absolute ml-12 top-[-6%] w-[60%]"
              src="https://lottie.host/a624cba5-ace3-4b4b-ae5f-05157d308954/96DOD13mWR.lottie"
              loop
              autoplay
            />
          </div>
        )}

        <div className="w-full h-13 flex justify-between items-center font-bold text-amber-400 bg-pink-200 px-3">
          <span
            className="hover:text-green-500 cursor-pointer"
            onClick={() => setFavModal(false)}
          >
            Continue Shopping {" >>"}
          </span>
        </div>

        {modal4 && (
          <div className="absolute z-60 w-120 bg-green-400 h-13 flex items-center justify-center font-semibold text-lg">
            Product removed from wishlist
          </div>
        )}
        {addedToast && (
          <div className="absolute z-60 right-6 top-6 bg-green-400 px-4 py-2 rounded-md font-semibold text-sm">
            Product added to cart
          </div>
        )}
      </div>
    </section>
  );
}
