import React, { Component } from "react";
import "../Genji/Genji.css";

export default class Hanzo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.itemHoverOn = this.itemHoverOn.bind(this);
  }

  componentDidMount() {
    const header = document.getElementById('header')
    const hanzo = document.getElementById('hanzo-tab')

    if (window.innerWidth >= 430) {
    header.style = `background-image: url("${require('../../Assets/hanzo-header.jpg')}")`
  } else {
    header.style = "background-image: url('http://image.ibb.co/iMzVmk/hanzo_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise.png')"
  }
    hanzo.className = "hanzo-tab-on"
  }


  componentWillUnmount() {
        const hanzo = document.getElementById('hanzo-tab')
        hanzo.className = "hanzo-tab-off"
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
                src="https://images-na.ssl-images-amazon.com/images/I/710C2-KL9vL._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-1">
              <div className="genji-title-text-off" id="title-1">Hanzo Logo Shirt</div>
              </div>
              <div className="genji-price-container-begin" id="item-2">
              <div className="genji-title-text-off" id="title-2">$19.00</div>
          <a href="http://amzn.to/2yV2rcD">
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
                src="https://images-na.ssl-images-amazon.com/images/I/614bKz-UA6L._SL1000_.jpg"
              />
              <div className="genji-title-container-begin" id="item-3">
              <div className="genji-title-text-off" id="title-3">Hanzo Bow Replica</div>
              </div>
              <div className="genji-price-container-begin" id="item-4">
              <div className="genji-title-text-off" id="title-4">$127.00</div>
                <a href="http://amzn.to/2yWa9Dy">
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
                src="https://images-na.ssl-images-amazon.com/images/I/61ELcgkBobL._SL1000_.jpg"
              />
              <div className="genji-title-container-begin" id="item-5">
              <div className="genji-title-text-off" id="title-5">Hanzo Keychain</div>
              </div>
              <div className="genji-price-container-begin" id="item-6">
              <div className="genji-title-text-off" id="title-6">$12.99</div>
            <a href="http://amzn.to/2BwaT50">
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
                src="https://images-na.ssl-images-amazon.com/images/I/91QEYcNAyBL._SL1500_.jpg"
              />
              <div className="genji-title-container-begin" id="item-7">
              <div className="genji-title-text-off" id="title-7">Hanzo Desk Decoration</div>
              </div>
              <div className="genji-price-container-begin" id="item-8">
              <div className="genji-title-text-off" id="title-8">$14.99</div>
            <a href="http://amzn.to/2D1b6h5">
              <div className="buy-button-off" id="buy-8"><div>Buy</div>
              </div>
              </a>
            </div>
          </div>







          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() => this.itemHoverOn("item-9", "item-10", "title-9", "title-10", "buy-10", "pic-5")}
            onMouseLeave={() => this.itemHoverOff("item-9", "item-10", "title-9", "title-10", "buy-10", "pic-5")}
          >
              <img
                className="genji-item"
                id="pic-5"
                src="https://images-na.ssl-images-amazon.com/images/I/61GG0W%2BD-gL._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-9">
              <div className="genji-title-text-off" id="title-9">Hanzo Tattoo Shirt</div>
              </div>
              <div className="genji-price-container-begin" id="item-10">
              <div className="genji-title-text-off" id="title-10">$24.99</div>
                <a href="http://amzn.to/2AW9X8U">
                <div className="buy-button-off" id="buy-10"><div>Buy</div>
                </div>
                </a>
              </div>
          </div>










          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() => this.itemHoverOn("item-11", "item-12", "title-11", "title-12", "buy-12", "pic-6")}
            onMouseLeave={() => this.itemHoverOff("item-11", "item-12", "title-11", "title-12", "buy-12", "pic-6")}
          >
              <img
                className="genji-item"
                id="pic-6"
                src="https://images-na.ssl-images-amazon.com/images/I/71eXtxwpHfL._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-11">
              <div className="genji-title-text-off" id="title-11">Hanzo Muscle Shirt</div>
              </div>
              <div className="genji-price-container-begin" id="item-12">
              <div className="genji-title-text-off" id="title-12">$25.00</div>
            <a href="http://amzn.to/2BuMXPr">
              <div className="buy-button-off" id="buy-12"><div>Buy</div>
              </div>
              </a>
              </div>
          </div>


          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() => this.itemHoverOn("item-13", "item-14", "title-13", "title-14", "buy-14", "pic-7")}
            onMouseLeave={() => this.itemHoverOff("item-13", "item-14", "title-13", "title-14", "buy-14", "pic-7")}
          >
              <img
                className="genji-item"
                id="pic-7"
                src="https://images-na.ssl-images-amazon.com/images/I/71btJAZOGOL._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-13">
              <div className="genji-title-text-off" id="title-13">Hanzo Dragonstrike Shirt</div>
              </div>
              <div className="genji-price-container-begin" id="item-14">
              <div className="genji-title-text-off" id="title-14">$19.00</div>
              <a href="http://amzn.to/2CWgge1">
              <div className="buy-button-off" id="buy-14"><div>Buy</div>
              </div>
              </a>
              </div>
          </div>

          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() => this.itemHoverOn("item-15", "item-16", "title-15", "title-16", "buy-16", "pic-8")}
            onMouseLeave={() => this.itemHoverOff("item-15", "item-16", "title-15", "title-16", "buy-16", "pic-8")}
          >
              <img
                className="genji-item"
                id="pic-8"
                src="https://images-na.ssl-images-amazon.com/images/I/610K6Pz7d%2BL._SL1000_.jpg"
              />
              <div className="genji-title-container-begin" id="item-15">
              <div className="genji-title-text-off" id="title-15">Hanzo Nendoroid</div>
              </div>
              <div className="genji-price-container-begin" id="item-16">
              <div className="genji-title-text-off" id="title-16">$56.99</div>
              <a href="http://amzn.to/2BvtT3I">
              <div className="buy-button-off" id="buy-16"><div>Buy</div>
              </div>
              </a>
              </div>
          </div>


          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() => this.itemHoverOn("item-17", "item-18", "title-17", "title-18", "buy-18", "pic-9")}
            onMouseLeave={() => this.itemHoverOff("item-17", "item-18", "title-17", "title-18", "buy-18", "pic-9")}
          >
              <img
                className="genji-item"
                id="pic-9"
                src="https://images-na.ssl-images-amazon.com/images/I/81CZj10z1TL._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-17">
              <div className="genji-title-text-off" id="title-17">Hanzo Dragon Shirt</div>
              </div>
              <div className="genji-price-container-begin" id="item-18">
              <div className="genji-title-text-off" id="title-18">$19.00</div>
              <a href="http://amzn.to/2AWboEk">
              <div className="buy-button-off" id="buy-18"><div>Buy</div>
              </div>
              </a>
              </div>
          </div>







        </div>
      </div>
    );
  }
}
