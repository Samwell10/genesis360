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
                            <p>
                            Download Genesis360 App
                            </p>
                            <div className="step-image">
                                <img src={download}></img>
                            </div>
                        </div>
                    </div>
                    <div className="saving-inners">
                        <div className="stepno">
                            <p>2</p>
                        </div>
                        <div className="saving-steps">
                            <p>
                            Register/Log In
                            </p>
                            <div className="step-image">
                                <img src={signup}></img>
                            </div>
                        </div>
                    </div>
                    <div className="saving-inners">
                        <div className="stepno">
                            <p>3</p>
                        </div>
                        <div className="saving-steps">
                            <p>
                            Click on “Target Savings”
                            </p>
                            <div className="step-image">
                                <img src={target}></img>
                            </div>
                        </div>
                    </div>
                    <div className="saving-inners">
                        <div className="stepno">
                            <p>4</p>
                        </div>
                        <div className="saving-steps">
                            <p>
                            Enter Amount & Preferred Tenure
                            </p>
                            <div className="step-image">
                                <img src={tenure}></img>
                            </div>
                        </div>
                    </div>
                    <div className="saving-inners">
                        <div className="stepno">
                            <p>5</p>
                        </div>
                        <div className="saving-steps">
                            <p>
                            Start Saving
                            </p>
                            <div className="step-image">
                                <img src={save}></img>
                            </div>
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
