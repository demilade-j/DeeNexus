import { useEffect, useState } from "react";
import CartOnclick from "../../CartOnclick";
import FavOnclick from "../../FavOnclick";
import { Heart, Logs, LayoutGrid } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavHeader from "../../Home/HomeNavStuff/NavHeader";
import ContactNavBar from "../../Contact/ContactNavbar";
import MediumDownNav from "../../Home/HomeNavStuff/MediumDownNav";
import AfterShopNavbar from "../AfterShopNavbar";
import BlogRightHero from "../../Blog/BlogRightHero";

const products = [
  {
    id: 1,
    name: "Trio Cheese Pizza",
    price: "£16.93",
    src: "/trio cheese.png",
    description:
      "Mouth Watering Pepperoni,Cabanossi,Mushroom,all in one flavor.Absolutely one of ...",
  },
  {
    id: 2,
    name: "BBQ Bacon Burger",
    price: "£6.99",
    description:
      "Smoky BBQ sauce, crispy bacon, sharp cheddar, and a perfectly grilled beef patty. Messy but total...",
    src: "/bbqbaconburger.webp",
  },
  {
    id: 3,
    name: "Berry Blast Smoothie",
    description:
      "A mix of strawberries, blueberries, and raspberries. Bursting with berry goodness!",
    price: "£4.99",
    src: "/berryblastsmoothie.webp",
  },
  {
    id: 4,
    name: "Chai Latte",
    price: "£4.29",
    description:
      "A cozy blend of black tea, warm spices, and frothy milk. Comfort in every sip!",
    src: "/chailatte.webp",
  },
  {
    id: 5,
    name: "Lobster Ravioli",
    price: "£14.99",
    description:
      "Homemade ravioli stuffed with succulent lobster, served in a creamy tomato bisque. Luxurious!",
    src: "/lobsterravioli.webp",
  },
  {
    id: 6,
    name: "BBQ Pulled Pork Burger",
    price: "£8.99",
    description:
      "Tender pulled pork, tangy BBQ sauce, and crunchy coleslaw on a toasted bun. A Southern classic...",
    src: "/bbqpulledporkburger.webp",
  },
  {
    id: 7,
    name: "Blueberry Slushie",
    price: "£4.99",
    description:
      "Sweet blueberries blended into a icy, refreshing slush. Perfect for cooling down!!",
    src: "/blueberryslushie.webp",
  },
  {
    id: 8,
    name: "Black Bean Veggie Burger",
    price: "£5.99",
    description:
      "A hearty black bean patty with spices, topped with avocado and chipotle mayo. A delicious veget...",
    src: "/blackbeanveggieburger.webp",
  },
  {
    id: 9,
    name: "London Fog",
    price: "£4.99",
    description:
      "Creamy matcha green tea blended with milk and a touch of honey. Refreshing and energizing!",
    src: "/londonfog.webp",
  },
  {
    id: 10,
    name: "Blue Cheese Bacon Burger",
    deletedPrice: "£8.49",
    price: "£7.49",
    description:
      "Creamy blue cheese, crispy bacon, and a juicy beef patty. A bold flavor combination for cheese lovers!",
    src: "/bluecheesebaconburger.webp",
  },
  {
    id: 11,
    name: "Creamy Basil Penne",
    price: "£8.99",
    deletedPrice: "£9.99",
    description:
      "Penne pasta in a creamy tomato basil sauce. A comforting blend of flavors!",
    src: "/creamybasilpenne.webp",
  },
  {
    id: 12,
    name: "Breakfast Burger",
    price: "£6.99",
    description:
      "A breakfast twist with a fried egg, crispy bacon, and melted cheese on a beef patty. Perfect for any time...",
    src: "/breakfastburger.webp",
  },
  {
    id: 13,
    name: "Matcha Green Tea Smoothie",
    deletedPrice: "£5.99",
    price: "£5.49",
    description:
      "Creamy matcha green tea blended with almond milk and honey. A refreshing, energizing treat!",
    src: "/matchagreenteasmoothie.webp",
  },
  {
    id: 14,
    name: "Buffalo Blue Cheese Burger",
    deletedPrice: "£4.49",
    price: "£3.99",
    description:
      "Spicy buffalo sauce, tangy blue cheese, and a crispy chicken patty. A fiery favorite for spice lovers!",
    src: "/buffalobluecheeseburger.webp",
  },
  {
    id: 15,
    name: "Turmeric Golden Milk",
    deletedPrice: "£5.99",
    price: "£5.49",
    description:
      "Warm milk infused with turmeric, ginger, and a hint of black pepper. A healing, golden breakfast!",
    src: "/turmericgoldenmilk.webp",
  },
  {
    id: 16,
    name: "Spaghetti Carbonara",
    price: "£9.99",
    description:
      "Classic Roman pasta with crispy pancetta, eggs, Parmesan, and black pepper. Simple yet divine!",
    src: "/spaghetticarbonara.webp",
  },
  {
    id: 17,
    name: "Classic Chocolate Shake",
    price: "£5.49",
    description:
      "Rich, creamy, and chocolatey. A classic treat for any time of day! Definately satisfying",
    src: "/classicchocolateshake.webp",
  },
  {
    id: 18,
    name: "Habanero Heat Burger",
    price: "£7.99",
    description:
      "For the brave! A beef patty topped with habanero peppers, pepper jack cheese, and spicy mayo. Extre...",
    src: "/habaneroheatburger.webp",
  },
  {
    id: 19,
    name: "Honey Lavender Latte",
    price: "£5.49",
    description:
      "Earl Grey tea infused with lavender, steamed milk, and a touch of honey. Floral and soothing!",
    src: "/honeylavenderlatte.webp",
  },
  {
    id: 20,
    name: "Vanilla Bean Milkshake",
    deletedPrice: "£5.49",
    price: "£4.99",
    description:
      "Creamy vanilla bean goodness in every sip. Simple, smooth, and satisfying.",
    src: "/vanillabeanmilkshake.webp",
  },
  {
    id: 21,
    name: "Spicy Arrabbiata",
    price: "£8.99",
    description:
      "Penne pasta in a fiery tomato sauce with garlic, chili flakes, and fresh basil. Perfect for spice lovers!",
    src: "/spicyarrabbiata.webp",
  },
  {
    id: 22,
    name: "Iced Caramel Macchiato",
    price: "£5.99",
    description:
      "Espresso, milk, and vanilla syrup, topped with caramel drizzle. Perfectly chilled and refreshing!",
    src: "/icedcaramelmacchiato.webp",
  },
  {
    id: 23,
    name: "Cajun Shrimp Pasta",
    price: "£12.99",
    deletedPrice: "£11.99",
    description:
      "Spicy Cajun-seasoned shrimp served over fettuccine pasta in a creamy Alfredo sauce. Bold and fl...",
    src: "/cajunchickenpasta.webp",
  },
  {
    id: 24,
    name: "Classic Cheeseburger",
    deletedPrice: "£5.99",
    price: "£4.99",
    description:
      "A timeless classic with a juicy beef patty, melted cheese, lettuce, tomato, and pickles. Simple and...",
    src: "/classiccheeseburger.webp",
  },
  {
    id: 25,
    name: "Coconut Water Cooler",
    price: "£4.99",
    description:
      "Pure coconut water with a splash of lime. Hydrating and refreshing! Best for beach experience",
    src: "/coconutwatercooler.webp",
  },
  {
    id: 26,
    name: "Double Trouble Burger",
    deletedPrice: "£8.99",
    price: "£7.99",
    description:
      "Two beef patties, double cheese, and all the fixings. For those who can handle the extra meat!",
    src: "/doubletroubleburger.webp",
  },
  {
    id: 27,
    name: "Butternut Squash Ravioli",
    description:
      "Homemade ravioli stuffed with roasted butternut squash, served in a sage brown butter sauce. Sweet...",
    price: "£11.99",
    src: "/butternutsquashravioli.webp",
  },
  {
    id: 28,
    name: "Guacamole Bacon Burger",
    deletedPrice: "£6.99",
    price: "£5.99",
    description:
      "Creamy guacamole, crispy bacon, and a juicy beef patty. A fresh and flavorful twist on the classic burger!",
    src: "/guacamolebaconburger.webp",
  },
  {
    id: 29,
    name: "Iced Matcha Latte",
    price: "£4.99",
    deletedPrice: "£5.49",
    description:
      "Creamy matcha green tea blended with milk and a touch of honey. Refreshing and energizing!",
    src: "/icedmatchalatte.webp",
  },
  {
    id: 30,
    name: "Mango Smoothie",
    deletedPrice: "£4.49",
    price: "£3.99",
    description:
      "Thick, creamy, and packed with real mangoes! Perfect for a refreshing tropical vibe.",
    src: "/mangosmoothie.webp",
  },
  {
    id: 31,
    name: "Hawaiian Teriyaki Burger",
    price: "£7.49",
    description:
      "A tropical delight with teriyaki sauce, grilled pineapple, and a beef patty. Sweet and savory in every...",
    src: "/hawaiianteriyakiburger.webp",
  },
  {
    id: 32,
    name: "Mint Mojito (Non-Alcoholic)",
    deletedPrice: "£5.49",
    price: "£4.99",
    description:
      "Fresh mint, lime, and sparkling water. A refreshing mocktail with a zesty kick!",
    src: "/mintmojito.webp",
  },
  {
    id: 33,
    name: "Cajun Chicken Pasta",
    price: "£10.99",
    deletedPrice: "£11.99",
    description:
      "Spicy Cajun-seasoned chicken breast served over penne pasta in a creamy Alfredo sauce. Bold and...",
    src: "/cajunshrimppasta.webp",
  },
  {
    id: 34,
    name: "Mango Lemonade",
    deletedPrice: "£4.49",
    price: "£3.99",
    description:
      "Sweet mango puree mixed with tangy lemonade. A tropical twist on a classic!",
    src: "/mangolemonade.webp",
  },
  {
    id: 35,
    name: "Vegge Lover",
    price: "£14.90",
    description:
      "Extra-Virgin Olive Oil with Garlic,Monzarella Cheese,Onions with a hint of Oregano.",
    src: "/vegge lover.png",
  },
  {
    id: 36,
    name: "Strawberry Basil Lemonade",
    price: "£4.99",
    description:
      "Sweet strawberries, fresh basil, and tangy lemonade. A refreshing herbal twist!",
    src: "/strawberrybasillemonade.webp",
  },
  {
    id: 37,
    name: "Jalapeno Popper Burger",
    deletedPrice: "£7.99",
    price: "£6.99",
    description:
      "A spicy treat with jalapeno poppers, cream cheese, and a beef patty. Perfect for those who love a kick!",
    src: "/jalapenopopperburger.webp",
  },
  {
    id: 38,
    name: "Caramel Macchiato",
    description:
      "Espresso, steamed milk, and vanilla syrup, topped with caramel drizzle. A sweet and creamy delight!",
    price: "£5.49",
    src: "/caramelmacchiato.webp",
  },
  {
    id: 39,
    name: "Lemon Garlic Shrimp Linguine",
    deletedPrice: "£12.99",
    price: "£11.99",
    description:
      "Linguine pasta tossed with succulent shrimp in a zesty lemon garlic sauce. Fresh and vibrant!",
    src: "/lemongarlicshrimplinguine.webp",
  },
  {
    id: 40,
    name: "Mediterranean Lamb Burger",
    deletedPrice: "£9.99",
    price: "£8.99",
    description:
      "A flavorful lamb patty with tzatziki sauce, feta cheese, and fresh veggies. A taste of the Medite...",
    src: "/mediterraneanlambburger.webp",
  },
  {
    id: 41,
    name: "Classic Hot Chocolate ",
    price: "£4.49",
    deletedPrice: "£4.99",
    description:
      "Rich, creamy, delicious and chocolatey. A timeless treat for any time of day. ",
    src: "/classichotchocolate.webp",
  },
  {
    id: 42,
    name: "Chicken Parmesan Pasta",
    price: "£11.49",
    description:
      "Breaded chicken breast served over spaghetti with marinara sauce and melted mozzarella. A classic!",
    src: "/chickenparmesanpasta.webp",
  },
  {
    id: 43,
    name: "Tropical Pineapple Smoothie",
    deletedPrice: "£4.99",
    price: "£4.49",
    description:
      "Pineapple, coconut, and a hint of lime and strawberry. Taste the tropics in every sip!",
    src: "/tropicalpineapplesmoothie.webp",
  },
  {
    id: 44,
    name: "Mushroom Swiss Burger",
    deletedPrice: "£7.99",
    price: "£6.99",
    description:
      "Sautéed mushrooms, melted Swiss cheese, and a juicy beef patty on a toasted bun. Earthy and indulgent!",
    src: "/mushroomswissburger.webp",
  },
  {
    id: 45,
    name: "Pesto Gnocchi",
    price: "£10.99",
    description:
      "Soft potato gnocchi tossed in fresh basil pesto. A simple yet flavorful dish!",
    src: "/pestognocchi.webp",
  },
  {
    id: 46,
    name: "Pesto Penne",
    price: "£7.99",
    deletedPrice: "£8.99",
    description:
      "Fresh basil pesto tossed with penne pasta, cherry tomatoes, and Parmesan. Bright and flavorful!",
    src: "/pestopenne.webp",
  },
  {
    id: 47,
    name: "Vanilla Rooibos Latte",
    price: "£4.49",
    deletedPrice: "£4.99",
    description:
      "Caffeine-free rooibos tea blended with steamed milk and vanilla syrup. Smooth and comforting!",
    src: "/vanillarooiboslatte.webp",
  },
  {
    id: 48,
    name: "White Chocolate Mocha",
    deletedPrice: "£5.99",
    price: "£5.49",
    description:
      "Espresso, steamed milk, and white chocolate sauce. A sweet, creamy indulgence!",
    src: "/whitechocolatemocha.webp",
  },
  {
    id: 49,
    name: "Pasta Primavera",
    price: "£9.49",
    description:
      "A colorful mix of fresh vegetables tossed with penne pasta in a light garlic olive oil sauce. Healthy and...",
    src: "/pastaprimavera.webp",
  },
  {
    id: 50,
    name: "Strawberry Banana Smoothie",
    price: "£4.49",
    description:
      "A classic combo of strawberries and bananas, blended to creamy perfection.",
    src: "/strawberrybananasmoothie.webp",
  },
  {
    id: 51,
    name: "BBQ Chicken Pizza",
    price: "£10.49",
    deletedPrice: "£11.49",
    src: "/bbqchickenpizza.webp",
    description:
      "Tangy BBQ sauce, grilled chicken, red onions, and mozzarella cheese. A bold and tasty choice!",
  },
  {
    id: 52,
    name: "Truffle Mushroom Swiss Burger",
    description:
      "Sautéed mushrooms, truffle aioli, and melted Swiss cheese. A gourmet burger experience!",
    price: "£8.99",
    deletedPrice: "£9.99",
    src: "/trufflemushroomswissburger.webp",
  },
  {
    id: 53,
    name: "Mac and Cheese",
    price: "£7.99",
    deletedPrice: "£8.99",
    description:
      "Creamy, cheesy elbow macaroni baked to perfection. A classic comfort food favorite!",
    src: "/macandcheese.webp",
  },
  {
    id: 54,
    name: "Cinnamon Dolce Latte",
    price: "£4.99",
    deletedPrice: "£5.49",
    description:
      "Espresso, steamed milk, and sweet cinnamon dolce syrup. A warm, spiced delight!",
    src: "/cinnamondolcelatte.webp",
  },
  {
    id: 55,
    name: "Smoky Chipotle Burger",
    description:
      "Smoky chipotle sauce, pepper jack cheese, and caramelized onions. A smoky, spicy delight!",
    deletedPrice: "£7.49",
    price: "£6.49",
    src: "/smokychipotleburger.webp",
  },
  {
    id: 56,
    name: "Peppermint Mocha",
    price: "£5.99",
    description:
      "Rich chocolate, espresso, and peppermint syrup. A festive, minty treat!",
    src: "/peppermintmocha.webp",
  },
  {
    id: 57,
    name: "Spicy Jalapeño Burger",
    price: "£6.49",
    description:
      "For heat lovers! A beef patty topped with jalapeños, pepper jack cheese, and spicy mayo. Fire up...",
    src: "/spicyjalapenoburger.webp",
  },
  {
    id: 58,
    name: "Spiced Apple Cider",
    price: "£4.99",
    description:
      "Warm apple cider infused with cinnamon, cloves, and orange zest. A fall favorite!",
    src: "/spicedapplecider.webp",
  },
  {
    id: 59,
    name: "Spicy Sausage Rigatoni",
    deletedPrice: "£11.49",
    price: "£10.49",
    description:
      "Rigatoni pasta with spicy Italian sausage in a rich tomato cream sauce. Bold and hearty!",
    src: "/spicysausagerigatoni.webp",
  },
  {
    id: 60,
    name: "Southern Fried Chicken Burger",
    deletedPrice: "£6.99",
    price: "£5.99",
    description:
      "Crispy fried chicken, coleslaw, and pickles on a soft bun. A Southern classic!",
    src: "/southernfriedchickenburger.webp",
  },
  {
    id: 61,
    name: "Peach Iced Tea",
    price: "£3.49",
    deletedPrice: "£3.99",
    description:
      "Classic iced tea with a sweet and delicious peach twist. really refreshing and fruity!",
    src: "/peachicedtea.webp",
  },
  {
    id: 62,
    name: "SeaFood Linguine",
    deletedPrice: "£10.99",
    price: "£9.99",
    description:
      "Homemade ravioli stuffed with pumpkin and ricotta, served in a brown butter sage sauce. A fall...",
    src: "/seafoodlinguine.webp",
  },
  {
    id: 63,
    name: "Matcha Green Tea Latte",
    deletedPrice: "£6.29",
    price: "£5.99",
    description:
      "Creamy matcha green tea blended with steamed milk and a touch of honey. Energizing and soothing!",
    src: "/matchagreentealatte.webp",
  },
  {
    id: 64,
    name: "Truffle Butter Burger",
    description:
      "Indulge in luxury! A beef patty topped with truffle butter, arugula, and shaved Parmesan. Sophistica...",
    price: "£8.99",
    deletedPrice: "£9.99",
    src: "/trufflebutterburger.webp",
  },
  {
    id: 65,
    name: "Vegetable Lasagna",
    deletedPrice: "£9.49",
    price: "£8.49",
    description:
      "Layers of pasta, roasted vegetables, and creamy béchamel sauce. A veggie lover’s dream!",
    src: "/vegetablelasagna.webp",
  },
  {
    id: 66,
    name: "Spicy Sriracha Chicken Burger",
    description:
      "Grilled chicken breast smothered in spicy sriracha mayo, topped with crispy onions. A fiery delight!",
    price: "£6.99",
    src: "/spicysrirachachickenburger.webp",
  },
  {
    id: 67,
    name: "Spinach Ricotta Stuffed Shells",
    price: "£9.99",
    description:
      "Jumbo pasta shells stuffed with a creamy spinach and ricotta filling, baked in marinara sauce. Comfort...",
    src: "/spinachricottastuffedshells.webp",
  },
  {
    id: 68,
    name: "Truffle Mushroom Fettuccine",
    deletedPrice: "£12.99",
    price: "£11.99",
    description:
      "Fettuccine pasta in a creamy truffle mushroom sauce. Earthy, rich, and indulgent!",
    src: "/trufflemushroomfettuccine.webp",
  },
  {
    id: 69,
    name: "Veggie Delight Burger",
    description:
      "A plant-based patty with avocado, spinach, and a tangy vegan sauce. Healthy and delicious!",
    price: "£4.99",
    deletedPrice: "£5.99",
    src: "/veggiedelightburger.webp",
  },
  {
    id: 70,
    name: "Shrimp Alfredo",
    deletedPrice: "£10.49",
    price: "£9.49",
    description:
      "Rich, creamy Alfredo sauce with plump, juicy shrimp over fettuccine pasta. Absolutely indulgent!",
    src: "/shrimpalfredo.webp",
  },
  {
    id: 71,
    name: "Pumpkin Sage Ravioli",
    deletedPrice: "£5.99",
    price: "£5.49",
    description:
      "Espresso, steamed milk, and white chocolate sauce. A sweet, creamy indulgence!",
    src: "/pumpkinsageravioli.webp",
  },
];

