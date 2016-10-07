// Thyroid function test investigation form

'use strict';

import React from 'react';
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

require('styles//TshInves.css');

class TshInvesComponent extends React.Component {

	constuctor(){
		super()
		this.state = {
			investigation_date : moment(),
			ft3: '',
			ft4: '',
			tsh: '',
			patient: '',
			investigation_number: ''
		}
	}

	investigation_date_change(){
		this.setstate({
			investigation_date: date
		})
	}

  render() {
    return (
      <div className="tshinves-component">
        <div className="ui container">
        	<div className="ui form">
        		<div className="inline field">
        			<label>Date</label>
					<DatePicker className="ui input fluid" selected={this.state.investigation_date} onChange={this.investigation_date_change.bind(this)} />
        		</div>
        		<div className="inline field">
        			<label>Tree T3</label>
        			<input type="text" placeholder="Free T3" />
        		</div>
        		<div className="inline field">
        			<label>Free T4</label>
        			<input type="text" placeholder="Free T4" />
        		</div>
        		<div className="inline field">
        			<label>TSH</label>
        			<input type="text" placeholder="TSH" />
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

TshInvesComponent.displayName = 'TshInvesComponent';

// Uncomment properties you need
// TshInvesComponent.propTypes = {};
// TshInvesComponent.defaultProps = {};

export default TshInvesComponent;
