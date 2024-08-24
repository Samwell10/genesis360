import profile1 from "../Assets/proffile1.jpg";
import profile2 from "../Assets/profile22.jpg";
import profile3 from "../Assets/profile3.jpg";
import profile4 from "../Assets/profile4.jpg";
import profile5 from "../Assets/profile5.jpg";
import kellogs from "../Assets/kellogs.png";
import collgate from "../Assets/collgate.png";
import unilever from "../Assets/unilever.png";
import sonia from "../Assets/sonia.png";
import dufile from "../Assets/dufile.png";
import up7 from "../Assets/7up.png";
import kembiley from "../Assets/kembiley.png";
import checkers from "../Assets/checkers.png";
import fmn from "../Assets/fmn.png";
import wilmar from "../Assets/wilmar.png";
import cash from "../Assets/cash.png";
import checklist from "../Assets/checklist.png";
import revenue from "../Assets/revenue.png"
import shop from "../Assets/shop.png";
import mtn from "../Assets/mtn.png"
import glo from "../Assets/glo.png"
import mobile9 from "../Assets/9mobile.png"
import airtel from "../Assets/airtel.png"
import startime from "../Assets/startime.png"
import gotv from "../Assets/gotv.png"
import tsv from "../Assets/tsv.png"
import dstv from "../Assets/dstv.png"
import spectranet from "../Assets/spectant.png"
import ipnx from "../Assets/ipnx.png"
import smile from "../Assets/smile.png"
import fiberOne from "../Assets/fiberone.png"
import ibedc from "../Assets/ibec.png"
import ie from "../Assets/ie.png";
import aedc from "../Assets/aedc.png"
import eko from "../Assets/eko.png"
import approval from "../Assets/approval.png"
import flexible from "../Assets/fllexible.png"
import hidden from "../Assets/hidden.png";
import hour from "../Assets/access (1).png"
import download from "../Assets/download.png"
import login from "../Assets/login.png"
import process from "../Assets/process.png"
import done from "../Assets/done.png"
import offer from "../Assets/offer.png"
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
export const navbaritems = [
    {
        title:"Company",
        link:"/"
    },
    {
        title:"Products",
        submenu:[
            {
                title:"Savings"
            },
            {
                title:"loans",
                submenu:[
                    {
                        title:"Personal Loans",
                        link:"/loan"
                    },
                    {
                        title:"Business Loans",
                        link:"/product-business"
                    }
                ]
            },
            {
                title: "Bill Payment",
                link:"/utility"
            },
            {
                title:"Investment",
                link:"/investment"
            },
            {
                title:"Digital Wallet",
                link:"/digital-wallet"
            },
            {
                title:"Food Marketplace",
                link:"/marketplace"
            },
        ]
    },
    {
        title:"Calculator"
    },
    {
        title:"News & Blog",
        link:"/blog"
    },
    {
        title:"FAQS"
    },
    {
        title:"Contact Us",
        link:"/contact-us"
    },
]

export const testimonydata =[
    {
        Image: profile1,
        name: "Gracefood",
        username: "@gracefood",
        testimony: "I'm so glad I found Genesis360! Their repayment plans are super flexible, and the logistics are hassle-free. The discounts are just the cherry on top. Love it!",
        date: "10:38pm . Jun 1, 2023"
    },
    {
        Image: profile2,
        name: "Timothy Ade",
        username: "@AdeCrown",
        testimony: "Using Genesis360 has been such a relief! The flexible repayment plans and efficient logistics are fantastic. And the discounts? Just perfect. Couldn't be happier.",
        date: "20:41pm . Jun 5, 2023"
    },
    {
        Image: profile3,
        name: "Adewale Johnson",
        username: "@thejohnson",
        testimony: "Genesis360 has simplified my life! Flexible repayment plans, easy logistics, and great discounts. Couldn't ask for more.",
        date: "11:35pm . Apr 20, 2023"
    },
    {
        Image: profile4,
        name: "Henry Cakes",
        username: "@CakesH",
        testimony: "Genesis360 is a lifesaver! The flexible repayment plans and seamless logistics make everything so convenient. The discounts are unbeatable. Absolutely satisfied!",
        date: "14:32pm . Jun 10, 2023"
    },
    {
        Image: profile5,
        name: "God's Catering",
        username: "@thecatering",
        testimony: "Genesis360 has been a game changer! The flexible repayment options and smooth logistics make everything so much easier. Plus, the discounts are amazing. Highly recommend!",
        date: "15:34pm . Jun 2, 2023"
    },
]

export const aboutData = [
    {
        title:"Account Opened",
        total: "500K+",
        position: "top"
    },
    {
        title:"Loan Application per Day",
        total: "8K+",
        position: "center bottom"
    },
    {
        title:"Transaction Processed Monthly",
        total: "200K+",
        position: "right"
    },
    {
        title:"Grocery Purchase",
        total: "₦4M+",
        position: "top"
    },
    {
        title:"Upto Savings on Genesis360",
        total: "₦1K+",
        position: "left"
    }
]

export const sponsorData = [
    {
        image: kellogs
    },
    {
        image: collgate
    },
    {
        image: unilever
    },
    {
        image: sonia
    },
    {
        image: dufile
    },
    {
        image: up7
    },
    {
        image: kembiley
    },
    {
        image: checkers
    },
    {
        image: fmn
    },
    {
        image: wilmar
    },
]

