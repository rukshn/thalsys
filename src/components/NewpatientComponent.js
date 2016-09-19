'use strict';

import React from 'react';

require('styles//Newpatient.scss');
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');


let init_state = {
		dor: moment(),
		dob: moment(),
		clinic_number: '',
		first_name: '',
		last_name: '',
		gender: 1,
		occupation: '',
		civil_status: 1,
		religion: 1,
		id_number: '',
		address: '',
		district: 1,
		province: 1,
		gname: '',
		gcontact: ''
	}

class NewpatientComponent extends React.Component {

  constructor(){
  	super()
  	this.state = init_state
  }

  dobChange(date){
  	this.setState({
  		dob: date
  	})
  }

  dorChange(date){
  	this.setState({
  		dor: date
  	})
  }

  handleChange(dvar , e){
  	var change = {}

  	change[dvar] = e.target.value

  	this.setState(change)

  }

  reset_form(){
  	this.setState(init_state)
  }

  add_new_patient(e){
  	e.preventDefault()
  	var patient_details = {}

  	patient_details['clinic_number'] = this.state.clinic_number
  	patient_details['fname'] = this.state.first_name
  	patient_details['last_name'] = this.state.last_name
  	patient_details['occupation'] = this.state.occupation
  	patient_details['dor'] = this.state.dor
  	patient_details['dob'] = this.state.dob
  	patient_details['gender'] = this.state.gender
  	patient_details['civil_status'] = this.state.civil_status
  	patient_details['religion'] = this.state.religion
  	patient_details['id_number'] = this.state.id_number
  	patient_details['address'] = this.state.address
  	patient_details['district'] = this.state.district
  	patient_details['province'] = this.state.province
  	patient_details['gname'] = this.state.gname
  	patient_details['gcontact'] = this.state.gcontact

  	console.log(patient_details)

  }

