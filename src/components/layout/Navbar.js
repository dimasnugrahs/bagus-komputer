// Navbar.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import iconCompany from "../../assets/images/logo-primary-green.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScrollToTop = (to) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const menus = [
    { name: "Home", to: "/", subMenu: null },
    { name: "Tentang Kami", to: "/about", subMenu: null },
    {
      name: "Layanan Kami",
      to: "#",
      subMenu: [
        { name: "Pengembangan Website", to: "/services" },
        { name: "Digital Marketing", to: "/services" },
        { name: "Perangkat Keras & Perangkat Lunak Komputer", to: "/services" },
        { name: "Instalasi Jaringan", to: "/services" },
      ],
    },
    { name: "Blog", to: "/blog", subMenu: null },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-20 lg:px-32 transition-colors duration-300 ease-in-out md:${
        navbarBg ? "bg-brand-white" : "bg-transparent"
      } ${navbarBg || isOpen ? "bg-brand-white" : "bg-transparent"}`}
    >
      <div className="mx-auto">
        <div className="flex items-center justify-between py-4 px-6 lg:px-0 lg:py-0">
          <ul>
            {/* Icon */}
            <Link
              to="/"
              className="flex-shrink-0"
              onClick={() => handleScrollToTop("/")}
            >
              <img
                src={iconCompany}
                alt="Icon"
                className="max-w-12 hover:shadow"
              ></img>
            </Link>
          </ul>

          {/* Menus */}
          <div className="hidden lg:flex flex-grow justify-center space-x-4">
            {menus.map((menu, index) => (
              <div key={index} className="relative group py-6">
                <ul>
                  {menu.subMenu ? (
                    <Link
                      to="#"
                      onClick={(e) => e.preventDefault()}
                      className=" px-4 text-slate-600 hover:text-brand-black text-sm"
                    >
                      {menu.name}
                    </Link>
                  ) : (
                    <Link
                      to={menu.to}
                      className=" px-4 text-slate-600 hover:text-brand-black text-sm"
                      onClick={() => handleScrollToTop(menu.to)}
                    >
                      {menu.name}
                    </Link>
                  )}

                  {/* Sub Menu */}
                  {menu.subMenu && (
                    <div className="absolute left-0 mt-4 w-64 bg-brand-secondary shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                      <div className="absolute top-0 left-4 -mt-2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-brand-secondary"></div>
                      {menu.subMenu.map((sub, subIndex) => (
                        <Link
                          to={sub.to}
                          key={subIndex}
                          className="block px-6 py-4 text-slate-600 hover:text-brand-black text-sm border-solid border-b border-grey-500"
                          onClick={() => handleScrollToTop(sub.to)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Button Contact */}
          <div className="hidden lg:flex">
            <ul>
              <Link
                to="/contact"
                className=" px-4 py-2 rounded-md  bg-brand-secondary text-slate-700 hover:text-brand-black text-sm  hover:bg-brand-green hover:shadow-lg"
              >
                Kontak kami
              </Link>
            </ul>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-brand-black text-sm focus:outline-none z"
            >
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu versi mobile */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <ul>
              {menus.map((menu, index) => (
                <div key={index} className="relative ">
                  {menu.subMenu === null ? (
                    <Link
                      to={menu.to}
                      className="text-slate-400 hover:text-brand-black block px-3 py-2 rounded-md font-medium"
                      onClick={() => {
                        handleScrollToTop(menu.to);
                        setIsOpen(false); // Menutup navbar setelah klik sub-menu
                      }}
                    >
                      {menu.name}
                    </Link>
                  ) : (
                    <div className="group">
                      <button className="text-slate-400 hover:text-brand-black block px-3 py-2 rounded-md font-medium r">
                        {menu.name}
                      </button>
                      <div className="ml-4">
                        {menu.subMenu.map((sub, subIndex) => (
                          <Link
                            to={sub.to}
                            key={subIndex}
                            className="block px-4 py-2 text-slate-400 hover:text-brand-black font-extralight"
                            onClick={() => {
                              handleScrollToTop(sub.to);
                              setIsOpen(false); // Menutup navbar setelah klik menu
                            }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="text-slate-400 hover:text-brand-black block px-3 py-2 rounded-md font-medium r"
              >
                Kontak Kami
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
