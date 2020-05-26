import { combineReducers } from 'redux'
import listingsReducer from './listing_reducer'

const rootReducer = combineReducers({
  listings: listingsReducer
})

export default rootReducer