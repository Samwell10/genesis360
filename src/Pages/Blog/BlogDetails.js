import { FaFacebook } from "react-icons/fa";
import { Navbar, NavbarBlog } from "../../Components/Navbar/Navbar";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import './Blog.css'
// import blogimage from "../Assets/blogimg.png"
import{ Suscribe} from "../../Components/Suscribe/Suscribe";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const BlogDetails = () => {
    const {id} = useParams()
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading

    useEffect(() => {
        axios.get(`https://global-genesis360.com/api/v1/blog/${id}`)  // Replace with your actual API endpoint
            .then(response => {
                setBlogs(response.data.blog);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
                setLoading(false); // Set loading to false even if there's an error
            });
    }, []);
    return ( 
        <div className="blog">
            <Navbar/>
           {loading ?(
             <SkeletonTheme baseColor="#808080" highlightColor="#9d9d9d">
                <p style={{width:"100%", height:"400px", marginTop:"40px"}}>
                    <Skeleton count={3} />
                </p>
            </SkeletonTheme>
           ):(
            <div className="blog-details">
                <p className="category-text">
                    {blogs?.blogCategory?.name}
                </p>
                <h3 className="blog-details-title">
                    {blogs?.title}
                </h3>
                <div className="blog-info">
                    <div className="blog-info-inner">
                        <p className="by">By <span>Author Name</span></p>
                        <div className="full-stop">
                        </div>
                        <p className="blog-date">
                            {blogs?.publishedDate?.slice(0,10)}
                        </p>
                        <div className="full-stop">
                        </div>
                        <p className="blog-date">
                            {blogs?.readTime}mins Read
                        </p>
                    </div>
                    {/* <div className="socials">
                        <FaFacebook/>
                        <RiInstagramFill />
                        <RiTwitterXFill/>
                    </div> */}
                </div>
                <div className="blog-body">
                    <div className="blog-image">
                        <img src={blogs.coverImage}></img>
                    </div>
                    <div className="blog-text">
                        <div dangerouslySetInnerHTML={{ __html: blogs.content }} />
                    </div>
                </div>
            </div>)}
            <Suscribe/>
            <Footer/>
        </div>
    );
}
 
export default BlogDetails;