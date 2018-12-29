import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from "./sideDrawer"

class Header  extends Component {

    state={
        drawOpen: false
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
          backgroundColor: "black",
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