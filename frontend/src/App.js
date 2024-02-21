import "./App.css";
import React from "react";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import ShopCategory from "./pages/shopcategory";
import Product from "./pages/product";
import LoginSignUp from "./pages/loginsignup";
import Cart from "./pages/cart";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory />} />
          <Route path="/kids" element={<ShopCategory />} />
          <Route path="/women" element={<ShopCategory />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
