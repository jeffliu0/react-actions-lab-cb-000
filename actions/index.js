'use strict';

function addColumn (ev) {
  ev.preventDefault()
  const updatedTable = this.state.table.map(
    row => [...row, '']
  )
  this.setState({
    table: updatedTable
  })
}

function addRow (ev) {
  ev.preventDefault()
  const updatedTable = this.state.table.slice()
  updatedTable.push(Array(updatedTable[0].length).fill(''))
  this.setState({
    table: updatedTable
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  const updatedTable = this.state.table.slice()
  updatedTable[rowIndex][columnIndex] = ev.target.value
  this.setState({
    table: updatedTable
  })
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused:[rowIndex,columnIndex]
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault()
  if (this.state.table.length > 1) {
   const updatedTable = this.state.table
     .slice(0, -1);

  this.setState({
    table: updatedTable
  })
}
}

function removeColumn (ev) {
  ev.preventDefault()
  if(this.state.table[0].length){
    const updatedTable = this.state.table.map(
      row => row.slice(0,-1)
      )


    this.setState({
      table: updatedTable
    })
  }
}


export default {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
