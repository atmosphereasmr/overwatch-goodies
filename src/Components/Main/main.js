import React, { Component } from "react";
import "./main.css";

import {Link} from 'react-router-dom'

export default class Bastion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.itemHoverOn = this.itemHoverOn.bind(this);
  }

  componentDidMount() {
    const header = document.getElementById("header");

    if (window.innerWidth >= 430) {
      header.style = `background-image: url("${require("../../Assets/main-header.jpg")}")`;
    } else {
      header.style =
        "background-image: url('http://image.ibb.co/mugXz5/bastion_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise.png')";
    }
  }

  componentWillUnmount() {
    const bastion = document.getElementById("bastion-tab");
    bastion.className = "bastion-tab-off";
  }

  itemHoverOn(e, f, g, h, i, j) {
    const item1 = document.getElementById(e);
    const pic1 = document.getElementById(j);

    item1.className = "genji-title-container-on";
    pic1.className = "pic-fade";
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
    const buy1 = document.getElementById(i);

    title1.className = "genji-title-text-on";
    title2.className = "genji-title-text-on";
    buy1.className = "buy-button-on";
  }

  itemHoverOff(e, f, g, h, i, j) {
    const item1 = document.getElementById(e);
    const item2 = document.getElementById(f);
    const title1 = document.getElementById(g);
    const title2 = document.getElementById(h);
    const buy1 = document.getElementById(i);
    const pic1 = document.getElementById(j);

    item1.className = "genji-title-container-off";
    item2.className = "genji-price-container-off";
    title1.className = "genji-title-text-off";
    title2.className = "genji-title-text-off";
    buy1.className = "buy-button-off";
    pic1.className = "pic-fade-back";
  }

  render() {
    return (
      <div>
        <div className="main-product">
          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() =>
              this.itemHoverOn(
                "item-1",
                "item-2",
                "title-1",
                "title-2",
                "buy-1",
                "pic-1"
              )}
            onMouseLeave={() =>
              this.itemHoverOff(
                "item-1",
                "item-2",
                "title-1",
                "title-2",
                "buy-1",
                "pic-1"
              )}
          >
            <img
              className="genji-item"
              id="pic-1"
              src="https://images-na.ssl-images-amazon.com/images/I/71LziWpWqcL._UX522_.jpg"
            />
            <div className="genji-title-container-begin" id="item-1">
              <div className="genji-title-text-off" id="title-1">
                Dva Bunny Shirt
              </div>
            </div>
            <div className="genji-price-container-begin" id="item-2">
              <div className="genji-title-text-off" id="title-2">
              <Link to ="/dva-bunny-shirt">
                <div className="buy-button-off" id="buy-1">
                  <div>Check it out...</div>
                </div>
              </Link>
              </div>
            </div>
          </div>

          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() =>
              this.itemHoverOn(
                "item-3",
                "item-4",
                "title-3",
                "title-4",
                "buy-2",
                "pic-2"
              )}
            onMouseLeave={() =>
              this.itemHoverOff(
                "item-3",
                "item-4",
                "title-3",
                "title-4",
                "buy-2",
                "pic-2"
              )}
          >
            <img
              className="genji-item"
              id="pic-2"
              src="https://images-na.ssl-images-amazon.com/images/I/51xDcrorNdL.jpg"
            />
            <div className="genji-title-container-begin" id="item-3">
              <div className="genji-title-text-off" id="title-3">
                Mei Funko POP
              </div>
            </div>
            <div className="genji-price-container-begin" id="item-4">
              <div className="genji-title-text-off" id="title-4">
              <Link to ="/mei-funko-pop">
                <div className="buy-button-off" id="buy-2">
                  <div>Check it out...</div>
                </div>
              </Link>
              </div>
            </div>
          </div>

          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() =>
              this.itemHoverOn(
                "item-5",
                "item-6",
                "title-5",
                "title-6",
                "buy-3",
                "pic-3"
              )}
            onMouseLeave={() =>
              this.itemHoverOff(
                "item-5",
                "item-6",
                "title-5",
                "title-6",
                "buy-3",
                "pic-3"
              )}
          >
            <img
              className="genji-item"
              id="pic-3"
              src="https://images-na.ssl-images-amazon.com/images/I/51KfdjH%2BSqL.jpg"
            />
            <div className="genji-title-container-begin" id="item-5">
              <div className="genji-title-text-off" id="title-5">
                Reaper Keychain
              </div>
            </div>
            <div className="genji-price-container-begin" id="item-6">
              <div className="genji-title-text-off" id="title-6">
              <Link to ="/reaper-keychain">
                <div className="buy-button-off" id="buy-3">
                  <div>Check it out...</div>
                </div>
              </Link>
              </div>
            </div>
          </div>

          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() =>
              this.itemHoverOn(
                "item-7",
                "item-8",
                "title-7",
                "title-8",
                "buy-4",
                "pic-4"
              )}
            onMouseLeave={() =>
              this.itemHoverOff(
                "item-7",
                "item-8",
                "title-7",
                "title-8",
                "buy-4",
                "pic-4"
              )}
          >
            <img
              className="genji-item"
              id="pic-4"
              src="https://images-na.ssl-images-amazon.com/images/I/71CY5Z2rzKL._UX522_.jpg"
            />
            <div className="genji-title-container-begin" id="item-7">
              <div className="genji-title-text-off" id="title-7">
                Genji & Hanzo Shirt
              </div>
            </div>
            <div className="genji-price-container-begin" id="item-8">
              <div className="genji-title-text-off" id="title-8">
              <Link to ="/genji-hanzo-shirt">
                <div className="buy-button-off" id="buy-4">
                  <div>Check it out...</div>
                </div>
              </Link>
              </div>
            </div>
          </div>

          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() =>
              this.itemHoverOn(
                "item-9",
                "item-10",
                "title-9",
                "title-10",
                "buy-5",
                "pic-5"
              )}
            onMouseLeave={() =>
              this.itemHoverOff(
                "item-9",
                "item-10",
                "title-9",
                "title-10",
                "buy-5",
                "pic-5"
              )}
          >
            <img
              className="genji-item"
              id="pic-5"
              src="https://images-na.ssl-images-amazon.com/images/I/61G5-EhlMHL._SL1000_.jpg"
            />
            <div className="genji-title-container-begin" id="item-9">
              <div className="genji-title-text-off" id="title-9">
                Tracer Team Hoodie
              </div>
            </div>
            <div className="genji-price-container-begin" id="item-10">
              <div className="genji-title-text-off" id="title-10">
              <Link to ="/tracer-team-hoodie">
                <div className="buy-button-off" id="buy-5">
                  <div>Check it out...</div>
                </div>
              </Link>
              </div>
            </div>
          </div>

          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() =>
              this.itemHoverOn(
                "item-11",
                "item-12",
                "title-11",
                "title-12",
                "buy-6",
                "pic-6"
              )}
            onMouseLeave={() =>
              this.itemHoverOff(
                "item-11",
                "item-12",
                "title-11",
                "title-12",
                "buy-6",
                "pic-6"
              )}
          >
            <img
              className="genji-item"
              id="pic-6"
              src="https://images-na.ssl-images-amazon.com/images/I/818RQWfkM0L._UX522_.jpg"
            />
            <div className="genji-title-container-begin" id="item-11">
              <div className="genji-title-text-off" id="title-11">
                Torbjorn Workshop Shirt
              </div>
            </div>
            <div className="genji-price-container-begin" id="item-12">
              <div className="genji-title-text-off" id="title-12">
              <Link to ="/torbjorn-workshop-shirt">
                <div className="buy-button-off" id="buy-6">
                  <div>Check it out...</div>
                </div>
              </Link>
              </div>
            </div>
          </div>

          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() =>
              this.itemHoverOn(
                "item-13",
                "item-14",
                "title-13",
                "title-14",
                "buy-7",
                "pic-7"
              )}
            onMouseLeave={() =>
              this.itemHoverOff(
                "item-13",
                "item-14",
                "title-13",
                "title-14",
                "buy-7",
                "pic-7"
              )}
          >
            <img
              className="genji-item"
              id="pic-7"
              src="https://images-na.ssl-images-amazon.com/images/I/51XxI8FVNZL.jpg"
            />
            <div className="genji-title-container-begin" id="item-13">
              <div className="genji-title-text-off" id="title-13">
                Winston Plush
              </div>
            </div>
            <div className="genji-price-container-begin" id="item-14">
              <div className="genji-title-text-off" id="title-14">
              <Link to ="/winston-plush">
                <div className="buy-button-off" id="buy-7">
                  <div>Check it out...</div>
                </div>
              </Link>
              </div>
            </div>
          </div>

          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() =>
              this.itemHoverOn(
                "item-15",
                "item-16",
                "title-15",
                "title-16",
                "buy-8",
                "pic-8"
              )}
            onMouseLeave={() =>
              this.itemHoverOff(
                "item-15",
                "item-16",
                "title-15",
                "title-16",
                "buy-8",
                "pic-8"
              )}
          >
            <img
              className="genji-item"
              id="pic-8"
              src="https://images-na.ssl-images-amazon.com/images/I/415Xj9SPBWL.jpg"
            />
            <div className="genji-title-container-begin" id="item-15">
              <div className="genji-title-text-off" id="title-15">
                Genji Dragonblade
              </div>
            </div>
            <div className="genji-price-container-begin" id="item-16">
              <div className="genji-title-text-off" id="title-16">
              <Link to ="/genji-dragonblade">
                <div className="buy-button-off" id="buy-8">
                  <div>Check it out...</div>
                </div>
              </Link>
              </div>
            </div>
          </div>

          <div
            className="genji-goodie-row-margin"
            onMouseEnter={() =>
              this.itemHoverOn(
                "item-17",
                "item-18",
                "title-17",
                "title-18",
                "buy-9",
                "pic-9"
              )}
            onMouseLeave={() =>
              this.itemHoverOff(
                "item-17",
                "item-18",
                "title-17",
                "title-18",
                "buy-9",
                "pic-9"
              )}
          >
            <img
              className="genji-item"
              id="pic-9"
              src="https://images-na.ssl-images-amazon.com/images/I/51vhWAmFzJL.jpg"
            />
            <div className="genji-title-container-begin" id="item-17">
              <div className="genji-title-text-off" id="title-17">
                Bastion Transformer
              </div>
            </div>
            <div className="genji-price-container-begin" id="item-18">
              <div className="genji-title-text-off" id="title-18">
              <Link to ="/bastion-transformer">
                <div className="buy-button-off" id="buy-9">
                  <div>Check it out...</div>
                </div>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
