import React from "react";
import Slider from "react-slick";
import one from "../../resources/1.jpg"
import two from "../../resources/2.jpg"
import three from "../../resources/3.jpg"
const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }
return(
    <div className="carousel__container"
    style={{
        height: `${window.innerHeight}px`,
        overflow:"hidden"
    }}
    >
    <Slider {...settings}>
    <div>
       <div 
       className="slider_image"
       style={{
        height: `${window.innerHeight}px`,
       
           background:`url(${one})`
       }}
       ></div>
    </div>
    <div>
    <div 
    className="slider_image"
    style={{
        height: `${window.innerHeight}px`,
        
        background:`url(${two})`
    }}
    ></div>
    </div>
    <div>
    <div 
    className="slider_image"
    style={{
        height: `${window.innerHeight}px`,
       
        background:`url(${three})`
    }}
    ></div>
    </div>
    </Slider>

   </div> 
)
}

export default Carousel