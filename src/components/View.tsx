import React from 'react'
import Table from './Table'

interface ViewProps {
  loading: boolean,
  data: any,
  error: string
}

const KEY_ORDER = [
  {keyName: 'name', keyPath: 'name'},
  {keyName: 'email', keyPath: 'email'},
  {keyName: 'city', keyPath: 'address.city'},
  {keyName: 'company', keyPath: 'company.name'}
]

const View = (props: ViewProps) => {
  const { error, loading, data } = props
  if (error) {
    return <div>Something went wrong, please refresh the page</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <Table keyOrder={KEY_ORDER} tableData={data.users}/>
      
    </div>
  )
}

export default View
