import { handleActions } from 'redux-actions'

const initialState = {
  "initialMessage" : "Hello world!"
}

export default handleActions({}, initialState)
