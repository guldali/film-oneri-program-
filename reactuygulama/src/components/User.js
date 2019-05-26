import React, { Component } from 'react'
import image from "../image/asık.png";
import image1 from "../image/mutlu.png";
import image2 from "../image/agliyor.png";
import image3 from "../image/cilgin.png";
import image4 from "../image/kizgin.png";
import image5 from "../image/uzgun.png";
import image6 from "../image/WhatsApp Image 2019-05-02 at 14.53.35.jpeg";
import logoImage from "../image/logo.png";

import '../App.css';
import {BrowserRouter as Router,Route, Link } from 'react-router-dom';
import Film from "./Film";


class User extends Component {
 
  render() {
    const {film}=this.props;
    console.log(film);
    return (
   
    <Router>
       <div className="Container">
          <div className="baslik">
            <img className="logo" src={logoImage} width="700px" height="90px" alt=""></img>
          </div>
          <p className="slogan">FİLM BULMAK ZOR MU GELİYOR? SİZİN İÇİN BİZ BULALIM :)</p>
          <p className="yazi">MODUNU SEÇ!</p>
           <div className="row">
              <div className="col-md-2 col-xs-4">
                <Link to="/Film"><img  src={image } width="120px" height="120px" alt=""></img></Link> 
              </div>
              <div className="col-md-2 col-xs-4">
                <Link to="/Film"><img  src={image1} width="120px" height="120px" alt=""></img></Link>
              </div>
              <div className="col-md-2 col-xs-4">
                <Link to="/Film"> <img  src={image2 } width="120px" height="120px" alt=""></img></Link>
              </div>
         
              <div className="col-md-2 col-xs-4">
                  <Link to="/Film"><img src={image3 } width="120px" height="120px" alt=""></img></Link>
              </div>
              <div className="col-md-2 col-xs-4">
                  <Link to="/Film"><img  src={image4 } width="120px" height="120px" alt=""></img></Link>
              </div>
              <div className="col-md-2 col-xs-4">
                  <Link to="/Film"><img  src={image5 } width="120px" height="120px" alt=""></img></Link>  
              </div>
              </div>  
          
       </div>
       <img className="zemin"  src={image6 } width="100%" height="100%" alt=""></img>
      
      <Route path="/Film" exact strict component={Film}/> 
    </Router>

    )
  }
}
export default User;