import React, { Component,useState } from 'react';
import Header from './header/header.js'
import LeftSideMenu from './leftsidemenu/leftsidemenu.js' 
import RightSideMenu from './rightsidemenu/rightsidemenu.js' 
import './App.css'
import { Container } from 'react-bootstrap';
import MainMenu from './mainmenu/mainmenu.js';
class App extends Component{
   render(){
       return <div>
           <Header></Header>
    <LeftSideMenu></LeftSideMenu>
    <MainMenu></MainMenu>
    <RightSideMenu></RightSideMenu>
       </div>
       
   }
}



export default App;
