import "./Section.css"
import wallet from "../../Assets/wallet.png"
import coin from "../../Assets/coins2.png"
import supplier from "../../Assets/supplier.png"
import accesss from "../../Assets/access.png"
import { FaEyeSlash } from "react-icons/fa"
import sugar from "../../Assets/sugar.png"
import { motion } from "framer-motion";
import { MdOutlineMeetingRoom } from "react-icons/md"
const Section = () => {
    return ( 
        <div className="section">
            <div className="section-inner">
                <div className="section-left">
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }}   
                        className="wallet-balance"
                    >
                        <p>Wallet Balance<span><FaEyeSlash/></span></p>
                        <h3>₦3,200,000</h3>
                    </motion.div>
                    <motion.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.5}}
                        src={wallet}
                    ></motion.img>
                    <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 1}}   
                    className="balance-category">
                        <div className="balance-inner balance-inner2">
                            <p>Credit Limit</p>
                            <h4>₦3,200,000</h4>
                        </div>
                        <div className="balance-inner">
                            <p>Outstanding Debt</p>
                            <h4>-₦3,200,000</h4>
                        </div>
                    </motion.div>
                </div>
                <div className="section-right">
                    <motion.h4
                      initial={{ y: -100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                    >
                        Digital Wallet: Take Control of Your Finances
                    </motion.h4>
                    <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.6}}        
                    >
                        Take control of your finances with our secure and user-friendly digital wallet. Seamlessly manage your funds, make payments, and track transactions with ease. With instant access to your money anytime, anywhere, experience unparalleled convenience and peace of mind.
                    </motion.p>
                </div>
            </div>
            <div className="section-inner section-inner-2">
                <div className="section-left">
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }}   
                        className="loan-request"
                    >
                        <div className="loan-head">
                            <h3>Loan Request</h3>
                        </div>
                        <div className="loan-amount">
                            <p>Eligible Loan</p>
                            <h4>₦68,000</h4>
                        </div>
                    </motion.div> 
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.5}}
                        src={coin}
                    ></motion.img>
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 1}}   
                        className="amount"
                    >
                        <div className="amount-field">
                            <label>Amount</label>
                            <div className="input-field">
                                <p>₦253.685</p>
                            </div>
                        </div>
                        <div className="amount-field">
                            <label>Amount</label>
                            <div className="input-field">
                                <p>₦253.685</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="section-right">
                    <motion.h4
                      initial={{ y: -100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                    >
                        Flexible Loan<br></br> Repayment
                    </motion.h4>
                    <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.6}}        
                    >
                        Say goodbye to rigid loan terms and hello to flexibility with Genesis360's loan repayment options. We understand the challenges of managing finances, which is why we offer customizable repayment plans tailored to your needs. Whether it's invoice financing, asset financing, or consumer credit, we've got you covered.
                    </motion.p>
                </div>
            </div>
            <div className="section-inner">
                <div className="section-left">
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.8 }}   
                        className="product"
                    >
                        <div className="prod-image">
                            <img src={sugar}></img>
                        </div>
                        <p>Golden Penny Premium<br></br> Quality Semolina - 1kg</p>
                        <h4>₦6,400</h4>
                    </motion.div>
                    <motion.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.5}}
                        src={supplier}
                    ></motion.img>
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 1}}
                        className="product-2 product"
                    >
                        <div className="prod-image">
                            <img src={sugar}></img>
                        </div>
                        <p>Golden Penny Premium<br></br> Quality Semolina - 1kg</p>
                        <h4>₦6,400</h4>
                    </motion.div>
                </div>
                <div className="section-right">
                    <motion.h4
                      initial={{ y: -100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                    >
                        Genesis360 Marketplace: Your One-Stop Hub for Food Supplies
                    </motion.h4>
                    <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.6}}        
                    >
                       Explore a vibrant ecosystem where you can source quality ingredients and food supplies directly from trusted vendors. Our marketplace connects food businesses and consumers, facilitating seamless transactions and ensuring swift delivery within 24 hours.
                    </motion.p>
                </div>
            </div>
            <div className="section-inner section-inner-2">
                <div className="section-left">
                    <motion.img 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.5}}
                    src={accesss}
                    ></motion.img>
                </div>
                <div className="section-right">
                <motion.h4
                      initial={{ y: -100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                    >
                        Financing for Food: Access Funds Hassle-Free
                    </motion.h4>
                    <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.6}}        
                    >
                      Our hassle-free loan request process makes it simple to access the funds you need when you need them. Loans are provided in food items, ensuring that you can meet your nutritional needs without financial strain. Whether it's for groceries, meal subscriptions, or special dietary requirements, our transparent terms and quick approvals ensure that you can pursue your goals without delay.
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
 
export default Section;