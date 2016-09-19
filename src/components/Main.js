require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


import NewPatient from './NewpatientComponent'
import NewMedicalInfo from './NewMedicalInfomationComponent'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
		<NewMedicalInfo />       	
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
