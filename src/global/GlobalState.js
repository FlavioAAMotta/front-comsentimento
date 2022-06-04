import React, { useState, useEffect } from 'react';
import useForm from "../hooks/useForm"
import GlobalStateContext from './GlobalStateContext'
import { BASE_URL } from "../constants/urls"

import axios from 'axios';

const GlobalState = (props) => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        getNotices();
    }, [notices]);

    const getNotices = () => {
        axios
            .get(`${BASE_URL}/notices?limit=10`)
            .then((response) => {
                setNotices(response.data);
            })
            .catch((error) => console.log(error.message));
    }

    const data = { notices, getNotices }

    return (
        <GlobalStateContext.Provider value={{ data }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;