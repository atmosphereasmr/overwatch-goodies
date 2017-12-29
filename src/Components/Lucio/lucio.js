import React, { Component } from "react";
import "../Genji/Genji.css";

export default class Lucio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.itemHoverOn = this.itemHoverOn.bind(this);
  }

  componentDidMount() {
    const header = document.getElementById('header')
    const lucio = document.getElementById('lucio-tab')

    if (window.innerWidth >= 430) {
    header.style = `background-image: url("${require('../../Assets/lucio-header.jpg')}")`
  } else {
    header.style = "background-image: url('http://image.ibb.co/hXfHz5/lucio_tshirts_shirts_tee_t_teeshirts_shirt_gift_goodie_loot_goodies_overwatch_blizzard_entertainment_shop.png');"
  }
    lucio.className = "lucio-tab-on"
  }

  componentWillUnmount() {
        const lucio = document.getElementById('lucio-tab')
        lucio.className = "lucio-tab-off"
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
                src="https://images-na.ssl-images-amazon.com/images/I/81yQvY4ecCL._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-1">
              <div className="genji-title-text-off" id="title-1">Lucio Ribbit Shirt</div>
              </div>
              <div className="genji-price-container-begin" id="item-2">
              <div className="genji-title-text-off" id="title-2">$19.00</div>
          <a href="http://amzn.to/2CHxSJJ">
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
                src="https://images-na.ssl-images-amazon.com/images/I/51DBAYV%2Be0L.jpg"
              />
              <div className="genji-title-container-begin" id="item-3">
              <div className="genji-title-text-off" id="title-3">Lucio Funko POP</div>
              </div>
              <div className="genji-price-container-begin" id="item-4">
              <div className="genji-title-text-off" id="title-4">$8.76</div>
                <a href="http://amzn.to/2BBkoQk">
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
                src="https://images-na.ssl-images-amazon.com/images/I/412k9RaiWKL.jpg"
              />
              <div className="genji-title-container-begin" id="item-5">
              <div className="genji-title-text-off" id="title-5">Lucio Decal</div>
              </div>
              <div className="genji-price-container-begin" id="item-6">
              <div className="genji-title-text-off" id="title-6">$7.99</div>
            <a href="http://amzn.to/2D8VY0V">
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
                src="https://images-na.ssl-images-amazon.com/images/I/61q-xnK8YwL._SL1000_.jpg"
              />
              <div className="genji-title-container-begin" id="item-7">
              <div className="genji-title-text-off" id="title-7">Ana Keycaps</div>
              </div>
              <div className="genji-price-container-begin" id="item-8">
              <div className="genji-title-text-off" id="title-8">$22.99</div>
            <a href="http://amzn.to/2BLFgXD">
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
                src="https://images-na.ssl-images-amazon.com/images/I/71KelU31hRL._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-9">
              <div className="genji-title-text-off" id="title-9">Lucio Hoodie</div>
              </div>
              <div className="genji-price-container-begin" id="item-10">
              <div className="genji-title-text-off" id="title-10">$59.99</div>
                <a href="http://amzn.to/2B5iDdq">
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
                src="https://images-na.ssl-images-amazon.com/images/I/61GOvno6o8L._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-11">
              <div className="genji-title-text-off" id="title-11">Lucio Muscle Shirt</div>
              </div>
              <div className="genji-price-container-begin" id="item-12">
              <div className="genji-title-text-off" id="title-12">$27.00</div>
            <a href="http://amzn.to/2BijTOm">
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
                src="https://images-na.ssl-images-amazon.com/images/I/61cJs-PTLuL._SL1335_.jpg"
              />
              <div className="genji-title-container-begin" id="item-13">
              <div className="genji-title-text-off" id="title-13">Lucio Keychain</div>
              </div>
              <div className="genji-price-container-begin" id="item-14">
              <div className="genji-title-text-off" id="title-14">$9.99</div>
              <a href="http://amzn.to/2z0VlmT">
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
                src="https://images-na.ssl-images-amazon.com/images/I/618c1p3w5mL._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-15">
              <div className="genji-title-text-off" id="title-15">Lucio Beat Shirt</div>
              </div>
              <div className="genji-price-container-begin" id="item-16">
              <div className="genji-title-text-off" id="title-16">$24.99</div>
              <a href="http://amzn.to/2BN6U6J">
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
                src="https://images-na.ssl-images-amazon.com/images/I/813aHeurjTL._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-17">
              <div className="genji-title-text-off" id="title-17">Lucio Spray Shirt</div>
              </div>
              <div className="genji-price-container-begin" id="item-18">
              <div className="genji-title-text-off" id="title-18">$19.00</div>
              <a href="http://amzn.to/2z13WGf">
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
