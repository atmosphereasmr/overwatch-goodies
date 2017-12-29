import React, { Component } from "react";
import "../item.css";

export default class ReaperKeychain extends Component {
  componentDidMount() {
    const pic = document.getElementById("prod-pic");

    pic.style =
      "background-image: url('https://images-na.ssl-images-amazon.com/images/I/51KfdjH%2BSqL.jpg')";

    const header = document.getElementById("header");

    if (window.innerWidth >= 430) {
      header.style = `background-image: url("${require("../../../Assets/reaper-header.jpg")}")`;
    } else {
      header.style =
        "background-image: url('http://image.ibb.co/gXEzCQ/reaper_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes.png');";
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
    window.location = "http://amzn.to/2BQSeAr";
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
                <h1>Reaper Keychain</h1>
              </div>
              <div className="blurb-body">
                <p>
                  Let death walk among you wherever you go with this official
                  Overwatch Reaper keychain! This keychain features Gabriel
                  Reyes (code name - Reaper) striking his menacing emote with
                  his fingers clasped together. Comes with a sturdy chain
                  featuring the Overwatch logo. Collect them all!
                </p>
                <p>
                  Manufactured and desinged by Blizzard Entertainent and
                  officially licenced by Overwatch. Measures 2 inches tall and
                  weighs about 1.6 ounces. Small parts - not suitable for
                  children under the age of 5.
                </p>
              </div>
            </div>
          </div>
          <div className="buy-box">
            <h2>$9.99</h2>
            <div className="buy-yes" onClick={() => this.clickBuy()}>
              <h1>Buy Now</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
