import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./select-hero.css";

export default class SelectHero extends Component {

  render() {
    return (
      <div>
        <div className="select-container">
        <div className="select-img">
        <img src={require("../../Assets/select.png")} className="select" />
        </div>
          <div offense-heroes className="offense-heroes" onClick={() => window.scrollTo(0, 0)}>
            <Link to="/hero/doomfist">
              <img id="hover"
                src="http://image.ibb.co/mndUE5/doomfist_overwatch_goodies_gifts_shirts_tee_shirt_clothing_merchandise_shop_presents_gifts.png"
                alt="doomfist_overwatch_goodies_gifts_shirts_tee_shirt_clothing_merchandise_shop_presents_gifts"
                border="0"
                height="75px"
              />
            </Link>
                        <Link to="/hero/genji">
              <img id="hover"
                src="http://image.ibb.co/jeGCXQ/genji_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes.png"
                alt="genji_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes"
                border="0"
                height="75px"
              />
            </Link>
            <Link to="/hero/mccree">
              <img id="hover"
                src="http://image.ibb.co/gD9XXQ/mccree_mcree_jesse_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes.png"
                alt="mccree_mcree_jesse_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes"
                border="0"
                height="75px"
              />
            </Link>
            <Link to="/hero/pharah">
              <img id="hover"
                src="http://image.ibb.co/n05pCQ/pharah_shirt_shirts_t_tee_shop_tshirts_tshirt_clothing_blizzard_merchandise_clothes.png"
                alt="pharah_shirt_shirts_t_tee_shop_tshirts_tshirt_clothing_blizzard_merchandise_clothes"
                border="0"
                height="75px"
              />
            </Link>
            <Link to="/hero/reaper">
              <img id="hover"
                src="http://image.ibb.co/gXEzCQ/reaper_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes.png"
                alt="reaper_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes"
                border="0"
                height="75px"
              />
            </Link>
            <Link to="/hero/soldier76">
              <img id="hover"
                src="http://image.ibb.co/mBiHXQ/soldier_76_soldier76_seventy_six_seventysix_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes.png"
                alt="soldier_76_soldier76_seventy_six_seventysix_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes"
                border="0"
                height="75px"
              />
            </Link>
            <Link to="/hero/sombra">
              <img id="hover"
                src="http://image.ibb.co/h9CY6k/sombra_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes.png"
                alt="sombra_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes"
                border="0"
                height="75px"
              />
            </Link>
            <Link to="/hero/tracer">
              <img id="hover"
                src="http://image.ibb.co/bZdHXQ/tracer_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes.png"
                alt="tracer_shirt_shirts_t_tee_tshirts_tshirt_clothing_blizzard_merchandise_clothes"
                border="0"
                height="75px"
              />
            </Link>
          </div>
          <div defense-heroes class="defense-heroes" onClick={() => window.scrollTo(0, 0)}>
            <Link to="/hero/bastion">
              <img id="hover"
                src="http://image.ibb.co/mugXz5/bastion_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise.png"
                alt="bastion_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise"
                height="75px"
                border="0"
              />
            </Link>
            <Link to="/hero/hanzo">
              <img id="hover"
                src="http://image.ibb.co/iMzVmk/hanzo_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise.png"
                alt="hanzo_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise"
                border="0"
                height="75px"
              />
            </Link>
            <Link to="/hero/junkrat">
              <img id="hover"
                src="http://image.ibb.co/dDasz5/junkrat_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise.png"
                height="75px"
                alt="junkrat_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise"
                border="0"
              />
            </Link>
            <Link to="/hero/mei">
              <img id="hover"
                src="http://image.ibb.co/djQWsQ/mei_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise.png"
                alt="mei_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise"
                border="0"
                height="75px"
              />
            </Link>
            <Link to="/hero/torbjorn">
              <img id="hover"
                src="http://image.ibb.co/ca86Rk/torbjorn_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise.png"
                alt="torbjorn_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise"
                border="0"
                height="75px"
              />
            </Link>
            <Link to="/hero/widowmaker">
              <img id="hover"
                src="http://image.ibb.co/kgn0mk/widowmaker_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise.png"
                alt="widowmaker_shirt_shirts_t_shirt_tshirts_tee_teeshirt_overwatch_blizzard_clothing_clothes_merchandise"
                border="0"
                height="75px"
              />
            </Link>
          </div>
          <div tank-heroes class="tank-heroes" onClick={() => window.scrollTo(0, 0)}>
            <Link to="/hero/dva">
              <img id="hover"
                src="http://image.ibb.co/eNNuCQ/d_va_dva_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise.png"
                alt="d_va_dva_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise"
                height="75px"
                border="0"
              />
            </Link>
            <Link to="/hero/orisa">
              <img id="hover"
                src="http://image.ibb.co/kqOvK5/orisa_goodies_gifts_gift_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise.png"
                alt="orisa_goodies_gifts_gift_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise"
                height="75px"
                border="0"
              />
            </Link>
            <Link to="/hero/reinhardt">
              <img id="hover"
                src="http://image.ibb.co/fasNz5/reinhardt_gifts_goodies_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise.png"
                alt="reinhardt_gifts_goodies_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise"
                height="75px"
                border="0"
              />
            </Link>
            <Link to="/hero/roadhog">
              <img id="hover"
                src="http://image.ibb.co/duBhz5/roadhog_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise.png"
                alt="roadhog_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise"
                height="75px"
                border="0"
              />
            </Link>
            <Link to="/hero/winston">
              <img id="hover"
                src="http://image.ibb.co/nNXY6k/winston_gifts_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise.png"
                alt="winston_gifts_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise"
                height="75px"
                border="0"
              />
            </Link>
            <Link to="/hero/zarya">
              <img id="hover"
                src="http://image.ibb.co/e86t6k/zarya_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise.png"
                alt="zarya_t_shirts_shirt_tee_t_tshirts_tshirt_teeshirt_tshirts_overwatch_blizzard_entertainment_clothing_clothes_merchandise"
                height="75px"
                border="0"
              />
            </Link>
          </div>
    <div support-heroes class="support-heroes" onClick={() => window.scrollTo(0, 0)}>
            <Link to="/hero/ana"><img id="hover" src="http://image.ibb.co/ieEzCQ/ana_tshirts_shirts_tee_t_teeshirts_shirt_gift_goodie_loot_goodies_overwatch_blizzard_entertainment_shop.jpg" alt="ana_tshirts_shirts_tee_t_teeshirts_shirt_gift_goodie_loot_goodies_overwatch_blizzard_entertainment_shop" height="75px" border="0" /></Link>
            <Link to="/hero/lucio"><img id="hover" src="http://image.ibb.co/hXfHz5/lucio_tshirts_shirts_tee_t_teeshirts_shirt_gift_goodie_loot_goodies_overwatch_blizzard_entertainment_shop.png" alt="lucio_tshirts_shirts_tee_t_teeshirts_shirt_gift_goodie_loot_goodies_overwatch_blizzard_entertainment_shop" height="75px" border="0" /></Link>
            <Link to="/hero/mercy"><img id="hover" src="http://image.ibb.co/k2beCQ/mercy_tshirts_shirts_tee_t_teeshirts_shirt_gift_goodie_loot_goodies_overwatch_blizzard_entertainment_shop.png" alt="mercy_tshirts_shirts_tee_t_teeshirts_shirt_gift_goodie_loot_goodies_overwatch_blizzard_entertainment_shop" height="75px" border="0" /></Link>
            <Link to="/hero/symmetra"><img id="hover" src="http://image.ibb.co/e4iRsQ/symettra_tshirts_shirts_tee_t_teeshirts_shirt_gift_goodie_loot_goodies_overwatch_blizzard_entertainment_shop.png" alt="symettra_tshirts_shirts_tee_t_teeshirts_shirt_gift_goodie_loot_goodies_overwatch_blizzard_entertainment_shop" height="75px" border="0" /></Link>
            <Link to="/hero/zenyatta"><img id="hover" src="http://image.ibb.co/iVA0K5/zenyatta_tshirts_shirts_tee_t_teeshirts_shirt_gift_goodie_loot_goodies_overwatch_blizzard_entertainment_shop.png" alt="zenyatta_tshirts_shirts_tee_t_teeshirts_shirt_gift_goodie_loot_goodies_overwatch_blizzard_entertainment_shop" height="75px" border="0" /></Link>
</div>
        </div>
      </div>
    );
  }
}
