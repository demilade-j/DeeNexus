import { useEffect, useState } from "react";
import CartOnclick from "../CartOnclick";

const products = [
  {
    id: 1,
    name: "Butternut Squash Ravioli",
    description:
      "Homemade ravioli stuffed with roasted butternut squash, served in a sage brown butter sauce. Sweet and savory!",
    price: "£11.99",
    src: "/butternutsquashravioli.webp",
  },
  {
    id: 2,
    name: "Cajun Shrimp Pasta",
    price: "£12.99",
    deletedPrice: "£11.99",
    description:
      "Spicy Cajun-seasoned shrimp served over fettuccine pasta in a creamy Alfredo sauce. Bold and flavorful!",
    src: "/cajunchickenpasta.webp",
  },
  {
    id: 3,
    name: "Cajun Chicken Pasta",
    price: "£10.99",
    deletedPrice: "£11.99",
    description:
      "Spicy Cajun-seasoned chicken breast served over penne pasta in a creamy Alfredo sauce. Bold and flavorful!",
    src: "/cajunshrimppasta.webp",
  },
  {
    id: 4,
    name: "Chicken Parmesan Pasta",
    price: "£11.49",
    description:
      "Breaded chicken breast served over spaghetti with marinara sauce and melted mozzarella. A classic!",
    src: "/chickenparmesanpasta.webp",
  },
  {
    id: 5,
    name: "Creamy Basil Penne",
    price: "£8.99",
    deletedPrice: "£9.99",
    description:
      "Penne pasta in a creamy tomato basil sauce. A comforting blend of flavors!",
    src: "/creamybasilpenne.webp",
  },
  {
    id: 6,
    name: "Lemon Garlic Shrimp Linguine",
    deletedPrice: "£12.99",
    price: "£11.99",
    description:
      "Linguine pasta tossed with succulent shrimp in a zesty lemon garlic sauce. Fresh and vibrant!",
    src: "/lemongarlicshrimplinguine.webp",
  },
  {
    id: 7,
    name: "Lobster Ravioli",
    price: "£14.99",
    description:
      "Homemade ravioli stuffed with succulent lobster, served in a creamy tomato bisque. Luxurious!",
    src: "/lobsterravioli.webp",
  },
  {
    id: 8,
    name: "Mac and Cheese",
    price: "£7.99",
    deletedPrice: "£8.99",
    description:
      "Creamy, cheesy elbow macaroni baked to perfection. A classic comfort food favorite!",
    src: "/macandcheese.webp",
  },
  {
    id: 9,
    name: "Pasta Primavera",
    price: "£9.49",
    description:
      "A colorful mix of fresh vegetables tossed with penne pasta in a light garlic olive oil sauce. Healthy and delicious!",
    src: "/pastaprimavera.webp",
  },
  {
    id: 10,
    name: "Pesto Gnocchi",
    price: "£10.99",
    description:
      "Soft potato gnocchi tossed in fresh basil pesto. A simple yet flavorful dish!",
    src: "/pestognocchi.webp",
  },
  {
    id: 11,
    name: "Pesto Penne",
    price: "£7.99",
    deletedPrice: "£8.99",
    description:
      "Fresh basil pesto tossed with penne pasta, cherry tomatoes, and Parmesan. Bright and flavorful!",
    src: "/pestopenne.webp",
  },
  {
    id: 12,
    name: "Pumpkin Sage Ravioli",
    deletedPrice: "£5.99",
    price: "£5.49",
    description:
      "Espresso, steamed milk, and white chocolate sauce. A sweet, creamy indulgence!",
    src: "/pumpkinsageravioli.webp",
  },
  {
    id: 13,
    name: "SeaFood Linguine",
    deletedPrice: "£10.99",
    price: "£9.99",
    description:
      "Homemade ravioli stuffed with pumpkin and ricotta, served in a brown butter sage sauce. A fall favorite!",
    src: "/seafoodlinguine.webp",
  },
  {
    id: 14,
    name: "Shrimp Alfredo",
    deletedPrice: "£10.49",
    price: "£9.49",
    description:
      "Rich, creamy Alfredo sauce with plump, juicy shrimp over fettuccine pasta. Absolutely indulgent!",
    src: "/shrimpalfredo.webp",
  },
  {
    id: 15,
    name: "Spaghetti Carbonara",
    price: "£9.99",
    description:
      "Classic Roman pasta with crispy pancetta, eggs, Parmesan, and black pepper. Simple yet divine!",
    src: "/spaghetticarbonara.webp",
  },
  {
    id: 16,
    name: "Spicy Arrabbiata",
    price: "£8.99",
    description:
      "Penne pasta in a fiery tomato sauce with garlic, chili flakes, and fresh basil. Perfect for spice lovers!",
    src: "/spicyarrabbiata.webp",
  },
  {
    id: 17,
    name: "Spicy Sausage Rigatoni",
    deletedPrice: "£11.49",
    price: "£10.49",
    description:
      "Rigatoni pasta with spicy Italian sausage in a rich tomato cream sauce. Bold and hearty!",
    src: "/spicysausagerigatoni.webp",
  },
  {
    id: 18,
    name: "Spinach Ricotta Stuffed Shells",
    price: "£9.99",
    description:
      "Jumbo pasta shells stuffed with a creamy spinach and ricotta filling, baked in marinara sauce. Comfort food at its best!",
    src: "/spinachricottastuffedshells.webp",
  },
  {
    id: 19,
    name: "Truffle Mushroom Fettuccine",
    deletedPrice: "£12.99",
    price: "£11.99",
    description:
      "Fettuccine pasta in a creamy truffle mushroom sauce. Earthy, rich, and indulgent!",
    src: "/trufflemushroomfettuccine.webp",
  },
  {
    id: 20,
    name: "Vegetable Lasagna",
    deletedPrice: "£9.49",
    price: "£8.49",
    description:
      "Layers of pasta, roasted vegetables, and creamy béchamel sauce. A veggie lover’s dream!",
    src: "/vegetablelasagna.webp",
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
            className="border-1 lg:w-[48%] h-95 md:w-full sm:w-full flex items-center justify-center w-full  rounded-4xl border-gray-500 px-4 duration-700 cursor-pointer"
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
