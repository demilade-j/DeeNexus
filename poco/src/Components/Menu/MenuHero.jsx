import React from "react";
import { useState } from "react";
import MenuHero2 from "./MenuHero2";
import MenuHero3 from "./MenuHero3";
import MenuHero4 from "./MenuHero4";
import MenuHero5 from "./MenuHero5";
import MenuHero6 from "./MenuHero6";

export default function MenuHero() {
  const [menuHero, setMenuHero] = useState("MenuHero2");
  const [circle, setCircle] = useState(
    <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 bg-amber-400 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
      Burgers
    </div>
  );
  const [circle2, setCircle2] = useState(
    <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
      Cold Drinks
    </div>
  );
  const [circle3, setCircle3] = useState(
    <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
      Hot Drinks
    </div>
  );
  const [circle4, setCircle4] = useState(
    <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
      Pasta
    </div>
  );
  const [circle5, setCircle5] = useState(
    <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
      Pizza
    </div>
  );

  function handleClick1() {
    setMenuHero("MenuHero2");
    setCircle(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 bg-amber-400 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Burgers
      </div>
    );
    setCircle2(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Cold Drinks
      </div>
    );
    setCircle3(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Hot Drinks
      </div>
    );
    setCircle4(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Pasta
      </div>
    );
    setCircle5(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Pizza
      </div>
    );
  }

  function handleClick2() {
    setMenuHero("MenuHero3");
    setCircle(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Burgers
      </div>
    );
    setCircle2(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 bg-amber-400 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Cold Drinks
      </div>
    );
    setCircle3(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Hot Drinks
      </div>
    );
    setCircle4(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Pasta
      </div>
    );
    setCircle5(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Pizza
      </div>
    );
  }

  function handleClick3() {
    setMenuHero("MenuHero4");
    setCircle(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Burgers
      </div>
    );
    setCircle2(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Cold Drinks
      </div>
    );
    setCircle3(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 bg-amber-400 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Hot Drinks
      </div>
    );
    setCircle4(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Pasta
      </div>
    );
    setCircle5(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Pizza
      </div>
    );
  }

  function handleClick4() {
    setMenuHero("MenuHero5");
    setCircle(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Burgers
      </div>
    );
    setCircle2(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Cold Drinks
      </div>
    );
    setCircle3(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Hot Drinks
      </div>
    );
    setCircle4(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 bg-amber-400 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Pasta
      </div>
    );
    setCircle5(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Pizza
      </div>
    );
  }

  function handleClick5() {
    setMenuHero("MenuHero6");
    setCircle(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Burgers
      </div>
    );
    setCircle2(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Cold Drinks
      </div>
    );
    setCircle3(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Hot Drinks
      </div>
    );
    setCircle4(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Pasta
      </div>
    );
    setCircle5(
      <div className="font-bold text-xl py-5 px-7 border-1 border-gray-600 bg-amber-400 hover:bg-amber-400 rounded-3xl flex items-center justify-center cursor-pointer">
        Pizza
      </div>
    );
  }

  const realMenuHero = () => {
    switch (menuHero) {
      case "MenuHero2":
        return <MenuHero2 />;
      case "MenuHero3":
        return <MenuHero3 />;
      case "MenuHero4":
        return <MenuHero4 />;
      case "MenuHero5":
        return <MenuHero5 />;
      case "MenuHero6":
        return <MenuHero6 />;
    }
  };

  return (
    <div className="py-20 flex flex-col gap-12 items-center justify-center">
      <h1 className="text-4xl text-center font-bold">Menus Of The Day</h1>

      <main className="lg:flex md:flex sm:flex flex flex-wrap items-center justify-center px-2 gap-8">
        <div onClick={handleClick1}>{circle}</div>
        <div onClick={handleClick2}>{circle2}</div>
        <div onClick={handleClick3}>{circle3}</div>
        <div onClick={handleClick4}>{circle4}</div>
        <div onClick={handleClick5}>{circle5}</div>
      </main>

      <main className="py-10 flex items-center justify-center">{realMenuHero()}</main>
    </div>
  );
}