import React from "react";
import './AddNew.css'
import './Dashboard.css'
import { BsInfo } from "react-icons/bs"
import {RiUserLocationFill } from "react-icons/ri"
import img4 from '../Screens/img4.png'


export const AddNew = () =>{
    return(
        <div>
            <div className="container2">
                <h1>Add Listings</h1><br></br>
                <hr style={{width: "140vh"}}/>
                <div className="divs">
                    <div className="div1">
                        <h1 style={{marginLeft: "22%", marginTop: "20%", fontWeight: "bold", color: "#144273", fontSize: 14}}>Info</h1>
                    </div>
                    <div className="div2">
                    <p style={{marginLeft: "22%", marginTop: "11%", fontWeight: "bold", color: "#144273", fontSize: 12}}>Location</p>
                    </div>
                    <div className="div3">
                    <p style={{marginLeft: "22%", marginTop: "11%", fontWeight: "bold", color: "#144273", fontSize: 12}}>Media</p>
                    </div>
                    <div className="div4">
                    <p style={{marginLeft: "22%", marginTop: "11%", fontWeight: "bold", color: "#144273", fontSize: 12}}>Details</p>
                    </div>
                    <div className="div5">
                    <p style={{marginLeft: "22%", marginTop: "11%", fontWeight: "bold", color: "#144273", fontSize: 12}}>Rooms</p>
                    </div>
                    <div className="div6">
                    <p style={{marginLeft: "22%", marginTop: "11%", fontWeight: "bold", color: "#144273", fontSize: 12}}>Plans</p>
                    </div>
                    <div className="div7">
                    <p style={{marginLeft: "22%", marginTop: "11%", fontWeight: "bold", color: "#144273", fontSize: 12}}>Widgets</p>
                    </div>

                </div>
                <div className="cos">
                    <h1 style={{marginTop: "1%", marginLeft: "3%", fontSize: 14}}>Basic Information</h1>
                    <BsInfo style={{marginTop: "-2.3%",marginLeft: 0.2, position: "absolute", fontSize: 35, color: "blue"}}/>
                    <hr></hr>
                    <div>
                    <h1 style={{marginTop: "1%", marginLeft: "3%", fontSize: 11, color: "gray", fontWeight: "bold"}}>Listing Title</h1>
                    <div>
                        <input className="cos1" placeholder="Name of Your business"></input>
                        <h1 style={{marginTop: "-4.2%",position: "absolute", marginLeft: "23%", fontSize: 11, color: "gray", fontWeight: "bold"}}>Type</h1>
                        <input className="cos2" placeholder="All Types"></input>
                    </div>
                    <div>
                    <h1 style={{marginTop: "-4.2%",position: "absolute", marginLeft: "45%", fontSize: 11, color: "gray", fontWeight: "bold"}}>Listing Price</h1>
                        <input className="cos3" placeholder="Listing Price"></input>
                    </div>
                    <h1 style={{marginTop: "2.2%",position: "absolute", marginLeft: "2%", fontSize: 11, color: "gray", fontWeight: "bold"}}>Category</h1>
                        <input className="cos4" placeholder="All category"></input>

                    </div>
                </div>
                <div className="cod">
                <h1 style={{marginTop: "1%", marginLeft: "3%", fontSize: 14}}>Location / contact</h1>
                    <RiUserLocationFill style={{marginTop: "-2%",marginLeft: 1.5, position: "absolute", fontSize: 18, color: "blue"}}/>
                    <hr></hr>
                    <div>
                    <h1 style={{marginTop: "1%", marginLeft: "3%", fontSize: 11, color: "gray", fontWeight: "bold"}}>Address</h1>
                    <div>
                        <input className="cod1" placeholder="Address of Your business"></input>
                    </div>
                    
                    </div>
                    <div className="map">
                    <img src={img4} style={{marginLeft: "2%", marginTop: "4%"}}/>
                    </div>
                </div>
                </div>
                
        </div>
    )
}