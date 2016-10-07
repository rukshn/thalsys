'use strict';

import React from 'react';
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

require('styles//FbcInves.css');

class FbcInvesComponent extends React.Component {
  constructor(){
    super()
    this.state={
      investigation_date : moment(),
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

  add_investigation(e){
    e.preventDefault()
    var Investigation_details = {}
  }

  handleChange(dvar, e){
    var change = {}
    change[dvar] = e.target.value
    this.setState(change)
  }

  investigation_date_change(date){

  }

  render() {
    return (
      <div className="fbcinves-component">
        <div className="ui container">
          <div className="ui form">
            <div className="three fields">
              <div className="inline field">
                <label>Clinic Number</label>
                <input type="text" placeholder="Clinic Number" />
              </div>
              <div className="inline field">
                <label>Investigation number</label>
                <input type="text" placeholder="Investigation number" onChange={this.handleChange.bind(this, 'Investigation_number')} />
              </div>
              <div className="field">
                <label>Investigation date</label>
                <DatePicker className="ui input fluid" selected={this.state.investigation_date} onChange={this.investigation_date_change.bind(this)} />
              </div>
            </div>

            <h4 className="ui dividing header">Heamoglobin</h4>

            <div className="two fields">
              <div className="inline field">
                <label>Heamoglobin</label>
                <input type="text" placeholder="HGB (g/dl)" onChange={this.handleChange.bind(this, 'hbg')}/>
              </div>
              <div className="inline field">
                <label>MCV</label>
                <input type="text" placeholder="MCV (fL)" onChange={this.handleChange.bind(this, 'mcv')}/>
              </div>
              <div className="inline field">
                <label>MCH</label>
                <input type="text" placeholder="MCH (pg)" onChange={this.handleChange.bind(this, 'mch')}/>
              </div>
              <div className="inline field">
                <label>MCHC</label>
                <input type="text" placeholder="MCHC (g/dL)" onChange={this.handleChange.bind(this, 'mchc')}/>
              </div>
              <div className="inline field">
                <label>RDW-CV</label>
                <input type="text" placeholder="RDW-CV (%)" onChange={this.handleChange.bind(this, 'rdwcv')}/>
              </div>
              <div className="inline field">
                <label>RDW-SD</label>
                <input type="text" placeholder="RDW-SD (fL)" onChange={this.handleChange.bind(this, 'rdwsd')}/>
              </div>
              <div className="inline field">
                <label>RBC</label>
                <input type="text" placeholder="Red blood cell count" onChange={this.handleChange.bind(this, 'rbc')}/>
              </div>
              <div className="inline field">
                <label>PLT</label>
                <input type="text" placeholder="Platelet count" onChange={this.handleChange.bind(this, 'plt')}/>
              </div>
            </div>

            <div className="two fields">
              <div className="inline field">
                <label>Neutrophils</label>
                <input type="text" placeholder="Neutrophils" onChange={this.handleChange.bind(this, 'neu')}/>
              </div>
              <div className="inline field">
                <label>Lymphocytes</label>
                <input type="text" placeholder="Lymphocytes" onChange={this.handleChange.bind(this, 'lym')} />
              </div>
              <div className="inline field">
                <label>Monocytes</label>
                <input type="text" placeholder="Monocytes" onChange={this.handleChange.bind(this, 'mono')}/>
              </div>
              <div className="inline field">
                <label>Eosinophils</label>
                <input type="text" placeholder="Eosinophils" onChange={this.handleChange.bind(this, 'eosi')}/>
              </div>
              <div className="inline field">
                <label>Basophils</label>
                <input type="text" placeholder="Basophils" onChange={this.handleChange.bind(this, 'baso')}/>
              </div>
              <div className="inline field">
                <label>Neutrophils</label>
                <input type="text" placeholder="Neutrophils %" onChange={this.handleChange.bind(this, 'neup')}/>
              </div>
              <div className="inline field">
                <label>Lymphocytes</label>
                <input type="text" placeholder="Lymphocytes %" onChange={this.handleChange.bind(this, 'lymp')}/>
              </div>
              <div className="inline field">
                <label>Monocytes</label>
                <input type="text" placeholder="Monocytes %" onChange={this.handleChange.bind(this, 'monop')}/>
              </div>
              <div className="inline field">
                <label>Eosinophils</label>
                <input type="text" placeholder="Eosinophils %" onChange={this.handleChange.bind(this, 'eosip')} />
              </div>
              <div className="inline field">
                <label>Basophils</label>
                <input type="text" placeholder="Basophils %" onChange={this.handleChange.bind(this, 'basop')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FbcInvesComponent.displayName = 'FbcInvesComponent';

// Uncomment properties you need
// FbcInvesComponent.propTypes = {};
// FbcInvesComponent.defaultProps = {};

export default FbcInvesComponent;
