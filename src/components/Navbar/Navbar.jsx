import { Link, NavLink } from "react-router-dom";
import image from "../../assets/rakib.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle((toggle) => !toggle);
  }

  return (
    <div className="font-[Poppins]">
      <nav className="bg-white shadow p-5 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center ml-12 md:ml-24">
          <Link to={"/"}>
            <img
              className="md:hidden h-10 inline rounded-full ring-1 ring-[#3498db] mr-3"
              src={image}
              alt="tailwind"
            />
            <span className="text-3xl font-Kaushan cursor-pointer hidden md:block">
              Tech Blogs
            </span>
          </Link>
          <span className="text-3xl cursor-pointer md:hidden block mx-2 p-2  transition-all duration-300">
            {toggle ? (
              <AiOutlineClose onClick={toggleMenu} />
            ) : (
              <AiOutlineMenu onClick={toggleMenu} />
            )}
          </span>
        </div>

        <ul
          className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full md:w-auto left-0 py-4 md:py-0 pl-7 md:pl-0 md:opacity-100 ${
            toggle ? "top-[90px] z-auto" : "opacity-0 top-[-400px]"
          } transition-all ease-in duration-500`}
        >
          <li className="mx-4 my-6 md:my-0">
            <NavLink
              onClick={toggleMenu}
              className="text-xl hover:text-cyan-500 transition-all ease-in duration-300"
              to={"/"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#3498db" : "",
                };
              }}
            >
              HOME
            </NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <NavLink
              onClick={toggleMenu}
              className="text-xl hover:text-cyan-500 duration-500"
              to={"/about"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#3498db" : "",
                };
              }}
            >
              ABOUT
            </NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <NavLink
              onClick={toggleMenu}
              className="text-xl hover:text-cyan-500 duration-500"
              to={"/blogs"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#3498db" : "",
                };
              }}
            >
              BLOGS
            </NavLink>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <button className="bg-[#2980b9] px-6 py-2 rounded text-white font-bold text-xl hover:bg-[#3498db] duration-500">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
