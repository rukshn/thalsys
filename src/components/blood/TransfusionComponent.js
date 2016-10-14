'use strict';

import React from 'react';


require('styles//blood/Transfusion.css');
var DatePicker = require('react-datepicker');
var moment = require('moment');
require('react-datepicker/dist/react-datepicker.css');

class TransfusionComponent extends React.Component {

  constructor(props, context){
    super(props,context)
    this.state = {
      tx_date : moment(),
      tx_date_x : moment().unix(),
      pid: props.params.pid,
      packs: '',
      reactions: '',
      reaction_note: '',
      pre_tx_hb: ''
    }
  }

  tx_date_change(date){
    this.setState({
      tx_date: date,
      tx_date_x: date.unix()
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

  add_transfusion(e){
    e.preventDefault()

    var transfusion_information = {}
    transfusion_information['pid'] = this.state.pid
    transfusion_information['packs'] = this.state.packs
    transfusion_information['reactions'] = this.state.reactions
    transfusion_information['reaction_note'] = this.state.reaction_note
    transfusion_information['pre_tx_hb'] = this.state.pre_tx_hb

    var post_request = new Request('http://127.0.0.1:5000/new_tx', {
      method: 'post',
      headers: new Headers({
        'Content-type' : 'application/json; charset=UTF-8'
      }),
      body: JSON.stringify(transfusion_information)
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

  render() {
    return (
      <div className="transfusion-component">
        <div className="container">
          <h4 className="ui dividing header">New Transfusion Information</h4>
          <form onSubmit={this.add_transfusion.bind(this)} className="ui form">
            
            <div className="three fields">
              <div className="field">
                <label>Clinic Number</label>
                <input type="text" value={this.state.pid} disabled placeholder="Clinic Number" />
              </div>
              <div className="field">
                <label>Investigation number</label>
                <input type="text" placeholder="Investigation number" onChange={this.handleChange.bind(this, 'Investigation_number')} autoFocus />
              </div>
              <div className="field" id="dpicker">
                <label>Transfusion date</label>
                <DatePicker className="ui input fluid" selected={this.state.tx_date} onChange={this.tx_date_change.bind(this)} />
              </div>
            </div>

            <div className="three fields">
              <div className="field">
                <label>Transfused amout</label>
                <input type="number" placeholder="Number of blood packs" />
              </div>
              <div className="field">
                <label>Pre transfusion HB level</label>
                <input type="number" placeholder="Pre Tx HB level" />
              </div>
            </div>

            <div className="field">
              <label>Any transfusion reaction</label>
              <div className="ui toggle checkbox">
                <input onChange={this.handleTick.bind(this, 'reaction')} type="checkbox" />
                <label>Any reaction</label>
              </div>
            </div>
            <div className="field">
              <label>Reaction note</label>
              <textarea rows="2" placeholder="Transfusion reaction notes"></textarea>
            </div>

            <button className="ui teal button">Add Transfusion</button>
            <button type="button" className="ui button">Reset Form</button>
          </form>
        </div>
      </div>
    );
  }
}

TransfusionComponent.displayName = 'BloodTransfusionComponent';

// Uncomment properties you need
// TransfusionComponent.propTypes = {};
// TransfusionComponent.defaultProps = {};

TransfusionComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default TransfusionComponent;
