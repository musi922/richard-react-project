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
        {/* <Navigation />
        <div className="inputs" style={{backgroundColor: "papayawhip"}}>
            <input className="input" type="search" name="" placeholder="Email" style={{position: "absolute", marginLeft: 42,top: 100, width: 340, height: 30, padding: 20,}}></input>
            <AiOutlineSearch style={{color: "gray", fontSize: 15, position: "absolute", marginLeft: 43, top: 113,}}/>

            <input className="input" type="search" name="" placeholder="All Statuses " style={{position: "absolute", marginLeft: 400,top: 100, width: 240, height: 30, padding: 20,}}></input>
            <BiChevronDown style={{color: "gray", fontSize: 15, position: "absolute", marginLeft: 600, top: 113,}} />
            <input className="input" type="search" name="" placeholder="ALL Cities " style={{position: "absolute", marginLeft: 660,top: 100, width: 240, height: 30, padding: 20,}}></input>
            <BiChevronDown style={{color: "gray", fontSize: 15, position: "absolute", marginLeft: 850, top: 113,}} />
            <input className="input" type="search" name="" placeholder="All Zipcodes " style={{position: "absolute", marginLeft: 920,top: 100, width: 240, height: 30, padding: 20,}}></input>
            <BiChevronDown style={{color: "gray", fontSize: 15, position: "absolute", marginLeft: 1105, top: 113,}} />
            <button className="bt" style={{marginLeft: 1180, marginTop: 10, position: "absolute", }}><a href="#" style={{color: "white"}}>SEARCH</a></button>
            <button className="btn" style={{marginLeft: 1460, marginTop: 10, position: "absolute",}}><a href="#" style={{color: "gray"}}>MORE</a></button>

            <div>
            <button className="button" style={{backgroundColor: "#011640", height: 58, marginLeft:1490, width: 54, border: 1, borderRadius: 100, position: "fixed"}}><a href="#"><BiMessage style={{color: "white", fontSize: 25, position: "fixed", marginLeft: -12,marginTop: -12}}/></a></button>
            </div>
        </div> */}
        <div className="port">
            <div className="port2">
                <img src={img2} style={{marginTop: "2%", opacity: "0.2",}}/>
               <div className="profile">

                <div className="log">
                <h1>Create An Account</h1>
                <Link to={"/News"}><IoMdClose style={{marginLeft: "84%", marginTop: "-18%", fontSize: "22px", cursor: "pointer", position: "absolute"}}/></Link>
                
                <p1>It takes less than a minute. If you<br></br> already have an account <span style={{color: "black"}}><Link to={"/Profile"} >login.</Link></span></p1>
                <br></br>
                <h2 style={{color: "darkgray"}}>Username<span style={{color: "red"}}>*</span></h2>
                <input className="input" type="search" name=""  style={{ width: 280, height: 30, padding: 20,}}></input>
                <h2 style={{color: "darkgray"}}>email<span style={{color: "red"}}>*</span></h2>
                <input className="input" type="search" name=""  style={{ width: 280, height: 30, padding: 20,}}></input>
                <br></br><br></br>
                <div style={{float: "left"}}>
                    <h1 style={{marginLeft: "4%", color: "darkgray"}}>First Name</h1>
                    <input className="input" type="search" name=""  style={{ width: 140, height: 40, padding: 20,}}></input>
                </div>
                <div style={{float: "left"}}>
                    <h1 style={{marginLeft: "4%", color: "darkgray"}}>Last Name</h1>
                    <input className="input" type="search" name=""  style={{ width: 140, marginLeft: "4%", height: 40, padding: 20,}}></input>
                </div>
                </div>
                
                <h2 style={{color: "darkgray", marginTop: "3%", marginLeft: "4%", position: "absolute"}}>Mobile</h2>
                <input className="input" type="search" name=""  style={{ width: 280, height: 30, padding: 20, marginTop: 52, marginLeft: 14}}></input>
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

