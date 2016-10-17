// Thyroid function test investigation form

'use strict';

import React from 'react';
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

require('styles//TshInves.css');

class TshInvesComponent extends React.Component {

	constuctor(props, context){
		super(props, context)
		this.state = {
			investigation_date : moment(),
			ft3: '',
			ft4: '',
			tsh: '',
			patient_id: props.params.pid,
			investigation_number: '',
			investigation_date_x: moment().unix(),
			remarks: ''
		}
	}

	investigation_date_change(date){
		this.setstate({
			investigation_date: date,
			investigation_date_x : date.unix()
		})
	}

	handleChange(dvar, e){
    var change = {}
    change[dvar] = e.target.value
    this.setState(change)
  }

	add_investigation(e){
		e.preventDefault()

		var investigation_details = {}

		investigation_details['patient_id'] = this.state.patient_id
		investigation_details['investigation_date'] = this.state.investigation_date
		investigation_details['investigation_date_x'] = this.state.investigation_date_x 
		investigation_details['ft3'] = this.state.ft3
		investigation_details['ft4'] = this.state.ft4
		investigation_details['remarks'] = this.state.remarks

    var post_request = new Request('http://127.0.0.1:5000/new_tsh', {
      method: 'post',
      headers: new Headers({
        'Content-type' : 'application/json; charset=UTF-8'
      }),
      body: JSON.stringify(investigation_details)
    })

		var state = this

    fetch(post_request).then(function(response){
      return response.json()
    }).then(function(response){
			if(response.status === 200){
				// do something succeess
			}
			else{
				// do something failed
			}
    })
	}

  render() {
    return (
      <div className="tshinves-component">
        <div className="ui container">
					<form onSubmit={this.add_investigation.bind(this)}>
						<div className="ui form">
							<div className="three fields">
								<div className="field">
									<label>Patient</label>
									<input disabled="true" value={this.state.patient_id} />
								</div>
								<div className="field">
									<label>Investigation ID</label>
									<input value={this.state.investigation_number} onChange={this.handleChange.bind(this, 'investigation_number')} />
								</div>
								<div className="field">
									<label>Date</label>
									<DatePicker className="ui input fluid" selected={this.state.investigation_date} onChange={this.investigation_date_change.bind(this)} />
								</div>
							</div>
							<div className="three fields">
								<div className="field">
									<label>Tree T3</label>
									<input type="text" placeholder="Free T3" value={this.state.ft3} onChange={this.handleChange.bind(this, 'ft3')} />
								</div>
								<div className="inline field">
									<label>Free T4</label>
									<input type="text" placeholder="Free T4" value={this.state.ft4} onChange={this.handleChange.bind(this, 'ft4')} />
								</div>
								<div className="inline field">
									<label>TSH</label>
									<input type="text" placeholder="TSH" value={this.state.tsh} onChange={this.handleChange.bind(this, 'tsh')} />
								</div>
							</div>
							<div className="field">
								<textarea placeholder="Remarks" rows="2" value={this.state.remarks} onChange={this.handleChange.bind(this, 'remarks')} />
							</div>
						</div>

						<button className="ui button teal">Add Investigation</button>
						<button className="ui button">Reset Form</button>
					</form>
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
