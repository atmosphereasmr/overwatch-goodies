import React, { Component } from "react";
import logo from "./logo.svg";
import DocumentMeta from "react-document-meta"
import Favicon from 'react-favicon'
import "./App.css";

import HeroSelect from "./Components/Select Hero/select-hero";
import HomeHeaderBar from "./Components/Home Header Bar/home-header-bar";
import HomePage from "./Components/Home Page/homepage";
import SelectHero from './Components/Select Hero/select-hero'
import BlackBar from './Components/BlackBar/blackbar'

const meta = {
  title: 'Overwatch Goodies',
  description: 'Overwatch gift, T-shirts, action figures and much more!',
  canonical: 'http://www.overwatchgoodies.com',
  meta: {
      charset: 'utf-8',
      name: {
          keywords: 'overwatch,blizzard,dva,tracer,mei,widowmaker,gifts,goodies'
      }
  }
  url: 'http://www.overwatchgoodies.com',
  image: 'https://bnetcmsus-a.akamaihd.net/cms/blog_header/mi/MIGMDUEK4S2N1496699695461.jpg'
}

function doIt() {
  if (document.body.scrollTop > 100) {
    console.log("YEAH!");
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <DocumentMeta {...meta} />
        <Favicon url={['https://cdn.iconverticons.com/files/png/a12c1a69de0acc73_256x256.png']}/>
        <HomeHeaderBar />
        <HomePage />
        <BlackBar />
      </div>
    );
  }
}

export default App;
