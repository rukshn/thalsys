// Liver function test form

'use strict';

import React from 'react';

require('styles//Lftinves.css');
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

class LftinvesComponent extends React.Component {

	constructor(props, context){
		super(props,context)
		this.state = {
			investigation_date: moment(),
			investigation_date_x : moment().unix(),
			billc: '',
			billuc: '',
			sgpt: '',
			sgot: '',
			alp: '',
			albumine: '',
			globuline: '',
			pid: props.param.pid,
			investigation_number: ''
		}
	}

	add_invesgitation(e){
		e.preventDefault()

		var investigation_details = {}
		investigation_details['pid'] = this.state.pid
		investigation_details['investigation_date'] = this.state.investigation_date
		investigation_details['investigation_date_x'] = this.state.investigation_date_x
		investigation_details['billc'] = this.state.billc
		investigation_details['billuc'] = this.state.billuc
		investigation_details['sgpt'] = this.state.sgpt
		investigation_details['sgot'] = this.state.sgot
		investigation_details['alp'] = this.state.alp
		investigation_details['albumine'] = this.state.albumine
		investigation_details['globuline'] = this.state.globuline
		investigation_details['investigation_number'] = this.state.investigation_number

		var post_request = new Request('http://127.0.0.1:5000/new_fbc', {
			method: 'post',
			headers: new Headers({
				"Content-type" : "application/json; charset=UTF-8"
			}),
			body: JSON.stringify(investigation_details)
		})

		fetch(post_request).then(function(response){
			return response.json()
		}).then(function(response){
			if(response.status == 200){
				// success function #todo : add these functions
			}
			else{
				// failed function  #todo : add these functions
			}
		})
	}

	investigation_date_change(date){
		this.setState({
			investigation_date : date,
			investigation_date_x: date.unix()
		})
	}

	handleChange(dvar, e){
		var change = {}
		change[dvar] = e.target.value
		this.setState(change)
	}

	render() {
	    return (
	      	<div className="lftinves-component">
		        <div className="ui container">
		        	<form onSubmit={this.add_investigation.bind.this} className="ui form">
		        		<div className="inline field">
		        			<label>Date</label>
							<DatePicker className="ui input fluid" selected={this.state.investigation_date} onChange={this.investigation_date_change.bind(this)} />
		        		</div>
		        		<div className="inline field">
		        			<label>Serial Number</label>
		        			<input type="text" placeholder="Investigation Number" onChange={this.handleChange.bind(this, 'investigation_details')} value={this.state.investigation_number} />
		        		</div>
		        		<div className="inline field">
		        			<label>Bilirubin Conjugated</label>
		        			<input type="text" placeholder="Bilirubin C (mg/dl)" onChange={this.handleChange.bind(this, 'billc')} value={this.state.billc} />
		        		</div>
		        		<div className="inline field">
		        			<label>Bilirubin Unconjugated</label>
		        			<input type="text" placeholder="Bilirubin UC (mg/dl)" onChange={this.handleChange.bind(this, 'billuc')} value={this.state.billuc} />
		        		</div>
		        		<div className="inline field">
		        			<label>Alanine transaminase</label>
		        			<input type="text" placeholder="SGPT (IU/l)" onChange={this.handleChange.bind(this, 'sgpt')} value={this.state.sgpt} />
		        		</div>
		        		<div className="inline field">
		        			<label>Aspartate transaminase</label>
		        			<input type="text" placeholder="SGOT (IU/l)" onChange={this.handleChange.bind(this, 'sgot')} value={this.state.sgot} />
		        		</div>
		        		<div className="inline field">
		        			<label>Alkaline Phosphatase</label>
		        			<input type="text" placeholder="ALP (IU/l)" onChange={this.handleChange.bind(this, 'alp')} value={this.state.alp} />
		        		</div>
		        		<div className="inline field">
		        			<label>Albumine</label>
		        			<input type="text" placeholder="Albumine (g/dl)" onChange={this.handleChange.bind(this, 'albumine')} value={this.state.albumine} />
		        		</div>
		        		<div className="inline field">
		        			<label>Globuline</label>
		        			<input type="text" placeholder="Globuline (g/dl)" onChange={this.handleChange.bind(this, 'globuline')} value={this.state.globuline} />
		        		</div>

						<button className="ui teal button">Add Investigation</button>
						<button type="button" className="ui button">Reset Form</button>
		        	</form>
		        </div>
	    	</div>
		);
  	}
}

LftinvesComponent.displayName = 'LFTInvesComponent';

// Uncomment properties you need
// LftinvesComponent.propTypes = {};
// LftinvesComponent.defaultProps = {};

LftinvesComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LftinvesComponent;
