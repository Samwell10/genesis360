import "./Header.css"
import appstore from "../../Assets/appstore.png"
import googleplay from "../../Assets/googleplay.png"
import headerImage from "../../Assets/headernew.png"
import { motion } from "framer-motion";
export const Header = () => {
    return (
        <div className="header">
            <div className="header-info">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.1}}     
                    className="header-info-top"
                >
                    <motion.h4
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                    >
                        The Powerhouse For Food Financing and Financial Freedom
                    </motion.h4>
                    <motion.p 
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                    >
                        Discover the ultimate solution for both food financing and achieving financial freedom. Our platform empowers you with tailored financial tools to support your food needs and help you build a secure financial future, all in one place.
                    </motion.p>
                </motion.div>
                <motion.div 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ type: "spring", duration: 1, delay: 0.1}}     
                    className="header-info-bottom"
                >
                    <div className="download-buttons">
                        <motion.img 
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 1}}   
                            src={googleplay}
                        ></motion.img>
                        <motion.img 
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 0.8}}   
                            src={appstore}
                        ></motion.img>
                    </div>
                </motion.div>
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

export const ProductBusinessHeader = () =>{
    return(
        <div className="header product-header">
            <div className="header-left">
                <motion.h4
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                    Empowering Business<br></br> Owners to Grow With Fast<br></br> and Easy SME Loans of up to<br></br> NGN 5 Million
                </motion.h4>
                <motion.p 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                    We support and offers business owners with SME loans up to <br></br>NGN5 million. Our SME loans are fast and easy to get as our<br></br> approval process takes only 24 hours.
                </motion.p>
                <div className="download-buttons product-download-buttons">
                    <motion.img 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 1}}   
                        src={googleplay}
                    ></motion.img>
                    <motion.img 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8}}   
                        src={appstore}
                    ></motion.img>
                </div>
            </div>
            <div className="header-right">

            </div>
        </div>
    )
}
 