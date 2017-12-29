import React, { Component } from "react";
import "../item.css";

export default class TorbjornWorkshopShirt extends Component {
  componentDidMount() {
    const pic = document.getElementById("prod-pic");

    pic.style =
      "background-image: url('https://images-na.ssl-images-amazon.com/images/I/818RQWfkM0L._UX522_.jpg')";

    const header = document.getElementById("header");

    if (window.innerWidth >= 430) {
    header.style = `background-image: url("${require('../../../Assets/torbjorn-header.jpg')}")`
  } else {
    header.style = "background-image: url('http://image.ibb.co/ca86Rk/torbjorn_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise.png')"
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
    window.location = "http://amzn.to/2BSIS70";
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
                <h1>Torbjorn Workshop Shirt</h1>
              </div>
              <div className="blurb-body">
                <p>
Hard work pays off, as Torbjorn often says around his workshop. Now you can join the ranks of Overwatch engineers with this officially Blizzard-licensed Torjorn T-Shirt! Features Torbj&#xF6;rn Lindholm (code name - Torbjorn) lifting his welding mask with his catch phrase &#x22;Build &#x27;em up, break &#x27;em down!&#x22; and the title &#x22;Torbjorn&#x27;s Workshop&#x22; at the top.
                </p>
                <p>
Made up of 100% high-quality ring-spun cotton and features slim-fit body. Fine material and weighs about 4.3 ounces. Comes in sizes small, medium, large and 1-2-3-4 XL. 
                </p>
              </div>
            </div>
          </div>
          <div className="buy-box">
            <h2>$19.99</h2>
            <div className="buy-yes" onClick={() => this.clickBuy()}>
              <h1>Buy Now</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
