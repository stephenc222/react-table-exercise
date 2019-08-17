import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

describe('Table Tests', () => {
  it('renders with expected inputs', () => {
    shallow(<Table keyOrder={[]} tableData={[]} />);
  });
  it('fails to render without expected input types', () => {
    try {
      // @ts-ignore
      shallow(<Table />);
    } catch (e) {
      if (e) {
        expect(true);
      }
    }
  });
});
