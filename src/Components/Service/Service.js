import "./Service.css"
import fast from "../../Assets/fast.png"
import reliable from "../../Assets/reliable.png"
import secure from "../../Assets/secure.png"
import convienient from "../../Assets/convienient.png"
import cashback from "../../Assets/cashback.png"
import charge from "../../Assets/charges.png"
import mtn from "../../Assets/mtn.png"
import glo from "../../Assets/glo.png"
import mobile9 from "../../Assets/9mobile.png"
import airtel from "../../Assets/airtel.png"
import startime from "../../Assets/startime.png"
import gotv from "../../Assets/gotv.png"
import tsv from "../../Assets/tsv.png"
import dstv from "../../Assets/dstv.png"
import spectranet from "../../Assets/spectant.png"
import ipnx from "../../Assets/ipnx.png"
import smile from "../../Assets/smile.png"
import fiberOne from "../../Assets/fiberone.png"
import ibedc from "../../Assets/ibec.png"
import ie from "../../Assets/ie.png";
import aedc from "../../Assets/aedc.png"
import eko from "../../Assets/eko.png"
const Service = () => {
    return ( 
        <div className="feature">
            <h3 className="sponsor-header">Service</h3>
            <div className="service-body">
                <div className="service-inner">
                    <div className="service-inner-type">
                        <img src={mtn}></img>
                        <img src={glo}></img>
                    </div>
                    <div className="service-inner-type">
                        <img src={mobile9}></img>
                        <img src={airtel}></img>
                    </div>
                    <p>Airtime and Data</p>
                </div>
                <div className="service-inner">
                    <div className="service-inner-type">
                        <img src={startime}></img>
                        <img src={gotv}></img>
                    </div>
                    <div className="service-inner-type">
                        <img src={tsv}></img>
                        <img src={dstv}></img>
                    </div>
                    <p>Cable Subscription</p>
                </div>
                <div className="service-inner">
                    <div className="service-inner-type">
                        <img src={spectranet}></img>
                        <img src={ipnx}></img>
                    </div>
                    <div className="service-inner-type">
                        <img src={smile}></img>
                        <img src={fiberOne}></img>
                    </div>
                    <p>Internet Subscription</p>
                </div>
                <div className="service-inner">
                    <div className="service-inner-type">
                        <img src={ibedc}></img>
                        <img src={ie}></img>
                    </div>
                    <div className="service-inner-type">
                        <img src={aedc}></img>
                        <img src={eko}></img>
                    </div>
                    <p>Electricity Token</p>
                </div>
            </div>
        </div>
    );
}
 
export default Service;