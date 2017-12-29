import React, { Component } from "react";
import logo from "./logo.svg";
import { Helmet } from "react-helmet";
import "./App.css";

import HeroSelect from "./Components/Select Hero/select-hero";
import HomeHeaderBar from "./Components/Home Header Bar/home-header-bar";
import HomePage from "./Components/Home Page/homepage";
import SelectHero from './Components/Select Hero/select-hero'
import BlackBar from './Components/BlackBar/blackbar'

function doIt() {
  if (document.body.scrollTop > 100) {
    console.log("YEAH!");
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="Overwatch Goodies" content="Overwatch Gifts, Shirts, Toys and more!" />
          <meta name="keywords" content="Overwatch,Gifts,Shop,Blizzard" />
          <meta name="author" content="Logan Smith" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1."
          />
        </Helmet>
        <HomeHeaderBar />
        <HomePage />
        <BlackBar />
      </div>
    );
  }
}

export default App;
