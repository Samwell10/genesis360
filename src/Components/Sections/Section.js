import "./Section.css"
import wallet from "../../Assets/wallet.png"
import coin from "../../Assets/coins2.png"
import supplier from "../../Assets/supplier.png"
import accesss from "../../Assets/access.png"
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaEyeSlash } from "react-icons/fa"
import sugar from "../../Assets/sugar.png"
import { motion } from "framer-motion";
import { MdOutlineMeetingRoom } from "react-icons/md"
import { goalsData } from "../data"
import { useRef } from "react"
import { FaArrowLeft } from "react-icons/fa6"
const Section = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === "left") {
            current.scrollBy({ left: -480, behavior: "smooth" });
        } else {
            current.scrollBy({ left: 480, behavior: "smooth" });
        }
    };
    return ( 
        <div className="section">
            <motion.h4
                className="section-header"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.3 }}        
            >
                Products designed to help you achieve all your life goals
            </motion.h4>
            <div className="section-inner" ref={scrollRef}>
                {goalsData.map((data,index)=>{
                  return(
                    <motion.div 
                        className="section-card"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 1, delay: 0.3 }}        
                    >
                        <h4>{data.title}</h4>
                        <div>
                            <p>{data.body}</p>
                            <button 
                                style={{"backgroundColor":`${data.color}`}}
                            >Learn More</button>
                        </div>
                    </motion.div>
                  )      
                })}
            </div>
            <div className="section-control">
                <div className="section-button" onClick={() => scroll("left")}>
                    <FaChevronLeft/>
                </div>
                <div className="section-button" onClick={() => scroll("right")}>
                    <FaChevronRight/>
                </div>
            </div>
        </div>
    );
}
 
export default Section;