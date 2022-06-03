import axios from "axios";
//import { baseURL } from "../constants/baseurl";

export const LoginData = (body) => {
    // const url= `${baseURL}/login`;
    const url =
        "http://localhost:3003/users/login";

    axios
        .post(url, body)
        .then((res) => {
            localStorage.setItem("token", res.data.message);
            //dataUp(res.data);
        })
        .catch((err) => {
            console.log(err.response);
            alert(err.response.data.message);
        });
};
