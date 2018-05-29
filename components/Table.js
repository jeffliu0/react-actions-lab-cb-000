'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    const {table, onBlur, onFocus, onChange} = this.props
    return (
      <table className = 'table' onBlur = {onBlur}>
        <tbody>
          {
            table.map(
              (item, index)=> <Row row={item} key={index}
              onChange = {onChange.bind(null, index)} onFocus = {onFocus.bind(null, index)}/>
            )
          }
        </tbody>
      </table>
    )
  }
}
