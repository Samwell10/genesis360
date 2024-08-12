import "./AboutCard.css";
const AboutCard = ({title, total, position}) => {
    return ( 
        <div className="about-card" style={{"backgroundPosition": `${position}`}}>
            <p className="about-card-title">
                {title}
            </p>
            <h2 className="about-card-total">
                {total}
            </h2>
        </div>
    );
}
 
export default AboutCard;