export const goalsData = [
    {
        title:"Saving",
        body: "Effortlessly grow your wealth with high-interest savings options tailored to your goals.",
        color: "#183D36"
    },
    {
        title:"Digital Wallet",
        body: "Manage your money with ease using our digital wallet for swift transactions and secure payments.",
        color: "#38D79F"
    },
    {
        title:"Investment",
        body: "Explore diverse investment opportunities with potential returns and minimal risk.",
        color: "#0180CD"
    },
    {
        title:"Bill Payment",
        body: "Pay bills seamlessly and securely with our easy-to-use platform, from utilities to subscriptions.",
        color: "#FF0000"
    },
]

export const whyData = [
    {
        title:"Up to NGN 5 Million",
        body: "Access loans up to NGN 5 million to grow your business.",
        icon: cash
    },
    {
        title:"Long-Term Loans ",
        body: "Benefit from extended repayment terms with loans up to 6 months.",
        icon: checklist
    },
    {
        title:"Good Interest Rate",
        body: "Enjoy our loans with competitive interest rates, designed to support your business growth.",
        icon: revenue
    },
    {
        title:"SME Loan in 24 Hours",
        body: "Get the funds you need for your business in just 24 hours.",
        icon: shop
    },
]

export const whyData2 = [
    {
        title:"Fast Approval",
        body: "Get your loan approved quickly, often within minutes.",
        icon: approval
    },
    {
        title:"Competitive Rates",
        body: "Enjoy low interest rates that make borrowing more affordable.",
        icon: revenue
    },
    {
        title:"Flexible Repayment Plans",
        body: "Choose a repayment schedule that fits your budget and lifestyle.",
        icon: flexible
    },
    {
        title:"No Hidden Fees",
        body: "We offer straightforward terms with no hidden charges.",
        icon: shop
    },
    {
        title:"24/7 Access",
        body: "Apply for a loan anytime, anywhere with our user-friendly app. ",
        icon: shop
    },
]

export const eligibilityData = [
    {
        id: 1,
        body: "6 months Statement of Account.",
    },
    {
        id: 2,
        body: "Valid ID Card",
    },
    {
        id: 3,
        body: "Proof of Address",
    },
    {
        id: 4,
        body: "Bank Verification Number (BVN)",
    },
    {
        id: 5,
        body: "CAC Document (For Registered Business)",
    },
    {
        id: 6,
        body: "Passport Photography or Selfie",
    },
    {
        id: 7,
        body: "Age must be between 22 and 65",
    },
]
export const loaneligibilityData = [
    {
        id: 1,
        body: "You must have the Genesis360 app on your Android/iOS smartphone.",
    },
    {
        id: 2,
        body: "You must be 18 years of age and above.",
    },
    {
        id: 3,
        body: "You must be a bona fide citizen of Nigeria.",
    }
]
export const loanrequirementData = [
    {
        id: 1,
        body: "Bank Verification Number (BVN)",
    },
    {
        id: 2,
        body: "Proof of employment (Salaried, Self-Employed, Student)",
    },
    {
        id: 3,
        body: "Monthly income of a minimum salary of N5000.",
    },
    {
        id: 4,
        body: "Credit history",
    }
]
export const utilityData = [
    {
        id: 1,
        body: mtn
    },
    {
        id: 2,
        body: glo,
    },
    {
        id: 3,
        body: mobile9,
    },
    {
        id: 4,
        body: airtel,
    },
    {
        id: 5,
        body: startime,
    },
    {
        id: 6,
        body: gotv,
    },
    {
        id: 7,
        body: tsv,
    },
    {
        id: 8,
        body: dstv,
    },
    {
        id: 9,
        body: spectranet,
    },
    {
        id: 10,
        body: ipnx,
    },
    {
        id: 11,
        body: smile,
    },
    {
        id: 12,
        body: fiberOne,
    },
    {
        id: 13,
        body: ibedc,
    },
    {
        id: 14,
        body: ie,
    },
    {
        id: 13,
        body: aedc,
    },
    {
        id: 15,
        body: eko,
    },
]
export const contactData = [
    {
        icon:<MdOutlinePermPhoneMsg />,
        title:"Call/Chat with Us",
        body: "Reach out to us via call or chat for immediate assistance!",
        details:"+2349134995237"
    },
    {
        icon:<AiOutlineMail />,
        title:"Send us an Email",
        body: "Drop us an email for any inquiries or support, and we'll get back to you promptly!",
        details:"support@genesis360.com.ng"
    },
    {
        icon:<MdOutlinePermPhoneMsg />,
        title:"Visit Us",
        body: "Come see us in person and experience our service firsthand",
        details:"2, Solution House, Matt Avenue, Adjacent Egba Junior High School, Asero, Abeokuta, Ogun State."
    },
]
export const startedData = [
    {
        title: "1. Download Genesis360 App",
        image: download,
    },
    {
        title: "2. Register/Log In",
        image: login,
    },
    {
        title: "3. Complete the registration process for the loan",
        image: process,
    },
    {
        title: "4. Select the Loan Offer",
        image: offer,
    },
    {
        title: "5. Done! You will receive your loan soon.",
        image: done,
    },
]