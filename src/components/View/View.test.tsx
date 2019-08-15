import React from 'react'
import { shallow } from 'enzyme'
import View from './View'

describe('View Tests', () => {
  it('renders with expected inputs', () => {
    shallow(<View loading={false} error={''} data={[]}/>)
  })

})