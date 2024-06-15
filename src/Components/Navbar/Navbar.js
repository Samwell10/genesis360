import "./Navbar.css"
import logo from "../../Assets/Logo.png"
import appstore from "../../Assets/appstore.png"
import googlplay from "../../Assets/googleplay.png"
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
export const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar__logo">
                <img src={logo}></img>
            </div>
            <div className="navbar-nav">
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
    return ( 
        <div className="navbar">
            <Link to="/">
                <div className="navbar__logo">
                    <img src={logo}></img>
                </div>
            </Link>
            <div className="navbar-nav">
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