import React, { Component } from "react";
import "../item.css";

export default class MeiFunkoPop extends Component {
  componentDidMount() {
    const header = document.getElementById('header')
    const pic = document.getElementById("prod-pic");

    pic.style =
      "background-image: url('https://images-na.ssl-images-amazon.com/images/I/51xDcrorNdL.jpg')";

      if (window.innerWidth >= 430) {
      header.style = `background-image: url("${require('../../../Assets/mei-header.jpg')}")`
    } else {
      header.style = "background-image: url('http://image.ibb.co/djQWsQ/mei_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise.png')"
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
    window.location = "http://amzn.to/2Ds3ljp"
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
                <h1>Mei Funko Pop</h1>
              </div>
              <div className="blurb-body">
                <p>
You know what they say - Mei is BAE! Overwatch Funko POPs have been a huge hit ever since the game first launched, with new Funko POP characters coming out all of the time. Now, you can add the adorable ecologist to your collection! Perfect for desk decorations / gifts for every Mei main or Funko POP fan. Beware of ice walls sprouting throughout your home, however.
                </p>
                <p>
Made out of high-quality vinyl. Stands 3 and 3/4 inches tall and weights 3.2 ounces. Choking hazard - contains small parts and may not be suitable for children under 3 years of age.
                </p>
              </div>
            </div>
          </div>
          <div className="buy-box">
          <h2>$8.61</h2>
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
