import { NavLink } from "react-router";
import { IgIcon } from "./icons/IgIcon";
import { MenuIcon } from "./icons/Menuicon";
import { FbIcon } from "./icons/FbIcon";
import { LinkIcon } from "./icons/LinkIcon";
import { useState, useEffect, useRef } from "react";

const linkClass = ({ isActive }) =>
  isActive
    ? "text-purple font-semibold border-b-2 border-sky-200"
    : "hover:text-gray-500";

export const Navbar = () => {
  const [menuOn, setMenuOn] = useState(false);
  const menuRef = useRef();
  const refBurguer = useRef();

  const toggleMenu = () => setMenuOn((prev) => !prev);
  const closeMenu = () => setMenuOn(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const clickMenu = menuRef.current?.contains(e.target);
      const clickBMenu = refBurguer.current?.contains(e.target);
      if (!clickMenu && !clickBMenu) {
        setMenuOn(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="bg-violet-100 md:sticky md:top-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div>
          <img src="/nav-logo.png" alt="NeuroExp logo" className="w-10" />
        </div>
        <div
          className={
            menuOn
              ? "flex absolute bg-orange-100 min-h-[35vh] items-center px-6 left-0 top-[10%] w-full md:bg-violet-100 md:static md:min-h-fit md:w-auto duration-500"
              : "absolute min-h-[60vh] left-0 top-[-100%] w-full flex md:static md:min-h-fit md:w-auto"
          }
          ref={menuRef}
        >
          <ul className="flex bg-orange-100 flex-col md:items-center md:flex-row gap-8 md:gap-[4vw] md:bg-violet-100">
            <li>
              <NavLink to="/" className={linkClass} onClick={closeMenu} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className={linkClass} onClick={closeMenu}>
                Meet our team
              </NavLink>
            </li>
            <li>
              <NavLink to="/whatwedo" className={linkClass} onClick={closeMenu}>
                Our patients
              </NavLink>
            </li>
            <li>
              <NavLink to="/ourapproach" className={linkClass} onClick={closeMenu}>
                Our approach
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={linkClass} onClick={closeMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactus" className={linkClass} onClick={closeMenu}>
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex">
            <LinkIcon />
            <IgIcon />
            <FbIcon />
          </div>
          <div ref={refBurguer} className="md:hidden">
            <MenuIcon handleClick={toggleMenu} />
          </div>
        </div>
      </nav>
    </header>
  );
};
