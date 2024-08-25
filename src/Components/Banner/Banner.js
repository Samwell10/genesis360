import AboutCard from "../Card/AboutCard";
import { aboutData, whyData, whyData2, whyData3 } from "../data";
import "./Banner.css"
import InvestmentBannerr from "../../Assets/investmentbanner.png"
import { motion } from "framer-motion";
import appstore from "../../Assets/appstore.png"
import googleplay from "../../Assets/googleplay.png"
import phone from "../../Assets/phone.png"
import cart from "../../Assets/cart.png"
import wallet from "../../Assets/walleticon.png"
import box from "../../Assets/productbox.png"
import tag from "../../Assets/tag.png"
import truck from "../../Assets/truck.png"
export const Banner = () => {
    return ( 
        <div className="banner-inner">
            <div className="banner">
                <div className="banner-component">
                    <div className="banner-top">
                        <h4>Trusted by millions of users in Nigeria</h4>
                    </div>
                    <div className="banner-bottom">
                        <p>A customer base of over 5 million is a testament to the growing adoption of Genesis360’s fintech solutions among Nigerians.</p>
                    </div>
                </div>
                {aboutData.map((data)=>{
                    return(
                        <AboutCard
                            title={data.title}
                            total={data.total}
                            position={data.position}
                        />
                    )
                })}
            </div>
            <div className="banner banner-mobile">
                <div className="banner-component">
                    <div className="banner-top">
                        <h4>Trusted by millions of users in Nigeria</h4>
                    </div>
                    <div className="banner-bottom">
                        <p>A customer base of over 5 million is a testament to the growing adoption of Genesis360’s fintech solutions among Nigerians.</p>
                    </div>
                </div>
                <div className="about-cards">
                    {aboutData.map((data)=>{
                        return(
                            <AboutCard
                                title={data.title}
                                total={data.total}
                                position={data.position}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export const ProductBusinessBanner = () =>{
    return(
        <div className="product-business-banner">
            <div className="product-banner-content">
                <p>UPTO</p>
                <h4>N5 MILLION</h4>
                <p>IN HOURS</p>
            </div>
            <div className="product-banner-content">
                <p>LOAN PROCESSED</p>
                <h4>24</h4>
                <p>HOURS</p>
            </div>
            <div className="product-banner-content">
                <p>OVER</p>
                <h4>8000+</h4>
                <p>APPLICATIONS SO FAR</p>
            </div>
        </div>
    )
}
export const ProductBusinessBanner2 = ()=>{
    return(
        <div className="business-section">
            <h3 className="sponsor-header">Why Borrow From Genesis360?</h3>
            <div className="business-section-inner">
                {whyData.map((data)=>{
                    return(
                        <div className="business-section-card">
                            <img src={data.icon}></img>
                            <div>
                                <h4>{data.title}</h4>
                                <p>{data.body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export const InvestmentBanner = () =>{
    return(
        <div className="investment-banner">
            <div className="investment-banner-left">
                <h4>
                    We've simplified the process so anyone can get started easily.
                </h4>
                <p>
                    You can now easily access pre-vetted, low-to-medium risk primary and secondary investment opportunities with any amount you have. Enjoy transparency with no hidden fees or charges. We conduct thorough due diligence and pre-vetting on all investments to ensure maximum safety.
                </p>
            </div>
            <div className="investment-banner-right">
                <img src={InvestmentBannerr}></img>
            </div>
        </div>
    )
}
export const WalletBanner = () =>{
    return(
        <div className="wallet-banner">
            <div className="wallet-banner-left">
                <img src={phone}></img>
            </div>
            <div className="wallet-banner-right">
                <motion.h4
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                >
                   A faster, safer, easier way to pay.
                </motion.h4>
                <motion.p 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.5 }}  
                >
                    With Genesis360 Wallet, you can make secure payments anywhere—from online shopping to in-store purchases—with just a few taps on your phone. Enjoy seamless and hassle-free transactions anytime, anywhere.
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
        </div>
    )
}
export const MarketBanner = () =>{
    return(
        <div className="market-banner">
            <h4 className="market-banner-header">Everything You Need For Efficient Food Supply Procurement.</h4>
            <div className="marker-banner-body">
                <div className="market-banner-top">
                    <div className="market-banner-card">
                        <img src={cart}></img>
                        <h4>Buy Now, Pay Later</h4>
                        <p>Don't let the high cost of grocery shopping slow down your restaurant's success. Take advantage of our buy now, pay later payment option today! Simplify your grocery shopping process while freeing up your cash flow.</p>
                    </div>
                    <div className="market-banner-card">
                        <img src={wallet}></img>
                        <h4>Seamless Payment</h4>
                        <p>With our integrated payment solution, you can enjoy a fast, easy, and secure payment experience that saves you time and eliminates the hassle of multiple payment methods. Whether you're making a purchase, tracking transactions, or managing your finances.</p>
                    </div>
                </div>
                <div className="market-banner-bottom">
                    <div className="market-banner-card">
                        <img src={box}></img>
                        <h4>Product Catalogue</h4>
                        <p>We have a wide selection of high-quality products that are carefully curated to meet the needs of businesses like yours. From essential ingredients to specialty products, and everything in between.</p>
                    </div>
                    <div className="market-banner-card">
                        <img src={tag}></img>
                        <h4>Best Pricing</h4>
                        <p>We are committed to providing you with the best prices on the market for all of your business needs. You can count on us to deliver the products you need at the lowest prices possible.</p>
                    </div>
                    <div className="market-banner-card">
                        <img src={truck}></img>
                        <h4>Track Orders Easily</h4>
                        <p>Whether you're checking the status of a current order or reviewing the history of past orders, our order tracking system provides you with all the information you need at your fingertips.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const LoanBanner = () =>{
    return ( 
        <div className="banner-inner">
            <div className="banner loan-banner">
                <div className="banner-component">
                    <div className="banner-top loan-banner-top">
                        <h4>Why Borrow From Genesis360?</h4>
                    </div>
                   
                </div>
                {whyData2.map((data)=>{
                    return(
                        <div className="business-section-card loan-section-card">
                            <img src={data.icon}></img>
                            <div>
                                <h4>{data.title}</h4>
                                <p>{data.body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="banner banner-mobile">
                <div className="banner-component">
                    <div className="banner-top loan-banner-top">
                        <h4>Why Borrow From Genesis360?</h4>
                    </div>
                   
                </div>
                <div className="about-cards loan-about-cards">
                {whyData2.map((data)=>{
                    return(
                        <div className="business-section-card">
                            <img src={data.icon}></img>
                            <div>
                                <h4>{data.title}</h4>
                                <p>{data.body}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    );
}
export const SavingBanner = () =>{
    return ( 
        <div className="banner-inner">
            <div className="banner loan-banner">
                <div className="banner-component">
                    <div className="banner-top loan-banner-top">
                        <h4>Why Choose Genesis360?</h4>
                    </div>
                   
                </div>
                {whyData3.map((data)=>{
                    return(
                        <div className="business-section-card loan-section-card">
                            <img src={data.icon}></img>
                            <div>
                                <h4>{data.title}</h4>
                                <p>{data.body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="banner banner-mobile">
                <div className="banner-component">
                    <div className="banner-top loan-banner-top">
                        <h4>Why Borrow From Genesis360?</h4>
                    </div>
                   
                </div>
                <div className="about-cards loan-about-cards">
                {whyData3.map((data)=>{
                    return(
                        <div className="business-section-card">
                            <img src={data.icon}></img>
                            <div>
                                <h4>{data.title}</h4>
                                <p>{data.body}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    );
}