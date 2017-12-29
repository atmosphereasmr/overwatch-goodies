import React, { Component } from "react";
import "../item.css";

export default class GenjiHanzoShirt extends Component {
  componentDidMount() {
    const pic = document.getElementById("prod-pic");

    pic.style =
      "background-image: url('https://images-na.ssl-images-amazon.com/images/I/71CY5Z2rzKL._UX466_.jpg')";

    const header = document.getElementById("header");

    if (window.innerWidth >= 430) {
    header.style = `background-image: url("${require('../../../Assets/genji-header.png')}")`
  } else {
    header.style = "background-image: url('http://image.ibb.co/jeGCXQ/genji_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes.png')"
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
    window.location = "http://amzn.to/2zKv8JF";
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
                <h1>Genji & Hanzo Shirt</h1>
              </div>
              <div className="blurb-body">
                <p>
The blood-boiling family drama of the Shimada brothers rages on... This officially Overwatch licensed T-shirt featurs Genji Shimada, everybody&#x27;s absolute favorite cyborg ninja, and Hanzo Shimada, the deadly archer of Overwatch and heir to the criminal Shimada clan. Also features the classic Overwatch logo between them. A great gift for both Genji and Hanzo mains!
                </p>
                <p>
Made of high-quality ring-spun cotton and polyester. Comes in sizes small and extra large (currently). Washing instructions - machine wash with similar colors, and tumble dry on low heat.
                </p>
              </div>
            </div>
          </div>
          <div className="buy-box">
            <h2>$7.99</h2>
            <div className="buy-yes" onClick={() => this.clickBuy()}>
              <h1>Buy Now</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
