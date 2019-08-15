import React from 'react'
import { Provider } from 'react-redux'
import Container from './components/Container'
import store from './store'
import './App.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container/>
    </Provider>
  );
}

export default App;
