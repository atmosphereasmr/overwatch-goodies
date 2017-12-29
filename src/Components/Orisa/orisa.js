import React, { Component } from "react";
import "../Genji/Genji.css";

export default class Orisa extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.itemHoverOn = this.itemHoverOn.bind(this);
  }

  componentDidMount() {
    const header = document.getElementById('header')
    const orisa = document.getElementById('orisa-tab')

    if (window.innerWidth >= 430) {
    header.style = `background-image: url("${require('../../Assets/orisa-header.jpg')}")`
  } else {
    header.style = "background-image: url('https://res.cloudinary.com/teepublic/image/private/s--FeNWhM2a--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1488499028/production/designs/1284958_1.jpg');"
  }
    orisa.className = "orisa-tab-on"
  }

  componentWillUnmount() {
        const orisa = document.getElementById('orisa-tab')
        orisa.className = "orisa-tab-off"
  }

  itemHoverOn(e, f, g, h, i, j) {
    const item1 = document.getElementById(e);
    const pic1 = document.getElementById(j)

    item1.className = "genji-title-container-on";
    pic1.className = "pic-fade"
    this.itemHoverOnTwo(f);
    this.titleTextOn(g, h, i, j);
  }

  itemHoverOnTwo(f) {
    const item2 = document.getElementById(f);
    item2.className = "genji-price-container-on";
  }

  titleTextOn(g, h, i, j) {
    const title1 = document.getElementById(g);
    const title2 = document.getElementById(h);
    const buy1 = document.getElementById(i)

    title1.className = "genji-title-text-on";
    title2.className = "genji-title-text-on";
    buy1.className = "buy-button-on"
  }

  itemHoverOff(e, f, g, h, i, j) {
    const item1 = document.getElementById(e);
    const item2 = document.getElementById(f);
    const title1 = document.getElementById(g);
    const title2 = document.getElementById(h);
    const buy1 = document.getElementById(i)
    const pic1 = document.getElementById(j)

    item1.className = "genji-title-container-off";
    item2.className = "genji-price-container-off";
    title1.className = "genji-title-text-off";
    title2.className = "genji-title-text-off";
    buy1.className = "buy-button-off"
    pic1.className = "pic-fade-back"
  }

  render() {
    return (
      <div>
        <div className="main-product">
          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() => this.itemHoverOn("item-1", "item-2", "title-1", "title-2", "buy-2", "pic-1")}
            onMouseLeave={() => this.itemHoverOff("item-1", "item-2", "title-1", "title-2", "buy-2", "pic-1")}
          >
              <img
                className="genji-item"
                id="pic-1"
                src="https://images-na.ssl-images-amazon.com/images/I/41RBMNVkDxL.jpg"
              />
              <div className="genji-title-container-begin" id="item-1">
              <div className="genji-title-text-off" id="title-1">Orisa Decal</div>
              </div>
              <div className="genji-price-container-begin" id="item-2">
              <div className="genji-title-text-off" id="title-2">$6.99</div>
          <a href="http://amzn.to/2CGzZgO">
                <div className="buy-button-off" id="buy-2"><div>Buy</div>
                </div>
                </a>
              </div>
          </div>











          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() => this.itemHoverOn("item-3", "item-4", "title-3", "title-4", "buy-4", "pic-2")}
            onMouseLeave={() => this.itemHoverOff("item-3", "item-4", "title-3", "title-4", "buy-4", "pic-2")}
          >
              <img
                className="genji-item"
                id="pic-2"
                src="https://images-na.ssl-images-amazon.com/images/I/710VTdYfaWL._SL1185_.jpg"
              />
              <div className="genji-title-container-begin" id="item-3">
              <div className="genji-title-text-off" id="title-3">Orisa Poster</div>
              </div>
              <div className="genji-price-container-begin" id="item-4">
              <div className="genji-title-text-off" id="title-4">$5.99</div>
                <a href="http://amzn.to/2CFC3pt">
                  <div className="buy-button-off" id="buy-4"><div>Buy</div>
                  </div>
                  </a>
              </div>
          </div>





          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() => this.itemHoverOn("item-5", "item-6", "title-5", "title-6", "buy-6", "pic-3")}
            onMouseLeave={() => this.itemHoverOff("item-5", "item-6", "title-5", "title-6", "buy-6", "pic-3")}
          >
              <img
                className="genji-item"
                id="pic-3"
                src="https://images-na.ssl-images-amazon.com/images/I/814YWnVPcfL._SX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-5">
              <div className="genji-title-text-off" id="title-5">Orisa Print</div>
              </div>
              <div className="genji-price-container-begin" id="item-6">
              <div className="genji-title-text-off" id="title-6">$22.00</div>
            <a href="http://amzn.to/2z0Cpog">
                <div className="buy-button-off" id="buy-6"><div>Buy</div>
                </div>
                </a>
              </div>
          </div>


          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() => this.itemHoverOn("item-7", "item-8", "title-7", "title-8", "buy-8", "pic-4")}
            onMouseLeave={() => this.itemHoverOff("item-7", "item-8", "title-7", "title-8", "buy-8", "pic-4")}
          >
              <img
                className="genji-item"
                id="pic-4"
                src="https://images-na.ssl-images-amazon.com/images/I/61WP9ZWWDlL._SL1200_.jpg"
              />
              <div className="genji-title-container-begin" id="item-7">
              <div className="genji-title-text-off" id="title-7">Orisa Keyboard</div>
              </div>
              <div className="genji-price-container-begin" id="item-8">
              <div className="genji-title-text-off" id="title-8">$23.99</div>
            <a href="http://amzn.to/2BfSmwW">
              <div className="buy-button-off" id="buy-8"><div>Buy</div>
              </div>
              </a>
            </div>
          </div>















        </div>
      </div>
    );
  }
}
