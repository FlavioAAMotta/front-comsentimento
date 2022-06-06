import React, { useState, useEffect } from 'react';
import useForm from "../hooks/useForm"
import GlobalStateContext from './GlobalStateContext'
import { BASE_URL } from "../constants/urls"

import axios from 'axios';

const GlobalState = (props) => {
    

    return (
        <GlobalStateContext.Provider>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;