import React from "react";
import './Readmore';
import './News.css';
import Navigation from "../Components/Navigation";
import { AiOutlineSearch } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { BiMessage } from "react-icons/bi"
import '../Components/Navigation.css';
import '../Screens/Readmore.css';
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";



export const Readmore = (Properties) => {
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
             <div className="boys">
                <div className="boy"></div>
             </div>
             <div className="boy1"></div>
             <h1 style={{color: "white", marginLeft: "32%", marginTop: "-15%", fontWeight: 100, position: "absolute"}}>New Development: The Crosby Estates</h1>
             <h2 style={{color: "white", marginLeft: "39%", marginTop: "-12%", fontWeight: 100, position: "absolute", fontSize: 32}}>At Rancho Sante Fe</h2>
             <div className="read2">
                <p2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ex mi. Morbi erat felis, elementum eget odio venenatis, pretium congue ex. Nullam<br></br> mauris mi, blandit vitae ante commodo, dignissim vestibulum dolor. Ut id metus vel lorem varius porttitor. Aliquam urna dolor, dapibus at tempus at,<br></br> euismod quis diam. Aenean non lacus arcu. Nam ligula felis, mattis vel interdum nec, tempus commodo arcu.<br></br><br></br><br></br>
                Praesent aliquet lacus vel libero porttitor, at rhoncus erat tincidunt. Nunc sodales magna ut purus tempor gravida. Vestibulum quis pulvinar lacus,<br></br> quis molestie turpis. In sit amet dui commodo, elementum diam vitae, placerat elit. Integer luctus nec ligula nec elementum. Ut fermentum purus a<br></br> nibh pulvinar, sit amet tempus erat laoreet. Suspendisse bibendum eu purus quis convallis. Fusce eu pulvinar ante, quis aliquet purus.<br></br><br></br><br></br>
                Nullam tristique leo finibus turpis sollicitudin, interdum gravida tortor ultrices. Fusce condimentum leo et arcu laoreet, eu ultrices turpis venenatis.<br></br> Mauris ac lacus ac arcu tristique auctor id sed ante. Pellentesque volutpat luctus ex vel ultricies. Suspendisse potenti. Nam bibendum justo a arcu<br></br> viverra tempus. Maecenas eget fringilla velit. Duis at libero eu turpis sagittis gravida at vitae magna. Integer quis porta quam. Duis gravida neque ex,<br></br> ac mollis quam eleifend a.<br></br><br></br>
                Sed nec faucibus sapien, ac bibendum ligula. Vivamus iaculis euismod cursus. Vivamus porttitor consectetur faucibus. Fusce bibendum vehicula<br></br> enim, in posuere sapien tempus ac. Ut facilisis mi ac justo pharetra ullamcorper. Praesent sed lacus libero. Vestibulum vitae ipsum sed justo<br></br> consectetur sagittis in vel sem. Aenean eleifend ultricies ex, sed laoreet eros imperdiet nec. Sed vitae neque eu tortor dapibus facilisis. Ut egestas<br></br> mollis lectus posuere suscipit.<br></br><br></br>
                Maecenas commodo tincidunt justo vel faucibus. Morbi ullamcorper vehicula tellus, eget fringilla ipsum. In ut ante vitae ligula elementum fermentum.<br></br> Fusce efficitur neque ac faucibus sodales. Pellentesque eu arcu dictum, convallis ante in, dictum ipsum. Maecenas ac nunc nec ex tristique tristique.<br></br> Aliquam condimentum justo eu gravida tristique. Vivamus ipsum ante, ultrices in tincidunt vitae, pellentesque eget mauris. Praesent eleifend odio et tortor ullamcorper tempor. Donec tempor sodales quam sit amet molestie. Proin porttitor orci vitae elit faucibus gravida. In iaculis nulla sed urna imperdiet, a aliquet nunc blandit. Donec rhoncus aliquet commodo. Vestibulum gravida venenatis pharetra.</p2>

             </div>

             <div read3>
                <h3 style={{color: "black", fontWeight: 100, fontSize: 32, fontFamily: "system-ui", marginLeft: "4%"}}>Share This</h3>
                <button className="r1"><a href="https://www.facebook.com/" style={{fontSize: 32, color: "darkgray"}}><FaFacebookF /></a></button>
                <button className="r2"><a href="https://www.facebook.com/" style={{fontSize: 32, color: "darkgray"}}><FaTwitter /></a></button>
                <button className="r3"><a href="https://www.facebook.com/" style={{fontSize: 32, color: "darkgray"}}><RiLinkedinFill /></a></button><br></br><br></br><br></br>
                <hr></hr>
                <h2>Related Posts</h2>
             </div>
             <div className="post">
                
                <div className="post1">
                    <div className="post11"></div>
                    <h1 style={{fontSize: 20, color: "black", fontWeight: 100}}>Highrise Penthouse Living In Downtown San<br></br> Diego</h1>
                    <h2 style={{fontSize: 18, color: "darkGray", fontWeight: 100}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut<br></br> ex mi.…</h2>
                </div>
                <div className="post2">
                    <div className="post12"></div>
                    <h1 style={{fontSize: 20, color: "black", fontWeight: 100}}>New Development: The Bluffs At La Jolla Shores</h1>
                    <h2 style={{fontSize: 18, color: "darkGray", fontWeight: 100}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut<br></br> ex mi.…</h2>
                </div>

                <div className="post3">
                    <div className="post13"></div>
                    <h1 style={{fontSize: 20, color: "black", fontWeight: 100}}>Why You Should Overlook Cosmetic Issues When<br></br> House Hunting</h1>
                    <h2 style={{fontSize: 18, color: "darkGray", fontWeight: 100}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut<br></br> ex mi.…</h2>
                </div>
             </div>
             <div className="high">
                <button className="high1"><h3 style={{marginLeft: "-15%", fontWeight: 100,}}>Highrise Penthouse Living In Downtown San Diego</h3><MdOutlineNavigateNext style={{fontSize: 32, float: "right", right: "6%", position: "absolute", marginTop: "-2.5%"}}/></button>
             </div>
            
        </div>

    )

}