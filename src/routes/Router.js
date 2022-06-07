import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from "../pages/Login/Login";
import { Main } from "../pages/Main/Main";
import { BrowserRouter } from "react-router-dom";
//import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/notices/:navPage" element={<Main />} />
                <Route path="/notices" element={<Main />} />

                {/* <Route path="*" element={<ErrorPage />} /> */}

            </Routes>
        </BrowserRouter>
    )
};

export default Router;