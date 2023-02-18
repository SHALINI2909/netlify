import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Pages/Products";
import ProDetails from "../Pages/ProDetails";
import Cart from "../Pages/Cart";
import Orders from "../Pages/Orders";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<ProDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
};

export default AllRoutes;
