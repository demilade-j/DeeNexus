import {
  Bike,
  Menu,
  MenuIcon,
  Phone,
  PhoneCallIcon,
  PhoneIcon,
  Search,
  ShoppingBasketIcon,
  X,
} from "lucide-react";
import { Gift, Heart, LucideShoppingBasket, Truck, User } from "lucide-react";
import { Link } from "react-router-dom";

import NavLinks from "../Home/HomeNavStuff/NavLinks";
import React, { useState, useEffect, useRef } from "react";

export default function ContactNavBar() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const lastScrollY = useRef(0);
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down and scrolled more than 50px: hide bar
        setShowBar(false);
      } else {
        // Scrolling up: show bar
        setShowBar(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "white",
        borderBottom: "1px solid #ccc",
        zIndex: 10001,
        marginTop: showBar ? "70px" : "0",
        transition: "margin-top 0.3s ease",
      }}
    >
      <div className="bg-white h-18 md:text-black items-center px-5 text-black justify-between md:hidden sm:hidden lg:flex hidden">
        <h1 className="text-green-600 font-extrabold text-2xl">DeeNexus</h1>
        <NavLinks />
        <main className="gap-1 items-center justify-center lg:flex md:hidden sm:hidden hidden">
          <span>
            <Bike className="text-green-600" size={50} />
          </span>

          <article>
            <main className="flex gap-2 font-bold text-[1.05rem]">
              Call and Order In
            </main>

            <main className="text-amber-400 font-bold text-[1.3rem]">
              <a href="tel:+234 705-7723-767">+234 705-7723-767</a>
            </main>
          </article>
        </main>
        {/* <article className="flex gap-6">
          <span className="border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-[100%] hover:bg-amber-400">
            <User fill="black" />
          </span>
          <span className="border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-[100%] hover:bg-amber-400">
            <Heart fill="black" />
          </span>
          <span className="border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-[100%] hover:bg-amber-400">
            <LucideShoppingBasket fill="black" />
          </span>
        </article> */}
      </div>

      <span className="lg:hidden md:flex sm:flex flex h-16 items-center justify-between px-6">
        <button
          onClick={() => setOpen(true)}
          className=" text-black rounded md:flex"
        >
          <MenuIcon size={40} className="hover:text-amber-400" />
        </button>
        {open && (
          <div
            className="fixed inset-0 bg-[#f5f5f529] bg-opacity-50 z-40 "
            onClick={() => setOpen(false)}
          />
        )}

        {/* Side Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-70 bg-black text-black z-50 shadow transform transition-transform duration-190 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={() => setOpen(false)}
            className="text-2xl ml-60 mt-5 text-white hover:text-amber-400"
          >
            &times;
          </button>
          <br />
          <br />
          <div className="flex flex-col items-center justify-between  text-black">
            <nav className="flex flex-col w-full space-y- gap-4 text-gray-700">
              <Link
                to="/"
                className="pl-8 w-full text-white text-[1rem] font-extrabold hover:text-amber-400"
              >
                Home
              </Link>
              <hr />
              <Link
                to="/menu"
                className="pl-8 w-full text-white text-[1rem] font-extrabold hover:text-amber-400"
              >
                Menu
              </Link>
              <hr />
              <Link
                to="/about"
                className="pl-8 w-full text-white text-[1rem] font-extrabold hover:text-amber-400"
              >
                About
              </Link>
              <hr />
              <Link
                to=""
                className="pl-8 w-full text-white text-[1rem] font-extrabold hover:text-amber-400"
              >
                Shop
              </Link>
              <hr />
              <Link
                to="/blog"
                className="pl-8 w-full text-white text-[1rem] font-extrabold hover:text-amber-400"
              >
                Blog
              </Link>
              <hr />
              <Link
                onClick={() => {
                  setOpen2(!open2);
                }}
                className="pl-8 w-full text-white text-[1rem] font-extrabold hover:text-amber-400 flex gap-37"
                to=""
              >
                Pages <span>▿</span>
              </Link>
              <hr />

              {open2 && (
                <div className="w-full font-bold justify-center flex flex-col px-5 py-1">
                  <Link
                    className="text-xl h-10 border-b-gray-600 border-b-1 flex items-center  hover:text-amber-400 duration-200 px-5 text-white font-bold"
                    to="/page/FAQS"
                  >
                    <ol>FAQS</ol>
                  </Link>
                  <Link
                    className="text-xl h-10 border-b-gray-600 border-b-1 flex items-center px-5 hover:text-amber-400 duration-200 text-white font-bold"
                    to="/page/Team"
                  >
                    <ol>Teams</ol>
                  </Link>
                  <Link to='/page/History' className="text-xl h-10 border-b-gray-600 border-b-1 flex items-center px-5 hover:text-amber-400 duration-200 text-white font-bold">
                    <ol>History</ol>
                  </Link>
                </div>
              )}
              <a
                className="pl-8 w-full text-white text-[1rem] font-extrabold hover:text-amber-400"
                href="/contact"
              >
                Contact
              </a>
              <hr />
            </nav>
          </div>
        </div>
        <div className="text-green-700 font-extrabold text-3xl">DeeNexus</div>
        <a href="/50off poco.png" download>
          <PhoneCallIcon className="hover:text-amber-400" size={30} />
        </a>
      </span>

      <span className="lg:hidden md:hidden sm:flex flex h-13 items-center justify-end px-6 gap-10">
        <main className="flex flex-col items-center justify-center">
          <p>Call and Order In</p>
          <article className="text-amber-400 font-bold text-[1.18rem]">
            <a href="tel:+234 705-7723-767">+234 705-7723-767</a>
          </article>
        </main>
        <main className="flex gap-4">
          <span className="border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-[100%] hover:bg-amber-400">
            <Search size={25} />
          </span>
          <span className="border-gray-500 border-2 h-10 w-10 flex items-center justify-center rounded-[100%] hover:bg-amber-400">
            <ShoppingBasketIcon size={25} fill="black" />
          </span>
        </main>
      </span>
    </nav>
  );
}
