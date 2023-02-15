import React from "react";
import './Dashboard.css'
import {AiOutlineFlag } from "react-icons/ai"
import { MdOutlineSignalCellularAlt } from "react-icons/md"
import img3 from '../Screens/img3.png'
import{ CiCircleRemove } from "react-icons/ci"
import { AiOutlineHeart } from "react-icons/ai"
import { TiMessages } from "react-icons/ti"

export const Dashboards = ()=> {
    return (
        <div>
            <div className="container2">
                <h1>DASHBOARD</h1>
                <div className="cont">
                <div className="first">
                    <p>Active Listings</p>
                    <h1>124</h1>
                    <div className="list1">
                    <AiOutlineFlag style={{color: "white", marginTop: "23%", fontSize: 20}}/>
                    </div>
                </div>
                <div className="second">
                    <p>Listing Views</p>
                    <h1>1026</h1>
                    <div className="list2">
                    <MdOutlineSignalCellularAlt style={{color: "white", marginTop: "23%", fontSize: 24}}/>
                    </div>
                </div>
                <div className="three">
                    <p>Your Reviews</p>
                    <h1>357</h1>
                    <div className="list3">
                    <TiMessages style={{color: "white", marginTop: "23%", fontSize: 24}}/>
                    </div>
                </div>
                <div className="four">
                    <p>Times Bookmarkeds</p>
                    <h1>2329</h1>
                    <div className="list4">
                       <AiOutlineHeart style={{color: "white", marginTop: "23%", fontSize: 24}}/>

                    </div>
                </div>
                </div>
                <h2>Your Statistics</h2>
                <div>
                    <img src={img3} style={{marginLeft: "6%", marginTop: "2%"}}/>
                    <h2 style={{marginTop: "4%"}}>Last Activities</h2>
                </div>
                <div className="box1">
                    <p style={{marginLeft: "-43%"}}>Your Listing <span style={{ color: "blue"}}>urban Appartment</span> has been approved</p>
                    <CiCircleRemove  className="remove" style={{color: "blue", fontSize: 30, marginLeft: "20%", marginTop: "-2%", position: "absolute", backGroundColor: "blue",}}/>

                </div>
                <div className="box2">
                <p style={{marginLeft: "-46%"}}>Some one left a review on <span style={{ color: "blue"}}>park Central</span> Listing</p>
                <CiCircleRemove  className="remove" style={{color: "blue", fontSize: 30, marginLeft: "20%", marginTop: "-2%", position: "absolute", backGroundColor: "blue",}}/>

                </div>
                <div className="box3">
                <p style={{marginLeft: "-46%", fontWeight: 100, color: "blue"}}>Fider Mamby<span style={{color: "black"}}> bookmarked Your </span> holiday <span style={{color: "black"}}>Listing</span></p>
                <CiCircleRemove  className="remove" style={{color: "blue", fontSize: 30, marginLeft: "20%", marginTop: "-2%", position: "absolute", backGroundColor: "blue",}}/>


                </div>
                
            </div>
        </div>
    )
}