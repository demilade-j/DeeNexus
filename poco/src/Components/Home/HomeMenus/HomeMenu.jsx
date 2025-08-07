import { Heart, ShoppingBasketIcon, Star } from "lucide-react";
import CartOnclick from "../../CartOnclick";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavOnclick from "../../FavOnclick";

const productsApi = [
  {
    id: 1,
    name: "Trio Cheese",
    price: "£16.93",
    src: "/trio cheese.png",
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
];

export default function HomeMenu() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [favorites, setFavorites] = useState([]);
  // const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage if available
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="p-11 bg-cyan-950 lg:flex grid-cols-1 sm:grid-cols-1 md:grid-cols-1  items-center justify-center gap-38">
      <main className="flex flex-col items-center justify-center">
        <h1 className=" hero-1-2nd text-amber-400 text-3xl font-bold font-[Norican,sanserif]">
          Our Menu
        </h1>
        <h2 className="hero-1-2nd text-white text-4xl font-bold text-center">
          Best selling <br /> dishes
        </h2>
        <br />
        <br />
        <Link to="/menu">
          <button className="bg-amber-400 w-50 h-13 rounded-lg font-bold text-lg hero-btn cursor-pointer">
            VIEW ALL PRODUCTS
          </button>
        </Link>
        <br />
        <img className="hero-leaf-btn" src="/h7 chili 4.png" alt="" />
      </main>
      <main className="flex  overflow-x-auto lg:max-w-[79vw] px-2 scroll-smooth wrapTry gap-2">
        {productsApi.map((products) => (
          <article
            key={products.id}
            className=" min-w-65 relative rounded-4xl h-120 bg-white cursor-pointer flex flex-col items-center justify-center group"
          >
            <br />
            <button className="absolute mb-[20rem] z-40 ml-57 text-black duration-1000">
              <FavOnclick
                products={products} // or item
                favorites={favorites}
                setFavorites={setFavorites}
                modal2={modal2}
                setModal2={setModal2}
              />
            </button>
            <br />
            <div className="mt-[2rem] w-60 group-hover:h-55 group-hover:bg-amber-400 group-hover:mt-[-4.2rem] right-0 bg-amber-100 duration-500  h-30 rounded-4xl flex items-center justify-center">
              <img
                className="scale-80 absolute mb-20 group-hover:scale-85 group-hover:mb-[1rem] duration-500"
                src={products.src}
                alt=""
              />
            </div>
            <br />

            <div className="flex ml-[-6rem] gap-0.5">
              {<Star fill="yellow" color="white" size={25} />}
              {<Star fill="yellow" color="white" size={25} />}
              {<Star fill="yellow" color="white" size={25} />}
              {<Star fill="yellow" color="white" size={25} />}
              {<Star fill="yellow" color="white" size={25} />}
            </div>
            <div className="ml-[-.5rem]">
              <br />
              <main className="font-bold">{products.name}</main>
              <p className="flex flex-wrap">
                Lorem, ipsum dolor sit amet
                <br /> consectetur adipisicing elit...
              </p>
              <br />
              <main className="text-amber-400 font-bold text-2xl flex gap-22">
                {products.price}
              </main>
              <CartOnclick
                key={products.id}
                products={products}
                cart={cart}
                setCart={setCart}
                modal={modal}
                setModal={setModal}
              />
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
