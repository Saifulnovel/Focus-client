import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthContext/AuthContext';
// import logo from '../asset/logo.png'
import { FaSignOutAlt } from "react-icons/fa";
import Lottie from "lottie-react";
import car from "../asset/60265-digital-camera.json";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/" className="font-extrabold text-slate-600">
                    Home
                  </Link>
                </li>
                {/* <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <Link to="/blog" className="font-extrabold text-slate-600">
                    Blogs
                  </Link>
                </li>
                {user?.uid && (
                  <Link
                    to="/dashboard"
                    className="text-cyan-700 font-extrabold"
                  >
                    Dashboard
                  </Link>
                )}
              </ul>
            </div>
            {/* <img className="w-6 md:w-14 rounded-full" src={logo} alt="" /> */}
            <Lottie animationData={car} loop={true} className="w-14 rounded-full " />
            <Link
              to="/"
              className="btn btn-ghost normal-case font-bold text-xl md:text-3xl"
            >
              FOCUS
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/" className="font-extrabold text-slate-600">
                  Home
                </Link>
              </li>
              {/* <li tabIndex={0}>
                <a>
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link to="/blog" className="font-extrabold text-slate-600">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {/* <label
              htmlFor="dashboard-drawer"
              tabIndex={1}
              className="btn btn-ghost mr-4 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label> */}
            {user?.uid ? (
              <>
                <div className="w-16  mr-9 rounded-full hidden md:flex">
                  <ul className="mr-5">
                    <li>
                      <Link
                        to="/dashboard"
                        className="text-cyan-700 font-extrabold"
                      >
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
                <button onClick={logOut} className="btn btn-outline  ">
                  <FaSignOutAlt></FaSignOutAlt>
                  <span className="w-9 md:w-20 hidden md:flex ">
                    Sign out
                  </span>{" "}
                </button>
              </>
            ) : (
              <>
                <div className="text-white mx-5">
                  <span>{user?.email}</span>
                </div>
                <Link to="/login" className="btn btn-active ">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;