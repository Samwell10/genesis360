import BlogCard from "../Card/BlogCard";
import blogimage from "../../Assets/blogimg.png"
import blogimage2 from "../../Assets/blogimg2.png"
import "./Header.css"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import LottieAnimation from "../../Lotties";
import empty from "../../Assets/Empty.json";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const Header = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading

    useEffect(() => {
        axios.get('https://global-genesis360.com/api/v1/blog')  // Replace with your actual API endpoint
            .then(response => {
                setBlogs(response.data.blogs);
                console.log(response.data.blog?.length)
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
                setLoading(false); // Set loading to false even if there's an error
            });
    }, []);
    return ( 
        <div className="blog-header">
            <h3 className="page-title">Blog</h3>
            {loading ? (
                <SkeletonTheme baseColor="#808080" highlightColor="#9d9d9d">
                    <p style={{width:"100%", height:"400px", marginTop:"40px"}}>
                        <Skeleton count={5} />
                    </p>
                </SkeletonTheme>
            ):(
                <div className="blog-header-component">
                    <div className="blog-main">
                        {blogs.length > 0 && (
                            <BlogCard
                                image={blogs[0].coverImage}
                                category={blogs[0].blogCategory.name}
                                date={blogs[0].publishedDate.slice(0,10)}
                                topic={blogs[0].title}
                                id={blogs[0].id}
                            />
                        )}
                    </div>
                    <div className="blog-recent">
                        {blogs?.length < 4 ? (
                            <div className="empty-animate">
                                <LottieAnimation data={empty}/>
                                <p>No More Recent Blog</p>
                            </div>
                            
                        ): (
                            <>
                            {blogs.slice(3).map((blog) => (
                                    <div className="recent-blog-inner">
                                        <BlogCard
                                            image={blog.coverImage}
                                            category={blog.blogCategory.name}
                                            date={blog.publishedDate.slice(0,10)}
                                            topic={blog.title}
                                            type="recent"
                                            id={blog.id}
                                        />
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            )}
            {loading ? (
                <SkeletonTheme baseColor="#808080" highlightColor="#9d9d9d">
                    <p style={{width:"100%", height:"400px", marginTop:"40px"}}>
                        <Skeleton count={3} />
                    </p>
                </SkeletonTheme>
            ):(
            <>
            {blogs?.length < 2 ? (
                <div className="empty-animate">
                    <LottieAnimation data={empty}/>
                    <p>No More Blog</p>
                </div>
            ): (
                <div className="blog-content">
                    {blogs.slice(1, 3).map((blog) => (
                        <div className="recent-blog-inner">
                            <BlogCard
                                image={blog.coverImage}
                                category={blog.blogCategory.name}
                                date={blog.publishedDate.slice(0,10)}
                                topic={blog.title}
                                type="recent"
                                id={blog.id}
                            />
                        </div>
                    ))}
               
                </div>
            )}
             </>
            )}
        </div>
    );
}
 
export default Header;