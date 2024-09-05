import {HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactGA from "react-ga4";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects"
import Contact from "./Contact"
import Header from "./Header";
import ErrorPage from "./ErrorPage"
import '../css/style.css'


function RouteTable(){
    ReactGA.initialize(process.env.REACT_APP_SERVICE_ID);
    return(
        <HashRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </HashRouter>
    );
}

export default RouteTable;