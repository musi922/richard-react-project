import React from "react";
import './AddNew.css'
import './Dashboard.css'
import { BsInfo } from "react-icons/bs"
import {RiUserLocationFill } from "react-icons/ri"
import { TbWorldUpload}  from "react-icons/tb"
import img4 from '../Screens/img4.png'
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export const AddNew = () =>{
    const [province, setprovince] = useState("");
    const [district, setdistrict] = useState("");
    const [street, setstreet] = useState("");
    const [status, setstatus] = useState("");
    const [LotSize, setLotSize] = useState("");
    const [description, setdescription] = useState("");
    const [beds, setbeds] = useState(0);
    const [price, setprice] = useState(0);
    const [bath, setbath] = useState(0);
    const [images, setimages] = useState("")
    const navigate =useNavigate()


    const handleAddBlog = (e) => {
        e.preventDefault();
        const data = {
            province,
            district,
            street,
            beds,
            bath,
            price,
            images,
            description,
            LotSize,
            status,
        };
        onSendPost(data);
    };

    function onSendPost(data) {
        let formData = new FormData();
        Object.keys(data).forEach(function (key) {
            formData.append(key, data[key]);
        });

        fetch("https://servapi-2191.onrender.com/api/estates", {
            method: "POST",
            body: formData,
        })
        .then((result) => result.json())
        .then((result) => {
            console.log(result);
            alert("really do you want to post to customers ")
            navigate("/Dashboard/MyListings")
        });
    }
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
                    <h1 style={{marginTop: "1%", marginLeft: "3%", fontSize: 14}}>Estate Information</h1>
                    <BsInfo style={{marginTop: "-2.3%",marginLeft: 0.2, position: "absolute", fontSize: 35, color: "blue"}}/>
                    <hr></hr>
                    <div>
                    <h1 style={{marginTop: "1%", marginLeft: "3%", fontSize: 11, color: "gray", fontWeight: "bold"}}>Price</h1>
                    <div>
                        <input className="cos1" placeholder="Name of Price"  onChange={(e)=> setprice(e.target.value)}></input>
                        <h1 style={{marginTop: "-4.2%",position: "absolute", marginLeft: "23%", fontSize: 11, color: "gray", fontWeight: "bold"}}>Beds</h1>
                        <input className="cos2" placeholder="Type Beds" onChange={(e)=> setbeds(e.target.value)}></input>
                    </div>
                    <div>
                    <h1 style={{marginTop: "-4.2%",position: "absolute", marginLeft: "45%", fontSize: 11, color: "gray", fontWeight: "bold"}}>Description</h1>
                        <input className="cos3" placeholder="Enter the Description"  onChange={(e)=> setdescription(e.target.value)}></input>
                    </div>
                    <h1 style={{marginTop: "2.2%",position: "absolute", marginLeft: "2%", fontSize: 11, color: "gray", fontWeight: "bold"}}>Bath</h1>
                        <input className="cos4" placeholder="Type Bath"  onChange={(e)=> setbath(e.target.value)}></input>

                    </div>
                    <div>
                        
                        <h1 style={{marginTop: "-4.2%",position: "absolute", marginLeft: "23%", fontSize: 11, color: "gray", fontWeight: "bold"}}>LotSize</h1>
                        <input className="cos5" placeholder="Type LotSize"  onChange={(e)=> setLotSize(e.target.value)}></input>
                    </div>
                    <div>
                    <h1 style={{marginTop: "-4.2%",position: "absolute", marginLeft: "45%", fontSize: 11, color: "gray", fontWeight: "bold"}}>Status</h1>
                        <input className="cos3" placeholder="Enter the Status"  onChange={(e)=> setstatus(e.target.value)}></input>
                    </div>
                </div>
                <div className="cod">
                <h1 style={{marginTop: "1%", marginLeft: "3%", fontSize: 14}}>Location / contact</h1>
                    <RiUserLocationFill style={{marginTop: "-2%",marginLeft: 1.5, position: "absolute", fontSize: 18, color: "blue"}}/>
                    <hr></hr>
                    <div>
                    <h1 style={{marginTop: "1%", marginLeft: "3%", fontSize: 11, color: "gray", fontWeight: "bold"}}>Province</h1>
                    <div>
                        <input className="cod1" placeholder="Enter Province" type="text" onChange={(e)=> setprovince(e.target.value)} style={{position: "relative", zIndex: 999}}></input>
                    </div>
                    
                    </div>
                    <div>
                    <h1 style={{marginTop: "-6%", marginLeft: "33%", fontSize: 11, color: "gray", fontWeight: "bold"}}>District</h1>
                    <div>
                        <input className="cod5" placeholder="Enter District"  onChange={(e)=> setdistrict(e.target.value)} style={{position: "relative",
    zIndex: 999}}></input>
                    </div>
                    
                    </div>
                    <div>
                    <h1 style={{marginTop: "-6%", marginLeft: "63%", fontSize: 11, color: "gray", fontWeight: "bold"}}>Street</h1>
                    <div>
                        <input className="cod6" placeholder="Enter Street"  onChange={(e)=> setstreet(e.target.value)}></input>
                    </div>
                    
                    </div>
                    <div className="map" style={{marginTop: "10%"}}>
                    <img src={img4} style={{marginLeft: "2%", marginTop: "8%"}}/>
                    </div>
                    <div>
                        <button className="butto" onClick={(e) => handleAddBlog(e)}>Add Estate</button>
                    </div>
                    <h1 style={{marginTop: "-36%", marginLeft: "2%", fontSize: 15, color: "gray", fontWeight: "bold", position: "absolute"}}  onChange={(e)=> setimages(e.target.value)}>Images</h1><br></br>
                    <div className="imagese">
                    
                        <TbWorldUpload style={{color: "#cf0353", marginTop: "3%", marginLeft: "40%", fontSize: 35}}/>
                        <input type={"file"} style={{marginTop: "4%", marginLeft:"15%"}}></input>
                    </div>
                </div>
                </div>
                
        </div>
    )
}