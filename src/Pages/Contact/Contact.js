import { useEffect } from "react";
import "./Contact.css"
import Footer from "../../Components/Footer/Footer";
import More from "../../Components/More/More";
import { Navbar } from "../../Components/Navbar/Navbar";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { contactData } from "../../Components/data";
const Contact = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return ( 
        <div className="contact">
            <Navbar/>
            <div className="contact-inner">
                <h4>
                Contact our friendly team
                </h4>
                <p>
                    Let us know how we can help.
                </p>
                <div className="contact-inner-card">
                    {contactData.map((data)=>{
                        return(
                            <div className="contact-card">
                                <div className="contact-icon">
                                    {data.icon}
                                </div>
                                <div className="contact-content">
                                    <h5>{data.title}</h5>
                                    <p>{data.body}</p>
                                </div>
                                <div className="contact-details">
                                    <h5>{data.details}</h5>
                                </div>
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
 
export default Contact;