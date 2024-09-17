import { BsArrow90DegLeft } from "react-icons/bs";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Calculator.css"
import { useEffect } from "react";
import More from "../../Components/More/More";
import Footer from "../../Components/Footer/Footer";
const Calculator = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div className="calculator-outer">
            <Navbar/>
            <div className="calculator">
                <h4 className="calculator-header">
                    Calculate Savings & Loan
                </h4>
                <p className="calculator-text">Find out your savings growth and loan repayment with our calculator!</p>
                <div className="calculator-type-inner">
                    <div className="calculator-type">
                        <p>Saving Calculator</p>
                    </div>
                    <div className="calculator-type">
                        <p>Loan Calculator</p>
                    </div> 
                </div>
                <div className="calculator-box">
                    <div className="calculator-type calculator-type-2">
                        <p>SAVINGS CALCULATOR</p>
                    </div>
                    <h4 className="calculator-header-inner">
                        Ready to save? Calculate your interest and estimate your investment growth over time!
                    </h4>
                    <div className="calculator-content">
                        <div className="calculator-content-left">
                            <form>
                                <div className="fields">
                                    <label>How much do you want to save?</label><br></br>
                                    <input 
                                        placeholder="Amount"
                                        required
                                    >
                                    </input>
                                </div>
                                <div className="fields">
                                    <label>How long do you want to save for?</label><br></br>
                                    <input 
                                        placeholder="Days"
                                        required
                                    >
                                    </input>
                                </div>
                                <div className="form-buttons">
                                    <button
                                        className="calculate-button"
                                    >
                                        Calculate
                                    </button>
                                    <button
                                        className="clear-button"
                                    >
                                        Clear
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="calculator-content-right">
                            <BsArrow90DegLeft/>
                            <p>Enter the details in the fields provided to perform a calculation and see the result.</p>
                        </div>
                    </div>
                </div>
                <div className="calculator-box">
                    <div className="calculator-type calculator-type-2">
                        <p>LOAN CALCULATOR</p>
                    </div>
                    <h4 className="calculator-header-inner">
                        Calculate and estimate your loan, interest, and total amount due with Genesis360 personal loan calculator
                    </h4>
                    <div className="calculator-content">
                        <div className="calculator-content-left">
                            <form>
                                <div className="fields">
                                    <label>How much do you want to borrow?</label><br></br>
                                    <input 
                                        placeholder="Amount"
                                        required
                                    >
                                    </input>
                                </div>
                                <div className="fields">
                                    <label>How long do you want to borrow for? </label><br></br>
                                    <input 
                                        placeholder="Days"
                                        required
                                    >
                                    </input>
                                </div>
                                <div className="form-buttons">
                                    <button
                                        className="calculate-button"
                                    >
                                        Calculate
                                    </button>
                                    <button
                                        className="clear-button"
                                    >
                                        Clear
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="calculator-content-right">
                            <BsArrow90DegLeft/>
                            <p>Enter the details in the fields provided to perform a calculation and see the result.</p>
                        </div>
                    </div>
                </div>
            </div>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Calculator;