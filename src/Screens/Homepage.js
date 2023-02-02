import React from "react";
import Navigation from "../Components/Navigation";
import { AiOutlineSearch } from "react-icons/ai"
import { BiMessage } from "react-icons/bi"
import { TbBuildingSkyscraper } from "react-icons/tb"
import { ImEarth } from "react-icons/im"
import { AiOutlineHeart } from "react-icons/ai"
import { IoIosPeople } from "react-icons/io"


export const Homepage = () => {
    return ( 
    <div>
        <Navigation />
        <div className="tittle">
            <h2 style={{color: "rgba(175, 171, 171)",fontSize: 18, fontFamily: "initial", letterSpacing: 4, justifyContent: "spaceBetween"}}>Luxury Real Estate</h2>
            <h3 style={{position: "absolute", top: 180, letterSpacing: 2, justifyContent: "spaceBetween"}}>IT'S TIME TO</h3>
            <h4 style={{position: "absolute", top: 243,letterSpacing: 6, justifyContent: "spaceBetween"}}>FIND YOUR</h4>
            <h5 style={{position: "absolute",top: 303, letterSpacing: 11, justifyContent: "spaceBetween"}}>LUXURY HOME</h5>
            <p1 style={{position: "absolute", top: 450, color: "gray", fontSize: 18, fontFamily: "inherit",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d</p1>
            <p2 style={{position: "absolute", top: 475, color: "gray", fontSize: 18, fontFamily: "inherit",}}>eiusmod tempor incid the old familer olfre idunt ut labore ellt</p2>
                <input className="input" type="search" name="" placeholder="Enter a Street, City, State, Zip or Keyword " style={{position: "absolute", top: 560, width: 450, height: 65,}}></input>
                <button className="btnn"><a href="#"><AiOutlineSearch style={{color: "white", fontSize: 25,}}/></a></button>

        </div>
        
        <div className="image"></div>
        <div className="box">
            <div style={{color: "rgb(230, 227, 227", float: "left", position: "absolute", marginLeft: 92, fontSize: 30, marginTop: 40,}}><p1>We Offer The Highest Level Of <br></br>Expertise, Service, And Integrity.</p1></div>
            <div style={{color: "rgb(204, 201, 201", float: "left", position: "absolute", marginLeft: 822, fontSize: 17, marginTop: 40,}}><p2>Lorem ipsum dolor sit amet, cons ectetur adip cing ellit, selad do<br></br> eiusmod tempor tolos dolor the old she roltoy incid idunt labore<br></br> ellt dolore magna the alora aliqua.</p2></div>
        </div>
        <div className="message">
            <button className="button" style={{marginTop: 32, backgroundColor: "#011640", height: 58, marginLeft:12, width: 54, border: 1, borderRadius: 100, position: "fixed"}}><a href="#"><BiMessage style={{color: "white", fontSize: 25, position: "fixed", marginLeft: -12, marginTop: -12,}}/></a></button>
        </div>

        <div className="spage">
            <h1 style={{color: "darkGray", fontSize: 18, marginTop: "53%", marginLeft: "40%"}}>Luxury At Its Finest</h1>
            <h2 style={{color: "rgb(69, 69, 77)", fontFamily: "initial", fontSize: 22, marginLeft: "36%",letterSpacing: 3}}>Featured Communities</h2>
            <p1 style={{color: "darkGray", fontSize: 19, marginTop: "60%", marginLeft: "27%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p1><br></br>
            <p2 style={{color: "darkGray", fontSize: 19, marginTop: "60%", marginLeft: "27%"}}>tempor incid idunt ut labore ellt dolore magna the alora aliqua alora the</p2><br></br>
            <p3 style={{color: "darkGray", fontSize: 19, marginTop: "60%", marginLeft: "42%"}}>tolda on fouter.</p3>
        </div>
        <div className="img1">
            <p style={{color: "white", marginTop: "42%", marginLeft: "22%", fontSize: 32}}>Rancho Sante Fe<br></br></p><p1 style={{color: "white",position: "absolute", marginTop: -33, marginLeft: "8%", fontSize: 22}}>Sprawling Estates</p1>

        </div>
        <div className="img2">
        <p style={{color: "white", marginTop: "42%", marginLeft: "22%", fontSize: 32}}>La jolla<br></br></p><p1 style={{color: "white",position: "absolute", marginTop: -33, marginLeft: "20%", fontSize: 22}}>SeaSide Blizz</p1>
        </div>
        <div className="img3">
        <p style={{color: "white", marginTop: "42%", marginLeft: "22%", fontSize: 32}}>Point Roma<br></br></p><p1 style={{color: "white",position: "absolute", marginTop: -33, marginLeft: "20%", fontSize: 22}}>Hilly Peninsula</p1>
        </div>
        <div className="img4">
        <p style={{color: "white", marginTop: "42%", marginLeft: "22%", fontSize: 32}}>Gaslamo<br></br></p><p1 style={{color: "white",position: "absolute", marginTop: -33, marginLeft: "20%", fontSize: 22}}>Nightlife&Food</p1>
        </div>
        <div className="img5">
        <p style={{color: "white", marginTop: "42%", marginLeft: "22%", fontSize: 32}}>Coronado<br></br></p><p1 style={{color: "white",position: "absolute", marginTop: -33, marginLeft: "6%", fontSize: 22}}>The Crown City</p1>
        </div>
        <div className="img6">
        <p style={{color: "white", marginTop: "42%", marginLeft: "22%", fontSize: 32}}>Poway<br></br></p><p1 style={{color: "white",position: "absolute", marginTop: 163, marginLeft: "16%", fontSize: 22}}>Golf Community</p1>
        </div>
        
        <div>
            <button className="explore"><a href="#">Expore More</a></button>
        </div>

        <div className="home">
            <div className="head1">
                <h2>Blair Owens</h2>
                <p2>A Real Estate Agency Leading<br></br> The Luxury Properties Market<br></br> Throughout The World</p2>
            </div>
            <div className="head2">
                <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper<br></br> nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum.</p1>
                <h2>About US</h2>
            </div>

            <div className="container">
                <div className="box1">
                    <h1>45 Years Of Experience</h1>
                    
                    <p1>
                    Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Proin<br></br> gravida tortor semper nibh vehicula,<br></br> in tempor urna dignissim.<br></br> Vestibulum ante ipsum primis in<br></br> faucibus orci luctus et ultrices.
                    </p1>

                </div>

                <div className="box2">
                    <h1>$125 Billion In Sales</h1>
                    <p1>
                    Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Proin<br></br> gravida tortor semper nibh vehicula,<br></br> in tempor urna dignissim.<br></br> Vestibulum ante ipsum primis in<br></br> faucibus orci luctus et ultrices.
                    </p1>

                </div>

                <div className="box3">
                    <h1>Tailormade End-To-End<br></br> Service</h1>
                    <p1>
                    Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Proin<br></br> gravida tortor semper nibh vehicula,<br></br> in tempor urna dignissim.<br></br> Vestibulum ante ipsum primis in<br></br> faucibus orci luctus et ultrices.
                    </p1>
                    <div className="wrapper">
                       <div className="sky">
                          <TbBuildingSkyscraper style={{color: "white", left: "26%", fontSize: 65, position: "absolute", marginTop: "-5%", zIndex: 2,}}/>
                          <h2 style={{color: "white", left: "24%", zIndex: 2, fontSize: 32, fontWeight: 100}}>Top Rated Brokerage</h2>
                          <p2 style={{color: "white", left: "24%", position: "relative", zIndex: 2, fontSize: 22, fontWeight: 100}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin<br></br> gravida tortor semper nibh vehicula, in tempor urna dignissim.<br></br> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p2>
                       </div>

                       <div className="ski">
                          <IoIosPeople style={{color: "white", fontSize: 65, position: "absolute", left: "1%", marginTop: "-5%", zIndex: 2,}}/>
                          <h2 style={{color: "white", position: "relative", left: "-26%", zIndex: 2, fontSize: 32, fontWeight: 100}}>Top Rated Brokerage</h2>
                          <p2 style={{color: "white", marginLeft: "-2%", justifyContent: "spaceBetween", zIndex: 2, fontSize: 22, fontWeight: 100}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin<br></br> gravida tortor semper nibh vehicula, in tempor urna dignissim.<br></br> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p2>
                       </div>

                       <div className="ske">
                          <AiOutlineHeart style={{color: "white", fontSize: 65, position: "absolute", left: "1%", marginTop: "-5%", zIndex: 2,}}/>
                          <h2 style={{color: "white", position: "relative", left: "-26%", zIndex: 2, fontSize: 32, fontWeight: 100}}>Top Rated Brokerage</h2>
                          <p2 style={{color: "white", marginLeft: "-2%", justifyContent: "spaceBetween", zIndex: 2, fontSize: 22, fontWeight: 100}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin<br></br> gravida tortor semper nibh vehicula, in tempor urna dignissim.<br></br> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p2>
                       </div>

                       <div className="skys">
                          <ImEarth style={{color: "white", left: "26%", fontSize: 65, position: "absolute", marginTop: "-5%", zIndex: 2,}}/>
                          <h2 style={{color: "white", left: "24%", zIndex: 2, fontSize: 32, fontWeight: 100}}>Top Rated Brokerage</h2>
                          <p2 style={{color: "white", left: "24%", position: "relative", zIndex: 2, fontSize: 22, fontWeight: 100}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin<br></br> gravida tortor semper nibh vehicula, in tempor urna dignissim.<br></br> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p2>
                       </div>
                    </div>


                </div>
            </div>
                  
        </div>
        <div className="third">
            <h1 style={{color: "gray", fontSize: "20px", fontWeight: 100,}}>You're In Good Hands</h1>
            <p2>SELL YOUR PROPERTY<br></br> THROUGH BLAIR OWENS</p2>

            <button className="contact"><a href="#" style={{color: "black", fontSize: 20, fontWeight: 100,}}>Contact Us</a></button>
            <p3>Looking To Buy A New Property?</p3>
            <p4>Explore The MLS</p4>
        </div>

        <div className="fourth">
            <h2>Testimonials</h2>
            <h1>What Our Clients Say</h1>
            <div className="ric1"></div>
            <div className="ric2">
                <p1>
                “I couldn’t be more impressed with the team at Blair<br></br> Owens, they found my family our perfect dream<br></br> home. True professionals from knowledge of the<br></br> area, to the closing process and everything else in<br></br> between — thank you!”
                </p1>
                <h2>The Cross Family</h2>
                <div className="ric3"></div>
            </div>
        </div>

        

    </div>
    )
}