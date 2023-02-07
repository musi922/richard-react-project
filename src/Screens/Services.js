import React from "react";
import { Link } from "react-router-dom"

// import Navigation from "../Components/Navigation";
import './News.css';
// import { AiOutlineSearch } from "react-icons/ai"
// import { BiChevronDown } from "react-icons/bi"
// import { BiMessage } from "react-icons/bi"


export const Services = (props) => {
    return (
        <div>
            
            
            <div className="cards">
                <div className="card1">
                    
                    <div className="imag1"
                    style={{
                        border: "1px solid transparent",
                        height: "44vh",
                        width: "90vh",
                        
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}>
                        <img src={props.urlimg} style={{width: "90vh", height: "44vh"}}/>
                    </div>
                    <div>
                        <div className="inner1"></div>
                        <h1 style={{fontSize: 30, fontWeight: 100, marginLeft: "20%", marginTop: "-12%",}}>{props.h1}</h1>
                        <h2 style={{fontSize: 15, fontWeight: 100, marginLeft: "20%", color: "gray", marginTop: "-2%",}}>{props.h2}</h2>
                        <p1 style={{marginLeft: "1%", color: "gray", fontSize: 18, fontWeight: 100, display: "flex", flexDirection: "row", flexWrap: "wrap", padding: "30px 50px 40px"}}>{props.p1}</p1>
                        <button className="bat"><a href="#" style={{color: "white", display: "flex", flexDirection: "row"}}><Link to={'/News/Readmore'} target='_blank' style={{color: "white"}}>READ MORE</Link></a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}