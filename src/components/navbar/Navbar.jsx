import React, { useState, useEffect } from "react";
import "./navbar.css";
import Bodywrapper from "../bodywrapper/Bodywrapper";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";

const Navbar = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const [mobileMenuOn, setMobileMenuOn] = useState("navLinks");

  const mobileMenu = () => {
    mobileMenuOn === "navLinks"
      ? setMobileMenuOn("navLinks nav_active")
      : setMobileMenuOn("navLinks");
  };

  const handletheme = () => {
    setChecked((prevChecked) => !prevChecked);
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav>
      <Bodywrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <h1>Galleria</h1>
        </div>
        <div className="search">
          <Searchbar />
        </div>
        <div className={mobileMenuOn}>
          <ul>
            <li>Explore</li>
            <li>Collection</li>
            <li>Community</li>
          </ul>

          <div className="darkMode">
            <span>{theme === "light-theme" ? "Dark mode" : "Light mode"}</span>
            <input
              type="checkbox"
              id="switch"
              checked={checked}
              onChange={handletheme}
            />
            <label htmlFor="switch">Dark Mode</label>
          </div>
        </div>
        <div className="mobile-btns">
          <span onClick={mobileMenu}>
            <AiOutlineSearch size={25} />
          </span>
          <span onClick={mobileMenu}>
            <RxHamburgerMenu size={25} />
          </span>
        </div>
      </Bodywrapper>
    </nav>
  );
};

export default Navbar;
