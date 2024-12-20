import {HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects"
import Contact from "./Contact"
import Header from "./Header";
import ErrorPage from "./ErrorPage"
import '../css/style.css'
import SocialLinks from "./SocialLinks";
import Resume from "./Resume";


function RouteTable(){
    return(
        <>
        <HashRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        <SocialLinks/>
        </HashRouter>
        </>
    );
}

export default RouteTable;