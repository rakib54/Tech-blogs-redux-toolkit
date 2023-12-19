import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiFillCloseSquare } from "react-icons/ai";
import { useState } from "react";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-blue-500 p-4">
      <div className="mx-14 flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <h1 className="text-white text-2xl font-bold">Quiz Cracker</h1>
          </Link>
        </div>
        <div>
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className={`${
              toggle ? "hidden" : "block"
            } md:hidden text-3xl text-white cursor-pointer`}
          />
          <AiFillCloseSquare
            onClick={() => setToggle(!toggle)}
            className={`${
              toggle ? "block" : "hidden"
            } md:hidden text-3xl text-white cursor-pointer`}
          />
          <ul
            className={`${
              toggle ? "block" : "hidden"
            } fixed w-full bg-blue-500 left-0 top-[64px] px-10 py-4 md:px-0 md:py-0 md:static md:flex md:gap-10 text-white `}
          >
            <li className="p-2">
              <NavLink
                className="hover:text-blue-900 duration-300"
                to={"/"}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink
                className="hover:text-blue-900 duration-300"
                to={"contact"}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
              >
                Contact
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink
                className="hover:text-blue-900 duration-300"
                to={"about"}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                  };
                }}
              >
                About
              </NavLink>
            </li>
            <li className="p-2">
              <Link className="hover:text-blue-900 duration-300" to={"login"}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
