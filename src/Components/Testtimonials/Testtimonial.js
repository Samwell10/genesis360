import Card from "../Card/Card";
import { testimonydata } from "../data";
import "./Testtimonial.css"
const Testtimonial = () => {
    return ( 
        <div className="testimony">
            <h3 className="testimony-header">Testimonials</h3>
            <div className="testimonial-videos">
                <iframe
                    src="https://www.youtube.com/embed/JbFfWNG8zAw?si=o0j-WKKhANupxhV8&amp;start=10" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
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
                    src="https://www.youtube.com/embed/7HubN8c-9-A?si=lhKpRht_az7DPxwk" 
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