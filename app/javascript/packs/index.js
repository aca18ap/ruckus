import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AdminDashboardApp from "../components/AdminDashboardApp";
import ProductsApp from "../components/ProductsApp";
import App from "../components/App";
import ShowProductsApp from '../components/ShowProductsApp'


createRoot(
  document.getElementById("root")
)
.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="products" element={<ProductsApp />} />
      <Route path="products/:id" element={<ShowProductsApp />} />
      <Route path="admin" element={<AdminDashboardApp />} />
    </Routes>
  </BrowserRouter>,
    document.getElementById("root")

);