import "./Header.css"
import { motion } from "framer-motion";
import { utilityData } from "../data";  
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
import ImageComponent from "../ImageComponent";


export const Header = () => {
    return (
        <div className="header">
            <div className="header-info">
                <motion.div 
                   initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.3 }}        
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
                        // initial={{ y: -50, opacity: 0 }}
                        // whileInView={{ y: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                    >
                        Discover the ultimate solution for both food financing and achieving financial freedom. Our platform empowers you with tailored financial tools to support your food needs and help you build a secure financial future, all in one place.
                    </motion.p>
                </motion.div>
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 1}}     
                    className="header-image header-image-mobile" 
                >
                    <ImageComponent
                        src={headerImage}
                        hash="LBHn1%{1%BCV01BiM-#IIVJ5%3Vg"
                    />
                </motion.div>
                <motion.div 
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ type: "spring", duration: 1, delay: 0.1}}     
                    className="header-info-bottom"
                >
                    <div className="download-buttons">
                        <img 
                            // initial={{ x: -50, opacity: 0 }}
                            // whileInView={{ x: 0, opacity: 1 }}
                            // transition={{ type: "spring", duration: 1, delay: 1}}   
                            src={googleplay}
                            loading="lazy"
                        ></img>
                        <img 
                            // initial={{ x: -100, opacity: 0 }}
                            // whileInView={{ x: 0, opacity: 1 }}
                            // transition={{ type: "spring", duration: 1, delay: 0.8}}   
                            src={appstore}
                            loading="lazy"
                        ></img>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 1}}     
                className="header-image header-image-desktop" 
            >
                <ImageComponent
                    src={headerImage}
                    hash="LBHn1%{1%BCV01BiM-#IIVJ5%3Vg"
                />
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
                    className="business-header-text"
                >
                    We support and offers business owners with SME loans up to NGN5 million. Our SME loans are fast and easy to get as our approval process takes only 24 hours.
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
export const UtilityHeader = () =>{
    return(
        <div className="utility-header">
            <div className="header-left utility-header-left">
                <motion.h4
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                    Pay Bills Easily<br></br>Right From Your<br></br>Phone
                </motion.h4>
                <motion.p 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                    Genesis360 app lets customers pay for airtime and mobile data at discounted rates, and settle cable, internet, and electricity bills with no service charges.
                </motion.p>
                <div className="download-buttons utility-download-buttons">
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
                <div className="utility-banner">
                    <div>
                        {utilityData && Array.isArray(utilityData) ? (
                            utilityData.map((data, index) => (
                                <img key={index} src={data.body} alt="utility data" />      
                            ))
                        ) : (
                            <p>No utility data available.</p>
                        )}
                        {utilityData && Array.isArray(utilityData) ? (
                            utilityData.map((data, index) => (
                                <img key={index} src={data.body} alt="utility data" />      
                            ))
                        ) : (
                            <p>No utility data available.</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="header-right utility-header-right">
                <ImageComponent
                    src={utilityImage}
                    hash="LIJjuE+Z0K-:t:0LIo-p_2r=i_WF"
                />
            </div>
        </div>
    )
}
export const InvestmentHeader = () =>{
    return(
        <div className="header investment-header">
            <div className="header-left investment-header-left">
                <motion.h4
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                    Investment <br></br>in food businesses around you
                   {/* Make<br></br> Investments That<br></br> Help You Grow. */}
                </motion.h4>
                <motion.p 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                    Genesis360 offers access to a curated portfolio of food business, allowing you to invest securely and confidently on the go. Enjoy up to 25% returns with investment durations of 6-12 months.
                </motion.p>
                <div className="download-buttons investment-download-buttons">
                    <motion.img 
                        // initial={{ x: -50, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        // transition={{ type: "spring", duration: 1, delay: 1}}   
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
            <div className="header-right investment-header-right">
                <ImageComponent
                    src={investmentImage}
                    hash="LcHnZ@~W?at8%go}t8bcOsS5s:w{"
                />
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
                    With lightning-fast transfers, Genesis360 makes sending, receiving, and managing your money effortless.
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
                <ImageComponent
                    src={walletImage}
                    hash="LJI=[c~W?u?HNztmohbu-i-qD4ae"
                />
            </div>
        </div>
    )
}
export const MarketHeader = () =>{
    return(
        <div className="header market-header investment-header">
            <div className="header-left investment-header-left">
                <h4
                    // initial={{ y: -100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                   Simplify and Streamline Your Grocery Shopping
                </h4>
                <p 
                    // initial={{ y: -50, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                   We offers a straightforward solution for hotels and restaurants to access top-notch products at competitive prices, keep track of your inventory, so that you can focus on serving delicious food to your customers.
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
            <div className="header-right market-header-right wallet-header-right">
                <ImageComponent
                    src={marketimage}
                    hash="LAF=m#00?wjD00%hxD-p?FIUIpt7"
                />
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
                    Life is unpredictable, and sometimes you need extra financial help. Our personal loan app offers fast, easy access to credit for food with competitive rates and flexible repayment options. Making a major purchase, or covering an emergency expense, Genesis360 is here to support you.
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
                <ImageComponent
                    src={loanImage}
                    hash="LBC?DpIA~qob-:xuIoxu%ND%S$NG"
                />
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
                <ImageComponent
                    src={SavingImage}
                    hash="LMDL5Jqt0aNM24S+?at7F3RjxZxW"
                />
            </div>
        </div>
    )
}