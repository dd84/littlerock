import React, { Component } from 'react'

 class Countdown extends Component {
   state={
      
      days: "0",
      hours: "0",
      minutes: "0",
      seconds: "0"
   }

   getTimeUntil(deadline){
      const time = Date.parse(deadline) - Date.parse(new Date());
      if(time<0){

      }else {
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*60*60))%24);
        const days = Math.floor((time/(1000*60*60*24)));

        this.setState({
          days,
          hours,
          minutes,
          seconds
        })

      }
   }

   componentDidMount(){
     setInterval(()=> this.getTimeUntil(this.props.deadline),1000)
   }
  render() {
    return (
      <div className="course_Wrapper">
      <div className="rocket_logo">
      <div className="course__details">
     <h1>Your future starts in</h1>  {this.state.days} Days {this.state.hours} hours {this.state.minutes} minutes {this.state.seconds} seconds
      
        
</div>
<div className="btn_enrol">
<a href="" style={{ textDecoration: 'none', color: "white" }}>Enroll now</a>
</div>

</div>
      </div>
    )
  }
}


export default Countdown