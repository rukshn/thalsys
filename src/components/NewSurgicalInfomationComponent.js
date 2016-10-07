'use strict';

import React from 'react';

require('jquery')
require('styles//NewSurgicalInfomation.css');
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

class NewSurgicalInfomationComponent extends React.Component {

	constructor(props){
		super()
		this.state = {
			splenectomy: '',
			splenectomy_date : moment(),
			splenectomy_xdate: moment([],'X'),
			pid: props.params.pid,
			cholecystectomy: '',
			cholecystectomy_date: moment(),
			cholecystectomy_xdate: moment([], 'X'),
			legulcer: 0,
			other_notes : ''
		}
	}


	add_surgical_info(e){

	}

	splenectomy_date(date){
		this.setState({
			splenectomy_date: date,
			splenectomy_xdate: date.unix()
		})
	}

	cholecystectomy_date(date){
		this.setState({
			cholecystectomy_date: date,
			cholecystectomy_xdate: date.unix()
		})
	}

	handleChange(dvar, e){
		var change = {}
		change[dvar] = e.target.value
		this.setState(change)
	}

	render() {
	return (
	  <div className="newsurgicalinfomation-component">
		<div className="ui container">
			<div className="ui ordered steps">
			  <div className="completed step">
				<div className="content">
				  <div className="title">Patient</div>
				  <div className="description">Patient personal details</div>
				</div>
			  </div>
			  <div className="completed step">
				<div className="content">
				  <div className="title">Medical</div>
				  <div className="description">Patient medical history</div>
				</div>
			  </div>
			  <div className="active step">
				<div className="content">
				  <div className="title">Surgical</div>
				  <div className="description">Patient surgical history</div>
				</div>
			  </div>
				<div className="step">
				<div className="content">
				  <div className="title">Finish</div>
				  <div className="description">Patient surgical history</div>
				</div>
			  </div>
			</div>

			<div className="ui tertiary inverted teal segment">
				<p>This is the final step, in this step you must enter patient's surgical history and complete the setup</p>
			</div>

			<form className="ui form">
			  	<div className="field">
					<label>Surgeries</label>
					<div className="three fields">
						<div className="field">
							<div className="ui toggle checkbox">
							  <input onChange={this.handleChange.bind(this, 'splenectomy')} value={this.state.splenectomy} name="public" type="checkbox" />
							  <label>Splenectomy</label>
							</div>
						</div>

						<div className="field" id="dpicker">
							<DatePicker className="ui input fluid" selected={this.state.splenectomy_date} onChange={this.splenectomy_date.bind(this)} />
						</div>

					</div>

					<div className="three fields">
						<div className="field">
							<div className="ui toggle checkbox">
							  <input onChange={this.handleChange.bind(this, 'cholecystectomy')} value={this.state.cholecystectomy} name="public" type="checkbox" />
							  <label>Cholecystectomy</label>
							</div>
						</div>
						<div className="field" id="dpicker">
							<DatePicker className="ui input fluid" selected={this.state.splenectomy_date} onChange={this.cholecystectomy_date.bind(this)} />
						</div>
					</div>

					<div className="field">
						<label>Leg ulcers</label>
						<div className="ui toggle checkbox">
							<input onChange={this.handleChange.bind(this, 'legulcer')} value={this.state.legulcer} type="checkbox"/>
							<label>Leg ulcers</label>

						</div>
					</div>

					<div className="field">
						<label>Notes and other surgeries</label>
						<textarea onChange={this.handleChange.bind(this, 'other_notes')} value={this.state.other_notes} rows="2"></textarea>
					</div>
			 	</div>
				<button className="ui teal button" type="submit">Add surgical records</button>
			</form>
		</div>
	  </div>
	);
  }
}

$('.ui.checkbox')
  .checkbox()
;


NewSurgicalInfomationComponent.displayName = 'NewSurgicalInfomationComponent';

// Uncomment properties you need
// NewSurgicalInfomationComponent.propTypes = {};
// NewSurgicalInfomationComponent.defaultProps = {};

export default NewSurgicalInfomationComponent;
