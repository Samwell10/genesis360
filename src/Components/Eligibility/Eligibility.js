import { eligibilityData } from "../data";
import "./Eligibility.css";
const Eligibility = () => {
    return ( 
        <div className="eligibility">
            <h3 className="sponsor-header">Eligibility and Requirements</h3>
            <div className="eligibility-component">
                {eligibilityData.map((data)=>{
                    return(
                        <div className="eligibility-inner">
                            <h4>{data.id}</h4>
                            <p>{data.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Eligibility;