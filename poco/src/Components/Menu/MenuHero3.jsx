import { useState } from "react";
import CartOnclick from "../CartOnclick";

const products = [
    {
      id: 1,
      name: "Berry Blast Smoothie",
      description:'A mix of strawberries, blueberries, and raspberries. Bursting with berry goodness!',
      price: "£4.99",
      src: "/berryblastsmoothie.webp",
    },
  {
    id: 2,
    name: "Blueberry Slushie",
    price: "£4.99",
    description:'Sweet blueberries blended into a icy, refreshing slush. Perfect for cooling down!!',
    src: "/blueberryslushie.webp",
  },
  {
    id: 3,
    name: "Classic Chocolate Shake",
    price: "£5.49",
    description:'Rich, creamy, and chocolatey. A classic treat for any time of day.!',
    src: "/classicchocolateshake.webp",
  },
  {
    id: 4,
    name: "Coconut Water Cooler",
    price: "£4.99",
    description:'Pure coconut water with a splash of lime. Hydrating and refreshing!',
    src: "/coconutwatercooler.webp",
  },
  {
    id: 5,
    name: "Iced Caramel Macchiato",
    price: "£5.99",
    description:'Espresso, milk, and vanilla syrup, topped with caramel drizzle. Perfectly chilled and refreshing!',
    src: "/icedcaramelmacchiato.webp",
  },
  {
    id: 6,
    name: "Iced Matcha Latte",
    price: "£4.99",
    deletedPrice: "£5.49",
    description:'Creamy matcha green tea blended with milk and a touch of honey. Refreshing and energizing!',
    src: "/icedmatchalatte.webp",
  },
  {
    id: 7,
    name: "Mango Lemonade",
    deletedPrice: "£4.49",
    price: "£3.99",
    description:'Sweet mango puree mixed with tangy lemonade. A tropical twist on a classic!',
    src: "/mangolemonade.webp",
  },
  {
    id: 8,
    name: "Mango Smoothie",
    deletedPrice: "£4.49",
    price: "£3.99",
    description:'Thick, creamy, and packed with real mangoes! Perfect for a refreshing tropical vibe.',
    src: "/mangosmoothie.webp",
  },
  {
    id: 9,
    name: "Matcha Green Tea Smoothie",
    deletedPrice: "£5.99",
    price: "£5.49",
    description:'Creamy matcha green tea blended with almond milk and honey. A refreshing, energizing treat!',
    src: "/matchagreenteasmoothie.webp",
  },
  {
    id: 10,
    name: "Mint Mojito (Non-Alcoholic)",
    deletedPrice: "£5.49",
    price: "£4.99",
    description:'Fresh mint, lime, and sparkling water. A refreshing mocktail with a zesty kick!',
    src: "/mintmojito.webp",
  },
  {
    id: 11,
    name: "Peach Iced Tea",
    price: "£3.49",
    deletedPrice: "£3.99",
    description:'Classic iced tea with a sweet peach twist. Refreshing and fruity!',
    src: "/peachicedtea.webp",
  },
  {
    id: 12,
    name: "Strawberry Banana Smoothie",
    price: "£4.49",
    description:'A classic combo of strawberries and bananas, blended to creamy perfection.',
    src: "/strawberrybananasmoothie.webp",
  },
  {
    id: 13,
    name: "Strawberry Basil Lemonade",
    price: "£4.99",
    description:'Sweet strawberries, fresh basil, and tangy lemonade. A refreshing herbal twist!',
    src: "/strawberrybasillemonade.webp",
  },
  {
    id: 14,
    name: "Tropical Pineapple Smoothie",
    deletedPrice: "£4.99",
    price: "£4.49",
    description:'Pineapple, coconut, and a hint of lime. Taste the tropics in every sip!',
    src: "/tropicalpineapplesmoothie.webp",
  },
  {
    id: 15,
    name: "Vanilla Bean Milkshake",
    deletedPrice: "£5.49",
    price: "£4.99",
    description:'Creamy vanilla bean goodness in every sip. Simple, smooth, and satisfying.',
    src: "/vanillabeanmilkshake.webp",
  },
];
export default function MenuHero3() {
    const [modal, setModal] = useState(false);
      const [cart, setCart] = useState([]);
  return (
    <div>
      <main className="flex gap-6 flex-wrap px-5 items-center justify-center">
        {products.map((products) => (
          <article
            key={products.id}
            className="border-1 lg:w-[47%] h-75 md:w-full sm:w-full flex items-center justify-center w-full rounded-4xl border-gray-500 px-4 hover:bg-indigo-500 duration-700 cursor-pointer"
          >
            <main className="w-full h-[90%] flex gap-7 items-center relative justify-center bg-[#ffbbbb] rounded-4xl">
              <img className="lg:h-50 lg:w-66 md:w-50 sm:w-40 w-35" src={products.src} alt="" />

              <div className="flex-flex-col gap-6 w-[55%]">
                <h2 className="font-bold text-[1.3rem] hover:text-amber-400 cursor-pointer">{products.name}</h2>
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
