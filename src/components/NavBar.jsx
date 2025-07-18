import React, { useState, useEffect } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/turfinderlogo.png";
import cal from "../assets/calendar.svg";
import profile from "../assets/profile.svg";
import menu from "../assets/menu.svg";
import DropdownMenu from "./navcomponents/DropDownMenu";
import Login from "./navcomponents/Login";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  // use this to toggle open/close menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isProfileOpen) setIsProfileOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    // close menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (isProfileOpen) {
      setIsProfileOpen(false);
    }
  };

  // use this to toggle open/close profile
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleLogin = () => {};

  const handleMenuItemClick = (path) => {
    // for now, just console.log since pages don't exist yet
    console.log(`Navigating to: ${path}`);
    // navigate(path); // Uncomment when you create these pages

    setIsMenuOpen(false); // Close menu
  };

  // this ensures the NavBar properly transitions to the bottom
  useEffect(() => {
    const handleScroll = () => {
      // change  window.scrollY > window.innerHeight / 4 <- as needed
      if (window.scrollY > window.innerHeight / 4) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* drop down menu from the top */}
      <DropdownMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        handleMenuItemClick={handleMenuItemClick}
      />
      {/* login page from the side */}
      <Login
        isProfileOpen={isProfileOpen}
        toggleProfile={toggleProfile}
        handleLogin={handleLogin}
      />
      {/* navbar code */}
      <div
        className={`flex justify-center fixed top-0 left-0 w-full z-30
                    transform transition-transform duration-600 ease-in-out
                    ${
                      atBottom
                        ? "translate-y-[calc(100vh-8.5rem)]"
                        : "translate-y-10"
                    }
        `}>
        <div
          className="flex bg-almostblack
                     h-15 sm:h-17.5 lg:h-20
                     w-61 sm:w-71 lg:w-81
                     rounded-3xl ">
          <img
            onClick={handleLogoClick}
            src={logo}
            alt="tflogo"
            className="h-100% ml-1 cursor-pointer hover:opacity-80 transition-opacity duration-200"
          />
          <div
            className="flex font-polysans bg-darkgreen h-100% justify-evenly items-center
                          w-45 sm:w-55 lg:w-65
                          rounded-3xl">
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center rounded-2xl bg-almostblack cursor-pointer
                               font-polysans text-beige text-xs sm:text-sm lg:text-base
                               h-8 sm:h-10 lg:h-12
                               w-19 sm:w-21 lg:w-23
                               hover:bg-green active:bg-green/55 transition-all duration-200">
              Menu
              <img
                src={menu}
                alt="menu"
                className="h-4 sm:h-5 lg:h-6 ml-1 mb-[1px]"
              />
            </button>
            <button
              className="flex bg-almostblack items-center justify-center cursor-pointer
                               h-8 sm:h-10 lg:h-12
                               w-8 sm:w-10 lg:w-12
                               rounded-lg sm:rounded-xl lg:rounded-2xl
                               hover:bg-green active:bg-green/55 transition-all duration-200">
              <img
                src={cal}
                alt="calendar"
                className="h-5 sm:h-6 lg:h-7"
              />
            </button>
            <button
              className="flex bg-almostblack items-center justify-center cursor-pointer
                               h-8 sm:h-10 lg:h-12
                               w-8 sm:w-10 lg:w-12
                               rounded-lg sm:rounded-xl lg:rounded-2xl
                               hover:bg-green active:bg-green/55 transition-all duration-200">
              <img
                onClick={handleProfileClick}
                src={profile}
                alt="profile"
                className="h-5.5 sm:h-6.5 lg:h-7.5"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
