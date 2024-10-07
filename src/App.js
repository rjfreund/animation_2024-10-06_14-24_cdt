import logo from './2024-10-05.png';
import './App.css';
import React,{useEffect,useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blogs />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
