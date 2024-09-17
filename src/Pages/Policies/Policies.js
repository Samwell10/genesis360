import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import More from "../../Components/More/More";
import { Navbar } from "../../Components/Navbar/Navbar";
const Policies = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return ( 
        <div className="terms">
            <Navbar/>
            <div className="terms-inner">
                <h4 className="terms-topic">Privacy Polices</h4>
                <div className="terms-paragraph">
                    <p className="terms-head">Introduction</p>
                    <p className="terms-para">
                    Genesis360 ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our mobile application
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">1. Information We Collect</p>
                    <p className="terms-para">
                    1.1 Personal Information: We may collect personal information such as your name, email address, phone number, and payment information when you register for an account, make a purchase, or interact with our services.<br></br>
                    1.2 Non-Personal Information: We may collect non-personal information such as browser type, operating system, and usage data to improve our services.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">2. How We Use Your Information</p>
                    <p className="terms-para">
                    2.1 To provide and manage our services, including processing transactions and managing accounts.<br></br>
                    2.2 To communicate with you, including sending updates, promotional materials, and responding to inquiries.<br></br>
                    2.3 To improve our services by analyzing usage data and user feedback.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">3. Disclosure of Your Information</p>
                    <p className="terms-para">
                    3.1 We may share your information with third-party service providers to perform functions on our behalf, such as payment processing and data analysis.<br></br>
                    3.2 We may disclose your information if required by law or to protect our rights and property.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">4. Data Security</p>
                    <p className="terms-para">
                    4.1 We implement appropriate security measures to protect your personal information from unauthorized access, use, or disclosure.<br></br>
                    4.2 However, no method of transmission over the Internet or electronic storage is 100% secure.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">5. Your Rights</p>
                    <p className="terms-para">
                    5.1 You have the right to access, correct, or delete your personal information. You can manage your account settings through the website and application or contact us for assistance.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">6. Cookies</p>
                    <p className="terms-para">
                    6.1 Our website uses cookies to enhance your user experience. You can control cookies through your browser settings.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">7. Changes to This Privacy Policy</p>
                    <p className="terms-para">
                    7.1 We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">8. Contact Us</p>
                    <p className="terms-para">
                    8.1 If you have any questions or concerns about this Privacy Policy, please contact us at info@genesis360.com.ng
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-para">
                    By using Genesis360's services, you agree to the terms and conditions and acknowledge the privacy practices described in this document.
                    </p>
                </div>   
            </div>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Policies;