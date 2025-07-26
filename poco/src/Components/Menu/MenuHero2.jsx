import { useState } from "react";
import CartOnclick from "../CartOnclick";

const products = [
  {
    id: 1,
    name: "BBQ Bacon Burger",
    price: "£6.99",
    description:'Smoky BBQ sauce, crispy bacon, sharp cheddar, and a perfectly grilled beef patty. Messy but totally worth it!',
    src: "/bbqbaconburger.webp",
  },
  {
    id: 2,
    name: "BBQ Pulled Pork Burger",
    price: "£8.99",
    description:'Tender pulled pork, tangy BBQ sauce, and crunchy coleslaw on a toasted bun. A Southern classic with a twist!',
    src: "/bbqpulledporkburger.webp",
  },
  {
    id: 3,
    name: "Black Bean Veggie Burger",
    price: "£5.99",
    description:'A hearty black bean patty with spices, topped with avocado and chipotle mayo. A delicious vegetarian option!',
    src: "/blackbeanveggieburger.webp",
  },
  {
    id: 4,
    name: "Blue Cheese Bacon Burger",
    deletedPrice: "£8.49",
    price: "£7.49",
    description:'Creamy blue cheese, crispy bacon, and a juicy beef patty. A bold flavor combination for cheese lovers!',
    src: "/bluecheesebaconburger.webp",
  },
  {
    id: 5,
    name: "Breakfast Burger",
    price: "£6.99",
    description:'A breakfast twist with a fried egg, crispy bacon, and melted cheese on a beef patty. Perfect for any time of day!',
    src: "/breakfastburger.webp",
  },
  {
    id: 6,
    name: "Buffalo Blue Cheese Burger",
    deletedPrice: "£4.49",
    price: "£3.99",
    description:'Spicy buffalo sauce, tangy blue cheese, and a crispy chicken patty. A fiery favorite for spice lovers!',
    src: "/buffalobluecheeseburger.webp",
  },
  {
    id: 7,
    name: "Classic Cheeseburger",
    deletedPrice: "£5.99",
    price: "£4.99",
    description:'A timeless classic with a juicy beef patty, melted cheese, lettuce, tomato, and pickles. Simple and satisfying!',
    src: "/classiccheeseburger.webp",
  },
  {
    id: 8,
    name: "Double Trouble Burger",
    deletedPrice: "£8.99",
    price: "£7.99",
    description:'Two beef patties, double cheese, and all the fixings. For those who can handle the extra meat!',
    src: "/doubletroubleburger.webp",
  },
  {
    id: 9,
    name: "Guacamole Bacon Burger",
    deletedPrice: "£6.99",
    price: "£5.99",
    description:'Creamy guacamole, crispy bacon, and a juicy beef patty. A fresh and flavorful twist on the classic burger!',
    src: "/guacamolebaconburger.webp",
  },
  {
    id: 10,
    name: "Habanero Heat Burger",
    price: "£7.99",
    description:'For the brave! A beef patty topped with habanero peppers, pepper jack cheese, and spicy mayo. Extreme heat!',
    src: "/habaneroheatburger.webp",
  },
  {
    id: 11,
    name: "Hawaiian Teriyaki Burger",
    price: "£7.49",
    description:'A tropical delight with teriyaki sauce, grilled pineapple, and a beef patty. Sweet and savory in every bite!',
    src: "/hawaiianteriyakiburger.webp",
  },
  {
    id: 12,
    name: "Jalapeno Popper Burger",
    deletedPrice: "£7.99",
    price: "£6.99",
    description:'A spicy treat with jalapeno poppers, cream cheese, and a beef patty. Perfect for those who love a kick!',
    src: "/jalapenopopperburger.webp",
  },
  {
    id: 13,
    name: "Mediterranean Lamb Burger",
    deletedPrice: "£9.99",
    price: "£8.99",
    description:'A flavorful lamb patty with tzatziki sauce, feta cheese, and fresh veggies. A taste of the Mediterranean!',
    src: "/mediterraneanlambburger.webp",
  },
  {
    id: 14,
    name: "Mushroom Swiss Burger",
    deletedPrice: "£7.99",
    price: "£6.99",
    description:'Sautéed mushrooms, melted Swiss cheese, and a juicy beef patty on a toasted bun. Earthy and indulgent!',
    src: "/mushroomswissburger.webp",
  },
  {
    id: 15,
    name: "Smoky Chipotle Burger",
    description:'Smoky chipotle sauce, pepper jack cheese, and caramelized onions. A smoky, spicy delight!',
    deletedPrice: "£7.49",
    price: "£6.49",
    src: "/smokychipotleburger.webp",
  },
  {
    id: 16,
    name: "Southern Fried Chicken Burger",
    deletedPrice: "£6.99",
    price: "£5.99",
    description:'Crispy fried chicken, coleslaw, and pickles on a soft bun. A Southern classic!',
    src: "/southernfriedchickenburger.webp",
  },
  {
      id: 17,
      name: "Spicy Jalapeño Burger",
      price: "£6.49",
      description:'For heat lovers! A beef patty topped with jalapeños, pepper jack cheese, and spicy mayo. Fire up your taste buds!',
      src: "/spicyjalapenoburger.webp",
    },
    {
      id: 18,
      name: "Spicy Sriracha Chicken Burger",
      description:'Grilled chicken breast smothered in spicy sriracha mayo, topped with crispy onions. A fiery delight!',
      price: "£6.99",
      src: "/spicysrirachachickenburger.webp",
    },
    {
      id: 19,
      name: "Truffle Butter Burger",
      description:'Indulge in luxury! A beef patty topped with truffle butter, arugula, and shaved Parmesan. Sophisticated and delicious!',
      price: "£8.99",
      deletedPrice: "£9.99",
      src: "/trufflebutterburger.webp",
    },
    {
      id: 20,
      name: "Truffle Mushroom Swiss Burger",
      description:'Sautéed mushrooms, truffle aioli, and melted Swiss cheese. A gourmet burger experience!',
      price: "£8.99",
      deletedPrice: "£9.99",
      src: "/trufflemushroomswissburger.webp",
    },
    {
      id: 21,
      name: "Veggie Delight Burger",
      description:'A plant-based patty with avocado, spinach, and a tangy vegan sauce. Healthy and delicious!',
      price: "£4.99",
      deletedPrice: "£5.99",
      src: "/veggiedelightburger.webp",
    },
];
export default function MenuHero2() {
    const [modal, setModal] = useState(false);
      const [cart, setCart] = useState([]);
  return (
    <div>
      <main className="flex gap-6 flex-wrap items-center justify-center">
        {products.map((products) => (
          <article
            key={products.id}
            className="border-1 lg:w-[47%] h-75 md:w-full sm:w-full flex items-center justify-center w-full rounded-4xl border-gray-500 px-4 duration-700 cursor-pointer"
          >
            <main className="w-full h-[90%] flex gap-7 items-center relative justify-center bg-[#ffbbbb] rounded-4xl">
              <img className="lg:h-50 lg:w-60 md:w-50 sm:w-40 w-35" src={products.src} alt="" />

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
