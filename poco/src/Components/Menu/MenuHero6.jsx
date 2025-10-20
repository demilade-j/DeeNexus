import { useEffect, useState } from "react";
import CartOnclick from "../CartOnclick";

const products = [
  {
    id: 1,
    name: "Vegge Lover",
    price: "£14.90",
    description:
      "Extra-Virgin Olive Oil,Garlic,Monzarella Cheese,Onions with a hint of Oregano,Tomato Sauce,Red Pepper Flakes",
    src: "/vegge lover.png",
  },
  {
    id: 2,
    name: "Trio Cheese",
    price: "£16.93",
    src: "/trio cheese.png",
    description:
      "Mouth Watering Pepperoni,Mushroom,all in one flavor.Absolutely one of the best",
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    price: "£10.49",
    deletedPrice: "£11.49",
    src: "/bbqchickenpizza.webp",
    description:
      "Tangy BBQ sauce, grilled chicken, red onions, and mozzarella cheese. A bold and tasty choice!",
  },
];
export default function MenuHero5() {
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
      <main className="flex gap-6 flex-wrap px-5 items-center justify-start">
        {products.map((products) => (
          <article
            key={products.id}
            className="border-1 lg:w-[48%] h-95 md:w-full sm:w-full flex items-center justify-center w-full rounded-4xl border-gray-500 px-4 duration-700 cursor-pointer"
          >
            <main className="w-full h-[90%] flex gap-7 items-center relative justify-center bg-[#ffbbbb] rounded-4xl">
              <img
                className="lg:h-50 md:w-50 sm:w-40 w-35"
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
