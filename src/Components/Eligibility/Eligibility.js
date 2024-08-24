import { eligibilityData, loaneligibilityData, loanrequirementData } from "../data";
import "./Eligibility.css";
export const Eligibility = () => {
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
 
export const LoanEligibility = () => {
    return ( 
        <div className="eligibility loan-eligibility">
            <h3 className="sponsor-header">Eligibility</h3>
            <div className="eligibility-component">
                {loaneligibilityData.map((data)=>{
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

export const LoanRequirement = () => {
    return(
        <div className="eligibility loan-requirement">
            <h3 className="sponsor-header">Requirements</h3>
            <div className="eligibility-component">
                {loanrequirementData.map((data)=>{
                    return(
                        <div className="eligibility-inner">
                            <h4>{data.id}</h4>
                            <p>{data.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}