  render() {
    return (
      <div className="newpatient-component">
      	<div className="ui container">

			<div className="ui ordered steps">
			  <div className="active step">
			    <div className="content">
			      <div className="title">Patient</div>
			      <div className="description">Patient personal details</div>
			    </div>
			  </div>
			  <div className="step">
			    <div className="content">
			      <div className="title">Medical</div>
			      <div className="description">Patient medical history</div>
			    </div>
			  </div>
			  <div className="step">
			    <div className="content">
			      <div className="title">Surgical</div>
			      <div className="description">Patient surgical history</div>
			    </div>
			  </div>

			  <div className="step">
			    <div className="content">
			      <div className="title">Surgical</div>
			      <div className="description">Patient surgical history</div>
			    </div>
			  </div>
			</div>


      		<div className="ui tertiary inverted teal segment">
		  		<p>This is the first step, you must enter patient's personal details and proceed to next step. Use TAB key for quick navigation</p>
			</div>

			<form onSubmit={this.add_new_patient.bind(this)}>

	      		<div className="ui form">

					<h3 className="ui header">Patient details</h3>

					<div className="field">
						<label>Name</label>
						<div className="two fields">
							<div className="field">
								<input required autoFocus placeholder="First Name" type="text" onChange={this.handleChange.bind(this, 'first_name')} value={this.state.first_name} />
							</div>
							<div className="field">
								<input required placeholder="Last Name" type="text" onChange={this.handleChange.bind(this, 'last_name')}  value={this.state.last_name} />
							</div>
						</div>
					</div>

					<div className="field">
						<div className="two fields">
							<div className="field">
								<label>Clinic required number</label>
								<input placeholder="Clinic Number" type="text" onChange={this.handleChange.bind(this, 'clinic_number')} value={this.state.clinic_number} />
							</div>

							<div className="field" id="dpicker" >
								<label>Date of registration</label>
								<DatePicker className="ui input fluid" selected={this.state.dor} onChange={this.dorChange.bind(this)} />
							</div>
						</div>
					</div>

					<div className="field">
						<div className="two fields">
							<div className="field">
								<label>Gender</label>
								 <select className="ui dropdown" onChange={this.handleChange.bind(this, 'gender')}>
								 	<option value="1">Male</option>
								 	<option value="2">Female</option>
								 	<option value="0">Other</option>
								 </select>
							</div>

							<div className="field" id="dpicker">
								<label>Date of birth</label>
								<DatePicker className="ui input fluid" selected={this.state.dob} onChange={this.dobChange.bind(this)} />
							</div>
						</div>
					</div>

					<div className="field">
						<div className="three fields">
							<div className="field">
								<label>Address</label>
								<input required placeholder="Address without district" type="text" />
							</div>
							<div className="field">
								<label>District</label>
								<select value="1" onChange={this.handleChange.bind(this, 'district')} className="ui dropdown">
								  <option value="1">Ampara</option>
								  <option value="2">Anuradhapura</option>
								  <option value="3">Badulla</option>
								  <option value="4">Batticaloa</option>
								  <option value="5">Colombo</option>
								  <option value="6">Galle</option>
								  <option value="7">Gampaha</option>
								  <option value="8">H'thota</option>
								  <option value="9">Jaffna</option>
								  <option value="10">Kaluthara</option>
								  <option value="11">Kandy</option>
								  <option value="12">Kegalle</option>
								  <option value="13">Kilinochchi</option>
								  <option value="14">Kurunegala</option>
								  <option value="15">Mannar</option>
								  <option value="16">Matale</option>
								  <option value="17">Mathara</option>
								  <option value="18">Monaragala</option>
								  <option value="19">Mullaitivu</option>
								  <option value="20">Nuwara Eliya</option>
								  <option value="21">Polonnaruwa</option>
								  <option value="22">Puttalam</option>
								  <option value="23">Ratnapura</option>
								  <option value="24">Trincomalee</option>
								  <option value="25">Vavuniya</option>
								</select>
							</div>

							<div className="field">
								<label>Province</label>
								<select value="1" onChange={this.handleChange.bind(this, 'province')} className="ui dropdown">
								  <option value="1">Western</option>
								  <option value="2">North Western</option>
								  <option value="3">Central</option>
								  <option value="4">Southern</option>
								  <option value="5">Sabaragmuwa</option>
								  <option value="6">Uwa</option>
								  <option value="7">Nothern</option>
								  <option value="8">Eastern</option>
								  <option value="9">North Central</option>
								</select>
							</div>
						</div>
					</div>

					<div className="field">
						<div className="three fields">

							<div className="field">
								<label>Religion</label>
								<select value="1" onChange={this.handleChange.bind(this, 'religion')} className="ui dropdown">
								  <option value="1">Bhuddist</option>
								  <option value="2">Cathoic</option>
								  <option value="3">Hindu</option>
								  <option value="4">Muslim</option>
								  <option value="0">Other</option>
								</select>
							</div>

							<div className="field">
								<label>Civil Status</label>
								<select value="1" onChange={this.handleChange.bind(this, 'civil_status')} className="form-control">
								  <option value="1">Single</option>
								  <option value="2">Married</option>
								  <option value="0">Other</option>
								</select>
							</div>

							<div className="field">
								<label>Patient identification number</label>
								<input required placeholder="NIC/Passport/Driving Licence Number" type="text" onChange={this.handleChange.bind(this, 'id_number')} />
							</div>
						</div>
					</div>
					
					<div className="field">
						<label>Guardian details</label>
						<div className="fields">
							<div className="twelve wide field">
							<input placeholder="Guardian name" type="text" onChange={this.handleChange.bind(this, 'gname')} />
							</div>
							
							<div className="six wide field">
								<input placeholder="Guardian contact #" type="text" onChange={this.handleChange.bind(this, 'gcontact')} />
							</div>
						</div>
					</div>

	      		</div>

	      		<button type="submit" className="ui teal button">Submit</button>
	      		<button onClick={this.reset_form.bind(this)} className="ui button">Reset</button>

	      	</form>
      	</div>
      </div>
    );
  }
}

$('.dropdown')
    .dropdown()
;

NewpatientComponent.displayName = 'NewpatientComponent';

// Uncomment properties you need
// NewpatientComponent.propTypes = {};
// NewpatientComponent.defaultProps = {};

export default NewpatientComponent;
