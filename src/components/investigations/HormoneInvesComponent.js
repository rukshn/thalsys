'use strict';

import React from 'react';

require('styles//HormoneInves.css');
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

class HormoneInvesComponent extends React.Component {
  constructor(props,context){
    super(props,context)

    this.state = {
      patient_id: props.params.pid,
      investigation_date: moment(),
      investigation_date_x: moment().unix(),
      remarks: '',
      fsh: '',
      lh: '',
      testosterone: '',
      oestrodiol: '',
      sic: '',
      sip: '',
      invesgigation_number: ''
    }
  }

  investigation_date_change(date){
    this.setState({
      investigation_date: date,
      investigation_date_x: date.unix()
    })
  }

  add_investigation(e){
    e.preventDefault()
    var investigation_details = {}

    investigation_details['patient_id'] = this.state.patient_id
    investigation_details['investigation_date'] = this.state.investigation_date
    investigation_details['investigation_date_x'] = this.state.investigation_date_x
    investigation_details['remarks'] = this.state.remarks
    investigation_details['fsh'] = this.state.fsh
    investigation_details['lh'] = this.state.lh
    investigation_details['testosterone'] = this.state.testosterone
    investigation_details['oestrodiol'] = this.state.oestrodiol
    investigation_details['sip'] = this.state.sip
    investigation_details['sic'] = this.state.sic
    investigation_details['invesgigation_number'] = this.state.invesgigation_number

    var post_request = new Request('http://127.0.0.1:5000/new_hormone_investigation', {
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
			if (response.status === 200) {
        // ok response
      }
      else{
        // error bad response
      }
    })

  }
  render() {
    return (
      <div className="hormoneinves-component">
        <div className="container">
          <form onSubmit={this.add_investigation.bind(this)} className="ui form">
            <h4 className="ui dividing header">Hormonal Studies</h4>
            <div className="three fields">
              <div className="field">
                <label>Patient ID</label>
                <input disabled="true" value={this.state.patient_id} />
              </div>
              <div className="field">>
                <label>Investigation ID</label>
                <input value={this.state.investigation_id} onChange={this.handleChange.bind(this, 'investigation_id')} />
              </div>
              <div className="field">
                <label>Investigation Date</label>
                <DatePicker className="ui input fluid" selected={this.state.investigation_date} onChange={this.investigation_date_change.bind(this)} />
              </div>
            </div>

            <div className="four fields">
              <div className="field">
                <label>Follicle-Stimulating hormone</label>
                <input placeholder="FSH level" value={this.state.fsh} onChange={this.handleChange.bind(this,'fsh')} />
              </div>
              <div className="field">
                <label>Luteinizing hormone</label>
                <input placeholder="LH level" value={this.state.lh} onChange={this.handleChange.bind(this, 'lh')} />
              </div>
              <div className="field">
                <label>Testosterone</label>
                <input placeholder="Testosterone level" value={this.state.testosterone} onChange={this.handleChange.bind(this, 'testosterone')} />
              </div>
              <div className="field">
                <label>Oestrodiol</label>
                <input placeholder="Oestrodiol level" value={this.state.oestrodiol} onChange={this.handleChange.bind(this, 'oestrodiol')} />
              </div>
            </div>

            <h4 className="ui dividing header">Parathyroid Function</h4>
            <div className="two fields">
              <div className="field">
                <label>Serum ionized calcium</label>
                <input placeholder="Ionized calcium value" value={this.state.sic} onChange={this.handleChange.bind(this, 'sic')} />
              </div>
              <div className="field">
                <label>Serum ionized phosphorus</label>
                <input placeholder="Ionized calcium value" value={this.state.sip} onChange={this.handleChange.bind(this, 'sip')} />
              </div>
            </div>

            <button className="ui teal button">Add Investigation</button>
            <button className="ui button" type="button">Reset Form</button>
          </form>
        </div>
      </div>
    );
  }
}

HormoneInvesComponent.displayName = 'HormoneInvesComponent';

// Uncomment properties you need
// HormoneInvesComponent.propTypes = {};
// HormoneInvesComponent.defaultProps = {};
HormoneInvesComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default HormoneInvesComponent;
