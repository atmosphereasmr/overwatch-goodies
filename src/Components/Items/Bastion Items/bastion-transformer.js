import React, { Component } from "react";
import "../item.css";

export default class BastionTransformer extends Component {
  componentDidMount() {
    const header = document.getElementById('header')
    const pic = document.getElementById("prod-pic");

    pic.style =
      "background-image: url('https://images-na.ssl-images-amazon.com/images/I/51vhWAmFzJL.jpg')";

      if (window.innerWidth >= 430) {
      header.style = `background-image: url("${require('../../../Assets/bastion-header.jpg')}")`
    } else {
      header.style = "background-image: url('http://image.ibb.co/mugXz5/bastion_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise.png')"
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
    window.location = "http://amzn.to/2ClgWK4"
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
                <h1>Bastion Transformer</h1>
              </div>
              <div className="blurb-body">
                <p>
  Love him or hate him, Bastion is Overwatch&#x27;s most adorable yet deadly omnic. This Bastion figure is articularly crafted, capturing every painstaking detail from the turret to his gun and even Ganymede the bird! Best of all, it&#x27;s able to literally transform into Bastion&#x27;s ultimate tank-mode as well as turret-form. Makes an awesome gift for Bastion mains or any Overwatch fan. Beep beep, boop beep!
                </p>
                <p>
Dimensions are 6 x 6 x 12 inches and weighs approximately 2.5 pounds. Small parts - keep away from children.
                </p>
              </div>
            </div>
          </div>
          <div className="buy-box">
          <h2>$140.00</h2>
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
