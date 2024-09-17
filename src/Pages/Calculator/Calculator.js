import { BsArrow90DegLeft } from "react-icons/bs";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Calculator.css"
import { useEffect, useState } from "react";
import More from "../../Components/More/More";
import Footer from "../../Components/Footer/Footer";
import { Doughnut} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,

} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)
const Calculator = () => {
    const [amountSaving, setAmountSaving] = useState("")
    const [formattedAmountSaving, setformattedAmountSaving] = useState("");
    const [daySaving, setDaySaving] = useState("")
    const [amountLoan, setAmountLoan] = useState("")
    const [formattedAmountLoan, setformattedAmountLoan] = useState("");
    const [dayLoan, setDayLoan] = useState("")
    const [savingResult, setSavingResult] = useState(null);
    const [loanResult, setLoanResult] = useState(null);
    const [loanInterest, setLoanInterest] = useState(null);
    const interestRate = 0.14; // 14% interest rate
    const compoundFrequency = 365; // Compounded daily
    const formatAmount = (input) => {
        // Add commas as thousand separators
        if (typeof input !== 'string') {
            input = String(input); // Convert to string if it's not
        }
        return input?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const handleAmountSaving =(e)=>{
        const value = e.target.value
        const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters

        const formattedValue = formatAmount(numericValue);
        setformattedAmountSaving(formattedValue); // Set the formatted amount for display

        setAmountSaving(parseInt(numericValue));
    }
    const handleDaySaving =(e)=>{
        const value = e.target.value
        const newValue = parseInt(value)
        setDaySaving(newValue)
    }
    const handleAmountLoan =(e)=>{
        const value = e.target.value;
        const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters

        const formattedValue = formatAmount(numericValue);
        setformattedAmountLoan(formattedValue); // Set the formatted amount for display

        setAmountLoan(parseInt(numericValue));
    }
    const handleDayLoan =(e)=>{
        const value = e.target.value
        const newValue = parseInt(value)
        setDayLoan(newValue)
    }
    const calculateSaving = (e) => {
        e.preventDefault()
        if (amountSaving && daySaving) {
            const totalSaved = amountSaving * (1 + (interestRate * daySaving) / 365);
            setSavingResult(totalSaved.toFixed(2));
        }
    };

    // Function to calculate total loan amount to be repaid after inte rest
    const calculateLoan = (e) => {
        e.preventDefault()
        if (amountLoan && dayLoan) {
            const timeInYears = dayLoan / 365; // Convert days to years
            const totalRepay = amountLoan * Math.pow(1 + (interestRate / compoundFrequency), compoundFrequency * timeInYears);
            const interest = totalRepay - amountLoan;
            setLoanInterest(interest.toFixed(2));
            setLoanResult(totalRepay.toFixed(2));
        }
    };

    const data = {
        labels: ['Principal', 'Interest'],
        datasets: [{
        label: 'Poll',
        data: [amountLoan, loanInterest],
        backgroundColor: ['#0057FF', '#FF008A'],
        borderColor: ['#0057FF', '#FF008A'],
        }]
    }
    const options = {
        plugins: {
          legend: {
            position: 'right', // Positions the legend on the right side
            labels: {
              usePointStyle: true, // Uses point style for the legend labels
              pointStyle: 'circle', // Makes the point style a circle
            },
          },
        },
      };
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
                                        value={formattedAmountSaving}
                                        onChange={handleAmountSaving}
                                        onBlur={handleAmountSaving}
                                        required
                                    >
                                    </input>
                                </div>
                                <div className="fields">
                                    <label>How long do you want to save for?</label><br></br>
                                    <input 
                                        placeholder="Days"
                                        value={daySaving}
                                        onChange={handleDaySaving}
                                        required
                                    >
                                    </input>
                                </div>
                                <div className="form-buttons">
                                    <button
                                        className="calculate-button"
                                        type="submit"
                                        onClick={calculateSaving}
                                    >
                                        Calculate
                                    </button>
                                    <button className="clear-button" type="reset" onClick={()=>{
                                        setAmountSaving("");
                                        setDaySaving("") 
                                        setSavingResult(null)
                                    }}>Clear</button>
                                </div>
                            </form>
                        </div>
                        {savingResult === null ? (
                            <div className="calculator-content-right">
                                <BsArrow90DegLeft/>
                                <p>Enter the details in the fields provided to perform a calculation and see the result.</p>
                            </div>
                        ):(
                            <div className="calculator-content-right-2">
                            <div className="calculator-result-top">
                                <p>Your Return</p>
                                <div className="calculator-result-top-inner">
                                    <h4>₦{savingResult}</h4>
                                    <p>14% per annum</p>
                                </div>
                            </div>
                            <div className="calculator-result-bottom">
                                <p>Interest Breakdown</p>
                                <div className="calculator-result-bottom-inner">
                                    <div className="calculator-analysis">
                                        <div>
                                            <div className="pointer">
                                            </div>
                                            <p>Initial  Deposit</p>
                                        </div>
                                        <p className="calculated-result">₦{formatAmount(formattedAmountSaving)}</p>
                                    </div>
                                    <div className="calculator-analysis">
                                        <div>
                                            <div className="pointer">
                                            </div>
                                            <p>Interest Rate <span>14% per annum (14/365)</span></p>
                                        </div>
                                        <p className="calculated-result"></p>
                                    </div>
                                    <div className="calculator-analysis">
                                        <div>
                                            <div className="pointer">
                                            </div>
                                            <p>Number of Days</p>
                                        </div>
                                        <p className="calculated-result">{daySaving}</p>
                                    </div>
                                    <div className="calculator-analysis">
                                        <div>
                                            <div className="pointer">
                                            </div>
                                            <p>10% Withholding Tax</p>
                                        </div>
                                        <p className="calculated-result"></p>
                                    </div>
                                    <div className="calculator-analysis">
                                        <div>
                                            <div className="pointer">
                                            </div>
                                            <p>Interest you’ll get</p>
                                        </div>
                                        <p className="calculated-result"></p>
                                    </div>
                                    <div className="calculator-analysis">
                                        <div>
                                            <div className="pointer">
                                            </div>
                                            <p>Total Returns</p>
                                        </div>
                                        <p className="calculated-result">₦{formattedAmountSaving}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
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
                                        value={formattedAmountLoan}
                                        onChange={handleAmountLoan}
                                        onBlur={handleAmountLoan}
                                        required
                                    >
                                    </input>
                                </div>
                                <div className="fields">
                                    <label>How long do you want to borrow for? </label><br></br>
                                    <input 
                                        placeholder="Days"
                                        value={dayLoan}
                                        onChange={handleDayLoan}
                                        required
                                    >
                                    </input>
                                </div>
                                <div className="form-buttons">
                                    <button
                                        className="calculate-button"
                                        type="submit"
                                        onClick={calculateLoan}
                                    >
                                        Calculate
                                    </button>
                                    <button className="clear-button" type="reset" onClick={()=>{
                                        setAmountLoan("");
                                        setDayLoan("") 
                                        setLoanResult(null)
                                    }}>Clear</button>
                                </div>
                            </form>
                        </div>
                        {loanResult === null ? (
                            <div className="calculator-content-right">
                                <BsArrow90DegLeft/>
                                <p>Enter the details in the fields provided to perform a calculation and see the result.</p>
                            </div>
                        ):(
                            <div className="calculator-content-right-2">
                            <div className="calculator-result-top">
                                <p>You’ll Repay </p>
                                <div className="calculator-result-top-inner">
                                    <h4>₦{loanResult}</h4>
                                    <p>14% interest</p>
                                </div>
                            </div>
                            <div className="calculator-result-bottom">
                                <div className="graph">
                                    <Doughnut data={data} options={options}></Doughnut>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Calculator;