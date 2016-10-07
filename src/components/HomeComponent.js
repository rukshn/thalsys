'use strict';

import React from 'react';

require('styles//Home.css');

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="home-component">
        <div className="ui teal large attached inverted menu"></div>
        <div id="render-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

HomeComponent.displayName = 'HomeComponent';

// Uncomment properties you need
// HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default HomeComponent;
