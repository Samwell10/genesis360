import { MarketBanner } from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import { MarketHeader } from "../../Components/Header/Header";
import More from "../../Components/More/More";
import { Navbar } from "../../Components/Navbar/Navbar";

const Marketplace = () => {
    return ( 
        <div className="marketplace">
            <Navbar/>
            <MarketHeader/>
            <MarketBanner/>
            <div className="investment-body">
                <h3 className="sponsor-header investment-headers">How it works</h3>
                <div className="investment-content">
                    <div className="investment-body-inner">
                        <h4>1. Search or Select a Product</h4>
                        <p>Browse our product list and select what you need. If you don’t find it, make a request and we’ll work to provide it for you.</p>
                    </div>
                    <div className="investment-body-inner">
                        <h4>2. Add Products to Cart</h4>
                        <p>To buy a product, find it and add it to your cart. Repeat for any additional items..</p>
                    </div>
                    <div className="investment-body-inner">
                        <h4>3. Set Delivery Option</h4>
                        <p>After adding products to your cart, set your delivery option and choose your preferred address.</p>
                    </div>
                    <div className="investment-body-inner">
                        <h4>4. Select Payment Option</h4>
                        <p>After setting the delivery option, choose a payment method: debit card, Paystack, or Buy Now, Pay Later.</p>
                    </div>
                    <div className="investment-body-inner">
                        <h4>5. Review  & Complete Order</h4>
                        <p>Review your cart, delivery address, payment method, and total cost. Click "Submit" to complete your order.</p>
                    </div>
                </div>
            </div>
            <More/>
            <Footer/>
        </div>
    );
}
 
export default Marketplace;