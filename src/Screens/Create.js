import React from "react";
import Navigation from "../Components/Navigation";
import './News.css'
import { AiOutlineSearch } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { BiMessage } from "react-icons/bi"
import img2 from '../Screens/img2.png'
import './Create.css'
import { IoMdClose } from "react-icons/io"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";






export const Create = () => {
    const [username, setusername] = useState("");
    const [email ,setemail] = useState("");
    const [password, setpassword] = useState("");
    // const [confirmPassword, setconfirmPassword] = useState("");

    const navigate = useNavigate();


    const handleRegister = (event) => {
        event.preventDefault();

        // if (userPassword !== confirmPassword) {
        //     alert("Passwords does not match any way")
        //     return;
        // }
        axios
        .post("https://servapi-2191.onrender.com/api/auth/register", {
            username,
            email,
            password,
        })
        .then((response) => {
            console.log(response.data);
            navigate("/Login");
        })
        .catch((error) => {
            console.error(error);
        })

        
    }
    


    
    return (
    <div>

        <div className="port">
            <div className="port2">
                <img src={img2} style={{marginTop: "2%", opacity: "0.2",}}/>
               <div className="profile">

                <div className="log">
                <h1>Create An Account</h1>
                <Link to={"/News"}><IoMdClose style={{marginLeft: "70%", marginTop: "2%", fontSize: "22px", cursor: "pointer",}}/></Link><br></br>
                 
                <p1>It takes less than a minute. If you<br></br> already have an account <span style={{color: "black"}}><Link to={"/Login"} >login.</Link></span></p1>
                <br></br>
                <h2 style={{color: "darkgray", marginTop: "2%"}}>Username<span style={{color: "red"}}>*</span></h2>
                <input className="input" type="search" name=""   onChange={(e) =>{setusername(e.target.value)}}  style={{ width: 200, height: 30, padding: 20,}}></input>
                <h2 style={{color: "darkgray", marginTop: "2%"}}>email<span style={{color: "red"}}>*</span></h2>
                <input className="input" type="search"  onChange={(e) =>{setemail(e.target.value)}}   style={{ width: 200, height: 30, padding: 20, }}></input>
                <br></br><br></br>
                <div style={{float: "left"}}>
                    <h1 style={{marginLeft: "4%", color: "black", }}>First Name</h1>
                    <input className="input" type="search" name=""  style={{ width: 140, height: 40, padding: 20, marginLeft: "2%", border: "1px solid darkgray"}}></input>
                </div>
                <div style={{float: "left"}}>
                    <h1 style={{marginLeft: "4%", color: "black"}}>Last Name</h1>
                    <input className="input" type="search" name=""  style={{ width: 140, marginLeft: "4%", height: 40, padding: 20, border: "1px solid darkgray"}}></input>
                </div>
                </div>
                
                <h2 style={{color: "black", marginTop: "3%", position: "absolute"}}>Mobile</h2>
                <input className="input" type="search" name=""  style={{ width: 200, height: 30, padding: 20, marginTop: 52, marginLeft: 14, border: "1px solid darkgray"}}></input>
                <div style={{float: "left"}}>
                    <h1 style={{marginLeft: "4%", color: "darkgray"}}>Password<span style={{color: "red"}}>*</span></h1>
                    <input className="input" type="search"  onChange={(e) =>{setpassword(e.target.value)}} style={{ width: 140, height: 40, padding: 20, marginTop: "-2%", marginLeft: "6%"}}></input>
                </div>
                <div style={{float: "left"}}>
                    <h1 style={{marginLeft: "4%", marginTop: "2%", color: "darkgray", fontSize: 15.20, position: "absolute"}}>Password Again<span style={{color: "red"}}>*</span></h1>
                    <input className="input" type="search"    style={{ width: 140, marginLeft: "7%", height: 40, padding: 20, marginTop: "10.8%", position: "absolute"}}></input>
                </div>
                <div>
                    <button onc style={{border: "1px solid transparent", height: "7vh", width: "26vh", marginTop: "36%", marginLeft: "-24%", backgroundColor: "#011640", position: "absolute", color: "white"}} className="sinup" onClick={handleRegister}>SignUp</button>
                </div>
                
              </div>
            </div>
        </div>

    </div>
    )
}

