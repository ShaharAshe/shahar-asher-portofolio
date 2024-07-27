import {BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Header from "./Header";
import '../css/style.css'


function RouteTable(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="*" element={<ErrorPage/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default RouteTable;