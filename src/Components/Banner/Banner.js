import AboutCard from "../Card/AboutCard";
import { aboutData, whyData } from "../data";
import "./Banner.css"
import { motion } from "framer-motion";
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