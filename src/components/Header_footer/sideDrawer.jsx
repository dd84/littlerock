import React from 'react';

import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';

import {scroller} from "react-scroll"
import { element } from 'prop-types';



const SideDrawer =(props) =>  {


const scrollTo = (elements) => {
  scroller.scrollTo(elements,{
    duration: 1500,
    delay: 100,
    smooth: true
  });
  props.onClose(false)
} 

    return (
      <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
      >

      <List component="nav">
            <ListItem button onClick={()=> scrollTo("hero")}>
            Intro
            </ListItem>
            <ListItem button onClick={()=> scrollTo("courses")}>
            courses
            </ListItem>
            <ListItem button onClick={()=> scrollTo("pricing")}>
            pricing
            </ListItem>
            <ListItem button onClick={()=> scrollTo("map")}>
            location
            </ListItem>
      </List>
  
     
      
      </Drawer>
    );
  }



export default SideDrawer;