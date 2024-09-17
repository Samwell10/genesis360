import { useEffect } from "react";
import {Banner} from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import {Header} from "../../Components/Header/Header";
import More from "../../Components/More/More";
import {Navbar} from "../../Components/Navbar/Navbar"
import Section from "../../Components/Sections/Section";
import Sponsor from "../../Components/Sponsor/Sponsor";
import Testtimonial from "../../Components/Testtimonials/Testtimonial";

const Home = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return ( 
        <div className="home">
            <Navbar/>
            <Header/>
            <Banner/>
            <Sponsor/>
            <Section/>
            <Testtimonial/>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Home;