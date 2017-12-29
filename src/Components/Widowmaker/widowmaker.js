import React, { Component } from "react";
import "../Genji/Genji.css";

export default class Widowmaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.itemHoverOn = this.itemHoverOn.bind(this);
  }

  componentDidMount() {
    const header = document.getElementById('header')
    const widowmaker = document.getElementById('widowmaker-tab')

    if (window.innerWidth >= 430) {
    header.style = `background-image: url("${require('../../Assets/widowmaker-header.jpg')}")`
  } else {
    header.style = "background-image: url('http://image.ibb.co/kgn0mk/widowmaker_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise.png');"
  }
    widowmaker.className = "widowmaker-tab-on"
  }

  componentWillUnmount() {
        const widowmaker = document.getElementById('widowmaker-tab')
        widowmaker.className = "widowmaker-tab-off"
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
                src="https://images-na.ssl-images-amazon.com/images/I/41FtsyQvT9L.jpg"
              />
              <div className="genji-title-container-begin" id="item-1">
              <div className="genji-title-text-off" id="title-1">Widowmaker Funko POP</div>
              </div>
              <div className="genji-price-container-begin" id="item-2">
              <div className="genji-title-text-off" id="title-2">$9.95</div>
          <a href="http://amzn.to/2CGqm1E">
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
                src="https://images-na.ssl-images-amazon.com/images/I/51VYuYecJHL._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-3">
              <div className="genji-title-text-off" id="title-3">Widowmaker Gun Replica</div>
              </div>
              <div className="genji-price-container-begin" id="item-4">
              <div className="genji-title-text-off" id="title-4">$138.00</div>
                <a href="http://amzn.to/2CGrnHj">
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
                src="https://images-na.ssl-images-amazon.com/images/I/91%2BL7WAGefL._SL1500_.jpg"
              />
              <div className="genji-title-container-begin" id="item-5">
              <div className="genji-title-text-off" id="title-5">Widowmaker Keychain</div>
              </div>
              <div className="genji-price-container-begin" id="item-6">
              <div className="genji-title-text-off" id="title-6">$9.99</div>
            <a href="http://amzn.to/2B48RIx">
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
                src="https://images-na.ssl-images-amazon.com/images/I/61LiUW6SQ6L._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-7">
              <div className="genji-title-text-off" id="title-7">Widowmaker Cosplay Costume</div>
              </div>
              <div className="genji-price-container-begin" id="item-8">
              <div className="genji-title-text-off" id="title-8">$82.99</div>
            <a href="http://amzn.to/2yZyRCX">
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
                src="https://images-na.ssl-images-amazon.com/images/I/61II%2BvPgfHL._SL1000_.jpg"
              />
              <div className="genji-title-container-begin" id="item-9">
              <div className="genji-title-text-off" id="title-9">Widowmaker Keyboard</div>
              </div>
              <div className="genji-price-container-begin" id="item-10">
              <div className="genji-title-text-off" id="title-10">$22.99</div>
                <a href="http://amzn.to/2CFvMtQ">
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
                src="https://images-na.ssl-images-amazon.com/images/I/81TXKABdd3L._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-11">
              <div className="genji-title-text-off" id="title-11">Widowmaker Shirt</div>
              </div>
              <div className="genji-price-container-begin" id="item-12">
              <div className="genji-title-text-off" id="title-12">$19.99</div>
            <a href="http://amzn.to/2kMERK1">
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
                src="https://images-na.ssl-images-amazon.com/images/I/619j9kG02FL._UY679_.jpg"
              />
              <div className="genji-title-container-begin" id="item-13">
              <div className="genji-title-text-off" id="title-13">Widowmaker 3D Keychain</div>
              </div>
              <div className="genji-price-container-begin" id="item-14">
              <div className="genji-title-text-off" id="title-14">$4.99</div>
              <a href="http://amzn.to/2D5Gw5M">
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
                src="https://images-na.ssl-images-amazon.com/images/I/71eW0ZumMYL._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-15">
              <div className="genji-title-text-off" id="title-15">Widowmaker Hourglass Shirt</div>
              </div>
              <div className="genji-price-container-begin" id="item-16">
              <div className="genji-title-text-off" id="title-16">$19.00</div>
              <a href="http://amzn.to/2CHfWPB">
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
                src="https://images-na.ssl-images-amazon.com/images/I/818CTLZwFxL._UX522_.jpg"
              />
              <div className="genji-title-container-begin" id="item-17">
              <div className="genji-title-text-off" id="title-17">Widowmaker Hoodie</div>
              </div>
              <div className="genji-price-container-begin" id="item-18">
              <div className="genji-title-text-off" id="title-18">$59.99</div>
              <a href="http://amzn.to/2yYVsj7">
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
