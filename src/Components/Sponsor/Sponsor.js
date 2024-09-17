import "./Sponsor.css";
import { sponsorData } from "../data";
const Sponsor = () => {
    return ( 
        <div className="sponsor-outer">
            <h3 className="sponsor-header">Trusted by over 1000+ businesses</h3>
            <div className="marquee">
                <div className="sponsor">
                    {sponsorData.map((image)=>{
                        return(
                            <img src={image.image}></img>
                        )
                    })}
                    {sponsorData.map((image)=>{
                        return(
                            <img src={image.image}></img>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default Sponsor;