import { useEffect } from "react";
import "./Investment.css"
import { InvestmentHeader } from "../../Components/Header/Header";
import { Navbar } from "../../Components/Navbar/Navbar";
import More from "../../Components/More/More";
import Footer from "../../Components/Footer/Footer";
import { InvestmentBanner } from "../../Components/Banner/Banner";
const Investment = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return ( 
        <div className="investment">
            <Navbar/>
            <InvestmentHeader/>
            <div className="investment-body">
                <h3 className="sponsor-header investment-headers">Easy Investments With impressive Returns</h3>
                <p className="investment-subheader">We make investing accessible to everyone.</p>
                <div className="investment-content">
                    <div className="investment-body-inner">
                        <h4>Simplified Investing</h4>
                        <p>With minimum investments starting at just NGN 5,000, investing is now within reach for everyone. Everyone is welcome to get started.</p>
                    </div>
                    {/* <div className="investment-body-inner">
                        <h4>Invest with Confidence</h4>
                        <p>We collaborate with top licensed investment firms like ARM, AIICO, and Stanbic.</p>
                    </div> */}
                    <div className="investment-body-inner">
                        <h4>Broaden your portfolio</h4>
                        <p>Invested across diverse food businesses, including food retail stores, restaurants, and farmers.</p>
                    </div>

                </div>
            </div>
            <InvestmentBanner/>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Investment;