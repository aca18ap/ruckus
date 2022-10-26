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


createRoot(
  document.getElementById("root")
)
.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="products" element={<ProductsApp />} />
      <Route path="admin" element={<AdminDashboardApp />} />
    </Routes>
  </BrowserRouter>,
    document.getElementById("root")

);