export default function ShopBig() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage if available
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });
  const [favorites, setFavorites] = useState([]);
  const [sortedProducts, setSortedProducts] = useState(products);
  const handleSortChange = (e) => {
    const value = e.target.value;

    let sorted = [...products];

    if (value === "low-to-high") {
      sorted.sort(
        (a, b) =>
          parseFloat(a.price.replace("£", "")) -
          parseFloat(b.price.replace("£", ""))
      );
    } else if (value === "high-to-low") {
      sorted.sort(
        (a, b) =>
          parseFloat(b.price.replace("£", "")) -
          parseFloat(a.price.replace("£", ""))
      );
    } else if (value === "latest") {
      sorted = [...products].reverse(); // assuming original is by date
    } else {
      sorted = [...products]; // default
    }
    setSortedProducts(sorted);
  };

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

  return (
    <main>
      <NavHeader />
      <ContactNavBar />
      <AfterShopNavbar />
      <MediumDownNav />
      <article className="py-15 flex w-full">
        <div className="w-[75%]">
          <main className="w-[95%] flex items-center ps-10 justify-between ">
            <article className="flex items-center justify-center gap-2 text-md text-gray-500">
              Showing {sortedProducts.length} products
            </article>

            <article className="flex gap-10 items-center justify-center">
              <main className="flex items-center justify-center gap-2">
                <span
                  onClick={() => {
                    navigate("/shop/big");
                  }}
                  className="text-2xl cursor-pointer"
                >
                  <Logs fill="black" className="text-black" />
                </span>

                <span
                  onClick={() => {
                    navigate("/shop");
                  }}
                  className="text-2xl cursor-pointer"
                >
                  <LayoutGrid size={17} className="text-gray-400" />
                </span>
              </main>

              <select
                onChange={handleSortChange}
                className="bg-pink-200 h-12 w-60 rounded-sm px-1 outline-none"
              >
                <option value="default">Default Sorting</option>
                <option value="latest">Sort By Latest</option>
                <option value="low-to-high">Sort By Price: Low to High</option>
                <option value="high-to-low">Sort By Price: High to Low</option>
              </select>
            </article>
          </main>
          <br />

          <main className="flex gap-3 w-full ps-2 flex-wrap">
            {sortedProducts.map((products) => (
              <article
                key={products.id}
                className=" border-1 w-full duration-700 border-gray-500 px-3 relative rounded-4xl h-130 bg-white cursor-pointer flex flex-col items-center justify-center group"
              >
                <br />
                <button className="absolute mb-[19rem] z-40 ml-200 text-black duration-1000">
                  <FavOnclick
                    products={products} // or item
                    favorites={favorites}
                    setFavorites={setFavorites}
                    modal2={modal2}
                    setModal2={setModal2}
                  />
                </button>
                <br />
                <div className="mt-[2rem] w-[95%] group-hover:h-[45%] group-hover:bg-amber-400 group-hover:mt-[-4.2rem] right-0 bg-amber-100 duration-500  h-[25%] rounded-4xl flex items-center justify-center">
                  <img
                    className="w-[20%] absolute mb-20 group-hover:scale-85 group-hover:mb-[1rem] duration-500"
                    src={products.src}
                    alt={`Image of ${products.name}`}
                  />
                </div>
                <br />
                <div className="ml-[-.5rem]">
                  <br />
                  <div className="flex-flex-col gap-6">
                    <h2 className="font-bold text-lg">{products.name}</h2>
                  </div>
                  <p className="flex flex-wrap">{products.description}</p>
                  <br />
                  <span className="flex gap-6 pl-3 font-extrabold text-lg">
                    <del className="text-gray-700">{products.deletedPrice}</del>
                    <main className="text-amber-600">{products.price}</main>
                  </span>
                  <br />
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

        <BlogRightHero />
      </article>
    </main>
  );
}
