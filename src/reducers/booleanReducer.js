import * as ActionType from '../actions/action-types';

const booleanReducer = (state = { grid:true, layoutSwitch:true }, action) => {
  if (action.type === ActionType.GRID){
    return state = {
      ...state,
      grid:!state.grid
    }
  }
  return state;
};

export default booleanReducer;
