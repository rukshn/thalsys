require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


import NewPatient from './NewpatientComponent'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
		<NewPatient />       	
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
