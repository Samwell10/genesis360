import "./More.css"
import appstore from "../../Assets/appstore.png"
import googleplay from "../../Assets/googleplay.png"
const More = () => {
    return ( 
        <div className="more">
            <div className="more-inner">
                <div className="more-text">
                    <p>Sign up for free and start enjoying hassle-free food financing.</p>
                </div>
                <div className="more-buttons">
                    <img src={appstore}></img>
                    <img src={googleplay}></img>
                </div>
            </div>
        </div>
    );
}
 
export default More;