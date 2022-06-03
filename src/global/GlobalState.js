import React, { useState} from 'react';
import GlobalStateContext from './GlobalStateContext'
import useRequestData from "../hooks/useRequestData";

import axios from 'axios';

const GlobalState = (props) => {
    const url = "http://localhost:3003/users/login"
    const [isLoading, setIsLoading] = useState(false)
    const login = (body) =>{
        const response = axios.post(url, body)
    }

    const states = {isLoading}
    const setters = {setIsLoading}
    const requests = {login}
    return (
        <GlobalStateContext.Provider value ={{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;