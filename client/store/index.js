import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { syncHistory } from 'react-router-redux'
import browserHistory from 'react-router'

export default function configure(initialState) {
  const store = createStore(
    rootReducer, 
    initialState
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
