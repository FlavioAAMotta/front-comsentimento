import axios from "axios";
import React, { useState, useEffect } from "react";

const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setisLoading(true);
      console.log("URL:", url)
      const response = await axios.get(url)
      setData(response.data);
      //console.log("Response",response)
      console.log("Response", response)
    } catch (error) {
      setError(error);
    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [url])

  return [data, isLoading, error];
};

export default useRequestData;
