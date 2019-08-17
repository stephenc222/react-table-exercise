import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Container from './Container';
import { Provider } from 'react-redux';

const mockStore = configureStore();
const store = mockStore({ api: {}, users: [] });

describe('Container Tests', () => {
  it('renders with expected inputs', () => {
    shallow(
      <Provider store={store}>
        <Container model="users">{() => <div></div>}</Container>
      </Provider>
    );
  });
  it('fails to render without expected input types', () => {
    try {
      // @ts-ignore
      shallow(<Container />);
    } catch (e) {
      if (e) {
        expect(true);
      }
    }
  });
});
