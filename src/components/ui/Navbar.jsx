
import { Link } from "react-router-dom"
import { IgIcon } from "./icons/IgIcon"
import { MenuIcon } from "./icons/Menuicon"
import { FbIcon } from './icons/FbIcon'
import logo from '../../../public/exp-logo.png'
import navLogo from '../../../public/nav-logo.png'
import { useState } from "react"



export const Navbar = () =>{
const [menuOn, setMenuOn] = useState(false);

const openMenu =()=> {
// toggle boolean
    setMenuOn(!menuOn)
}

    return (
        <>
        <header className="bg-violet-100">
            <nav className="flex justify-between items-center w-[92%] mx-auto h-20 ">
                <div>
                    <img src={navLogo} alt="logo" className="w-10" />
                </div> 
                <div className={
                    menuOn  ? " flex absolute bg-orange-100 min-h-[30vh] items-center px-5 left-0  top-[9%] w-full md:bg-violet-100 md:static md:min-h-fit md:w-auto duration-500"
                            : "absolute  min-h-[60vh] left-0 top-[-100%] w-full flex md:static md:min-h-fit md:w-auto"}>
                    <ul className="flex bg-orange-100 flex-col md:items-center  md:flex-row  gap-8 md:gap-[4vw] md:bg-violet-100">
                        <li>
                            <Link to="/" className="hover:text-gray-500">Home</Link>
                        </li>
                        <li>
                            <Link to="/aboutus" className="hover:text-gray-500">About Us</Link>
                        </li>
                        <li>
                            <Link to="/whatwedo" className="hover:text-gray-500">What we Do</Link>
                        </li>
                        <li className="group">
                            <Link to="/whatweoffer" className="hover:text-gray-500">What we Offer</Link>
                            <ul className="absolute whitespace-nowrap top-[35px] p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[80px] transition-all duration-300 bg-violet-100">
                                <li className="w-auto p-2 bg-violet-100">
                                    <Link to="/speechandlanguage" >- Speech and Language Therapy</Link>
                                </li>
                                <li className="w-auto p-2 bg-violet-100">
                                    <Link to="/hometraining">- Home Training</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex py-2">
                        <IgIcon/>
                        <FbIcon/>
                    </div>
                    <div className="md:hidden">
                        {/* paso al componente hijo la funcion que quiero que se ejecute*/}
                        <MenuIcon handleClick={openMenu}/>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}