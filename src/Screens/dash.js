import React, { useState } from "react";
import './MyListings.css'
import {TiLocation } from "react-icons/ti"
import { AiFillStar } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import {FaRegEdit } from "react-icons/fa"
import { MdOutlineDomainDisabled } from "react-icons/md"
import { RiDeleteBinLine } from "react-icons/ri"
import { Delete } from "./Delete";

export const Dash = (props) => {
    const [isDeleting, setisDeleting] = useState(false)
    const [posts, setposts] = useState([]);

    const handleDelete = () => {
        setisDeleting(true);
        Delete(props.id)
        .then(() => {
            console.log("Delete");
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            setisDeleting(false);
        });
    }
    return(
        <div>
        <div className="boxs" style={{marginTop:"2%", marginLeft: "8%"}}>
                <div className="boxs1">
                    <div>
                        <img src={props.image} style={{border: "1px solid transparent",
                                                     height: "20vh",
                                                     width: "20vh",
                                                     backgroundPosition: "center",
                                                     backgroundRepeat: "no-repeat",
                                                     backgroundSize: "cover",
                                                     }}/>
                    </div>
                    <div>
                    <p style={{color: "rgb(1, 1, 105)", fontWeight: "bold", fontSize: 13, marginLeft: "39%", marginTop: "-28%"}}>{props.tittle}</p>
                    <h1 style={{color: "rgb(12, 5, 90)", fontWeight: "bold", fontSize: 12, marginLeft: "42%", marginTop: "-1%"}}>{props.head}</h1>
                    <TiLocation style={{color: "blue", fontWeight: "bold", fontSize: 17, marginLeft: "10.4%", marginTop: "-1.6%", position: "absolute"}}/>
                    <AiFillStar style={{fontWeight: "bold", color: "#fad505", fontSize: 17, marginLeft: "11.4%", marginTop: "0.4%", position: "absolute"}}>{props.icon}</AiFillStar>
                    <AiFillStar style={{fontWeight: "bold", color: "#fad505", fontSize: 17, marginLeft: "12.4%", marginTop: "0.4%", position: "absolute"}}>{props.icon}</AiFillStar>
                    <AiFillStar style={{fontWeight: "bold", color: "#fad505", fontSize: 17, marginLeft: "13.4%", marginTop: "0.4%", position: "absolute"}}>{props.icon}</AiFillStar>
                    <AiFillStar style={{fontWeight: "bold", color: "#fad505", fontSize: 17, marginLeft: "14.4%", marginTop: "0.4%", position: "absolute"}}>{props.icons}</AiFillStar>
                    <AiFillStar style={{fontWeight: "bold", color: "lightgray", fontSize: 17, marginLeft: "15.4%", marginTop: "0.4%", position: "absolute"}}>{props.icon}</AiFillStar>
                    <hr style={{marginTop: "8%", color: "lightgray"}}/>
                    
                    <AiFillEye style={{fontWeight: "bold", color: "blue", fontSize: 17, marginLeft: "11.4%", marginTop: "0.4%", position: "absolute"}}>{props.icon}</AiFillEye>
                    <h2 style={{color: "gray", marginLeft: "13%", marginTop: "0.4%", fontWeight: "100", position: "absolute"}}>Viewed -</h2>
                    <p1 style={{color: "gray", marginLeft: "16.2%", marginTop: "0.4%",fontSize: 14, position: "absolute"}}>{props.number}</p1>
                    <div className="doc">
                    <div className="doc1">
                        <FaRegEdit style={{color: "blue", marginLeft: "32%", marginTop: "40%"}}/>
                        
                    </div>
                    <div className="doc2">
                    <MdOutlineDomainDisabled style={{color: "blue", marginLeft: "32%", marginTop: "40%"}}/>
                    
                    </div>
                    <div className="doc3">
                    <RiDeleteBinLine style={{color: "blue", marginLeft: "32%", marginTop: "40%"}} onClick={handleDelete}/>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}