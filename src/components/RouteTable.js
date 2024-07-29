import {BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects"
import Contact from "./Contact"
import Header from "./Header";
import '../css/style.css'


function RouteTable(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/shahar-asher-portofolio/" element={<Home/>}/>
                <Route path="/shahar-asher-portofolio/about" element={<About/>}/>
                <Route path="/shahar-asher-portofolio/projects" element={<Projects/>}/>
                <Route path="/shahar-asher-portofolio/contact" element={<Contact/>}/>
                {/* <Route path="*" element={<ErrorPage/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default RouteTable;