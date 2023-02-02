import React from "react";
import Navigation from "../Components/Navigation";
import './Communities.css';
import { AiOutlineSearch } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { BiMessage } from "react-icons/bi"
import '../Components/Properties' ;




export const Communities = () => {
    return ( 
    <div>
        <Navigation />
        <div className="head">
            <div className="inputs">
            <input className="input" type="search" name="" placeholder="Street, City, State or Zip " style={{position: "absolute", marginLeft: 42,top: 100, width: 340, height: 30, padding: 20,}}></input>
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

            <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor<br></br>semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum <br></br>primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tellus felis,<br></br> vulputate id eleifend sit amet, varius non ipsum.</p>
            </div>

            <div className="para" style={{float: "left"}}>
                <h1 style={{position: "absolute", fontFamily: "initial", fontSize: 43, marginLeft: 65, marginTop:"25%", letterSpacing: 4}}>Communities</h1>
                <p4 style={{position: "absolute", marginTop: "23%", marginLeft: 65, color: "darkgray", fontSize: 22}}>San Diego</p4>

            </div>

            </div>
        </div>
        <div>
            <h2 style={{color: "darkgray", fontSize: 24, marginLeft: "45%", marginTop: "3%", fontWeight: 100}}>Community</h2>
            <h1 style={{color: "#011640", marginLeft: "40%", fontWeight: 100, fontSize: 44, marginTop: "-1%"}}>Find The Most Amazing</h1>
            <h3 style={{color: "#011640", marginLeft: "43%", fontWeight: 100, fontSize: 44, marginTop: "-2%"}}>Places In San Diego</h3>
        </div>

        <div className="communities1">
            <div className="com"></div>


        </div>
        <div className="communities2">

        </div>

        <div></div>
    </div>
    )
}