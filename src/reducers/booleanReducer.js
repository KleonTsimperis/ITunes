



const booleanReducer = (state = { grid:true, additionalPages:false }, action) => {
  switch (action.type){
    case "GRID":
        state = {
          ...state,
          grid:!state.grid
        }
      break;
    case "ADDITIONALPAGES":
        state = {
          ...state,
          additionalPages:!state.additionalPages
        }
      break;
  }
  return state;
};

export default booleanReducer;
