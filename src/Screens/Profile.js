import React from "react";
import Navigation from "../Components/Navigation";
import './News.css'
import { AiOutlineSearch } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { BiMessage } from "react-icons/bi"
import img2 from '../Screens/img2.png'
import './Profile.css'
import { IoMdClose } from "react-icons/io"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./AuthenticationSlice";
import { useSelector } from "react-redux";



    export const Login = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const { isLoggedIn, error } = useSelector((state) => state.auth);
        const [userEmail, setUserEmail] = useState("");
        const [userPassword, setUserPassword] = useState("");
      
        useEffect(() => {
          if (isLoggedIn) {
            console.log("Here");
            
            navigate("/Dashboard");
          }
        }, [isLoggedIn]);
      
        console.log(isLoggedIn, "From Login screen");
      
        console.log(userEmail, userPassword);
      
        const handleLogin = () => {
          dispatch(
            loginUser({
              username: userEmail,
              password: userPassword,
            })
          );
        };

    return (
    <div>
        <div className="port">
            <div className="port2">
                <img src={img2} style={{marginTop: "2%", opacity: "0.2",}}/>
               <div className="profile">

                <div className="log">
                <Link to={"/News"}><IoMdClose style={{marginLeft: "84%", marginTop: "-1%", fontSize: "22px", cursor: "pointer", position: "absolute"}}/></Link>
                <h1>Log in</h1>
                <p1>Don't have an account? <span><Link to={"/Create"} style={{color: "black"}}>Create your</Link><br></br> account</span>, it takes less than a<br></br> minute.</p1>
                <br></br>
                <h2 style={{marginTop: "2%"}}>Username (use: agent)</h2>
                <input className="input" type={"text"}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }} name=""  style={{ width: 210, height: 10, padding: 20,}}></input>
                <h2 style={{marginTop: "2%"}}>Password (use: agent)</h2>
                <input className="input" type={"text"}
          onChange={(event) => {
            setUserPassword(event.target.value);
          }} name=""  style={{ width: 210, height: 10, padding: 20,}}></input>
                <br></br><br></br>
                <button className="bt" style={{marginTop: 10, height: "6vh", width: 280,}} onClick={handleLogin}><a href="#" style={{color: "white"}}>Login</a></button><br></br>
                <hr style={{width: "35vh", float: "left", marginTop: "8%"}}></hr><br></br>
                <button className="bt" style={{marginTop: 10, height: "6vh", width: 280, backgroundColor: "blue"}}><a href="#" style={{color: "white", fontSize: 13,}}>LOGIN WITH FACEBOOK</a></button><br></br>
                <button className="bt" style={{marginTop: 10, height: "6vh", width: 280, backgroundColor: "#B22222"}}><a href="#" style={{color: "white", fontSize: 13,}}>LOGIN WITH GOOGLE</a></button>
                <h3 style={{fontSize: 16, fontWeight: 100, marginTop: "14%"}}><Link to={"/Lost"}>Lost your password?</Link></h3>
                </div>
              </div>
            </div>
        </div>

    </div>
    )
}
