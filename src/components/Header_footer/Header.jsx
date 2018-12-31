import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from "./sideDrawer"

class Header  extends Component {

    state={
        drawOpen: false,
        headerShow: false
    }

    componentDidMount(){
        window.addEventListener("scroll",this.handleScroll)
    }
handleScroll = () => {
    if(window.scrollY > 0){
        this.setState({
            headerShow: true
        })
    }else{
        this.setState({
            headerShow: false
    })
}
    
}
    toggleDrawer = (value) => {
        this.setState({
            drawOpen: value
        })
    }

 render(){
  return (
    <div >
      <AppBar 
      
      position="fixed"
      style={{
          backgroundColor: this.state.headerShow ? "black" : "transparent",
          boxShadow: "none",
          padding: "10px 0px"
      }}
      >
        <Toolbar>
        <div className="container__logo">
         <div className="Header_logo">
         Little rock
         </div>
         </div>

         <IconButton
         aria-label="Menu"
         color="inherit"
         onClick={() => this.toggleDrawer(true)}
         
         >
         <MenuIcon   />
         </IconButton>
         <SideDrawer
         open={this.state.drawOpen}
         onClose={(value)=> this.toggleDrawer(value)}
         
         
         />
        </Toolbar>
      </AppBar>
    </div>
  );
}

}



export default Header;