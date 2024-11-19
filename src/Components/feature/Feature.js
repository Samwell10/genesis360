import "./Feature.css"
import fast from "../../Assets/fast.png"
import reliable from "../../Assets/reliable.png"
import secure from "../../Assets/secure.png"
import convienient from "../../Assets/convienient.png"
import cashback from "../../Assets/cashback.png"
import charge from "../../Assets/charges.png"
const Feature = () => {
    return ( 
        <div className="feature">
            <h3 className="sponsor-header">Features</h3>
            <div className="feature-body">
                <div className="feature-inner">
                    <img src={fast}></img>
                    <p>Fast</p>
                </div>
                <div className="feature-inner">
                    <img src={reliable}></img>
                    <p>Reliable</p>
                </div>
                <div className="feature-inner">
                    <img src={secure}></img>
                    <p>Secure</p>
                </div>
                <div className="feature-inner">
                    <img src={convienient}></img>
                    <p>Convenient</p>
                </div>
                <div className="feature-inner">
                    <img src={cashback}></img>
                    <p>Cashback</p>
                </div>
                <div className="feature-inner">
                    <img src={charge}></img>
                    <p>Zero Charges</p>
                </div>
            </div>
        </div>
    );
}
 
export default Feature;