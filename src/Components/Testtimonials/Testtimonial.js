import Card from "../Card/Card";
import { testimonydata } from "../data";
import "./Testtimonial.css"
const Testtimonial = () => {
    return ( 
        <div className="testimony">
            <h3 className="testimony-header">Testimonials</h3>
            <div className="testimonial-videos">
                <iframe 
                    src="https://drive.google.com/file/d/1iG9vArB5BUYUDpf1RszRTSOD-x4Z556Q/preview" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    frameborder="0" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                >
                </iframe>
               
            </div>
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
            <div className="testimonial-videos">
                <iframe
                    src="https://drive.google.com/file/d/1MZmKnzXwxznOsFq57NGHekQVq-9lsRLd/preview"
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                >    
                </iframe>
            </div>
        </div>
    );
}
        
export default Testtimonial;