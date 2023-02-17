import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
    isLoggedIn: false,
    token: "",
    userData: {},
    error: "",
};

export const authSlice = createSlice ({
    
    name: "a",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userData = action.payload;
            state.isLoggedIn = true;
        },
        token: (state, action) =>{
            state.token = action.payload;
        },
        loginError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const loginUser = (data) => (dispatch) => {
    axios({
        method: "POST",
        url: "https://servapi-2191.onrender.com/api/auth/login",
        data: data,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            accept: "application/json",},
    })
    .then((res) => {
        console.log(res);
        dispatch(token(res.data.token));
        localStorage.setItem("token", res.data.token);
        dispatch(login(res.data.data));

        const user =res.data
        const navigate = useNavigate();

        if(user.role === "admin")
        navigate("/Dashboard");
        else(navigate("/"))

      })
      .catch((err) => {
        console.log(err);
        dispatch(loginError(err.response.data.message));
      });
};





// export const userRegister = (userdata) => (dispatch) => {
//     axios({
//         method: "POST",
//         url: "https://blog-apis-jqjw.onrender.com/api/auth/register",
//         data: userdata,
//     }).then((feedback)=>{
//         console.log(feedback);
//         dispatch(createUser())
//     })
// }



export const { login, token, loginError, createUser} = authSlice.actions;
export default authSlice.reducer;