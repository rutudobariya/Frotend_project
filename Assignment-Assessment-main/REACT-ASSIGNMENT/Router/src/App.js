import './App.css';
import Home from './Home';
import Product from './Product.js'; // Corrected import
import Login from './Login'; // Corrected import
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ProductList from './ProductList.js';
import ShowspecificidProduct from './ShowspecificidProduct.js';

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar'>
        <NavLink className={(e) => { return e.isActive ? "active" : "unactive" }} to="/" >Home</NavLink>
        <NavLink className={(e) => { return e.isActive ? "active" : "unactive" }} to="/product">Product</NavLink>
        <NavLink className={(e) => { return e.isActive ? "active" : "unactive" }} to="/login">Login</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} >
          <Route path="/product/productList" element={<ProductList />} />
          <Route path="/product/:ProductId" element={<ShowspecificidProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
