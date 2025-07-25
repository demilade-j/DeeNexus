import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavLinks() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ul className="flex font-extrabold gap-11 items-center">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/menu">
          <li>Menu</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="">
          <li>Shop</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <li className="cursor-pointer"
          onMouseEnter={() => {
            setOpen(true);
          }}
          onClick={() => {
            setOpen(!open);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setOpen(false);
            }, 10000);
          }}
        >
          Page ▿{" "}
          {open && (
            <div className="bg-white w-45 font-normal py-3 rounded-md justify-center flex flex-col border-gray-400 border-1 absolute mt-1">
              <Link to='/page/FAQS' className="text-xl hover:bg-[#a4d1d4] h-10 flex items-center  hover:text-amber-400 duration-200 px-2 text-gray-800 font-bold">
                <ol>FAQS</ol>
              </Link>
              <Link
                className="text-xl hover:bg-[#a4d1d4] h-10 flex items-center px-2 hover:text-amber-400 duration-200 text-gray-800 font-bold"
                to="/page/Team"
              >
                <ol>Teams</ol>
              </Link>
              <Link to='/page/History' className="text-xl hover:bg-[#a4d1d4] h-10 flex items-center px-2 hover:text-amber-400 duration-200 text-gray-800 font-bold">
                <ol>History</ol>
              </Link>
            </div>
          )}
        </li>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
