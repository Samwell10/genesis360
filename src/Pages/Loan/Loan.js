import { useEffect } from "react";
import "./Loan.css"
import { LoanBanner } from "../../Components/Banner/Banner";
import { LoanEligibility, LoanRequirement } from "../../Components/Eligibility/Eligibility";
import Footer from "../../Components/Footer/Footer";
import { LoanHeader } from "../../Components/Header/Header";
import More from "../../Components/More/More";
import { Navbar } from "../../Components/Navbar/Navbar";
import { startedData } from "../../Components/data";

const Loan = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return ( 
        <div className="loan">
            <Navbar/>
            <LoanHeader/>
            <LoanBanner/>
            <LoanEligibility/>
            <LoanRequirement/>
            <div className="loan-inner">
                <div className="loan-inner-top">
                    <div>
                        <p>An example of a Genesis360 loan</p>
                    </div>
                    <h4>Borrow ₦100,000<br></br>over 3 months</h4>
                </div>
                <div className="loan-inner-bottom">
                    <div className="loan-inner-right">
                        <div className="loan-inner-text">
                            <p>Interest (total cost of the loan)</p>
                            <h5>N30,000</h5>
                        </div>
                        <div className="loan-inner-text">
                            <p>Three Monthly Payments</p>
                            <h5>N43,333</h5>
                        </div>
                        <div className="loan-inner-text">
                            <p>Total Amount Payable </p>
                            <h5>N30,000</h5>
                        </div>
                        <div className="loan-inner-text">
                            <p>Interest (total cost of the loan)</p>
                            <h5>N130,000</h5>
                        </div>
                        <div className="loan-inner-text">
                            <p>Representative</p>
                            <h5>120% APR</h5>
                        </div>
                    </div>
                    <div className="loan-inner-left">
                        <div className="loan-inner-box">
                            <p>Loan amount range between N1,500 to N3,000,000</p>
                        </div>
                        <div className="loan-inner-box">
                            <p>Repayment periods from 61 days to 18 months</p>
                        </div>
                        <div className="loan-inner-box">
                            <p>Monthly interest rates that range from 2.5% to 30% (APRs from 30% to 260%)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loan-get-started">
                <div className="loan-inner-top">
                    <h4>How to Get Started</h4>
                </div>
                <div className="loan-get-started-inner">
                    {startedData.map((data)=>{
                        return(
                            <div className="get-started-content">
                                <p>{data.title}</p>
                                <img src={data.image}></img>
                            </div>
                        )
                    })}
                </div>
            </div>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Loan;