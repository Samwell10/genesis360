import "./Header.css"
import appstore from "../../Assets/appstore.png"
import googleplay from "../../Assets/googleplay.png"
import headerImage from "../../Assets/background.png"
import { motion } from "framer-motion";
const Header = () => {
    return (
        <div className="header">
            <div className="header-info">
                <motion.h4
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                    Empowering Africa's Food Industry
                </motion.h4>
                <motion.p 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                    Financing Solutions Tailored to Food Businesses and 
                </motion.p>
                <div className="download-buttons">
                    <motion.img 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8}}   
                        src={appstore}
                    ></motion.img>
                    <motion.img 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 1}}   
                        src={googleplay}
                    ></motion.img>
                </div>
            </div>
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 1}}     
                className="header-image"
            >
                <img src={headerImage}></img>
            </motion.div>
        </div>
    );
}
    
export default Header;