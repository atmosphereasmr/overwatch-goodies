import React, { Component } from "react";
import "../item.css";

export default class TracerTeamHoodie extends Component {
  componentDidMount() {
    const pic = document.getElementById("prod-pic");

    pic.style =
      "background-image: url('https://images-na.ssl-images-amazon.com/images/I/61G5-EhlMHL._SL1000_.jpg')";

    const header = document.getElementById("header");

    if (window.innerWidth >= 430) {
    header.style = `background-image: url("${require('../../../Assets/tracer-header.jpg')}")`
  } else {
    header.style = "background-image: url('http://image.ibb.co/bZdHXQ/tracer_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes.png');"
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
    window.location = "http://amzn.to/2EaI7YI";
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
                <h1>Tracer Team Hoodie</h1>
              </div>
              <div className="blurb-body">
                <p>
    The would could always use more heroes! And none of the Overwatch heroes are more memorable than the charismatic Lena Oxton (code name - Tracer)! This sports-team style hoodie is all about her, featuring several full-color prints, several sprays directly from Overwatch and her catch-phrase &#x22;Cheers, love! The calvary&#x27;s here!&#x22; on the front. Also features an Overwatch logo pattern printed on the inside of the hoodie.
                </p>
                <p>
Made of 99% high-quality polyester. Fitted to be a men&#x27;s top, but should fit all. Bright, vibrant color printed to last. Comes in sizes small, medium, large and 1-2-3 XL.
                </p>
              </div>
            </div>
          </div>
          <div className="buy-box">
            <h2>$34.74</h2>
            <div className="buy-yes" onClick={() => this.clickBuy()}>
              <h1>Buy Now</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
