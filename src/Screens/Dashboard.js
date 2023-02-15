import React, { useEffect } from "react";
import './Dashboard.css'
import { TiMessages } from "react-icons/ti"

import { TbArrowWaveRightUp } from "react-icons/tb"
import { BsPersonCheck } from "react-icons/bs"
import { BiEnvelope } from "react-icons/bi"
import { IoIosPeople } from "react-icons/io"
import { BsCardList } from "react-icons/bs"
import { AiOutlineBook } from "react-icons/ai"
import { HiOutlineDocumentAdd } from "react-icons/hi"
import { NavLink, Outlet, useNavigate } from "react-router-dom";


export const Dashboard = ()=> {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/Dashboard/dashboards")
    },[])
    return(
        <>
        <div className="parent">
            <div className="container1">
                <div className="con1">
                    <h1 style={{color: "gray", fontWeight: 100, fontSize: 15}}>MAIN</h1>
                </div>
                <div className="con2">
                    <NavLink to="/Dashboard/dashboards"><h1 style={{marginLeft: "20%", color: "rgb(1, 1, 46)", fontSize: 13}}>Dashboard</h1></NavLink>
                    <div className="icon1">
                        <TbArrowWaveRightUp style={{color: "blue", fontSize: 22, marginTop: "20%"}}/>
                    </div>
                </div>
                <div className="con3">
                    <NavLink to="/Dashboard/EditProfile"><h1 style={{marginLeft: "20%", color: "rgb(1, 1, 46)", fontSize: 13}}>Edit Profile</h1></NavLink>
                    <div className="icon1">
                        <BsPersonCheck style={{color: "blue", fontSize: 22, marginTop: "20%"}}/>
                    </div>
                </div>
                <div className="con4">
                    <h1 style={{marginLeft: "20%", color: "rgb(1, 1, 46)", fontSize: 13}}>Message</h1>
                    <div className="icon1">
                        <BiEnvelope style={{color: "blue", fontSize: 22, marginTop: "20%"}}/>
                    </div>
                    <div className="lists2">
                    <h1 style={{color: "white", marginTop: "8%", fontSize: 12}}>3</h1>
                    </div>
                </div>
                <div className="con5">
                    <h1 style={{marginLeft: "20%", color: "rgb(1, 1, 46)", fontSize: 13 }}>Agent List</h1>
                    <div className="icon1">
                        <IoIosPeople style={{color: "blue", fontSize: 22, marginTop: "20%"}}/>
                    </div>
                </div>
                <div className="cons1">
                    <h1 style={{color: "gray", fontWeight: 100, fontSize: 15}}>Listings</h1>
                    <div className="icon1">
                    </div>
                </div>
                <div className="cons2">
                    <NavLink to="/Dashboard/MyListings"><h1 style={{marginLeft: "20%", color: "rgb(1, 1, 46)", fontSize: 13 }}>My Listings</h1></NavLink>
                    <div className="icon1">
                        <BsCardList style={{color: "blue", fontSize: 22, marginTop: "20%"}}/>
                    </div>
                </div>
                <div className="cons3">
                    <h1 style={{marginLeft: "20%", color: "rgb(1, 1, 46)", fontSize: 13 }}>Bookings</h1>
                    <div className="icon1">
                        <AiOutlineBook style={{color: "blue", fontSize: 22, marginTop: "20%"}}/>
                        <div className="lists3">
                    <h1 style={{color: "white", marginTop: "8%", fontSize: 12}}>2</h1>
                    </div>
                    </div>
                </div>
                <div className="cons4">
                    <h1 style={{marginLeft: "20%", color: "rgb(1, 1, 46)", fontSize: 13 }}>Reviews</h1>
                    <div className="icon1">
                        <TiMessages style={{color: "blue", fontSize: 22, marginTop: "20%"}}/>
                    </div>
                </div>
                <div className="cons5">
                    <NavLink to="/Dashboard/AddNew"><h1 style={{marginLeft: "20%", color: "rgb(1, 1, 46)", fontSize: 13 }}>Add New</h1></NavLink>
                    <div className="icon1">
                        <HiOutlineDocumentAdd style={{color: "blue", fontSize: 22, marginTop: "20%"}}/>
                    </div>
                </div>
                <div className="cons6">
                    
                </div>
                
                <footer style={{fontSize: 12, color: "blue", marginTop: "12%"}}>© HOMERADAR 2022 . ALL RIGHTS RESERVED.</footer>
                
            </div>
            <div className="container3">
                <Outlet/>
            </div>
            
        </div>
        </>
    )
}