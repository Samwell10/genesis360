import "./Navbar.css"
import logo from "../../Assets/Logo.png"
import appstore from "../../Assets/appstore.png"
import googlplay from "../../Assets/googleplay.png"
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar__logo">
                <img src={logo}></img>
            </div>
            <div className="navbar-nav">
                <p className="nav-text">Learn</p>
                <div className="store-buttons">
                    <img src={appstore}></img>
                    <img src={googlplay}></img>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;