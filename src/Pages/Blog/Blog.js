import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/BlogHeader/Header";
import { Navbar, NavbarBlog } from "../../Components/Navbar/Navbar";
import {Suscribe} from "../../Components/Suscribe/Suscribe";


const Blog = () => {
    return ( 
        <div className="blog">
            <Navbar/>
            <Header/>
            <Suscribe/>
            <Footer/>
        </div>
    );
}
 
export default Blog;