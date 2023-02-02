import React from "react";
import Navigation from "../Components/Navigation";
import './News.css';
import { AiOutlineSearch } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { BiMessage } from "react-icons/bi"
import { Link } from "react-router-dom";


export const News = () => {
    return ( 
    <div>
        
        <Navigation />
        <div className="inputs" style={{backgroundColor: "papayawhip"}}>
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
        </div>
        <div className="hicont">
        <div className="hi">
            <h1 style={{color: "white", fontWeight: 100, marginLeft: 22, marginTop: 2,}}>Our Blog</h1>
            <h2 style={{color: "white", fontWeight: 100, marginLeft: 22, marginTop: "-1%", position: "absolute"}}>The Latest Real Estate News And Insights From San Diego, And Beyond.</h2>
        </div>
        </div>

        <div className="cards">
            <div className="card1">
                <div className="imag1"></div>
                <div>
                    <div className="inner1"></div>
                    <h1 style={{fontSize: 32, fontWeight: 100, marginLeft: "20%", marginTop: "-12%",}}>New Development: The Crosby<br></br> Estates At Rancho Sante Fe</h1>
                    <h2 style={{fontSize: 15, fontWeight: 100, marginLeft: "20%", color: "gray", marginTop: "-2%",}}>BY RILEY HARPER IN OUR BLOG</h2>
                    <p1 style={{marginLeft: "3%", color: "gray", fontSize: 16, fontWeight: 100, position: "absolute"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi<br></br> erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris<br></br> mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel<br></br> lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis<br></br> diam. Aenean non lacus arcu. Nam ligula […]</p1>
                    <button className="bat"><a href="#" style={{color: "white"}}><Link to={'/News/Readmore'} target='_blank' style={{color: "white"}}>READ MORE</Link></a></button>
                </div>
            </div>
            
            <div className="card2">
            <div className="imag2"></div>
            <div>
                    <div className="inner2"></div>
                    <h1 style={{fontSize: 32, fontWeight: 100, marginLeft: "20%", marginTop: "-12%",}}>New Development: The Crosby<br></br> Estates At Rancho Sante Fe</h1>
                    <h2 style={{fontSize: 15, fontWeight: 100, marginLeft: "20%", color: "gray", marginTop: "-2%",}}>BY RILEY HARPER IN OUR BLOG</h2>
                    <p1 style={{marginLeft: "3%", color: "gray", fontSize: 16, fontWeight: 100, position: "absolute"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi<br></br> erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris<br></br> mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel<br></br> lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis<br></br> diam. Aenean non lacus arcu. Nam ligula […]</p1>
                    <button className="bat"><a href="#" style={{color: "white"}}><Link to={'/News/Readmore'} target='_blank' style={{color: "white"}}>READ MORE</Link></a></button>
                </div>
            </div>

            <div className="card3">
            <div className="imag3"></div>
            <div>
                    <div className="inner3"></div>
                    <h1 style={{fontSize: 32, fontWeight: 100, marginLeft: "20%", marginTop: "-12%",}}>New Development: The Crosby<br></br> Estates At Rancho Sante Fe</h1>
                    <h2 style={{fontSize: 15, fontWeight: 100, marginLeft: "20%", color: "gray", marginTop: "-2%",}}>BY RILEY HARPER IN OUR BLOG</h2>
                    <p1 style={{marginLeft: "3%", color: "gray", fontSize: 16, fontWeight: 100, position: "absolute"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi<br></br> erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris<br></br> mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel<br></br> lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis<br></br> diam. Aenean non lacus arcu. Nam ligula […]</p1>
                    <button className="bat"><a href="#" style={{color: "white"}}><Link to={'/News/Readmore'} target='_blank' style={{color: "white"}}>READ MORE</Link></a></button>
                </div>
            </div>

            <div className="card4">
            <div className="imag4"></div>
            <div>
                    <div className="inner4"></div>
                    <h1 style={{fontSize: 32, fontWeight: 100, marginLeft: "20%", marginTop: "-12%",}}>New Development: The Crosby<br></br> Estates At Rancho Sante Fe</h1>
                    <h2 style={{fontSize: 15, fontWeight: 100, marginLeft: "20%", color: "gray", marginTop: "-2%",}}>BY RILEY HARPER IN OUR BLOG</h2>
                    <p1 style={{marginLeft: "3%", color: "gray", fontSize: 16, fontWeight: 100, position: "absolute"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi<br></br> erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris<br></br> mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel<br></br> lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis<br></br> diam. Aenean non lacus arcu. Nam ligula […]</p1>
                    <button className="bat"><a href="#" style={{color: "white"}}><Link to={'/News/Readmore'} target='_blank' style={{color: "white"}}>READ MORE</Link></a></button>
                </div>
            </div>

            <div className="card5">
            <div className="imag5"></div>
            <div>
                    <div className="inner5"></div>
                    <h1 style={{fontSize: 32, fontWeight: 100, marginLeft: "20%", marginTop: "-12%",}}>New Development: The Crosby<br></br> Estates At Rancho Sante Fe</h1>
                    <h2 style={{fontSize: 15, fontWeight: 100, marginLeft: "20%", color: "gray", marginTop: "-2%",}}>BY RILEY HARPER IN OUR BLOG</h2>
                    <p1 style={{marginLeft: "3%", color: "gray", fontSize: 16, fontWeight: 100, position: "absolute"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi<br></br> erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris<br></br> mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel<br></br> lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis<br></br> diam. Aenean non lacus arcu. Nam ligula […]</p1>
                    <button className="bat"><a style={{color: "white"}}><Link to={'/News/Readmore'} target='_blank' style={{color: "white"}}>READ MORE</Link></a></button>
                </div>
            </div>

            <div className="card6">
            <div className="imag6"></div>
            <div>
                    <div className="inner6"></div>
                    <h1 style={{fontSize: 32, fontWeight: 100, marginLeft: "20%", marginTop: "-12%",}}>New Development: The Crosby<br></br> Estates At Rancho Sante Fe</h1>
                    <h2 style={{fontSize: 15, fontWeight: 100, marginLeft: "20%", color: "gray", marginTop: "-2%",}}>BY RILEY HARPER IN OUR BLOG</h2>
                    <p1 style={{marginLeft: "3%", color: "gray", fontSize: 16, fontWeight: 100, position: "absolute"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi<br></br> erat felis, elementum eget odio venenatis, pretium congue ex. Nullam mauris<br></br> mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel<br></br> lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at, euismod quis<br></br> diam. Aenean non lacus arcu. Nam ligula […]</p1>
                    <button className="bat"><a style={{color: "white"}}><Link to={'/News/Readmore'} target='_blank' style={{color: "white"}}>READ MORE</Link></a></button>
                </div>
            </div>

        </div>
    </div>
    )
}