// Liver function test form

'use strict';

import React from 'react';

require('styles//Lftinves.css');
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

class LftinvesComponent extends React.Component {

	constructor(){
		super()
		this.state = {
			investigation_date: moment(),
			billc: '',
			billuc: '',
			sgpt: '',
			sgot: '',
			alp: '',
			albumine: '',
			globuline: '',
			patient: '',
			investigation_number: ''
		}
	}

	render() {
	    return (
	      	<div className="lftinves-component">
		        <div className="ui container">
		        	<div className="ui form">
		        		<div className="inline field">
		        			<label>Date</label>
									<DatePicker className="ui input fluid" selected={this.state.investigation_date} onChange={this.investigation_date_change.bind(this)} />
		        		</div>
		        		<div className="inline field">
		        			<label>Serial Number</label>
		        			<input type="text" placeholder="Investigation Number" />
		        		</div>
		        		<div className="inline field">
		        			<label>Bilirubin Conjugated</label>
		        			<input type="text" placeholder="Bilirubin C (mg/dl)" />
		        		</div>
		        		<div className="inline field">
		        			<label>Bilirubin Unconjugated</label>
		        			<input type="text" placeholder="Bilirubin UC (mg/dl)" />
		        		</div>
		        		<div className="inline field">
		        			<label>Alanine transaminase</label>
		        			<input type="text" placeholder="SGPT (IU/l)" />
		        		</div>
		        		<div className="inline field">
		        			<label>Aspartate transaminase</label>
		        			<input type="text" placeholder="SGOT (IU/l)" />
		        		</div>
		        		<div className="inline field">
		        			<label>Alkaline Phosphatase</label>
		        			<input type="text" placeholder="ALP (IU/l)" />
		        		</div>
		        		<div className="inline field">
		        			<label>Albumine</label>
		        			<input type="text" placeholder="Albumine (g/dl)" />
		        		</div>
		        		<div className="inline field">
		        			<label>Globuline</label>
		        			<input type="text" placeholder="Globuline (g/dl)" />
		        		</div>
		        	</div>
		        </div>
	    	</div>
		);
  	}
}

LftinvesComponent.displayName = 'LFTInvesComponent';

// Uncomment properties you need
// LftinvesComponent.propTypes = {};
// LftinvesComponent.defaultProps = {};

export default LftinvesComponent;
