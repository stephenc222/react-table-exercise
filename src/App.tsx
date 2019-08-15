import React from 'react'
import { Provider } from 'react-redux'
import Container from './components/Container'
import View from './components/View'
import store from './store'
import './App.css'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        {(error, loading, data) => {
          return <View error={error} loading={loading} data={data} />
        }}
        </Container>
    </Provider>
  );
}

export default App;
