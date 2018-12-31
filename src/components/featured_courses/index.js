import React from "react";
import Carousel from "./carousel";
import Countdown from "./countdown"
const Featured = () => {
    return(
        <div style={{position: "relative"}}>

     
        <Carousel/>
        <Countdown  deadline="Jan, 16, 2019" />
        
       
        </div>
    )
}

export default Featured