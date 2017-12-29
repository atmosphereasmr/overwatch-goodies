import React, { Component } from "react";
import "../item.css";

export default class WinstonPlush extends Component {
  componentDidMount() {
    const pic = document.getElementById("prod-pic");

    pic.style =
      "background-image: url('https://images-na.ssl-images-amazon.com/images/I/51XxI8FVNZL.jpg')";

    const header = document.getElementById("header");

    if (window.innerWidth >= 430) {
      header.style = `background-image: url("${require("../../../Assets/winston-header.jpg")}")`;
    } else {
      header.style =
        "background-image: url('http://image.ibb.co/nNXY6k/winston_gifts_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise.png');";
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
    window.location = "http://amzn.to/2C7MKVZ";
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
                <h1>Winston Plush</h1>
              </div>
              <div className="blurb-body">
                <p>
                  Genius gorilla scientist Winston was one of the first
                  characters Overwatch fans were able to meet when the game
                  first launched, and this official Blizzard licensed Winston
                  plush is the closest thing you can get to the Horizon Lunar
                  Colony team itself! Just don&#x27;t make him angry - trust me.
                </p>
                <p>
                  Stands at 12 inches tall and made of very soft plush material.
                  Comes in the offical Overwatch packaging for collectors. Makes
                  the perfect gift for Overwatch fans everywhere. Recommended
                  for ages 5 and up.
                </p>
              </div>
            </div>
          </div>
          <div className="buy-box">
            <h2>$39.99</h2>
            <div className="buy-yes" onClick={() => this.clickBuy()}>
              <h1>Buy Now</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
