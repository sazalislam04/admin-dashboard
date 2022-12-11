import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/andela-logo-white.png";

const Layout = () => {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input
          id="andela-dashboard"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content px-8 mt-5">
          <label
            htmlFor="andela-dashboard"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="andela-dashboard" className="drawer-overlay"></label>
          <div className="flex flex-col w-64 h-screen px-4 py-8 border-r bg-gray-900 border-gray-700">
            <img src={logo} className="w-32 mx-auto object-cover" alt="" />

            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                <Link
                  className="flex items-center px-4 py-2 rounded-lg bg-gray-800 text-gray-200"
                  to=""
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="mx-4 font-medium">Talents</span>
                </Link>

                <Link
                  className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-lg text-gray-400  hover:bg-gray-800 hover:text-gray-200"
                  to=""
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mx-4 font-medium">Customers</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
