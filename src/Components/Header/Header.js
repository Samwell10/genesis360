import "./Header.css"
import appstore from "../../Assets/appstore.png"
import googleplay from "../../Assets/googleplay.png"
import headerImage from "../../Assets/headernew.png"
import utilityImage from "../../Assets/utility.png"
import investmentImage from "../../Assets/investmentHeader.png"
import marketimage from "../../Assets/marketplace.png"
import loanImage from "../../Assets/loan.png"
import SavingImage from "../../Assets/SavingImage.png";
import walletImage from "../../Assets/wallet (1).png"
import cbn from "../../Assets/cbn.png";
import ndic from "../../Assets/cf76315219ed108a9c89fb6a00fa2184.png"
import { motion } from "framer-motion";
import { utilityData } from "../data";


export const Header = () => {
    return (
        <div className="header">
            <div className="header-info">
                <div 
                    // initial={{ opacity: 0 }}
                    // whileInView={{ opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.1}}     
                    className="header-info-top"
                >
                    <h4
                        // initial={{ y: -100, opacity: 0 }}
                        // whileInView={{ y: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                    >
                        The Powerhouse For Food Financing and Financial Freedom
                    </h4>
                    <p 
                        // initial={{ y: -50, opacity: 0 }}
                        // whileInView={{ y: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                    >
                        Discover the ultimate solution for both food financing and achieving financial freedom. Our platform empowers you with tailored financial tools to support your food needs and help you build a secure financial future, all in one place.
                    </p>
                </div>
                <div 
                    //  initial={{ opacity: 0 }}
                    //  whileInView={{ opacity: 1 }}
                    //  transition={{ type: "spring", duration: 1, delay: 0.1}}     
                    className="header-info-bottom"
                >
                    <div className="download-buttons">
                        <img 
                            // initial={{ x: -50, opacity: 0 }}
                            // whileInView={{ x: 0, opacity: 1 }}
                            // transition={{ type: "spring", duration: 1, delay: 1}}   
                            src={googleplay}
                        ></img>
                        <img 
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 1, delay: 0.8}}   
                            src={appstore}
                        ></img>
                    </div>
                </div>
            </div>
            <div 
                // initial={{ y: 50, opacity: 0 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // transition={{ type: "spring", duration: 1, delay: 1}}     
                className="header-image" 
            >
                <img src={headerImage}></img>
            </div>
        </div>
    );
}
export const ProductBusinessHeader = () =>{
    return(
        <div className="header product-header">
            <div className="header-left">
                <h4
                    // initial={{ y: -100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                    Empowering Business<br></br> Owners to Grow With Fast<br></br> and Easy SME Loans of up to<br></br> NGN 5 Million
                </h4>
                <p 
                    // initial={{ y: -50, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                    We support and offers business owners with SME loans up to <br></br>NGN5 million. Our SME loans are fast and easy to get as our<br></br> approval process takes only 24 hours.
                </p>
                <div className="download-buttons product-download-buttons">
                    <img 
                        // initial={{ x: -50, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 1}}   
                        src={googleplay}
                    ></img>
                    <img 
                        // initial={{ x: -100, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 0.8}}   
                        src={appstore}
                    ></img>
                </div>
            </div>
            <div className="header-right">

            </div>
        </div>
    )
}
export const UtilityHeader = () =>{
    return(
        <div className="utility-header">
            <div className="header-left utility-header-left">
                <h4
                    // initial={{ y: -100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                    Pay Bills Easily<br></br>Right From Your<br></br>Phone
                </h4>
                <p 
                    // initial={{ y: -50, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                    Genesis360 app lets customers pay for airtime and mobile data at discounted rates, and settle cable, internet, and electricity bills with no service charges.
                </p>
                <div className="download-buttons utility-download-buttons">
                    <img 
                        // initial={{ x: -50, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 1}}   
                        src={googleplay}
                    ></img>
                    <img 
                        // initial={{ x: -100, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 0.8}}   
                        src={appstore}
                    ></img>
                </div>
                <div className="utility-banner">
                    {utilityData && Array.isArray(utilityData) ? (
                        utilityData.map((data, index) => (
                            <img key={index} src={data.body} alt="utility data" />
                        ))
                    ) : (
                        <p>No utility data available.</p>
                    )}
                </div>
            </div>
            <div className="header-right utility-header-right">
                <img src={utilityImage}></img>
            </div>
        </div>
    )
}
export const InvestmentHeader = () =>{
    return(
        <div className="header investment-header">
            <div className="header-left investment-header-left">
                <h4
                    // initial={{ y: -100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                   Make<br></br> Investments That<br></br> Help You Grow.
                </h4>
                <p 
                    // initial={{ y: -50, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                    Genesis360 offers access to a curated portfolio of global investments, allowing you to invest securely and confidently on the go. Enjoy up to 25% returns with investment durations of 6-12 months.
                </p>
                <div className="download-buttons investment-download-buttons">
                    <img 
                        // initial={{ x: -50, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 1}}   
                        src={googleplay}
                    ></img>
                    <img 
                        // initial={{ x: -100, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 0.8}}   
                        src={appstore}
                    ></img>
                </div>
            </div>
            <div className="header-right investment-header-right">
                <img src={investmentImage}></img>
            </div>
        </div>
    )
}
export const WalletHeader = () =>{
    return(
        <div className="header wallet-header investment-header">
            <div className="header-left investment-header-left">
                <h4
                    // initial={{ y: -100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                   Make smart financial moves with Genesis360 Wallet.
                </h4>
                <p 
                    // initial={{ y: -50, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                    With lightning-fast transfers, debit cards, group accounts, and shopping features, Genesis360 makes sending, receiving, and managing your money effortless.
                </p>
                <div className="download-buttons investment-download-buttons">
                    <img 
                        // initial={{ x: -50, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 1}}   
                        src={googleplay}
                    ></img>
                    <img 
                        // initial={{ x: -100, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 0.8}}   
                        src={appstore}
                    ></img>
                </div>
            </div>
            <div className="header-right wallet-header-right">
                <img src={walletImage}></img>
            </div>
        </div>
    )
}
export const MarketHeader = () =>{
    return(
        <div className="header market-header investment-header">
            <div className="header-left investment-header-left">
                <motion.h4
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                   Simplify and Streamline Your Grocery Shopping
                </motion.h4>
                <motion.p 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                   We offers a straightforward solution for hotels and restaurants to access top-notch products at competitive prices, keep track of your inventory, so that you can focus on serving delicious food to your patrons.
                </motion.p>
                <div className="download-buttons investment-download-buttons">
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
            <div className="header-right market-header-right wallet-header-right">
                <img src={marketimage}></img>
            </div>
        </div>
    )
}
export const LoanHeader = () =>{
    return(
        <div className="header loan-header">
            <div className="header-left loan-header-left">
                <h4
                    // initial={{ y: -100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                Get the Funds You Need, When You Need Them
                </h4>
                <p 
                    // initial={{ y: -50, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                    Life is unpredictable, and sometimes you need extra financial help. Our personal loan app offers fast, easy access to funds with competitive rates and flexible repayment options. Whether consolidating debt, making a major purchase, or covering an emergency expense, Genesis360 is here to support you.
                </p>
                <div className="download-buttons investment-download-buttons">
                    <img 
                        // initial={{ x: -50, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 1}}   
                        src={googleplay}
                    ></img>
                    <img 
                        // initial={{ x: -100, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 0.8}}   
                        src={appstore}
                    ></img>
                </div>
            </div>
            <div className="header-right loan-header-right">
                <img src={loanImage}></img>
                <div className="loan-circle">
                    
                </div>
            </div>
        </div>
    )
}
export const SavingHeader = () =>{
    return(
        <div className="header saving-header">
            <div className="header-left investment-header-left">
                <h4
                    // initial={{ y: -100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                   Unlock Financial Potential and Your Financial Goals Faster with Genesis360
                </h4>
                <p 
                    // initial={{ y: -50, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                   Genesis360 is your ultimate partner in achieving financial freedom and reaching your goals faster with our innovative savings solutions. Our platform is designed to help you grow your wealth securely and efficiently, taking advantage of high interest rates and a disciplined savings approach to secure your future.
                </p>
                <div className="download-buttons saving-download-buttons">
                    <button 
                        // initial={{ x: -50, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 1}}   
                    >
                        Get Started
                    </button>
                    <div>
                        <img 
                            // initial={{ x: -100, opacity: 0 }}
                            // whileInView={{ x: 0, opacity: 1 }}
                            // transition={{ type: "spring", duration: 1, delay: 0.8}}   
                            src={cbn}
                        ></img>
                        <img 
                            // initial={{ x: -100, opacity: 0 }}
                            // whileInView={{ x: 0, opacity: 1 }}
                            // transition={{ type: "spring", duration: 1, delay: 0.8}}   
                            src={ndic}
                        ></img>
                    </div>
                </div>
            </div>
            <div className="header-right wallet-header-right">
                <img src={SavingImage}></img>
            </div>
        </div>
    )
}