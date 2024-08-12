import "./Sponsor.css";
import { sponsorData } from "../data";
const Sponsor = () => {
    return ( 
        <div className="sponsor-outer">
            <h3 className="sponsor-header">Trusted by over 1000+ businesses</h3>
            <marquee width="100%" direction="right">
                <div className="sponsor">
                    {sponsorData.map((image)=>{
                        return(
                            <img src={image.image}></img>
                        )
                    })}
                </div>
            </marquee>
          
        </div>
    );
}
 
export default Sponsor;