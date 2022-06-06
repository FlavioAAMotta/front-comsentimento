import axios from "axios";
import React, { useState } from "react";

const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() =>{
    setisLoading(true);
    axios.get(url)
    .then((response) =>{
      setData(res.data);
    })
    .catch((error) =>{
      setError(error);
    }).finally(() => {
      setisLoading(false);      
    });
  },[url])
  
  return [data, setData, isLoading, error];
};

export default useRequestData;
