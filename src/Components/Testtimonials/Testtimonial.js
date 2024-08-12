import Card from "../Card/Card";
import { testimonydata } from "../data";
import "./Testtimonial.css"
const Testtimonial = () => {
    return ( 
        <div className="testimony">
            <h3 className="testimony-header">Testimonials</h3>
            <div className="testimony-body">
                {testimonydata.map((testimony)=>{
                    return(
                        <div className="single-testimony">
                            <Card
                                image={testimony.Image}
                                name={testimony.name}
                                username={testimony.username}
                                testimony={testimony.testimony}
                                date={testimony.date}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
        
export default Testtimonial;