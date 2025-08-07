import { useEffect, useState } from "react";
import CartOnclick from "../CartOnclick";

const products = [
  {
    id: 1,
    name: "Caramel Macchiato",
    description:
      "Espresso, steamed milk, and vanilla syrup, topped with caramel drizzle. A sweet and creamy delight!",
    price: "£5.49",
    src: "/caramelmacchiato.webp",
  },
  {
    id: 2,
    name: "Chai Latte",
    price: "£4.29",
    description:
      "A cozy blend of black tea, warm spices, and frothy milk. Comfort in every sip!",
    src: "/chailatte.webp",
  },
  {
    id: 3,
    name: "Cinnamon Dolce Latte",
    price: "£4.99",
    deletedPrice: "£5.49",
    description:
      "Espresso, steamed milk, and sweet cinnamon dolce syrup. A warm, spiced delight!",
    src: "/cinnamondolcelatte.webp",
  },
  {
    id: 4,
    name: "Classic Hot Chocolate ",
    price: "£4.49",
    deletedPrice: "£4.99",
    description:
      "Rich, creamy, and chocolatey. A timeless treat for any time of day.",
    src: "/classichotchocolate.webp",
  },
  {
    id: 5,
    name: "Honey Lavender Latte",
    price: "£5.49",
    description:
      "Earl Grey tea infused with lavender, steamed milk, and a touch of honey. Floral and soothing!",
    src: "/honeylavenderlatte.webp",
  },
  {
    id: 6,
    name: "London Fog",
    price: "£4.99",
    description:
      "Creamy matcha green tea blended with milk and a touch of honey. Refreshing and energizing!",
    src: "/londonfog.webp",
  },
  {
    id: 7,
    name: "Matcha Green Tea Latte",
    deletedPrice: "£6.29",
    price: "£5.99",
    description:
      "Creamy matcha green tea blended with steamed milk and a touch of honey. Energizing and soothing!",
    src: "/matchagreentealatte.webp",
  },
  {
    id: 8,
    name: "Peppermint Mocha",
    price: "£5.99",
    description:
      "Rich chocolate, espresso, and peppermint syrup. A festive, minty treat!",
    src: "/peppermintmocha.webp",
  },
  {
    id: 9,
    name: "Spiced Apple Cider",
    price: "£4.99",
    description:
      "Warm apple cider infused with cinnamon, cloves, and orange zest. A fall favorite!",
    src: "/spicedapplecider.webp",
  },
  {
    id: 10,
    name: "Turmeric Golden Milk",
    deletedPrice: "£5.99",
    price: "£5.49",
    description:
      "Warm milk infused with turmeric, ginger, and a hint of black pepper. A healing, golden breakfast!",
    src: "/turmericgoldenmilk.webp",
  },
  {
    id: 11,
    name: "Vanilla Rooibos Latte",
    price: "£4.49",
    deletedPrice: "£4.99",
    description:
      "Caffeine-free rooibos tea blended with steamed milk and vanilla syrup. Smooth and comforting!",
    src: "/vanillarooiboslatte.webp",
  },
  {
    id: 12,
    name: "White Chocolate Mocha",
    deletedPrice: "£5.99",
    price: "£5.49",
    description:
      "Espresso, steamed milk, and white chocolate sauce. A sweet, creamy indulgence!",
    src: "/whitechocolatemocha.webp",
  },
];
export default function MenuHero4() {
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
    <div>
      <main className="flex gap-6 flex-wrap px-5 items-center justify-center">
        {products.map((products) => (
          <article
            key={products.id}
            className="border-1 lg:w-[47%] h-75 md:w-full sm:w-full flex items-center justify-center w-full  rounded-4xl border-gray-500 px-4 duration-700 cursor-pointer"
          >
            <main className="w-full h-[90%] flex gap-7 items-center relative justify-center bg-[#ffbbbb] rounded-4xl">
              <img
                className="lg:h-50 lg:w-60 md:w-50 sm:w-40 w-35"
                src={products.src}
                alt=""
              />

              <div className="flex-flex-col gap-6 w-[55%]">
                <h2 className="font-bold text-[1.3rem] hover:text-amber-400 cursor-pointer">
                  {products.name}
                </h2>
                <p>{products.description}</p>
                <span className="flex gap-2 font-extrabold text-xl">
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
    </div>
  );
}
