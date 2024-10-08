import { useEffect } from "react";
import { WalletBanner } from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import { WalletHeader } from "../../Components/Header/Header";
import More from "../../Components/More/More";
import { Navbar } from "../../Components/Navbar/Navbar";

const Wallet = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return ( 
        <div className="wallet">
            <Navbar/>
            <WalletHeader/>
            <WalletBanner/>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Wallet;