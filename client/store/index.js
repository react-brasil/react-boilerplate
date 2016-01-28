import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
// import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router'

const finalCreateStore = compose(
  // Required! Enable Redux DevTools with the monitors you chose
  // DevTools.instrument()
)(createStore);

// const createStoreWithMiddleware = applyMiddleware(
//     syncHistory(browserHistory)
// )(finalCreateStore)

export default function configure(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
