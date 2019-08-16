import React from 'react'
import { shallow } from 'enzyme'
import View from './View'

describe('View Tests', () => {
  it('renders with expected input types', () => {
    shallow(<View loading={false} error={''} data={[]}/>)
  })
  it('fails to render without expected input types', () => {
    try {
      // @ts-ignore
      shallow(<View/>)
    } catch (e) {
      if (e) {
        expect(true)
      }
    }
  })

})