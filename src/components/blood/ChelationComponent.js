'use strict';

import React from 'react';

require('styles//blood/Chelation.css');

class ChelationComponent extends React.Component {

  constructor(props,context){
    super(props,context)
    this.state = {
      first_chelation : '',
      patient_id: props.params.pid,
      curr_chelation: '',
      curr_chelation_dose: '',
      side_effects: ''
    }
  }

  add_information(e){
    e.preventDefault()
    
    var che_information = {}
    che_information['patient_id'] = this.state.patient_id
    che_information['first_chelation'] = this.state.first_chelation
    che_information['curr_chelation'] = this.state.curr_chelation
    che_information['curr_chelation_dose'] = this.state.curr_chelation_dose
    che_information['side_effects'] = this.state.side_effects

    var post_request = new Request('http://127.0.0.1:5000/new_chelation_information', {
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
  render() {
    return (
      <div className="chelation-component">
        <form className="ui form" onSubmit={this.add_information.bind(this)} >
          <div className="three fields">
            <div className="field">
              <label>Patient ID</label>
              <input disabled="true" value={this.state.pid} />
            </div>
            <div className="field">
            </div>
          </div>

          <div className="three fields">
            <div className="field">
              <label>First Chelation Used</label>
              <select value={this.state.first_chelation} onChange={this.handleChange.bind(this, 'first_chelation')} className="ui dropdown">
                <option value="">Chelation</option>
                <option value="1">DFO</option>
                <option value="2">DFP</option>
                <option value="3">DFX</option>
              </select>
            </div>
          </div>

          <div className="three fields">
            <div className="field">
              <label>Current Chelation</label>
              <select value={this.state.curr_chelation} onChange={this.handleChange.bind(this, 'curr_chelation')} className="ui dropdown">
                <option value="">Chelation</option>
                <option value="1">DFO</option>
                <option value="2">DFP</option>
                <option value="3">DFX</option>
              </select>
            </div>
            <div className="field">
              <label>Current Chelation Dose</label>
              <input value={this.state.curr_chelation_dose} onChange={this.handleChange.bind(this, 'curr_chelation_dose')} />
            </div>
          </div>
          <div className="field">
            <label>Side Effects of Current Chelation</label>
            <textarea value={this.state.side_effects} onChange={this.handleChange.bind(this, 'side_effects')} rows="2" />
          </div>
        </form>
      </div>
    );
  }
}

ChelationComponent.displayName = 'BloodChelationComponent';

// Uncomment properties you need
// ChelationComponent.propTypes = {};
// ChelationComponent.defaultProps = {};

ChelationComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ChelationComponent;
