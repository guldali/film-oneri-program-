import React, { Component } from 'react'
import '../App.css';
import image from "../image/Background-Narrow.jpg";
import image1 from "../image/game-of-thrones-character-poster.jpg";

export default class Film extends Component {
  render() {
    
    return (
      <div>
          <img className="ikinciSayfa" src={image} width="1500px" height="1000px" alt=""></img>
          <img className="filmOneri" src={image1} width="800px" height="500px" alt=""></img>
        <div className="butonlar">
         
          <input  className="buton" type="button" onClick={this.onClickButton} value={"GEÇ"}></input>
          <input className="buton2" type="button" onClick={this.onClickButton} value={"MODLAR"}></input>
        </div>
      
      </div> 
    )
  }
}
