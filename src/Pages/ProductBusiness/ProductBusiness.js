import { useEffect } from "react";
import { ProductBusinessBanner, ProductBusinessBanner2 } from "../../Components/Banner/Banner";
import {Eligibility} from "../../Components/Eligibility/Eligibility";
import Footer from "../../Components/Footer/Footer";
import { ProductBusinessHeader } from "../../Components/Header/Header";
import More from "../../Components/More/More";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Action } from "../../Components/Suscribe/Suscribe";

const ProductBusiness = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return ( 
        <div className="productBusiness">
            <Navbar/>
            <ProductBusinessHeader/>
            <ProductBusinessBanner/>
            <ProductBusinessBanner2/>   
            <Eligibility/>
            <Action/>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default ProductBusiness;