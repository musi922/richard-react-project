import React from "react";
import Properties from "../Components/Properties"; 
import { AiOutlineSearch } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { BiMessage } from "react-icons/bi"
import Cardone from "../cards/Cardone"
import { BsPlayCircle } from "react-icons/bs"
import { AiTwotoneHome } from "react-icons/ai"
import { MdFavoriteBorder } from "react-icons/md"
import { MdOutlineAddBox } from "react-icons/md"


export const OurProperties = () => {
    return ( 
    <div>
        <Cardone />
        <Properties />
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
                <h1 style={{position: "absolute", fontFamily: "initial", fontSize: 43, marginTop:"18%", marginLeft: 95, letterSpacing: 4}}>Our Properties</h1>
                <p4 style={{position: "absolute", marginTop: "16%", marginLeft: 95, color: "darkgray", fontSize: 22}}>Blair Owens</p4>

            </div>

            </div>
        </div>
        <div className="body">
            <div className="boxe">
                <div className="boxes">
                    <div>
                        <button style={{float: "left", marginLeft: "23%", top: "114%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none"}}><a href="#" style={{color: "white"}}>For sale</a></button>
                    </div>
                    <div style={{ marginTop: "2.8%", position: "absolute", marginLeft: "23%"}}>
                    <button style={{float: "left", marginLeft: "23%", top: "114%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none", width: 52}}><a href="#" style={{color: "white"}}><BsPlayCircle /><br></br>Virtual<br></br>Tour</a></button>

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
                        <h1 style={{color: " #6EC1E4",fontSize: 22}}>$7,800,000</h1>
                        <p1 style={{color: "#7A7A7A",}}>Bed 5 Bath 4 sq Ft 4,460</p1><br></br><br></br>
                        <p2 style={{color: "#7A7A7A",}}>5528 La Crescenta<br></br>Rancho Santa Fe, CA 92067</p2>
                    </div>
                    <div style={{float: "left"}}>
                    <button className="btn" style={{float: "left", marginLeft: "20%", top: "158%", position: "absolute",}}><a href="#" style={{color: "gray"}}>View</a></button>
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

            <div className="table">
                <div className="tables">
                <div>
                        <button style={{float: "left", marginLeft: "23%", top: "114%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none"}}><a href="#" style={{color: "white"}}>For sale</a></button>
                </div>
                <div style={{ marginTop: "2.8%", position: "absolute", marginLeft: "23%"}}>
                    <button style={{float: "left", marginLeft: "23%", top: "114%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none", width: 52}}><a href="#" style={{color: "white"}}><BsPlayCircle /><br></br>Virtual<br></br>Tour</a></button>

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
                <div className="tabless">
                <div>
                        <h1 style={{color: " #6EC1E4",fontSize: 22}}>$4,980,000</h1>
                        <p1 style={{color: "#7A7A7A",}}>Bed 5 Bath 8 sq Ft 7,380</p1>
                        <br></br><br></br>
                        <p2 style={{color: "#7A7A7A",}}>8052 Camino De Arriba<br></br>Rancho Santa Fe, CA 92067</p2>
                        <div style={{float: "left"}}>
                    <button className="btn" style={{float: "left", marginLeft: "20%", top: "158%", position: "absolute",}}><a href="#" style={{color: "gray"}}>View</a></button>
                        

                    </div>
                    </div>
                </div>
                <div className="tablesb">
                <div>
                    <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "74%"}}>9 MONTHS AGO</h2>
                </div>
                </div>
                <div className="tablesc">
                <div>
                        <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "5%"}}>Blair Owens</h2>
                    </div>
                </div>
                <div className="tablesd" style={{backgroundColor: "lightgray"}}>
                <div>
                        <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "5%"}}>Listing Office</h2>
                        <h3 style={{float: "left", fontSize: 13, marginLeft: "35%", color: "#7A7A7A"}}>Pacific Sotheby’s Int’l Realty</h3>
                    </div>
                </div>
            </div>

            <div className="cable">
                <div className="cables">
                <div>
                    <button style={{float: "left", marginLeft: "23%", top: "114%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none"}}><a href="#" style={{color: "white"}}>For sale</a></button>
                </div>
                <div style={{ marginTop: "2.8%", position: "absolute", marginLeft: "23%"}}>
                    <button style={{float: "left", marginLeft: "23%", top: "114%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none", width: 52}}><a href="#" style={{color: "white"}}><BsPlayCircle /><br></br>Virtual<br></br>Tour</a></button>
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
                <div className="cabless">
                <div>
                        <h1 style={{color: " #6EC1E4",fontSize: 22}}>$4,980,000</h1>
                        <p1 style={{color: "#7A7A7A",}}>Bed 5 Bath 4 sq Ft 7,380</p1><br></br><br></br>
                        <p2 style={{color: "#7A7A7A",}}>8052 Camino De Arriba<br></br>Rancho Santa Fe, CA 92067</p2>
                        
                    </div>
                    <div style={{float: "left"}}>
                    <button className="btn" style={{float: "left", marginLeft: "20%", top: "158%", position: "absolute",}}><a href="#" style={{color: "gray"}}>View</a></button>
                        

                    </div>
                </div>
                <div className="cablesb">
                <div>
                    <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "74%"}}>9 MONTHS AGO</h2>
                </div>
                </div>
                <div className="cablesc">
                <div>
                        <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "5%"}}>Blair Owens</h2>
                    </div>
                </div>
                <div className="cablesd" style={{backgroundColor: "lightgray"}}>
                <div>
                        <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "5%"}}>Listing Office</h2>
                        <h3 style={{float: "left", fontSize: 13, marginLeft: "35%", color: "#7A7A7A"}}>Pacific Sotheby’s Int’l Realty</h3>
                    </div>
                </div>
            </div>

            <div className="mable">
                <div className="mables">
                <div>
                    <button style={{float: "left", marginLeft: "83%", top: "2%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none"}}><a href="#" style={{color: "white"}}>For sale</a></button>
                </div>

                <div style={{ marginTop: "7.8%", position: "absolute", marginLeft: "83%"}}>
                    <button style={{float: "left", marginLeft: "23%", top: "114%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none", width: 52}}><a href="#" style={{color: "white"}}><BsPlayCircle /><br></br>Virtual<br></br>Tour</a></button>

                </div>

                <div style={{ marginTop: "50.8%", position: "absolute", marginLeft: "6%"}}>
                    <button style={{float: "left", marginLeft: "3%", top: "113%", position: "absolute", backgroundColor: "#011640", border: "none", width: 32, height: "4vh"}}><a href="#" style={{color: "white"}}><AiTwotoneHome /></a></button>

                    </div>
                    <div style={{ marginTop: "50.8%", position: "absolute", marginLeft: "76%"}}>
                    <button style={{float: "left", marginLeft: "3%", top: "113%", position: "absolute", backgroundColor: "black", border: "none", width: 32, height: "4vh"}}><a href="#" style={{color: "white"}}><MdFavoriteBorder /></a></button>

                    </div>

                    <div style={{ marginTop: "50.8%", position: "absolute", marginLeft: "86%"}}>
                    <button style={{float: "left", marginLeft: "3%", top: "113%", position: "absolute", backgroundColor: "black", border: "none", width: 32, height: "4vh"}}><a href="#" style={{color: "white"}}><MdOutlineAddBox /></a></button>

                    </div>
                </div>
                <div className="mabless">
                <div>
                        <h1 style={{color: " #6EC1E4",fontSize: 22}}>$2,900,000</h1>
                        <p1 style={{color: "#7A7A7A",}}>Bed 5 Bath 4 sq Ft 4,460</p1><br></br><br></br>
                        <p2 style={{color: "#7A7A7A",}}>12969 Guacamayo Ct<br></br>San Diego, CA 92128</p2>
                    </div>
                    <div style={{float: "left"}}>
                    <button className="btn" style={{float: "left", marginLeft: "70%", top: "58%", position: "absolute",}}><a href="#" style={{color: "gray"}}>View</a></button>
                        

                    </div>
                </div>
                <div className="mablesb">
                <div>
                    <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "74%"}}>9 MONTHS AGO</h2>
                </div>
                </div>
                <div className="mablesc">
                <div>
                        <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "5%"}}>Blair Owens</h2>
                    </div>
                </div>
                <div className="mablesd" style={{backgroundColor: "lightgray"}}>
                <div>
                        <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "5%"}}>Listing Office</h2>
                        <h3 style={{float: "left", fontSize: 13, marginLeft: "35%", color: "#7A7A7A"}}>Pacific Sotheby’s Int’l Realty</h3>
                    </div>
                </div>
            </div>

            <div className="pable">
                <div className="pables">
                <div>
                    <button style={{float: "left", marginLeft: "83%", top: "2%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none"}}><a href="#" style={{color: "white"}}>For sale</a></button>
                </div>
                <div style={{ marginTop: "7.8%", position: "absolute", marginLeft: "83%"}}>
                    <button style={{float: "left", marginLeft: "23%", top: "114%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none", width: 52}}><a href="#" style={{color: "white"}}><BsPlayCircle /><br></br>Virtual<br></br>Tour</a></button>

                    </div>
                    <div style={{ marginTop: "50.8%", position: "absolute", marginLeft: "6%"}}>
                    <button style={{float: "left", marginLeft: "3%", top: "113%", position: "absolute", backgroundColor: "#011640", border: "none", width: 32, height: "4vh"}}><a href="#" style={{color: "white"}}><AiTwotoneHome /></a></button>

                    </div>

                    <div style={{ marginTop: "50.8%", position: "absolute", marginLeft: "76%"}}>
                    <button style={{float: "left", marginLeft: "3%", top: "113%", position: "absolute", backgroundColor: "black", border: "none", width: 32, height: "4vh"}}><a href="#" style={{color: "white"}}><MdFavoriteBorder /></a></button>

                    </div>
                    <div style={{ marginTop: "50.8%", position: "absolute", marginLeft: "86%"}}>
                    <button style={{float: "left", marginLeft: "3%", top: "113%", position: "absolute", backgroundColor: "black", border: "none", width: 32, height: "4vh"}}><a href="#" style={{color: "white"}}><MdOutlineAddBox /></a></button>

                    </div>
                </div>
                <div className="pabless">
                <div>
                        <h1 style={{color: " #6EC1E4",fontSize: 22}}>$3,320,000</h1>
                        <p1 style={{color: "#7A7A7A",}}>Bed 5 Bath 5 sq Ft 3,990</p1><br></br><br></br>
                        <p2 style={{color: "#7A7A7A",}}>7808 Vista Lazanja<br></br>San Diego, CA 92127</p2>
                        
                    </div>
                    <div style={{float: "left"}}>
                    <button className="btn" style={{float: "left", marginLeft: "70%", top: "58%", position: "absolute",}}><a href="#" style={{color: "gray"}}>View</a></button>
                        

                    </div>
                </div>
                <div className="pablesb">
                <div>
                    <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "74%"}}>9 MONTHS AGO</h2>
                </div>
                </div>
                <div className="pablesc">
                <div>
                        <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "5%"}}>Blair Owens</h2>
                    </div>
                </div>
                <div className="pablesd" style={{backgroundColor: "lightgray"}}>
                <div>
                        <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginTop: "5%"}}>Listing Office</h2>
                        <h3 style={{float: "left", fontSize: 13, marginLeft: "35%", color: "#7A7A7A"}}>Pacific Sotheby’s Int’l Realty</h3>
                    </div>
                </div>
            </div>

            <div className="rable">
                <div className="rables">
                <div>
                    <button style={{float: "left", marginLeft: "83%", top: "2%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none"}}><a href="#" style={{color: "white"}}>For sale</a></button>
                </div>
                <div style={{ marginTop: "7.8%", position: "absolute", marginLeft: "83%"}}>
                    <button style={{float: "left", marginLeft: "23%", top: "114%", position: "absolute", backgroundColor: "#011640", opacity: 0.8, border: "none", width: 52}}><a href="#" style={{color: "white"}}><BsPlayCircle /><br></br>Virtual<br></br>Tour</a></button>

                </div>
                <div style={{ marginTop: "50.8%", position: "absolute", marginLeft: "6%"}}>
                    <button style={{float: "left", marginLeft: "3%", top: "113%", position: "absolute", backgroundColor: "#011640", border: "none", width: 32, height: "4vh"}}><a href="#" style={{color: "white"}}><AiTwotoneHome /></a></button>

                    </div>
                    <div style={{ marginTop: "50.8%", position: "absolute", marginLeft: "76%"}}>
                    <button style={{float: "left", marginLeft: "3%", top: "113%", position: "absolute", backgroundColor: "black", border: "none", width: 32, height: "4vh"}}><a href="#" style={{color: "white"}}><MdFavoriteBorder /></a></button>

                    </div>
                    <div style={{ marginTop: "50.8%", position: "absolute", marginLeft: "86%"}}>
                    <button style={{float: "left", marginLeft: "3%", top: "113%", position: "absolute", backgroundColor: "black", border: "none", width: 32, height: "4vh"}}><a href="#" style={{color: "white"}}><MdOutlineAddBox /></a></button>

                    </div>
                </div>
                <div className="rabless">
                <div>
                        <h1 style={{color: " #6EC1E4",fontSize: 22}}>$3,750,000</h1>
                        <p1 style={{color: "#7A7A7A",}}>Bed 3 Bath 2 sq Ft 1,506</p1><br></br><br></br>
                        <p2 style={{color: "#7A7A7A",}}>8173 Paseo Del Ocaso<br></br>La Jolla, CA 92037</p2>

                    </div>
                    <div style={{float: "left"}}>
                    <button className="btn" style={{float: "left", marginLeft: "70%", top: "58%", position: "absolute",}}><a href="#" style={{color: "gray"}}>View</a></button>
                        

                    </div>
                    
                </div>
                <div className="rablesb">
                <div>
                    <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "74%"}}>9 MONTHS AGO</h2>
                </div>
                </div>
                <div className="rablesc">
                <div>
                        <h2 style={{float: "left", fontSize: 13, color: "#7A7A7A", marginLeft: "5%"}}>Blair Owens</h2>
                </div>
                
                </div>
                <div className="rablesd" style={{backgroundColor: "lightgray"}}>
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