'use strict';

import React from 'react';
import actions from '../actions';
import Table from './Table';

export default class Spreadsheet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      table:[['']],
      focused: null
    };


    this.handleAddColumn = actions.addColumn.bind(this);
    this.handleAddRow = actions.addRow.bind(this);
    this.handleRemoveColumn = actions.removeColumn.bind(this);
    this.handleRemoveRow = actions.removeRow.bind(this);
    this.handleChange = actions.changeCell.bind(this);
    this.handleFocus = actions.focusCell.bind(this);
    this.handleBlur = actions.blurCell.bind(this);
  }

  render () {
    const {onChange, onFocus, onBlur} = this.props
    return (
      <div className='spreadsheet'>
        <h1>My little spreadsheet</h1>

        <div className='spreadsheet__buttons'>
          <button onClick={this.handleAddColumn}>Add Column</button>
          {''}
          <button onClick={this.handleAddRow}>Add Row</button>
          {' '}
          <button onClick = {this.handleRemoveColumn}>Remove Column</button>
          {' '}
          <button onClick = {this.handleRemoveRow}>Remove Row</button>
        </div>

        <Table table={this.state.table} onFocus = {this.handleFocus} onBlur = {this.handleBlur} onChange = {this.handleChange}/>

        <div className='spreadsheet__focused'>
        </div>
      </div>
    );
  }
}

Spreadsheet.defaultProps = {
  table: new Array(new Array(1))
}
