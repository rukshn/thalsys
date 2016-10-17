'use strict';

import React from 'react';

require('styles//NewMedicalInfomation.scss');
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');


class NewMedicalInfomationComponent extends React.Component {

  constructor(props,context){
  	super(props,context)
  	this.state = {
  		ddiabetes: moment(),
      xddiabetes: moment().unix(),
      pid: props.params.pid,
  		pmh : [],
  		pmh_con: '',
  		pmh_date: moment(),
      xpmh_date: moment().unix(),
  		pmh_mng: '',
      pthdate: moment(),
      xpthdate: moment().unix(),
      tshdate: moment(),
      xtshdate: moment().unix(),
      liverdate: moment(),
      xliverdate: moment().unix(),
      pubertydate: moment(),
      xpubertydate: moment().unix(),
      notes: '',
      diagnosis: '',
      diagnosis_mode: '',
      diagnosis_age: '',
      hb_diagnosis: '',
      dmmng: '',
      livermng: '',
      pthmng: '',
      tshmng: '',
      pubmng: '',
      diabetes: false,
      puberty: false,
      altered_liver: false,
      hypothyroid: false,
      hypoparathyroid: false,
			on_tx: '',
			date_first_tx: moment(),
			date_first_tx_x : moment.unix(),
			age_first_tx: '',
			hb_first_tx: '',
			curr_fq_tx: ''
  	}
  }

	date_first_tx_change(date){
		this.setState({
			date_first_tx: date,
			date_first_tx_x: date.unix()
		})
	}

  diabetesdateChange(date){
    this.setState({
      ddiabetes: date,
      xddiabetes: date.unix()
    })
  }

  pmh_date_change(date){
    this.setState({
      pmh_date : date
    })
    this.setState({xpmh_date: date.unix()})
  }

  add_medical_info(e){
  	e.preventDefault()

    var medical_details = {}

		// patient id
    medical_details['pid'] = this.state.pid

		// diabetes
    medical_details['diabetes'] = this.state.diabetes
    medical_details['ddiabetes'] = this.state.ddiabetes
    medical_details['xddiabetes'] = this.state.xddiabetes
    medical_details['dmmng'] = this.state.dmmng
		
		// thyroid
    medical_details['hypothyroid'] = this.state.hypothyroid
		medical_details['tshdate'] = this.state.tshdate
    medical_details['xtshdate'] = this.state.xtshdate
    medical_details['tshmng'] = this.state.tshmng

		// parathyroid
    medical_details['hypoparathyroid'] = this.state.hypoparathyroid
    medical_details['pthdate'] = this.state.pthdate
    medical_details['xpthdate'] = this.state.xpthdate
    medical_details['pthmng'] = this.state.pthmng
		  
		// liver
    medical_details['altered_liver'] = this.state.altered_liver
		medical_details['liverdate'] = this.state.liverdate
    medical_details['xliverdate'] = this.state.xliverdate
    medical_details['livermng'] = this.state.livermng
		
		// puberty
    medical_details['puberty'] = this.state.puberty
    medical_details['pubertydate'] = this.state.pubertydate
    medical_details['xpubertydate'] = this.state.xpubertydate
    medical_details['pubmng'] = this.state.pubmng

		// past medical history
		medical_details['pmh'] = this.state.pmh

		// diagnosis details
		medical_details['diagnosis'] = this.state.diagnosis
    medical_details['diagnosis_mode'] = this.state.diagnosis_mode
    medical_details['diagnosis_age'] = this.state.diagnosis_age
    medical_details['hb_diagnosis'] = this.state.hb_diagnosis

		// notes
    medical_details['notes'] = this.state.notes

		// transfusion details
		medical_details['on_tx'] = this.state.on_tx
		medical_details['date_first_tx'] = this.state.date_first_tx
		medical_details['date_first_tx_x'] = this.state.date_first_tx_x
		medical_details['age_first_tx'] = this.state.age_first_tx
		medical_details['hb_first_tx'] = this.state.hb_first_tx
		medical_details['curr_fq_tx'] = this.state.curr_fq_tx

    var post_request = new Request('http://127.0.0.1:5000/new_medical_details', {
      method: 'post',
      headers: new Headers({
        'Content-type' : 'application/json; charset=UTF-8'
      }),
      body: JSON.stringify(medical_details)
    })

		var state = this

    fetch(post_request).then(function(response){
      return response.json()
    }).then(function(response){
			state.context.router.push('/new/surgical/' + response.user)
    })
  }

