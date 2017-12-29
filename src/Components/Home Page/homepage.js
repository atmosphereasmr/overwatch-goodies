import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

import router from "../../router";
import SelectHero from "../Select Hero/select-hero";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="left-menu">
          <Link to="/hero/doomfist">
            <div className="doomfist-tab-off" id="doomfist-tab">
              <h1>DOOMFIST</h1>
            </div>
          </Link>
          <Link to="/hero/genji">
            <div className="genji-tab-off" id="genji-tab">
              <h1>GENJI</h1>
            </div>
          </Link>
          <Link to="/hero/mccree">
            <div className="mccree-tab-off" id="mccree-tab">
              <h1>MCCREE</h1>
            </div>
          </Link>
          <Link to="/hero/pharah">
            <div className="pharah-tab-off" id="pharah-tab">
              <h1>PHARAH</h1>
            </div>
          </Link>
          <Link to="/hero/reaper">
            <div className="reaper-tab-off" id="reaper-tab">
              <h1>REAPER</h1>
            </div>
          </Link>
          <Link to="/hero/soldier76">
            <div className="soldier-tab-off" id="soldier-tab">
              <h1>SOLDIER: 76</h1>
            </div>
          </Link>
          <Link to="/hero/sombra">
            <div className="sombra-tab-off" id="sombra-tab">
              <h1>SOMBRA</h1>
            </div>
          </Link>
          <Link to="/hero/tracer">
            <div className="tracer-tab-off" id="tracer-tab">
              <h1>TRACER</h1>
            </div>
          </Link>
          <Link to="/hero/bastion">
            <div className="bastion-tab-off" id="bastion-tab">
              <h1>BASTION</h1>
            </div>
          </Link>
          <Link to="/hero/hanzo">
            <div className="hanzo-tab-off" id="hanzo-tab">
              <h1>HANZO</h1>
            </div>
          </Link>
          <Link to="/hero/junkrat">
            <div className="junkrat-tab-off" id="junkrat-tab">
              <h1>JUNKRAT</h1>
            </div>
          </Link>
          <Link to="/hero/mei">
            <div className="mei-tab-off" id="mei-tab">
              <h1>MEI</h1>
            </div>
          </Link>
          <Link to="/hero/torbjorn">
            <div className="torbjorn-tab-off" id="torbjorn-tab">
              <h1>TORBJORN</h1>
            </div>
          </Link>
          <Link to="/hero/widowmaker">
            <div className="widowmaker-tab-off" id="widowmaker-tab">
              <h1>WIDOWMAKER</h1>
            </div>
          </Link>
          <Link to="/hero/dva">
            <div className="dva-tab-off" id="dva-tab">
              <h1>D.VA</h1>
            </div>
          </Link>
          <Link to="/hero/orisa">
            <div className="orisa-tab-off" id="orisa-tab">
              <h1>ORISA</h1>
            </div>
          </Link>
          <Link to="/hero/reinhardt">
            <div className="reinhardt-tab-off" id="reinhardt-tab">
              <h1>REINHARDT</h1>
            </div>
          </Link>
          <Link to="/hero/roadhog">
            <div className="roadhog-tab-off" id="roadhog-tab">
              <h1>ROADHOG</h1>
            </div>
          </Link>
          <Link to="/hero/winston">
            <div className="winston-tab-off" id="winston-tab">
              <h1>WINSTON</h1>
            </div>
          </Link>
          <Link to="/hero/zarya">
            <div className="zarya-tab-off" id="zarya-tab">
              <h1>ZARYA</h1>
            </div>
          </Link>
          <Link to="/hero/ana">
            <div className="ana-tab-off" id="ana-tab">
              <h1>ANA</h1>
            </div>
          </Link>
          <Link to="/hero/lucio">
            <div className="lucio-tab-off" id="lucio-tab">
              <h1>LUCIO</h1>
            </div>
          </Link>
          <Link to="/hero/mercy">
            <div className="mercy-tab-off" id="mercy-tab">
              <h1>MERCY</h1>
            </div>
          </Link>
          <Link to="/hero/symmetra">
            <div className="symmetra-tab-off" id="symmetra-tab">
              <h1>SYMMETRA</h1>
            </div>
          </Link>
          <Link to="/hero/zenyatta">
            <div className="zenyatta-tab-off" id="zenyatta-tab">
              <h1>ZENYATTA</h1>
            </div>
          </Link>
        </div>
        <div className="item-container">
          {router}
        </div>
      </div>
    );
  }
}
