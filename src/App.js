import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import BlogDetails from './Pages/Blog/BlogDetails';
import Blog from "./Pages/Blog/Blog"
import ProductBusiness from './Pages/ProductBusiness/ProductBusiness';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/product-business' element={<ProductBusiness/>}></Route>
          <Route path='/blog-details/:id' element={<BlogDetails/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
