import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import image from "../assets/rakib.jpg";

export default function Navbar2() {
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle((toggle) => !toggle);
  }
  return (
    <header className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <nav className="bg-white">
        <div className="w-[92%] mx-auto flex justify-between items-center p-2">
          <div>
            <Link to="/">
              <img
                className="w-12 inline rounded-full ring-1 ring-[#81ecec]"
                src={image}
                alt="..."
              />
            </Link>
          </div>
          <div
            className={`absolute md:static md:min-h-fit min-h-[60vh] bg-white left-0 ${
              toggle ? "top-[10.2%]" : "top-[-100%]"
            } w-full md:w-auto flex items-center px-5 duration-500`}
          >
            <ul className="flex md:items-center md:gap-[4vw] gap-8 md:flex-row flex-col">
              <li>
                <NavLink
                  onClick={toggleMenu}
                  className="hover:text-[#74b9ff] duration-500"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  className="hover:text-[#74b9ff] duration-500"
                  to={"/solution"}
                >
                  Solution
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  className="hover:text-[#74b9ff] duration-500"
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  className="hover:text-[#74b9ff] duration-500"
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  className="hover:text-[#74b9ff] duration-500"
                  to={"/testimonial"}
                >
                  Testimonial
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-[#74b9ff] text-white rounded-lg px-3 py-2 hover:bg-[#0984e3] duration-500">
              Sign in
            </button>
            {toggle ? (
              <AiOutlineClose
                onClick={toggleMenu}
                className="text-3xl cursor-pointer md:hidden"
              />
            ) : (
              <AiOutlineMenu
                onClick={toggleMenu}
                className="text-3xl cursor-pointer md:hidden"
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
