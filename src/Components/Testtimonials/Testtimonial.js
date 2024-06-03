import Card from "../Card/Card";
import "./Testtimonial.css"
const Testtimonial = () => {
    return ( 
        <div className="testimony">
            <h3 className="testimony-header">What People Say About Us</h3>
            <div className="testimony-body">
                <div className="single-testimony">
                    <Card/>
                </div>
                <div className="single-testimony">
                    <Card/>
                </div>
                <div className="single-testimony">
                    <Card/>
                </div>
                <div className="single-testimony">
                    <Card/>
                </div>
            </div>
        </div>
    );
}
        
export default Testtimonial;