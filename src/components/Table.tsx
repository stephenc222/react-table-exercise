import React, { useEffect } from 'react'
import get from 'lodash.get'

// name of the key, and path to lookup - assuming consuming component knows the data structure it wants to render in a table
interface KeyLookup {
  keyName: string,
  keyPath: string
}
export interface TableProps {
  tableData: any[],
  keyOrder: KeyLookup[]
}

export interface RowProps {
  data: object,
  rowIndex: number,
  keyOrder: KeyLookup[]
}

const Row = (props: RowProps) => {
  const {
    keyOrder,
    rowIndex,
    data

  } = props

  // header row
  if (rowIndex === 0) {
    return (
      <div style={{border: '1px solid red', display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
        { keyOrder.map(({keyName}) => <div style={{border: '1px solid blue', flexGrow: 1, flexBasis: 1/4}}>{keyName}</div>)}
      </div>
    )
  }
  return (
    <div style={{border: '1px solid red', display: 'flex', flexDirection: 'row'}}>
      { keyOrder.map(({keyPath})=> <div style={{border: '1px solid black', flexGrow: 1, flexBasis: 1/4}}>{get(data, keyPath, '-')}</div>)}
    </div>
  )
}

const Table = (props: TableProps) => {
  const { tableData, keyOrder } = props
  return (
    <div>
      {tableData && tableData.map( (data, index) => <Row rowIndex={index} keyOrder={keyOrder} data={data}/> )}
      
    </div>
  )
}

export default Table
