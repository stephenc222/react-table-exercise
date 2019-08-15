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

const pascalCase = (value: string) => value[0].toUpperCase() + value.substring(1, value.length)

const Row = (props: RowProps) => {
  const {
    keyOrder,
    rowIndex,
    data
  } = props

  // header row
  if (rowIndex === 0) {
    return (
      <div
        style={{
          borderBottom: '1px solid lightgrey',
          display: 'flex',
          flexDirection: 'row',
          fontWeight: 'bold',
          color: 'grey',
          paddingLeft: 5
        }}
      >
        { 
          keyOrder.map(({keyName}) => 
            <div
              style={{
                flexGrow: 1,
                flexBasis: 1 / keyOrder.length,
                marginTop: 5,
                marginBottom: 5
              }}
            >
              {pascalCase(keyName)}
            </div>
          )}
      </div>
    )
  }
  return (
    <div
      style={{ 
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 5,
        backgroundColor: rowIndex % 2 === 0 ? '#f1f1f1' : '',
      }}
    >
      { keyOrder.map(({keyPath})=>
          <div 
            style={{
              flexGrow: 1, 
              flexBasis: 1 / keyOrder.length,
              paddingTop: 5,
              paddingBottom: 5
            }}
          >
            {get(data, keyPath, '-')}
          </div>
        )}
    </div>
  )
}

const Table = (props: TableProps) => {
  const { tableData, keyOrder } = props
  return (
    <div style={{margin: 25, border: '1px solid grey'}}>
      {tableData && tableData.map( (data, index) => <Row rowIndex={index} keyOrder={keyOrder} data={data}/> )}
      
    </div>
  )
}

export default Table
