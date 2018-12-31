import React, { Component } from 'react'
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import MyButton from "../utils/button"
 class Coupon extends Component {
     state={
         discountstart: 0,
         discountend:30
     }

     percentage = () => {
         if(this.state.discountstart < this.state.discountend){
            this.setState({
                discountstart: this.state.discountstart + 1
            })
         }
     }
     componentDidUpdate(){
         setTimeout(()=> {
             this.percentage()
         },50)
     }
  render() {
    return (
      <div className="discount_container">
      <Fade 
      onReveal={()=> this.percentage()}
      >
        <div>
        <span className="percentage_countdown">{this.state.discountstart}%</span>

        <span className="off">OFF</span>
        </div>
        
        </Fade>
        <div>
        <div className="txt__discount">
        <h3>Purchase before Jan</h3>
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, "</p>
        <MyButton
            text="Purchase courses"
            bck="#ffa800"
            color="#ffffff"
            link="http://google.com"
        
        />
        </div>
        </div>
      </div>
    )
  }
}

export default Coupon
