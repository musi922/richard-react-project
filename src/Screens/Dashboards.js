import React from "react";
import './Dashboard.css'
import {AiOutlineFlag } from "react-icons/ai"
import { MdOutlineSignalCellularAlt } from "react-icons/md"
import{ CiCircleRemove } from "react-icons/ci"
import { AiOutlineHeart } from "react-icons/ai"
import { TiMessages } from "react-icons/ti"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    
    
  );


export const Dashboards = ()=> {
    return (
        <div>
            <div className="chart">
                
                <Bar data = {{labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  datasets: [
    {
      label: '# of Votes',
      data: [70, 60, 50, 40, 30, 20, 10],
      backgroundColor: [
        '#ff651d',
        '#05ce78',
        '#2d85c5',
        '#e2e2e2',
        '#7e1159',
        '#db09b5',
        '#e6d600',
      ],
      borderColor: [
            '#ff651d',
            '#05ce78',
            '#2d85c5',
            '#e2e2e2',
            '#7e1159',
            '#db09b5',
            '#e6d600',
        
      ],
      borderWidth: 1,
    },
  ],}
}
  />
            </div>
            <div className="container2">
                <h1>DASHBOARD</h1>
                <div className="cont">
                <div className="first">
                    <p>Active Listings</p>
                    <h1>124</h1>
                    <div className="list1">
                    <AiOutlineFlag style={{color: "white", marginTop: "23%", fontSize: 20}}/>
                    </div>
                </div>
                <div className="second">
                    <p>Listing Views</p>
                    <h1>1026</h1>
                    <div className="list2">
                    <MdOutlineSignalCellularAlt style={{color: "white", marginTop: "23%", fontSize: 24}}/>
                    </div>
                </div>
                <div className="three">
                    <p>Your Reviews</p>
                    <h1>357</h1>
                    <div className="list3">
                    <TiMessages style={{color: "white", marginTop: "23%", fontSize: 24}}/>
                    </div>
                </div>
                <div className="four">
                    <p>Times Bookmarkeds</p>
                    <h1>2329</h1>
                    <div className="list4">
                       <AiOutlineHeart style={{color: "white", marginTop: "23%", fontSize: 24}}/>

                    </div>
                </div>
                </div>
                <h2>Your Statistics</h2>
                
                <div className="he">
                    <h2 style={{marginTop: "4%"}}>Last Activities</h2>
                </div>
                <div className="box1">
                    <p style={{marginLeft: "3%"}}>Your Listing <span style={{ color: "blue"}}>urban Appartment</span> has been approved</p>
                    <CiCircleRemove  className="remove" style={{color: "blue", fontSize: 30, marginLeft: "40%", marginTop: "-3%", position: "absolute", backGroundColor: "blue",}}/>

                </div>
                <div className="box2">
                <p style={{marginLeft: "3%"}}>Some one left a review on <span style={{ color: "blue"}}>park Central</span> Listing</p>
                <CiCircleRemove  className="remove" style={{color: "blue", fontSize: 30, marginLeft: "40%", marginTop: "-3%", position: "absolute", backGroundColor: "blue",}}/>

                </div>
                <div className="box3">
                <p style={{marginLeft: "3%", fontWeight: 100, color: "blue"}}>Fider Mamby<span style={{color: "black"}}> bookmarked Your </span> holiday <span style={{color: "black"}}>Listing</span></p>
                <CiCircleRemove  className="remove" style={{color: "blue", fontSize: 30, marginLeft: "41%", marginTop: "-3%", position: "absolute", backGroundColor: "blue",}}/>


                </div>
                
            </div>
        </div>
    )
}