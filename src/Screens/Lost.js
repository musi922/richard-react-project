import React from "react";
import Navigation from "../Components/Navigation";

import { AiOutlineSearch } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { BiMessage } from "react-icons/bi"
import img2 from '../Screens/img2.png'
import './Lost.css'
import { IoMdClose } from "react-icons/io"
import { Link } from "react-router-dom";






export const Lost = () => {
    return (
    <div>
        <div className="ports">
               <div className="profile">
               <img src={img2} style={{marginTop: "192%", marginLeft: "-192%",  opacity: "0.2",}}/>

                <div className="logs" style={{background: "white",opacity: "none"}}>
                <h1 style={{marginTop: "4%"}}>Lost Password?</h1>
                <Link to={"/News"}><IoMdClose style={{marginLeft: "84%", marginTop: "-10%", fontSize: "22px", cursor: "pointer", position: "absolute"}}/></Link>
                
                <p1>Enter your email address and we'll<br></br> send you a link you can use to pick<br></br> a new password.</p1>
                <br></br>
                <h2 style={{color: "black", marginTop: "2%"}}>Username or Email</h2>
                <input className="inputs" type="text" name=""  style={{ width: 280, height: 30, padding: 20, marginTop: 10, marginLeft: 2, color: "black"}}></input><br></br><br></br>
                <button className="bt" style={{height: "6vh", width: 190,}}><a href="#" style={{color: "white", fontSize: 12,}}>GET NEW PASSWORD</a></button>
                
             </div>   
            </div>
        </div>

    </div>
    )
}

