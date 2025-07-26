import { useState } from "react";
import CartOnclick from "../../CartOnclick";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Trio Cheese",
    price: "£16.93",
    src: "/trio cheese.png",
    quantity: 1,
    description: "Mouth Watering Pepperoni,Cabanossi,Mushroom,...",
  },
  {
    id: 2,
    name: "Trio Cafe",
    price: "£12.18",
    src: "/trio cafe.png",
    description: "Trio Cafe Is Family Owned Establishment Located In...",
  },
  {
    id: 3,
    name: "Water Bottle",
    price: "£10.18",
    src: "/bottle water.png",
    description: "Investing In A Reuseable Water Bottle That You Can Refill...",
  },
  {
    id: 4,
    name: "Vegge Lover",
    price: "£14.90",
    src: "/vegge lover.png",
    description: "Extra-Virgin Olive Oil,Garlic,Monzarella Cheese,Onions...",
  },
  {
    id: 5,
    name: "Tagliatelle Molto",
    price: "£15.61",
    src: "/molto.png",
    description: "A Mighty Meaty Double Helping...",
  },
  {
    id: 6,
    name: "Tropicana Juice",
    price: "£11.11",
    src: "/tropicana.png",
    ingredients: ["Beef", "Lettuce", "Tomato", "Cheddar", "Onions", "Ketchup"],
  },
  {
    id: 7,
    name: "Black Bean Veggie Burger",
    price: "£5.99",
    src: "/blackbeanveggieburger.webp",
  },
  {
    id: 8,
    name: "Chicken Tenders",
    price: "£6.49",
    src: "/chickentenders.webp",
  },
  {
    id: 9,
    name: "Classic Cheeseburger",
    deletedPrice: "£5.99",
    price: "£4.99",
    src: "/classiccheeseburger.webp",
  },
  {
    id: 10,
    name: "Mozzarella Sticks",
    price: "£4.99",
    src: "/mozzarellasticks.webp",
  },
  {
    id: 11,
    name: "Pasta Primavera",
    price: "£9.49",
    src: "/pastaprimavera.webp",
  },
  {
    id: 12,
    name: "Pesto Penne",
    deletedPrice: "£8.99",
    price: "£7.99",
    src: "/pestopenne.webp",
  },
  {
    id: 13,
    name: "Spicy Sriracha Chicken Burger",
    price: "£6.99",
    src: "/spicysrirachachickenburger.webp",
  },
];

export default function BigMenu4() {
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <div className="p-1 w-full">
      <main className="flex gap-6 flex-wrap">
        {products.map((products) => (
          <article
            key={products.id}
            className="border-1 duration-700 cursor-pointer w-full lg:w-[32%] h-40 rounded-4xl border-gray-500 px-3 py-2"
          >
            <main className="w-full h-full flex gap-10 items-center relative justify-center bg-[#ffbbbb] rounded-4xl">
              <img
                className="h-27"
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
        <Link to='/menu'><button className="px-6 py-3 rounded-lg bg-amber-400 font-bold text-2xl">
          View Our Menu
        </button></Link>
      </main>
      <br />
      <br />
    </div>
  );
}
