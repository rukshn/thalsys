'use strict';

import React from 'react';

require('styles//Newpatient.scss');
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

class NewpatientComponent extends React.Component {

  constructor(){
  	super()
  	this.state = {
  		dor: moment(),
  		dob: moment(),
  		clinic_number: '',
  		first_name: '',
  		last_name: '',
  		gender: '',
  		occupation: '',
  		civil_status: '',
  		religion: '',
  		id_number: '',
  		address: '',
  		district: '',
  		province: '',
  		gname: '',
  		gcontact: ''
  	}
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
      	<div className="container">
	      	<h2>Add New Patient Record</h2>
	        <form onSubmit={this.add_new_patient.bind(this)}>
				
				<div className="col-md-10">
					<div className="alert alert-info alert-dismissible" role="alert">
					  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					  <strong>Pro Tip</strong> Use the TAB key to easily to go through the feilds.
					</div>

					<h4>Personal Information</h4>

				</div>

	        	<div className="col-md-5">

					<div className="form-group">
						<label>Patient ID</label>
						<input name="clinic_number" type="text" autoFocus onChange={this.handleChange.bind(this, 'clinic_number')} className="form-control" value={this.state.clinic_number} placeholder="Patient Clinic Number" />
					</div>

					<div className="form-group">
						<label>First Name</label>
						<input type="text" className="form-control" onChange={this.handleChange.bind(this, 'first_name')} value={this.state.first_name} placeholder="Patient First Names/ Initials" />
					</div>

					<div className="form-group">
						<label>Last Name</label>
						<input type="text" className="form-control" onChange={this.handleChange.bind(this, 'last_name')} value={this.state.last_name} placeholder="Patient Last Name" />
					</div>

					<div className="form-group">
						<label>Gender</label>
						<select value="1" onChange={this.handleChange.bind(this, 'gender')} className="form-control">
						  <option value="1">Male</option>
						  <option value="2">Female</option>
						  <option value="0">Other</option>
						</select>
					</div>


					<div className="form-group">
						<label>Occupation</label>
						<input type="text" className="form-control" onChange={this.handleChange.bind(this, 'occupation')} value={this.state.occupation} placeholder="Patient Occupation" />
					</div>
				</div>
				
				<div className="col-md-5">
					<div className="form-group" id="dpicker">
						<label>Date of Registration</label>
						<DatePicker className="form-control" selected={this.state.dor} onChange={this.dorChange.bind(this)} />
					</div>

					<div className="form-group" id="dpicker">
						<label>Date of Birth</label>
						<DatePicker className="form-control" selected={this.state.dob} onChange={this.dobChange.bind(this)} />
					</div>

					<div className="form-group">
						<label>Status</label>
						<select value="1" onChange={this.handleChange.bind(this, 'civil_status')} className="form-control">
						  <option value="1">Single</option>
						  <option value="2">Married</option>
						  <option value="0">Other</option>
						</select>
					</div>

					<div className="form-group">
						<label>Religion</label>
						<select value="1" onChange={this.handleChange.bind(this, 'religion')} className="form-control">
						  <option value="1">Bhuddist</option>
						  <option value="2">Cathoic</option>
						  <option value="3">Hindu</option>
						  <option value="4">Muslim</option>
						  <option value="0">Other</option>
						</select>
					</div>

					<div className="form-group">
						<label>Identification Number</label>
						<input type="text" className="form-control" onChange={this.handleChange.bind(this, 'id_number')} value={this.state.id_number} placeholder="Passport / Driving Licience or NIC Number" />
					</div>

				</div>

				<div className="col-md-10">
					<h4>Contact Information</h4>
				</div>


				<div className="col-md-5">

					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" onChange={this.handleChange.bind(this, 'address')} value={this.state.address} placeholder="Patient Address" />
					</div>

					<div className="form-group">
						<label>District</label>
						<select value="1" onChange={this.handleChange.bind(this, 'district')} className="form-control">
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

				</div>

				<div className="col-md-5">
					<div className="form-group">
						<label>Province</label>
						<select value="1" onChange={this.handleChange.bind(this, 'province')} className="form-control">
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

				<div className="col-md-10">
					<h4>Gurdian Information</h4>
				</div>

				<div className="col-md-5">
					<div className="form-group">
						<label>Gurdian Name</label>
						<input onChange={this.handleChange.bind(this, 'gname')} value={this.state.gname} type="text" className="form-control" placeholder="Patient Gurdian Name" />
					</div>

				</div>
				<div className="col-md-5">
					<div className="form-group">
						<label>Gurdian Contact Number</label>
						<input onChange={this.handleChange.bind(this, 'gcontact')} value={this.state.gcontact} type="text" className="form-control" placeholder="Patient Gurdian Contact Number" />
					</div>

				</div>

				<div className="col-md-5">
					<button type="submit" className="btn btn-info">Add Patient Record</button>
				</div>
			</form>
		</div>
      </div>
    );
  }
}

NewpatientComponent.displayName = 'NewpatientComponent';

// Uncomment properties you need
// NewpatientComponent.propTypes = {};
// NewpatientComponent.defaultProps = {};

export default NewpatientComponent;
