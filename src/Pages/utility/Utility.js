import { useEffect } from "react";
import Feature from "../../Components/feature/Feature";
import Footer from "../../Components/Footer/Footer";
import { UtilityHeader } from "../../Components/Header/Header";
import More from "../../Components/More/More";
import { Navbar } from "../../Components/Navbar/Navbar";
import Service from "../../Components/Service/Service";

const Utility = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return ( 
        <div className="utility">
            <Navbar/>
            <UtilityHeader/>
            <Feature/>
            <Service/>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Utility;