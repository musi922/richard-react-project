import React from "react";
import Navigation from "../Components/Navigation";
import './News.css'
import { AiOutlineSearch } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { BiMessage } from "react-icons/bi"
import img2 from '../Screens/img2.png'
import './Create.css'
import { IoMdClose } from "react-icons/io"
import { Link } from "react-router-dom";






export const Create = () => {
    return (
    <div>

        <div className="port">
            <div className="port2">
                <img src={img2} style={{marginTop: "2%", opacity: "0.2",}}/>
               <div className="profile">

                <div className="log">
                <h1>Create An Account</h1>
                <Link to={"/News"}><IoMdClose style={{marginLeft: "84%", marginTop: "18%", fontSize: "22px", cursor: "pointer",}}/></Link>
                
                <p1>It takes less than a minute. If you<br></br> already have an account <span style={{color: "black"}}><Link to={"/Profile"} >login.</Link></span></p1>
                <br></br>
                <h2 style={{color: "darkgray"}}>Username<span style={{color: "red"}}>*</span></h2>
                <input className="input" type="search" name=""  style={{ width: 200, height: 30, padding: 20,}}></input>
                <h2 style={{color: "darkgray"}}>email<span style={{color: "red"}}>*</span></h2>
                <input className="input" type="search" name=""  style={{ width: 200, height: 30, padding: 20, }}></input>
                <br></br><br></br>
                <div style={{float: "left"}}>
                    <h1 style={{marginLeft: "4%", color: "black", }}>First Name</h1>
                    <input className="input" type="search" name=""  style={{ width: 140, height: 40, padding: 20, border: "1px solid darkgray"}}></input>
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
                    <input className="input" type="search" name=""  style={{ width: 140, height: 40, padding: 20, marginTop: "-2%", marginLeft: "6%"}}></input>
                </div>
                <div style={{float: "left"}}>
                    <h1 style={{marginLeft: "2%", color: "darkgray", fontSize: 19.20}}>Password Again<span style={{color: "red"}}>*</span></h1>
                    <input className="input" type="search" name=""  style={{ width: 140, marginLeft: "12%", height: 40, padding: 20, marginTop: "2%"}}></input>
                </div>
                
              </div>
            </div>
        </div>

    </div>
    )
}

