import "./Navbar.css"
import logo from "../../Assets/Logo.png"
import appstore from "../../Assets/appstore.png"
import googlplay from "../../Assets/googleplay.png"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaSearch, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa6"
import { useState } from "react"
import { navbaritems } from "../data";
import Menuitems from "./Menuitems";
export const Navbar = () => {
    const [navshow, setnavshow] = useState(false)
    
    const handleNav = () => {
        setnavshow(!navshow)
    }
    const depthLevel = 0;
    console.log(depthLevel)
    return ( 
        <div className="navbar">
            <div className="navbar_logo">
                <img src={logo}></img>
            </div>
            <div className="nav-hambuger" onClick={handleNav}>
                <FaBars/>
            </div>
            <div className={navshow ? "navbar-nav-mobile":"navbar-nav"}>
                <div className="nav-close" onClick={handleNav}>
                    <FaTimes/>
                </div>
                <nav>
                    <ul>
                        {navbaritems.map((item, index)=>{
                            return(
                                <Menuitems items={item} key={index} depthLevel={depthLevel}/>
                            )
                        })}
                    </ul>
                </nav>
                {/* <p className="nav-text"><Link to="/">Company</Link></p>
                <p className="nav-text"><Link to="/product-business">Products</Link></p>
                <p className="nav-text"><Link to="/blog">Calculator</Link></p>
                <p className="nav-text"><Link to="/blog">News & Blog</Link></p>
                <p className="nav-text"><Link to="/blog">FAQs</Link></p>
                <p className="nav-text"><Link to="/blog">Contact Us</Link></p> */}
                <button className="store-buttons">
                    Download App
                </button>
            </div>
        </div>
    );
}

export const NavbarBlog = () => {
    const [navshow, setnavshow] = useState(false)
    const handleNav = () => {
        setnavshow(!navshow)
    }
    return ( 
        <div className="navbar">
            <Link to="/">
                <div className="navbar_logo">
                    <img src={logo}></img>
                </div>
            </Link>
            <div className="nav-hambuger" onClick={handleNav}>
                <FaBars/>
            </div>
            <div className={navshow ? "navbar-nav-mobile":"navbar-nav"}>
                <div className="nav-close" onClick={handleNav}>
                    <FaTimes/>
                </div>
                <p className="nav-text">Money</p>
                <p className="nav-text">Product Updates</p>
                <p className="nav-text">Company News</p>
                <div className="nav-search">
                   <input
                    type="text"
                    name="search"
                    placeholder="Search"
                   ></input>
                   <button>
                        <FaSearch/>
                   </button>
                </div>
            </div>
        </div>
    );
}