  add_med_condition(){
    var new_condition = {}

		if(this.state.pmh_con.length > 0){
			new_condition['condate'] = this.state.pmh_date
			new_condition['condition'] = this.state.pmh_con
			new_condition['management'] = this.state.pmh_mng
			new_condition['xcondate'] = this.state.xpmh_date

			var new_pmh = this.state.pmh
			new_pmh.push(new_condition)


			this.setState({
				pmh: new_pmh,
				pmh_date: moment(),
				pmh_con: '',
				pmh_mng: '',
				xpmh_date: moment().unix()
			})
		}

  }

  tshdatechange(date){
    this.setState({
      tshdate: date,
      xtshdate: date.unix()
    })
  }

  pthdatechange(date){
    this.setState({
      pthdate: date,
      xpthdate: date.unix()
    })
  }

  liverfunctiondatechange(date){
    this.setState({
      liverdate: date,
      xliverdate: date.unix()
    })
  }

  pubertydatechange(date){
    this.setState({
      pubertydate: date,
      xpubertydate: date.unix()
    })
  }

  handleChange(dvar, e){
    var change = {}
    change[dvar] = e.target.value
    this.setState(change)
  }

  handleTick(dvar,e){
    var change = {}
    change[dvar] = e.target.checked
    this.setState(change)
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
								<select onChange={this.handleChange.bind(this, 'diagnosis')} className="ui dropdown">
									<option value="">Diagnosis</option>
									<option value="1">Thalassemia Major</option>
									<option value="2">Thalassemia Intermedia</option>
									<option value="3">Sickle Cell Disease</option>
								</select>
							</div>

							<div className="field">
								<input onChange={this.handleChange.bind(this, 'diagnosis_age')} min="0" max="120" type="number" required placeholder="Age at diagnosis" />
							</div>

							<div className="field">
								<input onChange={this.handleChange.bind(this, 'hb_diagnosis')} min="0" type="number" required placeholder="HB level at diagnosis" />
							</div>

							<div className="field">
								<select onChange={this.handleChange.bind(this, 'diagnosis_mode')} value={this.state.diagnosis_mode} className="ui dropdown">
									<option value="">Mode of diagnosis</option>
									<option value="1">Blood picture</option>
									<option value="2">HPLC</option>
									<option value="3">Genetics</option>
								</select>
							</div>
						</div>

						<div className="four fields">
							<div className="field">
								<label>Patient on transfusion</label>
								<div className="ui toggle checkbox">
										<input onChange={this.handleTick.bind(this, 'on_tx')} type="checkbox" />
										<label>on transfusion</label>
								</div>
							</div>
							<div className="field">
								<label>Date of first transfusion</label>
								<DatePicker className="ui input fluid" selected={this.state.date_first_tx} onChange={this.date_first_tx_change.bind(this)} />
							</div>
							<div className="field">
								<label>Age at first transfusion</label>
								<input type="number" value={this.state.age_first_tx} onChange={this.handleChange.bind(this, 'age_first_tx')} />
							</div>
							<div className="field">
								<label>HB level at first transfusion</label>
								<input type="number" value={this.state.hb_first_tx} onChange={this.handleChange.bind(this, 'hb_first_tx')} />
							</div>
						</div>

					</div>

					<div className="field">
						<div className="field">
							<div className="three fields">
								<div className="field">
									<label>Complication</label>
								    <div className="ui toggle checkbox">
								      <input onChange={this.handleTick.bind(this, 'diabetes')} type="checkbox" />
								      <label>Diabetes</label>
								    </div>
								</div>
								<div className="field" id="dpicker">
									<label>Time of diagnosis</label>
									<DatePicker className="ui input fluid" selected={this.state.ddiabetes} onChange={this.diabetesdateChange.bind(this)} />
								</div>
								<div className="field">
									<label>Management</label>
								    <input type="text" onChange={this.handleChange.bind(this, 'dmmng')} placeholder="Diabetes management" />
								</div>
							</div>

							<div className="three fields">
								<div className="field">
									<div className="ui toggle checkbox">
								      <input onChange={this.handleTick.bind(this, 'hypothyroid')} value={this.state.hypothyroid} type="checkbox" />
								      <label>Hypothyroidism</label>
								    </div>
								</div>

								<div className="field" id="dpicker">
									<DatePicker className="ui input fluid" selected={this.state.tshdate} onChange={this.tshdatechange.bind(this)} />
								</div>

								<div className="field">
								    <input type="text" onChange={this.handleChange.bind(this, 'tshmng')} placeholder="Hypothyroidism management" />
								</div>
							</div>

							<div className="three fields">
								<div className="field">
									<div className="ui toggle checkbox">
								      <input onChange={this.handleTick.bind(this, 'hypoparathyroid')} type="checkbox" />
								      <label>Hypoparathyroidism</label>
								    </div>
								</div>

								<div className="field" id="dpicker">
									<DatePicker className="ui input fluid" selected={this.state.pthdate} onChange={this.pthdatechange.bind(this)} />
								</div>

								<div className="field">
								    <input type="text" onChange={this.handleChange.bind(this, 'pthmng')} placeholder="Hypoparathyroidism management" />
								</div>
							</div>


							<div className="three fields">
								<div className="field">
									<div className="ui toggle checkbox">
								      <input onChange={this.handleTick.bind(this, 'altered_liver')} type="checkbox" />
								      <label>Altered liver functions</label>
								    </div>
								</div>

								<div className="field" id="dpicker">
									<DatePicker className="ui input fluid" selected={this.state.liverdate} onChange={this.liverfunctiondatechange.bind(this)} />
								</div>

								<div className="field">
								    <input type="text" onChange={this.handleChange.bind(this, 'livermng')} placeholder="Altered liver function management" />
								</div>
							</div>

							<div className="three fields">
								<div className="field">
									<div className="ui toggle checkbox">
								      <input onChange={this.handleTick.bind(this, 'puberty')} type="checkbox" />
								      <label>Delayed puberty</label>
								  </div>
								</div>

								<div className="field" id="dpicker">
									<DatePicker className="ui input fluid" selected={this.state.pubertydate} onChange={this.pubertydatechange.bind(this)} />
								</div>

								<div className="field">
								    <input type="text" onChange={this.handleChange.bind(this, 'pubmng')} placeholder="Delayed puberty management" />
								</div>
							</div>
						</div>

						<div className="field">
							<label>Other medical conditions</label>

              <table className="ui celled table">
                  <thead>
                    <tr>
                      <th>Condition</th>
                      <th>Date Diagnosed</th>
                      <th>Management</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.pmh.map(function(cond,i){
                      return <tr key={i}>
                        <td>{cond.condition}</td>
                        <td>{cond.condate.toString()}</td>
                        <td>{cond.management}</td>
                      </tr>
                    })}
                  </tbody>
              </table>

