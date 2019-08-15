import React from 'react'
import { shallow } from 'enzyme'
import Table from './Table'

describe('Table Tests', () => {
  it('renders with expected inputs', () => {
    shallow(<Table keyOrder={[]} tableData={[]}/>)
  })

})