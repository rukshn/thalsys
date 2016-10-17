'use strict';

import React from 'react';
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

require('styles//FbcInves.scss');

class FbcInvesComponent extends React.Component {
  constructor(props,context){
    super(props,context)
    this.state={
      pid: props.params.pid,
      investigation_date : moment(),
      xinvestigation_date: moment().unix,
      rbc: '',
      plt: '',
      hbg: '',
      mcv: '',
      mch: '',
      mchc: '',
      rdwcv: '',
      rdwsd: '',
      neu: '',
      lym: '',
      mono: '',
      baso: '',
      eosi: '',
      neup: '',
      lymp: '',
      basop: '',
      eosip: '',
      monop: ''
    }
  }

  reset(props){
    var init_state = {
      pid: props.params.pid,
      investigation_date : moment(),
      xinvestigation_date: moment().unix,
      rbc: '',
      plt: '',
      hbg: '',
      mcv: '',
      mch: '',
      mchc: '',
      rdwcv: '',
      rdwsd: '',
      neu: '',
      lym: '',
      mono: '',
      baso: '',
      eosi: '',
      neup: '',
      lymp: '',
      basop: '',
      eosip: '',
      monop: ''
    }

    this.setState(init_state)
  }

  add_investigation(e){
    e.preventDefault()
    var investigation_details = {}

    investigation_details['rbc'] = this.state.rbc
    investigation_details['plt'] = this.state.plt
    investigation_details['hbg'] = this.state.hbg
    investigation_details['mcv'] = this.state.mcv
    investigation_details['mch'] = this.state.mch
    investigation_details['mchc'] = this.state.mchc
    investigation_details['rdwcv'] = this.state.rdwcv
    investigation_details['rdwsd'] = this.state.rdwsd
    investigation_details['neu'] = this.state.neu
    investigation_details['lym'] = this.state.lym
    investigation_details['mono'] = this.state.mono
    investigation_details['baso'] = this.state.baso
    investigation_details['eosi'] = this.state.eosi
    investigation_details['neup'] = this.state.neup
    investigation_details['lymp'] = this.state.lymp
    investigation_details['basop'] = this.state.basop
    investigation_details['eosip'] = this.state.eosip
    investigation_details['monop'] = this.state.monop

    var post_request = new Request('http://127.0.0.1:5000/new_fbc', {
      method: 'post',
      headers: new Headers({
        'Content-type' : 'application/json; charset=UTF-8'
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

  handleChange(dvar, e){
    var change = {}
    change[dvar] = e.target.value
    this.setState(change)
  }

  investigation_date_change(date){
    this.setState({
      investigation_date: date,
      xinvestigation_date: date.unix()
    })
  }

  render() {
    return (
      <div className="fbcinves-component">
        <div className="ui container">
          <div className="ui tertiary inverted teal segment">
              <p>Patient full blood count report</p>
          </div>

          <div className="ui form">
            <div className="three fields">
              <div className="field">
                <label>Clinic Number</label>
                <input type="text" value={this.state.pid} disabled placeholder="Clinic Number" />
              </div>
              <div className="field">
                <label>Investigation number</label>
                <input type="text" placeholder="Investigation number" autofocus onChange={this.handleChange.bind(this, 'Investigation_number')} />
              </div>
              <div className="field" id="dpicker">
                <label>Investigation date</label>
                <DatePicker className="ui input fluid" selected={this.state.investigation_date} onChange={this.investigation_date_change.bind(this)} />
              </div>
            </div>

            <h4 className="ui dividing header">Heamoglobin values</h4>

            <div className="three fields">
              <div className="field">
                <label>Heamoglobin</label>
                <input type="text" placeholder="HGB (g/dl)" onChange={this.handleChange.bind(this, 'hbg')}/>
              </div>
              <div className="field">
                <label>MCV</label>
                <input type="text" placeholder="MCV (fL)" onChange={this.handleChange.bind(this, 'mcv')}/>
              </div>
              <div className="field">
                <label>MCH</label>
                <input type="text" placeholder="MCH (pg)" onChange={this.handleChange.bind(this, 'mch')}/>
              </div>
            </div>
            <div className="three fields">
              <div className="field">
                <label>MCHC</label>
                <input type="text" placeholder="MCHC (g/dL)" onChange={this.handleChange.bind(this, 'mchc')}/>
              </div>
              <div className="field">
                <label>RDW-CV</label>
                <input type="text" placeholder="RDW-CV (%)" onChange={this.handleChange.bind(this, 'rdwcv')}/>
              </div>
              <div className="field">
                <label>RDW-SD</label>
                <input type="text" placeholder="RDW-SD (fL)" onChange={this.handleChange.bind(this, 'rdwsd')}/>
              </div>
            </div>
            <div className="three fields">
              <div className="field">
                <label>RBC</label>
                <input type="text" placeholder="Red blood cell count" onChange={this.handleChange.bind(this, 'rbc')}/>
              </div>
              <div className="field">
                <label>PLT</label>
                <input type="text" placeholder="Platelet count" onChange={this.handleChange.bind(this, 'plt')}/>
              </div>
            </div>

            <h4 className="ui dividing header">White blood cell values</h4>

            <div className="three fields">
              <div className="field">
                <label>Neutrophils count</label>
                <input type="text" placeholder="Neutrophils" onChange={this.handleChange.bind(this, 'neu')}/>
              </div>
              <div className="field">
                <label>Lymphocytes count</label>
                <input type="text" placeholder="Lymphocytes" onChange={this.handleChange.bind(this, 'lym')} />
              </div>
              <div className="field">
                <label>Monocytes count</label>
                <input type="text" placeholder="Monocytes" onChange={this.handleChange.bind(this, 'mono')}/>
              </div>
            </div>
            <div className="three fields">
              <div className="field">
                <label>Eosinophils count</label>
                <input type="text" placeholder="Eosinophils" onChange={this.handleChange.bind(this, 'eosi')}/>
              </div>
              <div className="field">
                <label>Basophils count</label>
                <input type="text" placeholder="Basophils" onChange={this.handleChange.bind(this, 'baso')}/>
              </div>
            </div>
            <div className="three fields">
              <div className="field">
                <label>Neutrophils percentage</label>
                <input type="text" placeholder="Neutrophils %" onChange={this.handleChange.bind(this, 'neup')}/>
              </div>
              <div className="field">
                <label>Lymphocytes percentage</label>
                <input type="text" placeholder="Lymphocytes %" onChange={this.handleChange.bind(this, 'lymp')}/>
              </div>
              <div className="field">
                <label>Monocytes percentage</label>
                <input type="text" placeholder="Monocytes %" onChange={this.handleChange.bind(this, 'monop')}/>
              </div>
            </div>
            <div className="three fields">
              <div className="field">
                <label>Eosinophils percentage</label>
                <input type="text" placeholder="Eosinophils %" onChange={this.handleChange.bind(this, 'eosip')} />
              </div>
              <div className="field">
                <label>Basophils percentage</label>
                <input type="text" placeholder="Basophils %" onChange={this.handleChange.bind(this, 'basop')} />
              </div>
            </div>
          </div>

          <button className="ui button teal">Add Investigation</button>
          <button type="button" onClick={this.reset.bind(this)} className="ui button">Reset Form</button>
        </div>
      </div>
    );
  }
}

FbcInvesComponent.displayName = 'FbcInvesComponent';

// Uncomment properties you need
// FbcInvesComponent.propTypes = {};
// FbcInvesComponent.defaultProps = {};

FbcInvesComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default FbcInvesComponent;
