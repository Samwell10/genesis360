import "./Faq.css"
import { useEffect, useState } from "react";
import {data} from "./general"
import { Navbar } from "../../Components/Navbar/Navbar";
import More from "../../Components/More/More";
import Footer from "../../Components/Footer/Footer";
import Accordion from "./Accodion";

const Faq = () => {
    const [active, setActive] = useState(0)
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    const filteredData = active === 0 
        ? data 
        : data.filter(item => item.section.includes(active));
   
    return ( 
        <div className="faq-outer">
            <Navbar/>
            <div className="faq">
                <h4 className="calculator-header">
                    Frequently Asked Questions
                </h4>
                <p className="calculator-text">Find answers to common questions in our FAQs!</p>
                <div className="faq-content">
                    <div className="faq-content-left">
                        <p className="faq-nav-head">Categories</p>
                        <div className="faq-nav-sub">
                            <p className={active === 0 ? "active-nav": ""} onClick={()=>{setActive(0)}}>All FAQs</p>
                            <p className={active === 1 ? "active-nav": ""} onClick={()=>{setActive(1)}}>Savings & Loans</p>
                            <p className={active === 2 ? "active-nav": ""} onClick={()=>{setActive(2)}}>Loans & Repayment</p>
                            <p className={active === 3 ? "active-nav": ""} onClick={()=>{setActive(3)}}>Bill Payment</p>
                            <p className={active === 4 ? "active-nav": ""} onClick={()=>{setActive(4)}}>Food Procurement</p>
                            <p className={active === 5 ? "active-nav": ""} onClick={()=>{setActive(5)}}>Investment</p>
                        </div>
                    </div>
                    <div className="faq-content-right">
                        {filteredData.length > 0 ? (
                            filteredData.map((general) => {
                                const { id } = general;
                                return <Accordion key={id} {...general} />;
                            })
                        ) : (
                            <p>No FAQs available for this category.</p>
                        )}
                    </div>
                </div>
            </div>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Faq;