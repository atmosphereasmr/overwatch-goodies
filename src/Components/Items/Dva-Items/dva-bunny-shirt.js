import React, { Component } from "react";
import "../item.css";

export default class DvaBunnyShirt extends Component {
  componentDidMount() {
    const header = document.getElementById('header')
    const pic = document.getElementById("prod-pic");

    pic.style =
      "background-image: url('https://images-na.ssl-images-amazon.com/images/I/71LziWpWqcL._UX466_.jpg')";

      if (window.innerWidth >= 430) {
      header.style = `background-image: url("${require('../../../Assets/dva-header.jpg')}")`
    } else {
      header.style = "background-image: url('http://image.ibb.co/eNNuCQ/d_va_dva_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise.png');"
    }
  }

  hoverOn() {
    const cart = document.getElementById("cart");
    cart.className = "shopping-cart-on";
  }

  hoverOff() {
    const cart = document.getElementById("cart");
    cart.className = "shopping-cart-off";
  }

  clickBuy() {
    window.location = "http://amzn.to/2lnXzbn"
  }

  render() {
    return (
      <div>
        <div className="yes">
          <div className="product-container">
            <div
              className="product-picture"
              id="prod-pic"
              onMouseEnter={() => {
                this.hoverOn();
              }}
              onMouseLeave={() => {
                this.hoverOff();
              }}
            >
              <div className="shopping-cart-off" id="cart"           onClick={() => this.clickBuy()}>
                <img
                  src={require("../../../Assets/cart.png")}
                  width="50%"
                  height="50%"
                />
              </div>
            </div>
            <div className="blurb-container">
              <div className="blurb-header">
                <h1>Dva Bunny Shirt</h1>
              </div>
              <div className="blurb-body">
                <p>
                  D.va one, bad guys zero! This is one of the most, if not THE
                  most, popular Overwatch T-shirts out there featuring Hana Song
                  (code name: D.va)&#x27;s pink and white bunny logo, along with
                  her MEKA signature. Makes the perfect gift for D.va mains
                  everywhere (and rabbit lovers, too)!
                </p>
                <p>
                  Solid, high-quality color print. 100% cotton, lightweight and
                  double-needle sleeve and bottom hem. Comes in mens, womens and
                  youths sizes small to 3XL. Officially licensed through
                  Blizzard Entertainment and Overwatch. Washing instructions -
                  machine wash cold with similar colors, then dry on low-heat.
                </p>
              </div>
            </div>
          </div>
          <div className="buy-box">
          <h2>$19.00</h2>
          <div className="buy-yes"
          onClick={() => this.clickBuy()}
          >
          <h1>Buy Now</h1>
          </div>

          </div>
        </div>
      </div>
    );
  }
}
