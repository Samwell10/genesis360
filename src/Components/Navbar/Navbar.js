import "./Navbar.css"
import logo from "../../Assets/Logo.png"
import appstore from "../../Assets/appstore.png"
import googlplay from "../../Assets/googleplay.png"
import { FaSearch, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa6"
import { useState } from "react"
export const Navbar = () => {
    const [navshow, setnavshow] = useState(false)
    const handleNav = () => {
        setnavshow(!navshow)
    }
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
                <p className="nav-text"><Link to="/blog">Learn</Link></p>
                <div className="store-buttons">
                    <img src={appstore}></img>
                    <img src={googlplay}></img>
                </div>
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