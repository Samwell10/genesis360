import "./Footer.css"
import logo from "../../Assets/logofooter.png"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-left">
                <img src={logo}></img>
                <div className="footer-nav">
                    <div className="footer-nav-left">
                        <Link to="/"><p className="nav-main">Home</p></Link>
                        <Link><p className="nav-main">Calculator</p></Link>
                        <Link to="/blog"><p className="nav-main">News & Blog</p></Link>
                        <Link to="/faq"><p className="nav-main">FAQs</p></Link>
                    </div>
                    <div className="footer-nav-rigth">
                        <p className="nav-main">Product</p>
                        <div className="footer-nav-right-inner">
                            <div>
                                <Link to="/saving"><p className="nav-sub-main">Savings</p></Link>
                                <Link to="/investment"><p className="nav-sub-main">Investment</p></Link>
                                <Link to='/market'><p className="nav-sub-main">Food Marketplace</p></Link>
                            </div>
                            <div>
                                <Link to="/utility"><p className="nav-sub-main">Bill Payment</p></Link>
                                <Link to="digital-wallet"><p className="nav-sub-main">Digital Wallet</p></Link>
                            </div>
                            <div>
                                <Link to="/loan"><p className="nav-sub-main">Personal Loan</p></Link>
                                <Link to="/product-business"><p className="nav-sub-main">Business Loan</p></Link>
                            </div>
                        </div>
                        <p className="nav-main">Legal</p>
                        <div className="footer-nav-right-inner">
                            <div>
                                <Link to="/terms"><p className="nav-sub-main">Terms & Conditions</p></Link>
                            </div>
                            <div>
                                <Link to="/privacy"><p className="nav-sub-main">Privacy Polices</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
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