import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ShoppingBasketIcon } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CartOnclick({
  products,
  cart,
  setCart,
  modal,
  setModal,
}) {
  const handleRemove = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount just in case
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);

  const totalAmount = cart
    .reduce((acc, item) => {
      const price = parseFloat(item.price.replace("£", ""));
      return acc + price * item.quantity;
    }, 0)
    .toFixed(2);

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex-flex-col gap-6">
        {/* <h2 className="font-bold text-lg">{products.name}</h2> */}

        <span className="flex gap-2 font-extrabold text-lg">
          {/* <del className="text-gray-700">{products.deletedPrice}</del> */}
          {/* <main className="text-amber-600">{products.price}</main> */}
        </span>
      </div>

      {modal && (
        <div
          className="fixed inset-0 bg-[#0808081f] bg-opacity-50 z-[12000] "
          onClick={() => setModal(false)}
        />
      )}

      {modal && (
        <div>
          <div
            className={`fixed top-0 right-0 h-full overflow-x-hidden w-82 pr-4 px-3 bg-white text-black border-l-2 border-black z-19000 shadow transform transition-transform duration-190 ${
              modal ? "-translate-x-0" : "-translate-x-full"
            }`}
          >
            <article className="flex items-center mt-10 justify-between">
              <h1 className="font-medium text-[1.5rem]">SHOPPING CART</h1>
              <button
                onMouseEnter={(e) => {
                  setTimeout(() => {
                    e.target.textContent = "CLOSE -";
                  }, 100);
                }}
                onMouseLeave={(e) => {
                  setTimeout(() => {
                    e.target.textContent = "CLOSE ⁙";
                  }, 100);
                }}
                onClick={() => {
                  setModal(false);
                }}
                className="text-sm font-extrabold cursor-pointer text-red-600 hover:text-red-800"
              >
                CLOSE &times;
              </button>
            </article>
            <br />
            <hr className="text-gray-300 bg-gray-300" />

            {cart && cart.length > 0 ? (
              <div className="flex flex-col gap-4 absolute p-2 h-130  overflow-x-hidden">
                {cart.map((item, index) => (
                  <nav
                    key={index}
                    className="flex items-center w-70 py-1 justify-between border-b-1 border-gray-400"
                  >
                    <span
                      onClick={() => handleRemove(item.name)}
                      className="h-4 w-4 rounded-full text-amber-400 border-1 border-amber-500 flex items-center pb-1 justify-center"
                    >
                      &times;
                    </span>

                    <span className="flex items-center justify-center rounded-full bg-gray-300">
                      <img
                        className="size-20 rounded-lg scale-80"
                        src={item.src}
                        alt={item.name}
                      />
                    </span>
                    <div className="text-left w-30">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        £
                        {(
                          parseFloat(item.price.replace("£", "")) *
                          item.quantity
                        ).toFixed(2)}
                      </p>
                      <p className="text-gray-800">QTY: {item.quantity}</p>
                    </div>
                  </nav>
                ))}
                <main className="w-fit h-fit bg-white py-6 fixed bottom-0 flex flex-col gap-5">
                  <button className="z-40 w-70 flex items-center justify-between px-3 py-3 font-semibold border-1 border-gray-600">
                    SUBTOTAL PRICE: <span> £{totalAmount} </span>
                  </button>
                  <button
                    onClick={() => navigate("/checkout1")}
                    className="z-40 px-13 bg-amber-400 py-3 cursor-pointer rounded-lg font-semibold"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </main>
              </div>
            ) : (
              <div className="flex flex-col gap-4 p-2 text-center text-gray-600 font-medium">
                🛒 Cart is Empty
                <DotLottieReact className="h-150 absolute ml-12 top-[-6%] w-[60%]"
src="https://lottie.host/a624cba5-ace3-4b4b-ae5f-05157d308954/96DOD13mWR.lottie"
loop
autoplay
/>
              </div>
            )}
          </div>
        </div>
      )}

      <span
        onClick={(e) => {
          setModal(true);
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
        className="absolute right-3 bottom-4 h-10 w-10 rounded-2xl flex items-center justify-center bg-amber-400"
      >
        <ShoppingBasketIcon size={28} />
      </span>
    </div>
  );
}
