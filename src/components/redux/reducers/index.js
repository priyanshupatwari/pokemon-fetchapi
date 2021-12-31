import { combineReducers } from 'redux'
// custom defined funcs
import changeTheNumber from './changeTheNumber'

const rootReducer = combineReducers({
 changeTheNumber
});
export default rootReducer;

// Turns an object whose values are different reducer functions,
// into a 'single reducer' function. It will call every child
// reducer, and gather their results into a single state object,
// whose keys correspond to the keys of the passed reducer functions.

// **Same as ES6 syntax "import * as reducers" 
