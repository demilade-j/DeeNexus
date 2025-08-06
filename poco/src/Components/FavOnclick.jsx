import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Heart, ShoppingBasketIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CartOnclick({
  products,
  cart,
  setCart,
  modal2,
  setModal2,
}) {
  const handleRemove = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  const [modal3, setModal3] = useState(true);
  const [modal4, setModal4] = useState(true);

  useEffect(() => {
    if (modal2) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal2]);

  useEffect(() => {
    if (modal3) {
      const timer = setTimeout(() => {setModal3(false)}, 3000);
      return () => clearTimeout(timer);
    }
  }, [modal3]);

  useEffect(() => {
    if (modal4) {
      const timer = setTimeout(() => {setModal4(false)}, 3000);
      return () => clearTimeout(timer);
    }
  }, [modal4]);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      {/* <div className="flex-flex-col gap-6"></div> */}

      <section
        className={`bg-[#3636363e] bg-opacity-80 w-full h-full border-none fixed flex top-0 right-0 z-[200000] justify-center items-center duration-1500 ${
          modal2 ? "translate-y-10" : "-translate-y-190"
        } ${modal2 ? "opacity-100" : "opacity-20"}`}
        onClick={() => setModal2(false)}
      >
        <div
          className={`overflow-x-hidden w-120 bg-white text-black z-[20000]`}
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="font-semibold bg-green-500 flex items-center justify-between h-15 text-2xl px-5">
            Wishlist ({cart.length}){" "}
            <span onClick={() => setModal2(false)}>&times;</span>
          </h1>
          <hr className="text-gray-300 bg-gray-300" />

          {cart && cart.length > 0 ? (
            <>
              {/* Scrollable list */}
              <div className="flex flex-col max-h-90 overflow-y-scroll">
                {cart.map((item, index) => (
                  <nav
                    key={index}
                    className="flex items-center w-full justify-between border-b min-h-25 even:bg-gray-200 border-gray-400 decoration-dotted px-2"
                  >
                    <span
                      onClick={() => {
                        handleRemove(item.name);
                        setModal4(true);
                        setTimeout(() => setModal4(false), 3000);}}
                      className="h-4 w-4 rounded-full text-amber-400 flex items-center pb-1 justify-center text-3xl"
                    >
                      &times;
                    </span>

                    <span className="flex items-center justify-center">
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
                      <button className="bg-amber-400 px-4 py-3 rounded-md font-bold">
                        ADD TO CART
                      </button>
                    </span>
                  </nav>
                ))}
              </div>
            </>
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
              onClick={() => setModal2(false)}
            >
              Continue Shopping{" >>"}
            </span>
            {/* <span className="hover:text-green-500 cursor-pointer">
              Open Wishlist Page {" >>"}
            </span> */}
          </div>
        {modal4 && (
          <main className="absolute z-60 w-120 bg-green-400 h-13 flex items-center justify-center font-semibold text-lg">
            Product removed from wishlist
          </main>
        )}
        {modal3 && (
          <main className="absolute w-120 z-60 bg-green-400 h-13 flex items-center justify-center font-semibold text-lg">
            Product added to wishlist
          </main>
        )}
        </div>

      </section>
      <span
        onClick={(e) => {
          setModal2(true);
          setModal3(true);
          e.preventDefault();
          setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(
              (item) => item.name === products.name
            );

            if (existingItemIndex !== -1) {
              const updatedCart = [...prevCart];
              updatedCart[existingItemIndex] = {
                ...updatedCart[existingItemIndex],
                quantity: updatedCart[existingItemIndex].quantity + 1,
              };
              return updatedCart;
            } else {
              return [...prevCart, { ...products, quantity: 1 }];
            }
          });
        }}
        className="absolute right-3 bottom-4 flex items-center justify-center cursor-pointer"
      >
        <Heart size={28} className="hover:fill-black" />
      </span>
    </div>
  );
}
