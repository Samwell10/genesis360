import "./Footer.css"
import logo from "../../Assets/Logo.png"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-left">
                <img src={logo}></img>
                <div className="social-media">
                    <FaFacebook/>
                    <RiInstagramFill />
                    <RiTwitterXFill/>
                </div>
            </div>
            <div className="footer-right">
                <div className="contact-us">
                    <h5>Email Support</h5>
                    <p>info@genesis360.com.ng</p>
                </div>
                <div className="contact-us">
                    <h5>Phone & WhatsApp Support</h5>
                    <p>+2349134995237</p>
                </div>
                <p className="suscribe-text">Subscribe to our newsletter to get updates on our latest offers!</p>
                <div className="suscribe-field">
                    <input type="text" placeholder="Email Address"></input>
                    <button>Suscribe</button>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;