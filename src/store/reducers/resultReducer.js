import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utils/helpers";

const initialState = {
  results: [],
};


const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return storeResult(state, action);
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

const storeResult = (state, action) => {
  const newResult = { id: new Date(), value: action.counter};
  const updatedResults = state.results.concat(newResult);
  return updateObject(state, {results: updatedResults});
};

const deleteResult = (state, action) => {
  const results = state.results.filter((elem) => elem.id !== action.id);
  return updateObject(state, {results: results});
};


export default resultReducer;
