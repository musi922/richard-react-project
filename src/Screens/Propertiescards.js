 import React from "react";
 import { Link } from "react-router-dom"

 import { BsPlayCircle } from "react-icons/bs"
 import { AiTwotoneHome } from "react-icons/ai"
 import { MdFavoriteBorder } from "react-icons/md"
 import { MdOutlineAddBox } from "react-icons/md"
 import './prop.css'

 export const Propertiescards = (prop) => {
     return(
        <div>
            <div className="body">
            <div className="boxe">
                <div className="boxes">
                    <img src={prop.urlpic} style={{height: "35vh",
    width: "450px",
    border: "1px solid lightgray",
    backgroundPosition: "center",
    backgroundSize: "cover"}}/>
                    <div>
                        <button style={{float: "left", marginLeft: "23%", top: "20%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none"}}><a href="#" style={{color: "white"}}>For sale</a></button>
                    </div>
                    <div style={{ marginTop: "2.8%", position: "absolute", marginLeft: "23%"}}>
                    <button style={{float: "left", marginLeft: "23%", margintop: "-24%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none", width: 52}}><a href="#" style={{color: "white"}}><BsPlayCircle /><br></br>Virtual<br></br>Tour</a></button>

                    </div>
                    <div style={{ marginTop: "14.8%", position: "absolute", marginLeft: "2%"}}>
                    <button style={{float: "left", marginLeft: "3%", top: "113%", position: "absolute", backgroundColor: "#011640", border: "none", width: 42, height: "4vh"}}><a href="#" style={{color: "white"}}><AiTwotoneHome /></a></button>

                    </div>
                    <div style={{ marginTop: "14.8%", position: "absolute", marginLeft: "23%"}}>
                    <button style={{float: "left", marginLeft: "3%", top: "113%", position: "absolute", backgroundColor: "black", border: "none", width: 32, height: "4vh"}}><a href="#" style={{color: "white"}}><MdFavoriteBorder /></a></button>

                    </div>

                    <div style={{ marginTop: "14.8%", position: "absolute", marginLeft: "26%"}}>
                    <button style={{float: "left", marginLeft: "3%", top: "113%", position: "absolute", backgroundColor: "black", border: "none", width: 32, height: "4vh"}}><a href="#" style={{color: "white"}}><MdOutlineAddBox /></a></button>

                    </div>
                </div>
                <div className="boxess">
                    <div>
                        <h1 style={{color: " #6EC1E4",fontSize: 22}}>{prop.h1}</h1>
                        <p1 style={{color: "#7A7A7A",}}>{prop.bed}</p1><br></br><br></br>
                        <p2 style={{color: "#7A7A7A",}}>5528 La Crescenta<br></br>Rancho Santa Fe, CA 92067</p2>
                    </div>
                    <div style={{float: "left"}}>
                    <button className="btn" style={{float: "left", marginLeft: "20%", top: "158%", position: "absolute",}}><Link to={'/View'}>View</Link></button>
                    </div>
                </div>
                <div className="boxesb">
                <div>
                    <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "74%"}}>9 MONTHS AGO</h2>
                </div>
                </div>
                <div className="boxesc">
                    <div>
                        <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "5%"}}>Blair Owens</h2>
                    </div>
                </div>
                <div className="boxesd" style={{backgroundColor: "lightgray"}}>
                    <div>
                        <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "5%"}}>Listing Office</h2>
                        <h3 style={{float: "left", fontSize: 13, marginLeft: "35%", color: "#7A7A7A"}}>Pacific Sotheby’s Int’l Realty</h3>
                    </div>
                </div>
            </div>

            
            </div>
        </div>
    
       
     )
}