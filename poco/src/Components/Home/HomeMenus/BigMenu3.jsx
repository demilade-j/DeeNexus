import { useEffect, useState } from "react";
import CartOnclick from "../../CartOnclick";
import { Link } from "react-router-dom";
// import {modal,setModal,handleRemove,cart,setCart} from './BigMenu4'

const products = [
  {
    id: 1,
    name: "Black Bean Veggie Burger",
    price: "£5.99",
    src: "/blackbeanveggieburger.webp",
  },
  {
    id: 2,
    name: "Chicken Tenders",
    price: "£6.49",
    src: "/chickentenders.webp",
  },
  {
    id: 3,
    name: "Classic Cheeseburger",
    deletedPrice: "£5.99",
    price: "£4.99",
    src: "/classiccheeseburger.webp",
  },
  {
    id: 4,
    name: "Mozzarella Sticks",
    price: "£4.99",
    src: "/mozzarellasticks.webp",
  },
  {
    id: 5,
    name: "Pasta Primavera",
    price: "£9.49",
    src: "/pastaprimavera.webp",
  },
  {
    id: 6,
    name: "Pesto Penne",
    deletedPrice: "£8.99",
    price: "£7.99",
    src: "/pestopenne.webp",
  },
  {
    id: 7,
    name: "Spicy Sriracha Chicken Burger",
    price: "£6.99",
    src: "/spicysrirachachickenburger.webp",
  },
];

export default function BigMenu3() {
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState(() => {
      // Load cart from localStorage if available
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    });
  
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  return (
    <div className="w-full">
      <main className="lg:grid w-full lg:grid-cols-3 flex flex-wrap gap-4">
        {products.map((products) => (
          <article
            key={products.id}
            className="border-1 w-[100%] h-40 rounded-4xl border-gray-500 px-3 py-2 duration-700 cursor-pointer"
          >
            <main className="w-full h-full flex gap-10 items-center relative justify-center bg-[#ffbbbb] rounded-4xl">
              <img
                className="h-23"
                src={products.src}
                alt={`Image of ${products.name}`}
              />

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
