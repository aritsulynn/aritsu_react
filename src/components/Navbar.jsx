import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const navs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About me",
      link: "/aboutme",
    },
  ];

  return (
    <div className="shadow-2xl py-4">
      <div className="container mx-auto text-lg font-bold">
        <div className="flex items-center justify-between  mx-4">
          <div className="">
            <button className="flex-none" onClick={() => navigate("/")}>
              ARITSU
            </button>
          </div>
          {/* Button */}
          <div className="md:hidden">
            <button onClick={handleToggle} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          {/* PC */}

          <ul className="hidden space-x-5 md:flex">
            {navs.map((item, index) => (
              <li key={index}>
                <button onClick={() => navigate(item.link)}>{item.name}</button>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile */}
        {isToggle && (
          <>
            <ul
              // className={`md:hidden mt-7 flex-col space-y-4 transform transition-all duration-500 ${
              className={`md:hidden mt-7 grid grid-cols-1 transform transition-all duration-500 ${
                isToggle
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              {navs.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(item.link)}
                    className="mx-4 py-2"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
