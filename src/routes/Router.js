import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from "../pages/Login/Login";
import { BrowserRouter } from "react-router-dom";
//import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = ({ setLoginButton, currentPage, changeCurrentPage, questions, getQuestions, isLoading, error }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />

                {/* <Route path="*" element={<ErrorPage />} /> */}

            </Routes>
        </BrowserRouter>
    )
};

export default Router;