/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import ChelationComponent from 'components//blood/ChelationComponent.js';

describe('ChelationComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(ChelationComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('chelation-component');
  });
});
