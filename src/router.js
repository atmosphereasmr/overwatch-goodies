import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Components/Home Page/homepage'
import Main from './Components/Main/main'
import Genji from './Components/Genji/Genji'
import McCree from './Components/McCree/mccree'
import Doomfist from './Components/Doomfist/doomfist'
import Pharah from './Components/Pharah/pharah'
import Reaper from './Components/Reaper/reaper'
import Soldier76 from './Components/Soldier 76/soldier76'
import Sombra from './Components/Sombra/sombra'
import Tracer from './Components/Tracer/tracer'
import Bastion from './Components/Bastion/bastion'
import Hanzo from './Components/Hanzo/hanzo'
import Junkrat from './Components/Junkrat/junkrat'
import Mei from './Components/Mei/mei'
import Torbjorn from './Components/Torbjorn/torbjorn'
import Widowmaker from './Components/Widowmaker/widowmaker'
import Dva from './Components/Dva/dva'
import Orisa from './Components/Orisa/orisa'
import Reinhardt from './Components/Reinhardt/reinhardt'
import Roadhog from './Components/Roadhog/roadhog'
import Winston from './Components/Winston/winston'
import Zarya from './Components/Zarya/zarya'
import Ana from './Components/Ana/ana'
import Lucio from './Components/Lucio/lucio'
import Mercy from './Components/Mercy/mercy'
import Symmetra from './Components/Symmetra/symmetra'
import Zenyatta from './Components/Zenyatta/zenyatta'

import DvaBunnyShirt from './Components/Items/Dva-Items/dva-bunny-shirt'
import MeiFunkoPop from './Components/Items/Mei-Items/mei-funko-pop'
import ReaperKeychain from './Components/Items/Reaper Items/reaper-keychain'
import GenjiHanzoShirt from './Components/Items/Genji Items/genji-hanzo-shirt'
import TracerTeamHoodie from './Components/Items/Tracer Items/tracer-sports-hoodie'
import TorbjornWorkshopShirt from './Components/Items/Torbjorn Items/torbjorn-workshop-shirt'
import WinstonPlush from './Components/Items/Winston Items/winston-plush'
import GenjiDragonBlade from './Components/Items/Genji Items/genji-dragonblade'
import BastionTransformer from './Components/Items/Bastion Items/bastion-transformer'

export default (
  <Switch>
    <Route component={ Main } exact path="/"/>
    <Route path="/dva-bunny-shirt" component={DvaBunnyShirt} />
    <Route path="/mei-funko-pop" component={MeiFunkoPop} />
    <Route path="/reaper-keychain" component={ReaperKeychain} />
    <Route path="/genji-hanzo-shirt" component={GenjiHanzoShirt} />
    <Route path="/tracer-team-hoodie" component={TracerTeamHoodie} />
    <Route path="/torbjorn-workshop-shirt" component={TorbjornWorkshopShirt} />
    <Route path="/winston-plush" component={WinstonPlush} />
    <Route path="/genji-dragonblade" component={GenjiDragonBlade} />
    <Route path="/bastion-transformer" component={BastionTransformer} />
    <Route path="/hero" render={() => (
        <div>
        <Route path="/hero/genji" component={Genji} />
        <Route path="/hero/mccree" component={McCree} />
        <Route path="/hero/doomfist" component={Doomfist} />
        <Route path="/hero/pharah" component={Pharah} />
        <Route path="/hero/reaper" component={Reaper} />
        <Route path="/hero/soldier76" component={Soldier76} />
        <Route path="/hero/sombra" component={Sombra} />
        <Route path="/hero/tracer" component={Tracer} />
        <Route path="/hero/bastion" component={Bastion} />
        <Route path="/hero/hanzo" component={Hanzo} />
        <Route path="/hero/junkrat" component={Junkrat} />
        <Route path="/hero/mei" component={Mei} />
        <Route path="/hero/torbjorn" component={Torbjorn} />
        <Route path="/hero/widowmaker" component={Widowmaker} />
        <Route path="/hero/dva" component={Dva} />
        <Route path="/hero/orisa" component={Orisa} />
        <Route path="/hero/reinhardt" component={Reinhardt} />
        <Route path="/hero/roadhog" component={Roadhog} />
        <Route path="/hero/winston" component={Winston} />
        <Route path="/hero/zarya" component={Zarya} />
        <Route path="/hero/ana" component={Ana} />
        <Route path="/hero/lucio" component={Lucio} />
        <Route path="/hero/mercy" component={Mercy} />
        <Route path="/hero/symmetra" component={Symmetra} />
        <Route path="/hero/zenyatta" component={Zenyatta} />
        </div>
    )} />
  </Switch>
)
