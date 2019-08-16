import React from 'react'
import get from 'lodash.get'
import './Table.css'

// name of the key, and path to lookup - assuming consuming component knows the data structure it wants to render in a table
interface KeyLookup {
  keyName: string,
  keyPath: string
}
export interface TableProps {
  tableData: RowProps[],
  keyOrder: KeyLookup[]
}

export interface ColumnProps {
  value: string,
  numColumns: number
}

export interface RowProps {
  data: object,
  rowIndex: number,
  keyOrder: KeyLookup[]
}

const pascalCase = (value: string) => value[0].toUpperCase() + value.substring(1, value.length)

const Column = (props: ColumnProps) => {
  const { value, numColumns } = props
  return (
    <div
      className='column-container'
      style={{
        flexBasis: 1 / numColumns,
      }}
    >
      {value}
    </div>
  )
}

const Row = (props: RowProps) => {
  const {
    keyOrder,
    rowIndex,
    data
  } = props
  const numColumns = keyOrder.length

  // header row
  if (rowIndex === 0) {
    return (
      <div
        className='header-row'
      >
        { 
          keyOrder.map(({keyName}, index) => 
            <Column key={`c_${index}`} value={pascalCase(keyName)} numColumns={numColumns}/>)
        }
      </div>
    )
  }
  return (
    <div
      className='content-row'
      style={{ 
        backgroundColor: rowIndex % 2 === 0 ? '#f1f1f1' : '',
      }}
    >
      { 
        keyOrder.map(({keyPath}, index) => 
          <Column key={`c_${index}`} value={get(data, keyPath, '-')} numColumns={numColumns}/>)
      }
    </div>
  )
}

const Table = (props: TableProps) => {
  const { tableData, keyOrder } = props
  if (!tableData) {
    return <div>no table data</div>
  }
  return (
    <div className='table-container'>
      {tableData.map( (data, index) => <Row key={`r_${index}`} rowIndex={index} keyOrder={keyOrder} data={data}/> )}
      
    </div>
  )
}

export default Table
