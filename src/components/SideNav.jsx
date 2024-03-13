import grid from "../assets/grid.png";
import dollar from "../assets/dollar-sign.png";
import bell from "../assets/Vector (6).png";
import user from "../assets/user.png";
import set from "../assets/settings.png";
import help from "../assets/help-circle.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Links = [
  {
    id: 1,
    title: "Dashboard",
    icon: grid,
    to: "/",
  },
  {
    id: 2,
    title: "Purchase",
    icon: dollar,
    to: "/",
  },
  {
    id: 3,
    title: "Notification",
    icon: bell,
  },
  {
    id: 4,
    title: "Account",
    icon: user,
  },
  {
    id: 5,
    title: "Settings",
    icon: set,
  },
  {
    id: 5,
    title: "Help",
    icon: help,
  },
];

const SideNav = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <div>
      <div>
        <div
          onClick={() => setIsSideNavOpen(!isSideNavOpen)}
          className="cursor-pointer fixed top-10 left-5 z-20 pr-4 md:hidden"
        >
          {isSideNavOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        <nav
          className={
            ("min-h-screen bg-white shadow md:shadow-none p-4 pl-14 w-50 flex flex-col z-10 fixed md:sticky top-0 left-0 transition-all",
            isSideNavOpen ? "left-0" : "-left-3/4")
          }
        >
          <ul>
            {Links.map(({ title, icon }) => (
              <li key={title}>
                <h3 className="font-thin text-md p- mt-1 mr-10">{title}</h3>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
