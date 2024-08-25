import Footer from "../../Components/Footer/Footer";
import More from "../../Components/More/More";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Terms.css"
const Terms = () => {
    return ( 
        <div className="terms">
            <Navbar/>
            <div className="terms-inner">
                <h4 className="terms-topic">Terms and Conditions</h4>
                <p className="terms-para">
                    These terms and conditions outline the rules and regulations for the use of Genesis360's website and mobile application. By accessing this website and application, we assume you accept these terms and conditions in full. Do not continue to use Genesis360's website and application if you do not accept all of the terms and conditions stated on this page.
                </p>
                <div className="terms-paragraph">
                    <p className="terms-head">1. Introduction</p>
                    <p className="terms-para">
                    1.1 These terms and conditions govern your use of our website and mobile application.
                    1.2 By using our website and application, you accept these terms and conditions in full.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">2. Eligibility</p>
                    <p className="terms-para">
                    2.1 By using our services, you confirm that you are at least 18 years of age and capable of entering into a legally binding agreement.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">3. Account Registration</p>
                    <p className="terms-para">
                    3.1 To access certain features, you must create an account by providing accurate and complete information.
                    3.2 You are responsible for maintaining the confidentiality of your account information.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">4. Services Provided</p>
                    <p className="terms-para">
                    4.1 Genesis360 provides alternative financing for food businesses in Africa, allowing users to purchase food items and pay back in installments with little interest.
                    4.2 Additional services include savings, utility purchases, and investing opportunities for our users.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">5. Payment and Fees</p>
                    <p className="terms-para">
                    5.1 Users agree to pay back the amount due as per the agreed installment plan.
                    5.2 Failure to pay on time may result in additional fees and penalties.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">6. Privacy and Data Protection</p>
                    <p className="terms-para">
                    6.1 Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">7. User Responsibilities</p>
                    <p className="terms-para">
                        7.1 You agree not to use the website and application for any unlawful purpose.
                        7.2 You agree not to attempt to gain unauthorized access to our systems or interfere with the proper functioning of the website and application.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">8. Limitation of Liability</p>
                    <p className="terms-para">
                    8.1 Genesis360 is not liable for any indirect, incidental, or consequential damages arising from your use of the website and application.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">9. Termination</p>
                    <p className="terms-para">
                    9.1 We reserve the right to terminate your access to the website and application without notice if you violate these terms and conditions.
                    </p>
                </div>
                <div className="terms-paragraph">
                    <p className="terms-head">10. Changes to Terms and Conditions</p>
                    <p className="terms-para">
                    10.1 Genesis360 may revise these terms and conditions at any time. By continuing to use the website and application, you agree to the updated terms.
                    </p>
                </div> 
                <div className="terms-paragraph">
                    <p className="terms-head">11. Governing Law</p>
                    <p className="terms-para">
                    11.1 These terms and conditions are governed by the laws of [Country].
                    </p>
                </div>  
            </div>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Terms;