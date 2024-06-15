import BlogCard from "../Card/BlogCard";
import blogimage from "../../Assets/blogimg.png"
import blogimage2 from "../../Assets/blogimg2.png"
import "./Header.css"
const Header = () => {
    return ( 
        <div className="blog-header">
            <h3 className="page-title">Blog</h3>
            <div className="blog-header-component">
                <div className="blog-main">
                    <BlogCard
                        image={blogimage}
                        category="category"
                        date="May 31st, 2024"
                        topic="How Genesis360 Offers You The Best Savings Interest"
                    />
                </div>
                <div className="blog-recent">
                    <div className="recent-blog-inner">
                        <BlogCard
                            image={blogimage2}
                            category="category"
                            date="May 31st, 2024"
                            topic="Top Up Your Phone Number Directly From Genesis360 App"
                            type="recent"
                        />
                    </div>
                    <div className="recent-blog-inner">
                        <BlogCard
                          image={blogimage2}
                          category="category"
                          date="May 31st, 2024"
                          topic="Top Up Your Phone Number Directly From Genesis360 App"
                          type="recent"
                        />
                    </div>
                </div>
            </div>
            <div className="blog-content">
                <BlogCard
                    image={blogimage}
                    category="category"
                    date="May 31st, 2024"
                    topic="Top Up Your Phone Number Directly From Genesis360 App"
                    type="recent"
                />
                <BlogCard
                    image={blogimage}
                    category="category"
                    date="May 31st, 2024"
                    topic="Top Up Your Phone Number Directly From Genesis360 App"
                    type="recent"
                />
                 <BlogCard
                    image={blogimage}
                    category="category"
                    date="May 31st, 2024"
                    topic="Top Up Your Phone Number Directly From Genesis360 App"
                    type="recent"
                />
                 <BlogCard
                    image={blogimage}
                    category="category"
                    date="May 31st, 2024"
                    topic="Top Up Your Phone Number Directly From Genesis360 App"
                    type="recent"
                />
                <BlogCard
                    image={blogimage}
                    category="category"
                    date="May 31st, 2024"
                    topic="Top Up Your Phone Number Directly From Genesis360 App"
                    type="recent"
                />
                <BlogCard
                    image={blogimage}
                    category="category"
                    date="May 31st, 2024"
                    topic="Top Up Your Phone Number Directly From Genesis360 App"
                    type="recent"
                />

                <BlogCard
                    image={blogimage}
                    category="category"
                    date="May 31st, 2024"
                    topic="Top Up Your Phone Number Directly From Genesis360 App"
                    type="recent"
                />
                <BlogCard
                    image={blogimage}
                    category="category"
                    date="May 31st, 2024"
                    topic="Top Up Your Phone Number Directly From Genesis360 App"
                    type="recent"
                />
            </div>
        </div>
    );
}
 
export default Header;