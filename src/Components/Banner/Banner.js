import "./Banner.css"
import { motion } from "framer-motion";
const Banner = () => {
    return ( 
        <div className="banner">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.5}}
            >
                Welcome to Genesis360, where we're revolutionizing the way food security is approached in Africa. With a focus on empowering both food businesses and consumers, we provide innovative financing solutions designed to bridge the gap between supply and demand, ensuring access to nutritious food for all.
            </motion.p>
        </div>
    );
}
 
export default Banner;