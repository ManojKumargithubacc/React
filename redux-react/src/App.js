import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import ReduxReact from './reduxReact'

function App() {
  return (
  <Provider store={store}>
    <div>
      <ReduxReact/>
    </div>
  </Provider>
  )
}

export default App
