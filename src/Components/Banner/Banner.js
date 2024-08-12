import AboutCard from "../Card/AboutCard";
import { aboutData } from "../data";
import "./Banner.css"
import { motion } from "framer-motion";
const Banner = () => {
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
 
export default Banner;