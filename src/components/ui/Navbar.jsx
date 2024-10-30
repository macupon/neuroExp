import { Link } from "react-router-dom";
import { IgIcon } from "./icons/IgIcon";
import { MenuIcon } from "./icons/Menuicon";
import { FbIcon } from "./icons/FbIcon";
import { LinkIcon } from "./icons/LinkIcon";
// import navLogo from "../../../public/nav-logo.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "@/contexts/UserAuthContext";
import { useUser } from "../../contexts/UserContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const [menuOn, setMenuOn] = useState(false);
  const { authUser } = useAuth();
  const { user } = useUser();
  
  let menuRef = useRef();
  let refBurguer = useRef();

  const toggleMenu = () => {
    setMenuOn((prevState) => !prevState);
  };

  const handleUserPicClick = () => {
    if (authUser){
      navigate('/user-detail'); // Navigate to /user-detail
    }
    else {
      navigate('/signin'); // Navigate to /user-detail
    }
    
  };

  useEffect(() => {
    console.log("MenuOn state changed:", menuOn);
  }, [menuOn]);
  // useEffect(()=>{
  //     const handler = (e) => {
  //         // Si el clic es dentro del menú, no hacemos nada
  //         if(menuRef.current.contains(e.target)){
  //             setTimeout(() => {
  //                 setMenuOn(false);
  //             }, 100);

  //         }
  //         // Si no, cerramos el menú
  //         else {
  //             setMenuOn(false);
  //         }
  //     };
  //     document.addEventListener("mousedown", handler);
  //     return() =>{
  //         document.removeEventListener("mousedown", handler)
  //     }
  // },[]);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // console.log(menuRef.current);
      const clickMenu = menuRef.current.contains(e.target);
      const clickBMenu = refBurguer.current.contains(e.target);
      if (menuRef.current && !clickMenu && !clickBMenu) {
        setMenuOn(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <header className="bg-violet-100 sticky top-0 z-50">
        <nav className="flex justify-between items-center w-[92%] mx-auto h-20">
          <div>
            <img src="/nav-logo.png" alt="logo" className="w-10" />
          </div>
          <div
            className={
              menuOn
                ? "flex absolute bg-orange-100 min-h-[35vh] items-center px-6 left-0  top-[10%] w-full md:bg-violet-100 md:static md:min-h-fit md:w-auto duration-500"
                : "absolute min-h-[60vh] left-0 top-[-100%] w-full flex md:static md:min-h-fit md:w-auto"
            }
            ref={menuRef}
          >
            <ul className="flex bg-orange-100 flex-col md:items-center  md:flex-row  gap-8 md:gap-[4vw] md:bg-violet-100">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-500"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="hover:text-gray-500"
                  onClick={toggleMenu}
                >
                  Meet our team
                </Link>
              </li>
              <li>
                <Link
                  to="/whatwedo"
                  className="hover:text-gray-500"
                  onClick={toggleMenu}
                >
                  Our patients
                </Link>
              </li>
              <li>
                <Link
                  to="/ourapproach"
                  className="hover:text-gray-500"
                  onClick={toggleMenu}
                >
                  Our approach
                </Link>
              </li>
              <li className=" hover:text-gray-500 group relative">
                <span className="cursor-pointer">Services</span>
                <ul
                  className="absolute whitespace-nowrap top-[55px] p-5 opacity-0 invisible group-hover:opacity-100 
                                        group-hover:visible  group-hover:top-[220px] md:group-hover:top-[80px] transition-all duration-300 bg-orange-100 
                                        md:bg-violet-100"
                >
                  <li className="md:w-26 lg:w-auto p-2 bg-orange-100 md:bg-violet-100 text-wrap">
                    <Link to="/speechandlanguage" onClick={toggleMenu}>
                      Speech and Language Therapy
                    </Link>
                  </li>
                  <li className="md:w-26 lg:w-auto p-2 bg-orange-100 md:bg-violet-100">
                    <Link to="/hometraining" onClick={toggleMenu}>
                      Home Training
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="hover:text-gray-500"
                  onClick={toggleMenu}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex">
              <LinkIcon />
              <IgIcon />
              <FbIcon />
            </div>
            <div>
              <img
                src={user?.profilePictureURL || "/user-profile.png"} // ../../public
                alt="user icon"
                onClick={handleUserPicClick}
                className="w-[5vw] h-[5vw] md:w-[4vw] md:h-[4vw] lg:w-[35px] lg:h-[35px] object-cover cursor-pointer rounded-full"
                aria-label="User Profile"
              ></img>
            </div>
            
            <div ref={refBurguer} className="md:hidden">
              {/* paso al componente hijo la funcion que quiero que se ejecute*/}
              <MenuIcon handleClick={toggleMenu} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
