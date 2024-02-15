/* eslint-disable no-case-declarations */
import { IS_CORRECT, SET_INTERACTIVE_DATA, SET_LEVEL, UPDATE_INTERACTIVE_DATA } from "./action-types"

let initialState = {
  level: 1,
  interactiveData: { },
  validation: false
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LEVEL:
      return {
        ...state,
        level: state.level + action.payload,
      };
    case SET_INTERACTIVE_DATA:
      return {
        ...state,
        interactiveData: action.payload,
      };

    case UPDATE_INTERACTIVE_DATA:  
          const optionToMove = state.interactiveData.options.find(option => option.type === action.payload);
          console.log(optionToMove);
          if (optionToMove) {
          return {
            ...state,
            interactiveData: {
              ...state.interactiveData,
              options: (state.interactiveData.options).filter(option => option.type !== action.payload),
              cardInfo: [...(state.interactiveData.cardInfo), optionToMove]
            }
          }}
        
      
      return state;

    case IS_CORRECT:
      return {
        ...state,
        validation: action.payload,
      };
  
    default:
    return state;
  }


}

export default rootReducer