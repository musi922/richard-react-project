import React from "react";
import './MyListings.css'
import { IoIosAdd } from "react-icons/io"
import { AiOutlineCaretDown } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"
import { Dash } from "./dash";
import { AiFillStar } from "react-icons/ai"
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



export const MyListings = () => {
    const [listings, setlistings] = useState([]);
    console.log(listings, "listings");
    useEffect(()=> {
        fetchData();

    }, []);
    const fetchData = () => {
        axios({
            method: "GET",
            url: "https://servapi-2191.onrender.com/api/estates/getAll",
        })
        .then((response) => {
            setlistings(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    return(
        <div>
           <div className="container2">
                <h1>Your Listings</h1><br></br>
                <hr style={{width: "140vh"}}/>
                <input className="input" type="text" placeholder="Search"></input>
                <AiOutlineSearch style={{marginLeft: "-2%", color: "rgb(14, 169, 221)"}}/>
                <div className="sort">
                    <h1 style={{color: "gray", fontSize: 12, marginTop: "10%"}}>Lastes</h1>
                    <AiOutlineCaretDown style={{color: "#144273", marginTop: "-1.8%", marginLeft: "7.4%", position: "absolute", fontSize: 16 }}/>

                </div>
                <div className="sorts">
                    <NavLink to="/Dashboard/AddNew"><h1 style={{color: "white", fontSize: 12, marginTop: "13%"}}>Add New</h1></NavLink>
                    <IoIosAdd style={{color: "white", marginTop: "-1.8%", marginLeft: "5.4%", position: "absolute", fontSize: 23 }}/>
                </div>

                <div style={{width: "360", display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                    {listings.map((item)=> {
                        return (
                            <Dash tittle = {item.description}  image={item.images}
                            head = {item.location.province + " " + item.location.district + " " + item.location.street} 
                            number = "645" id ={item._id}/>
                            
                        )
                    })}
                
                </div>
                
                
            </div>
        </div>
    )
}