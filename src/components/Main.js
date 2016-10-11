require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'
import NewPatient from './NewpatientComponent'
import NewMedicalInfo from './NewMedicalInfomationComponent'
import NewSurgicalInfo from './NewSurgicalInfomationComponent'
import Home from './HomeComponent'

class AppComponent extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/info/" component={NewPatient}></Route>
          <Route path="/medical/:pid" component={NewMedicalInfo}></Route>
          <Route path="/surgical/:pid" component={NewSurgicalInfo}></Route>
        </Route>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
