import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Root from "./routes/root";
import Section from "./routes/section";
import Category from "./routes/category";
import Product from "./routes/product";
import Suppliers from "./routes/suppliers";
import Contacts from "./routes/contacts";
import About from "./routes/about";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/sections" element={<Root />} />
        <Route path="/sections/:sectionId" element={<Section />} />
        <Route path="/sections/:sectionId/categories" element={<Section />} />
        <Route path="/sections/:sectionId/categories/:categoryId" element={<Category />} />
        <Route path="/sections/:sectionId/categories/:categoryId/products" element={<Category />} />
        <Route path="/sections/:sectionId/categories/:categoryId/products/:productId" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;