import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Heart } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function FavOnclick({
  products,
  favorites,
  setFavorites,
  modal2,
  setModal2,
}) {
  const [modal4, setModal4] = useState(true);

  const handleRemove = (name) => {
    setFavorites((prevFavs) => prevFavs.filter((item) => item.name !== name));
  };

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
    if (modal4) {
      setTimeout(() => setModal4(false), 3000);
    }
  }, [modal4]);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isFavorite = favorites.some((item) => item.name === products.name);

  return (
    <div>
      <section
        className={`bg-[#3636363e] bg-opacity-80 w-full h-full border-none fixed flex top-0 right-0 z-[200000] justify-center items-center duration-1000 ${
          modal2 ? "translate-y-10" : "-translate-y-190"
        } ${modal2 ? "opacity-100" : "opacity-20"}`}
        onClick={() => setModal2(false)}
      >
        <div
          className={`overflow-x-hidden w-120 bg-white text-black z-[20000]`}
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="font-semibold bg-green-500 flex items-center justify-between h-15 text-2xl px-5">
            Wishlist ({favorites.length}){" "}
            <span onClick={() => setModal2(false)}>&times;</span>
          </h1>
          <hr className="text-gray-300 bg-gray-300" />

          {favorites && favorites.length > 0 ? (
            <div className="flex flex-col max-h-90 overflow-y-scroll">
              {favorites.map((item, index) => (
                <nav
                  key={index}
                  className="flex items-center w-full justify-between border-b min-h-25 even:bg-gray-200 border-gray-400 decoration-dotted px-2"
                >
                  <span
                    onClick={() => {
                      handleRemove(item.name);
                      setModal4(true);
                    }}
                    className="h-4 w-4 rounded-full text-amber-400 flex items-center pb-1 justify-center text-3xl cursor-pointer"
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
              Continue Shopping {" >>"}
            </span>
          </div>

          <main>
            {modal4 && (
              <main className="absolute z-60 w-120 bg-green-400 h-13 flex -mt-13 items-center justify-center font-semibold text-lg">
                Product removed from wishlist
              </main>
            )}
            {/* {modal3 && (
              <main className="absolute w-120 z-60 bg-green-400 h-13 flex mb-15 items-center justify-center font-semibold text-lg">
                Product added to wishlist
              </main>
            )} */}
          </main>
        </div>
      </section>

      <span
        onClick={(e) => {
          e.preventDefault();
          setModal2(true);

          if (isFavorite) {
            setFavorites((prev) =>
              prev.filter((item) => item.name !== products.name)
            );
            setModal2(false);
          } else {
            setFavorites((prev) => [...prev, products]);
          }
        }}
        className="absolute right-3 bottom-4 flex items-center justify-center cursor-pointer"
      >
        {isFavorite ? (
          <Heart size={28} className="text-red-500 fill-red-500" />
        ) : (
          <Heart size={28} className="hover:fill-black" />
        )}
      </span>
    </div>
  );
}
