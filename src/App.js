
import CardsSection from "./dashboard-folder/cards";
import Sidebar from "./dashboard-folder/sidebar";
import HeaderComponent from "./header-folder/header";
import './App.scss';
import FooterSection from "./footer-folder/footer";
import { useState } from "react";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home";
import BlogsPage from "./blogs";
import ContactPage from "./contact";

export default function App(){
  return(
    <div>
      <h1>This is the routing page.</h1>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" exact element={<HomePage />}/>
        <Route path="/blog" exact element={<BlogsPage />}/>
        <Route path="/contact" exact element={<ContactPage />}/>
      </Routes>
      </BrowserRouter>
      </div>
  )
}
 /*
  <HeaderComponent/>
      <div className="dashboard-section">
        <Sidebar />
        <CardsSection />
      </div>
      <FooterSection />
 */
