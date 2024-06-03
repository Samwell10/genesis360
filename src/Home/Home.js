import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import More from "../Components/More/More";
import Navbar from "../Components/Navbar/Navbar";
import Section from "../Components/Sections/Section";
import Testtimonial from "../Components/Testtimonials/Testtimonial";

const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
            <Header/>
            <Banner/>
            <Section/>
            <Testtimonial/>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Home;