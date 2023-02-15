import React from "react";
import './MyListings.css'
import { IoIosAdd } from "react-icons/io"
import { AiOutlineCaretDown } from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai"
import { Dash } from "./dash";
import { AiFillStar } from "react-icons/ai"
import { NavLink } from "react-router-dom";


export const MyListings = () => {
    
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
                <Dash tittle = " Gorgeous House For Sale"  url="https://homeradar.kwst.net/images/all/3.jpg"
                head = "70 Bright St New York, USA" 
                number = "645"/>
                <Dash tittle = " Luxury Family Home" url="https://homeradar.kwst.net/images/all/1.jpg"
                head = "40 Journal Square , NJ, USA" number = "247"/>
                <Dash tittle = " Family House for Rent" url = "https://homeradar.kwst.net/images/all/9.jpg"
                head = " 34-42 Montgomery St , NY, USA" number = "24"/>
                <Dash tittle = " Contemporary Apartment" url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImbST9ctsoMfN4hYsu-aHOCrPI2PIx8zxP1vlIZOUpGEjPdtbsMPyO-EE_hH26QmdEcc&usqp=CAU"
                head = "W 85th St, New York, USA"/>
                <Dash tittle = " Kayak Point House" url = "https://homeradar.kwst.net/images/all/5.jpg"
                head = " 75 Prince St, NY, USA"/>
                <Dash tittle = " Urban House" url = "https://homeradar.kwst.net/images/all/8.jpg"
                head = " 70 Bright St, Jersey City, NJ USA"
                />
                </div>
                
                
            </div>
        </div>
    )
}