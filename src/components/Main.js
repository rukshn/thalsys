require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import NewPatient from './NewpatientComponent'
import NewMedicalInfo from './NewMedicalInfomationComponent'
import NewSurgicalInfo from './NewSurgicalInfomationComponent'
import Home from './HomeComponent'
import NewFbc from './blood/FbcInvesComponent'
import NewTransfusion from './blood/TransfusionComponent'
import NewLft from './investigations/LftInvesComponent'
import TshInves from './investigations/TshInvesComponent'
import HormoneInves from './investigations/HormoneInvesComponent'
import Chelation from './blood/ChelationComponent'

class AppComponent extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/new/info/" component={NewPatient}></Route>
          <Route path="/new/medical/:pid" component={NewMedicalInfo}></Route>
          <Route path="/new/surgical/:pid" component={NewSurgicalInfo}></Route>
          <Route path="/new/investigation/fbc/:pid" component={NewFbc}></Route>
          <Route path="/new/transfusion/:pid" component={NewTransfusion}></Route>
          <Route path="/new/investigation/liver/:pid" component={NewLft}></Route>
          <Route path="/new/tsh/:pid" component={TshInves}></Route>
          <Route path="/new/hormone/:pid" component={HormoneInves}></Route>
          <Route path="/new/chelation/:pid" component={Chelation}></Route>
        </Route>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
