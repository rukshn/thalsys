'use strict';

import React from 'react';

require('styles//NewMedicalInfomation.scss');
var DatePicker = require('react-datepicker');

var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');


class NewMedicalInfomationComponent extends React.Component {

  constructor(){
  	super()
  	this.state = {
  		ddiabetes: moment()
  	}
  }

  diabetesdateChange(){

  }

  add_medical_info(e){
  	e.preventDefault()
  }

  render() {
    return (
      <div className="newmedicalinfomation-component">
        <div className="ui container">
			<div className="ui ordered steps">
			  <div className="completed step">
			    <div className="content">
			      <div className="title">Patient</div>
			      <div className="description">Patient personal details</div>
			    </div>
			  </div>
			  <div className="active step">
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
			      <div className="title">Finish</div>
			      <div className="description">Patient surgical history</div>
			    </div>
			  </div>
			</div>

			 <div className="ui tertiary inverted teal segment">
		  		<p>In this step you must enter patient's medical details and then proceed to next step. Pay extra attention for blood group and diagnosis</p>
			</div>

			<div className="ui form">
				<form onSubmit={this.add_medical_info.bind(this)}>
					<div className="field">
						<label>Disease details</label>
						<div className="four fields">		
							<div className="field">
								<select className="ui dropdown">
									<option value="">Diagnosis</option>
									<option>Thalassemia Major</option>
									<option>Thalassemia Intermedia</option>
									<option>Sickle Cell Disease</option>
								</select>
							</div>

							<div className="field">
								<input required placeholder="Age at diagnosis" />				
							</div>

							<div className="field">
								<input required placeholder="HB level at diagnosis" />				
							</div>

							<div className="field">
								<select className="ui dropdown">
									<option value="">Mode of diagnosis</option>
									<option>Blood picture</option>
									<option>HPLC</option>
									<option>Genetics</option>
								</select>
							</div>
						</div>
					</div>

					<div className="field">
						<div className="field">
							<div className="three fields">
								<div className="field">
									<label>Complication</label>
								    <div className="ui toggle checkbox">
								      <input className="hidden" tabindex="0" type="checkbox" />
								      <label>Diabetes</label>
								    </div>
								</div>
								<div className="field" id="dpicker">
									<label>Time of diagnosis</label>
									<DatePicker className="ui input fluid" selected={this.state.ddiabetes} onChange={this.diabetesdateChange.bind(this)} />
								</div>
								<div className="field">
									<label>Management</label>
								    <input tabindex="0" type="text" placeholder="Diabetes management" />
								</div>
							</div>

							<div className="three fields">
								<div className="field">
									<div className="ui toggle checkbox">
								      <input className="hidden" tabindex="0" type="checkbox" />
								      <label>Hypothyroidism</label>
								    </div>
								</div>

								<div className="field" id="dpicker">
									<DatePicker className="ui input fluid" selected={this.state.ddiabetes} onChange={this.diabetesdateChange.bind(this)} />
								</div>

								<div className="field">
								    <input tabindex="0" type="text" placeholder="Hypothyroidism management" />
								</div>
							</div>

							<div className="three fields">
								<div className="field">
									<div className="ui toggle checkbox">
								      <input className="hidden" tabindex="0" type="checkbox" />
								      <label>Hypoparathyroidism</label>
								    </div>
								</div>

								<div className="field" id="dpicker">
									<DatePicker className="ui input fluid" selected={this.state.ddiabetes} onChange={this.diabetesdateChange.bind(this)} />
								</div>

								<div className="field">
								    <input tabindex="0" type="text" placeholder="Hypoparathyroidism management" />
								</div>
							</div>


							<div className="three fields">
								<div className="field">
									<div className="ui toggle checkbox">
								      <input className="hidden" tabindex="0" type="checkbox" />
								      <label>Altered liver functions</label>
								    </div>
								</div>

								<div className="field" id="dpicker">
									<DatePicker className="ui input fluid" selected={this.state.ddiabetes} onChange={this.diabetesdateChange.bind(this)} />
								</div>

								<div className="field">
								    <input tabindex="0" type="text" placeholder="Altered liver function management" />
								</div>
							</div>

							<div className="three fields">
								<div className="field">
									<div className="ui toggle checkbox">
								      <input className="hidden" tabindex="0" type="checkbox" />
								      <label>Delayed puberty</label>
								    </div>
								</div>

								<div className="field" id="dpicker">
									<DatePicker className="ui input fluid" selected={this.state.ddiabetes} onChange={this.diabetesdateChange.bind(this)} />
								</div>

								<div className="field">
								    <input tabindex="0" type="text" placeholder="Delayed puberty management" />
								</div>
							</div>
						</div>

						<div className="field">
							<label>Other medical conditions</label>

							<div className="three fields">
								<div className="field">
								    <input tabindex="0" type="text" placeholder="Medical condition" />
								</div>
								<div className="field" id="dpicker">
									<DatePicker className="ui input fluid" selected={this.state.ddiabetes} onChange={this.diabetesdateChange.bind(this)} />
								</div>
								<div className="field">
								    <input tabindex="0" type="text" placeholder="Medical management" />
								</div>
							</div>
							
							<button className="ui basic button">
							  <i className="icon plus"></i>
							  Add medical condition
							</button>
						</div>

						<div className="field">
							<label>Notes</label>
							<textarea rows="2"></textarea>
						</div>
					</div>
					<button type="submit">
					</button>
				</form>
			</div>
        </div>
      </div>
    );
  }
}


$('.dropdown')
    .dropdown()
;

$('.ui.checkbox')
  .checkbox()
;

NewMedicalInfomationComponent.displayName = 'NewMedicalInfomationComponent';

// Uncomment properties you need
// NewMedicalInfomationComponent.propTypes = {};
// NewMedicalInfomationComponent.defaultProps = {};

export default NewMedicalInfomationComponent;
