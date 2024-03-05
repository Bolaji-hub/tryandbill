import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import union from "../assets/Union.svg";

const links = [
  {
    id: 1,
    title: "About",
  },
  {
    id: 2,
    title: "Services",
  },
  {
    id: 3,
    title: "Contact",
  },
  {
    id: 4,
    title: "FAQ",
  },
];

const Header = () => {
  const [nav, setNavBar] = useState(false);
  return (
    <div className="container flex gap-2 justify-between items-center h-20 sticky top-0 w-full bg-white">
      <h1 className="text-[#3C1C6C] text-3xl font-bold gap-2 cursor-pointer flex items-center hover:scale-105 duration-300">
        TRYAN
        <img src={union} alt="" className="mb-2 w-[40px]" />
      </h1>
      <ul className=" hidden md:flex cursor-pointer ml-10">
        {links.map(({ id, title }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer py-4 font-xs text-sm text-black hover:scale-105 duration-300"
          >
            <a href>{title}</a>
          </li>
        ))}
        <div className="flex gap-5 ">
          <button className="text-[#6d5b80] text-sm">Log In</button>
          <button className="bg-[#382660] text-white px-6 rounded-xl text-sm font-bold">
            Sign Up
          </button>
        </div>
      </ul>
      <div
        onClick={() => setNavBar(!nav)}
        className="cursor-pointer z-10 md:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {nav && (
        <ul className="flex md:hidden flex-col justify-center items-center absolute top-0 left-0 h-screen w-full text-slate-600 bg-white">
          {links.map(({ id, title }) => (
            <li key={id} className="cursor-pointer py-6 font-sm text-xl">
              <a href>{title}</a>
            </li>
          ))}
          <button>Sign Up</button>
          <button>Log in</button>
        </ul>
      )}
    </div>
  );
};

export default Header;
