'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    const {row, onChange, onFocus} = this.props
    return (
      <tr className = 'row'>
        {
          row.map((item, index) =>
            <Cell cell = {item} key = {index} onChange = {onChange.bind(null, index)} onFocus = {onFocus.bind(null, index)} />
          )
        }
      </tr>
    )
  }
}
