import React, { Component } from "react";
import "./home-header-bar.css";

export default class HomeHeaderBar extends Component {

    componentWillRecieveProps() {
    const header = document.getElementById('header')
    header.style = 'animation: fade-in 1s forwards;'
    }

  render() {
    return (
      <div>
      <div className="header-bar" id="header">
      <div className="logo-container">
      <img src="http://i.imgur.com/YZ4w2ey.png" className="home-logo" />
      <div className="overwatch-goodies">
      <img src={require("../../Assets/overwatch-goodies-header.png")} />
      </div>
      </div>
      </div>
      </div>
    );
  }
}
