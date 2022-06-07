import React, { useState, useEffect } from 'react';
import useForm from "../hooks/useForm"
import GlobalStateContext from './GlobalStateContext'
import { BASE_URL } from "../constants/urls"

import axios from 'axios';

const GlobalState = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const data = {loggedIn, setLoggedIn}
    return (
        <GlobalStateContext.Provider value = {{data}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;