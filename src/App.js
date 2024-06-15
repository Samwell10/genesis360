import './App.css';
import Blog from './Blog/Blog';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
