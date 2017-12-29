import React, { Component } from "react";
import "../item.css";

export default class GenjiDragonBlade extends Component {
  componentDidMount() {
    const pic = document.getElementById("prod-pic");

    pic.style =
      "background-image: url('https://images-na.ssl-images-amazon.com/images/I/415Xj9SPBWL.jpg')";

    const header = document.getElementById("header");

    if (window.innerWidth >= 430) {
      header.style = `background-image: url("${require("../../../Assets/genji-header.png")}")`;
    } else {
      header.style =
        "background-image: url('http://image.ibb.co/jeGCXQ/genji_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes.png')";
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
    window.location = "http://amzn.to/2CkGIhu";
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
              <div
                className="shopping-cart-off"
                id="cart"
                onClick={() => this.clickBuy()}
              >
                <img
                  src={require("../../../Assets/cart.png")}
                  width="50%"
                  height="50%"
                />
              </div>
            </div>
            <div className="blurb-container">
              <div className="blurb-header">
                <h1>Genji Dragonblade</h1>
              </div>
              <div className="blurb-body">
                <p>
                  Ry&#x16B;jin no ken wo kurae! When Genji unleashes his
                  dragonblade, everyone runs for their lives! Did you know that
                  Genji was originally supposed to be a melee-only hero not
                  unlike Reinhardt? Also, his ultimate voice line translates
                  roughly to &#x22;Take my dragonblade!&#x22; while his brother
                  Hanzo&#x27;s ultimate voice line translates roughly to
                  &#x22;Dragon, consume my enemies!&#x22;
                </p>
                <p>
                  Measures 41.3 inches in length (the blade is 27 inches long
                  while the handle is 12 inches long) Simply a replica sword -
                  not a real weapon. Great for conventions and collectors.
                  Handle with care.
                </p>
              </div>
            </div>
          </div>
          <div className="buy-box">
            <h2>$46.99</h2>
            <div className="buy-yes" onClick={() => this.clickBuy()}>
              <h1>Buy Now</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
