import "./BlogCard.css"
import blogimage from "../../Assets/blogimg.png"
const BlogCard = ({image, category, date, topic, type}) => {
    return ( 
        <div className={type==="recent"? "blogcard blogcard2": "blogcard" }>
            <div className={type==="recent"? "image-ele-2": "image-ele" }>
                <img src={image}></img>
            </div>
            <div className="category-date">
                <p className="category-text">{category}</p>
                <p>{date}</p>
            </div>
            <h2 className={type==="recent"? "blog-title-2": "blog-title" }>
                {topic}
            </h2>
        </div>
    );
}
 
export default BlogCard;