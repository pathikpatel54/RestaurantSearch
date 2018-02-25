import { combineReducers } from 'redux';
import RestaList from "./reducer_restaurants";

const rootReducer = combineReducers({
  resta: RestaList
});

export default rootReducer;
