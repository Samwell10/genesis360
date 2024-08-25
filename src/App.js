import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import BlogDetails from './Pages/Blog/BlogDetails';
import Blog from "./Pages/Blog/Blog"
import ProductBusiness from './Pages/ProductBusiness/ProductBusiness';
import Utility from './Pages/utility/Utility';
import Investment from './Pages/Investment/Investment';
import Wallet from './Pages/Wallet/Wallet';
import Marketplace from './Pages/Marketplace/Marketplace';
import Contact from './Pages/Contact/Contact';
import Loan from './Pages/Loan/Loan';
import Saving from './Pages/Saving/Saving';
import Terms from './Pages/Terms/Terms';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/product-business' element={<ProductBusiness/>}></Route>
          <Route path='/utility' element={<Utility/>}></Route>
          <Route path='/investment' element={<Investment/>}></Route>
          <Route path='/digital-wallet' element={<Wallet/>}></Route>
          <Route path='/loan' element={<Loan/>}></Route>
          <Route path='/marketplace' element={<Marketplace/>}></Route>
          <Route path='/saving' element={<Saving/>}></Route>
          <Route path='/terms' element={<Terms/>}></Route>
          <Route path='/contact-us' element={<Contact/>}></Route>
          <Route path='/blog-details/:id' element={<BlogDetails/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
