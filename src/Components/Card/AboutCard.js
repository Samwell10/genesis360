import "./AboutCard.css";
import { motion } from "framer-motion";
const AboutCard = ({title, total, position, delay, axis}) => {
    return ( 
        <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.2, delay: delay }}
            className="about-card" style={{"backgroundPosition": `${position}`}}
        >
            <p className="about-card-title">
                {title}
            </p>
            <h2 className="about-card-total">
                {total}
            </h2>
        </motion.div>
    );
}
 
export default AboutCard;