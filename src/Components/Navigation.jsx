import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import './Navigation.css';

function Navigation () {
   return (
    <headers>
        <h2 style={{marginLeft:23,fontWeight: "bold",fontSize: 33, color: "black", marginTop:23, fontFamily: "sans-serif"}}><Link to={"/"} style={{color: "black"}}>BLAIR OWENS</Link></h2>
        <ul>
          <Link to={"/"} ><li></li></Link>
          <Link to={"/properties"} ><li>Properties</li></Link>
          <Link to={"/Mlssearch"}><li>MLS Search</li></Link>
          <Link to={"/Communities"}><li>Communities</li></Link>
          <Link to={"/News"}><li>News</li></Link>
          <Link to={"/Services"}><li>Services</li></Link>
          <Link to={"/About Blair"}><li>About Blair</li></Link>
          <Link to={"/Contact"}><li>Contact</li></Link>
          {/* <NavLink to={"/mls"}><span>mls</span></NavLink> */}
          {/* <Link to="Properties"><span>our Properties</span></Link> */}
          <div className="icon" id="popup"><Link to={"/Login"} ><li><RiAccountCircleLine style={{color: "black", fontSize: 26, backGroundColor: "papaywhip"}}/></li></Link></div>
        </ul>

      </headers>
   ) 
}

export default Navigation