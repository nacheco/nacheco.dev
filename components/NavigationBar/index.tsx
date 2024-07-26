"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

const NavigationBar = () => {
  // State for mobile menu toggle
  const [navbarOpen, setNavbarOpen] = useState(false);

  // State for sticky navbar
  const [sticky, setSticky] = useState(false);

  // State for submenu toggle
  const [openIndex, setOpenIndex] = useState(-1);

  // Handle mobile menu toggle
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Handle sticky navbar
  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 30);
  };

  // Add scroll event listener for sticky navbar
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Handle submenu toggle
  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center justify-between bg-transparent 
      ${
        sticky
          ? "!fixed !z-[9999] !bg-dark !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
      }
      `}
    >
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="container"
      >
        <div className="relative -mx-4 flex items-center justify-between">
          {/* Logo */}
          <div className="max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-8"
              }`}
            >
              <Image
                src="/images/Logo.svg"
                alt="Navigation Logo"
                width={50}
                height={50}
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex w-full items-center justify-end px-4">
            <div>
              {/* Mobile menu toggle button */}
              <button
                onClick={navbarToggleHandler}
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] text-white ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[-8px] -rotate-45" : ""
                  }`}
                />
              </button>
              {/* Navigation menu */}
              <nav
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-none bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-white lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={menuItem.id} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          className="flex py-2 text-base font-light text-dark group-hover:opacity-70 dark:text-dark lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white"
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <a
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between text-base text-dark group-hover:opacity-70 dark:text-dark lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="15" height="14" viewBox="0 0 15 14">
                                <path
                                  d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </a>
                          {/* Submenu */}
                          <div
                            className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-white lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:invisible lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? "block" : "hidden"
                            }`}
                          >
                            {menuItem.submenu.map((submenuItem) => (
                              <Link
                                href={submenuItem.path}
                                key={submenuItem.id}
                                className="block rounded py-2.5 text-sm text-dark hover:opacity-70 lg:px-3"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default NavigationBar;
