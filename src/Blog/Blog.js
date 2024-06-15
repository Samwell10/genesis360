import Header from "../Components/BlogHeader/Header";
import Footer from "../Components/Footer/Footer";
import { NavbarBlog } from "../Components/Navbar/Navbar";
import Suscribe from "../Components/Suscribe/Suscribe";

const Blog = () => {
    return ( 
        <div className="blog">
            <NavbarBlog/>
            <Header/>
            <Suscribe/>
            <Footer/>
        </div>
    );
}
 
export default Blog;