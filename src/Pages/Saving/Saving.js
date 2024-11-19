import { useEffect } from "react";
import { motion } from "framer-motion";
import { SavingBanner } from "../../Components/Banner/Banner";
import { startedData } from "../../Components/data";
import Footer from "../../Components/Footer/Footer";
import { SavingHeader } from "../../Components/Header/Header";
import More from "../../Components/More/More";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Saving.css";
import download from "../../Assets/savedownload.png"
import signup from "../../Assets/login.png"
import target from "../../Assets/target.png"
import tenure from "../../Assets/savetenure.png"
import save from "../../Assets/ssaving.png"
const Saving = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return ( 
        <div className="saving">
            <Navbar/>
            <SavingHeader/>
            <SavingBanner/>
            <div className="loan-get-started saving-get-started">
                <div className="loan-inner-top">
                    <h4>How to Get Started</h4>
                </div>
                <div className="saving-get-started-inner">
                    <div className="dot-line"></div>
                    <div className="saving-inners">
                        <div className="stepno">
                            <p>1</p>
                        </div>
                        <div className="saving-steps">
                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", duration: 1.2, delay: 0.3 }}
                            >
                            Download Genesis360 App
                            </motion.p>
                            <motion.div 
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", duration: 1.2, delay: 0.6 }}
                                className="step-image"
                            >
                                <img src={download}></img>
                            </motion.div>
                        </div>
                    </div>
                    <div className="saving-inners">
                        <div className="stepno">
                            <p>2</p>
                        </div>
                        <div className="saving-steps">
                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", duration: 1.2, delay: 0.3 }}
                            >
                            Register/Log In
                            </motion.p>
                            <motion.div 
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", duration: 1.2, delay: 0.6 }}
                                className="step-image"
                            >
                                <img src={signup}></img>
                            </motion.div>
                        </div>
                    </div>
                    <div className="saving-inners">
                        <div className="stepno">
                            <p>3</p>
                        </div>
                        <div className="saving-steps">
                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", duration: 1.2, delay: 0.3 }}
                            >
                            Click on “Target Savings”
                            </motion.p>
                            <motion.div 
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", duration: 1.2, delay: 0.6 }}
                                className="step-image"
                            >
                                <img src={target}></img>
                            </motion.div>
                        </div>
                    </div>
                    <div className="saving-inners">
                        <div className="stepno">
                            <p>4</p>
                        </div>
                        <div className="saving-steps">
                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", duration: 1.2, delay: 0.3 }}
                            >
                            Enter Amount & Preferred Tenure
                            </motion.p>
                            <motion.div 
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", duration: 1.2, delay: 0.6 }}
                                className="step-image"
                            >
                                <img src={tenure}></img>
                            </motion.div>
                        </div>
                    </div>
                    <div className="saving-inners">
                        <div className="stepno">
                            <p>5</p>
                        </div>
                        <div className="saving-steps">
                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", duration: 1.2, delay: 0.3 }}
                            >
                            Start Saving
                            </motion.p>
                            <motion.div 
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", duration: 1.2, delay: 0.6 }}
                                className="step-image"
                            >
                                <img src={save}></img>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Saving;