							<div className="three fields">
								<div className="field">
								    <input onChange={this.handleChange.bind(this, 'pmh_con')} value={this.state.pmh_con} type="text" placeholder="Medical condition" />
								</div>
								<div className="field" id="dpicker">
									<DatePicker className="ui input fluid" selected={this.state.pmh_date} onChange={this.pmh_date_change.bind(this)} />
								</div>
								<div className="field">
								    <input type="text" onChange={this.handleChange.bind(this, 'pmh_mng')} value={this.state.pmh_mng} placeholder="Medical management" />
								</div>
							</div>

							<button type="button" className="ui basic button" onClick={this.add_med_condition.bind(this)}>
							  <i className="icon plus"></i>
							  Add medical condition
							</button>
						</div>

						<div className="field">
							<label>Notes</label>
							<textarea onChange={this.handleChange.bind(this, 'notes')} rows="2"></textarea>
						</div>
					</div>
					<button className="ui teal button" type="submit">Add medical records</button>
					<button type="button" className="ui button">Reset Form</button>
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
$('.ui.checkbox').checkbox();

NewMedicalInfomationComponent.displayName = 'NewMedicalInfomationComponent';

// Uncomment properties you need
// NewMedicalInfomationComponent.propTypes = {};
// NewMedicalInfomationComponent.defaultProps = {};

NewMedicalInfomationComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default NewMedicalInfomationComponent;
