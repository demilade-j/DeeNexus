import { useState } from "react";
import CartOnclick from "../../CartOnclick";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Blue Berry Slushie",
    price: "£4.99",
    src: "/blueberryslushie.webp",
  },
  {
    id: 2,
    name: "Burger",
    price: "£6.99",
    src: "/burger.webp",
  },
  {
    id: 3,
    name: "Caramel Macchiato",
    price: "£5.49",
    src: "/caramelmacchiato.webp",
  },
  {
    id: 4,
    name: "Iced Caramel Macchiato",
    price: "£5.99",
    src: "/icedcaramelmacchiato.webp",
  },
  {
    id: 5,
    name: "London Fog",
    price: "£4.99",
    src: "/londonfog.webp",
  },
  {
    id: 6,
    name: "Mango Smoothie",
    deletedPrice: "£4.49",
    price: "£3.99",
    src: "/mangosmoothie.webp",
  },
  {
    id: 7,
    name: "Matcha Green Tea Smoothie",
    deletedPrice: "£5.99",
    price: "£5.49",
    src: "/matchagreenteasmoothie.webp",
  },
  {
    id: 8,
    name: "Mint Mojito (Non-Alcoholic)",
    deletedPrice: "£5.49",
    price: "£ 4.99",
    src: "/mintmojito.webp",
  },
  {
    id: 9,
    name: "Peach Iced Tea",
    deletedPrice: "£3.99",
    price: "£3.49",
    src: "/peachicedtea.webp",
  },
  {
    id: 10,
    name: "Strawberry Basil Lemonade",
    price: "£4.99",
    src: "/strawberrybasillemonade.webp",
  },
  {
    id: 11,
    name: "Strawberry Banana Smoothie",
    price: "£4.49",
    src: "/strawberrybananasmoothie.webp",
  },
  {
    id: 12,
    name: "Turmeric Golden Milk",
    deletedPrice: "£5.99",
    price: "£5.49",
    src: "/turmericgoldenmilk.webp",
  },
  {
    id: 13,
    name: "Vanilla Rooibos Latte",
    deletedPrice: "£4.99",
    price: "£4.49",
    src: "/vanillarooiboslatte.webp",
  },
];

export default function BigMenu2() {
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState([]);
  //  const { addToCart } = useCart();
  return (
    <div className="w-full p-1">
      <main className="flex gap-6 flex-wrap">
        {products.map((products) => (
          <article
            key={products.id}
            className="border-1 lg:w-[32%] md:w-full sm:w-full w-full h-40 rounded-4xl border-gray-500 px-3 py-2 duration-700 cursor-pointer"
          >
            <main className="w-full h-full flex gap-7 items-center relative justify-center bg-[#ffbbbb] rounded-4xl">
              <img className="h-23" src={products.src} alt="" />

              <div className="flex-flex-col gap-6">
                <h2 className="font-bold text-lg">{products.name}</h2>

                <span className="flex gap-2 font-extrabold text-lg">
                  <del className="text-gray-700">{products.deletedPrice}</del>
                  <main className="text-amber-600">{products.price}</main>
                </span>
              </div>

              <CartOnclick
                key={products.id}
                products={products}
                cart={cart}
                setCart={setCart}
                modal={modal}
                setModal={setModal}
              />
            </main>
          </article>
        ))}
      </main>
      <br />
      <br />
      <main className="flex flex-col items-center justify-center gap-4">
        <p className="text-gray-700 text-xl">
          During winter from <span className="text-black"> 6:30 pm </span>to{" "}
          <span className="text-black">9:00 pm</span>
        </p>
        <Link to='/menu'><button className="px-6 py-3 rounded-lg cursor-pointer bg-amber-400 font-bold text-2xl">
          View Our Menu
        </button></Link>
        
      </main>
      <br />
      <br />
    </div>
  );
}
