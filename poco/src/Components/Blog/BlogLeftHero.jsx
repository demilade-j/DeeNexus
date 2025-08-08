import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LeftBlog = [
  {
    id: 1,
    src: "/totoro.webp",
    name: "Pancakes ",
    descript1: "Totoro Pancake Tutorial: Easy Totoro Pancake Food Art",
    descript2:
      "Start your day with a sprinkle of Studio Ghibli magic by making these adorable Totoro pancakes! This easy tutorial guides you through creating a fun and delicious breakfast, perfect for kids, anime lovers, and anyone who enjoys a touch of whimsy in the morning.",
  },
  {
    id: 2,
    src: "/softpretzels.webp",
    name: "Pretzels ",
    descript1: "Traditional Soft Pretzels with Sweet Beer Cheese",
    descript2:
      "Indulge in the ultimate homemade snack with these golden, chewy soft pretzels, perfectly paired with a rich and creamy sweet beer cheese dip. Whether you're hosting a gathering or just treating yourself, this irresistible combo is guaranteed to satisfy your cravings!",
  },
  {
    id: 3,
    src: "/salsa.webp",
    name: "Salsa ",
    descript1: "Easy 4 Ingredient Hatch Salsa Verde",
    descript2:
      "This quick and flavorful Hatch salsa verde is made with just four simple ingredients, yet it packs a bold, spicy, and tangy kick. Whether you’re dipping chips, drizzling it over tacos, or adding it to your favorite dishes, this vibrant green sauce brings the perfect balance of heat and zest to every bite.",
  },
  {
    id: 4,
    src: "/redpotato.webp",
    name: "Potatoes ",
    descript1: "Crispy Stovetop Roasted Red Potatoes",
    descript2:
      "Golden, crispy, and bursting with flavor, these stovetop roasted red potatoes are an easy and delicious side dish that pairs perfectly with any meal. With a perfectly seasoned crust and a tender, fluffy interior, they’re sure to be a crowd-pleaser every time.",
  },
  {
    id: 5,
    src: "/hangoverburger.webp",
    name: "Food ",
    descript1:
      "The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese",
    descript2:
      "Meet the ultimate cure for your worst hangovers – a greasy, cheesy, egg-stuffed masterpiece that’s part burger, part grilled cheese, and all deliciousness.",
  },
  {
    id: 6,
    src: "/digitaldetox.webp",
    name: "Digital detox ",
    descript1: "10 Reasons To Do A Digital Detox Challenge",
    descript2:
      "Feeling overwhelmed by screens? Discover 10 powerful reasons to unplug and take back control of your focus, health, and happiness. From boosting mental clarity to improving sleep and strengthening real-life connections, a digital detox might be just what you need.",
  },
];

export default function BlogLeftHero() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter logic
  const filteredBlogs = LeftBlog.filter((item) =>
    `${item.name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  return (
    <main className="lg:w-[70%] px-8 flex flex-col gap-10">
      <input
        type="text"
        placeholder="Search blog..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-400 p-2 mb-4 w-full rounded"
      />
      {filteredBlogs.length === 0 ? (
        <p>No results found.</p>
      ) : (
        filteredBlogs.map((LeftBlog) => (
          <article
            className="w-full rounded-t-2xl border-1 flex flex-col border-gray-600"
            key={LeftBlog.id}
          >
            <img src={LeftBlog.src} className="w-full rounded-t-2xl" alt="" />

            <div className="flex flex-col w-[80%] px-10 gap-3 py-10">
              <p className="text-gray-600">
                {LeftBlog.name} / March 5, 2025 / Post by admin
              </p>
              <h1 className="font-bold text-[1.6rem]">{LeftBlog.descript1}</h1>
              <p className="text-gray-600 text-[0.92rem]">
                {" "}
                {LeftBlog.descript2}{" "}
              </p>
              <button
                onClick={() => navigate("/page/FAQS")}
                className="bg-amber-400 w-40 py-3 rounded-xl cursor-pointer font-bold"
              >
                KNOW MORE
              </button>
            </div>
          </article>
        ))
      )}
    </main>
  );
}