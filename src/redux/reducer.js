/* eslint-disable no-case-declarations */
import { SET_LEVEL } from "./action-types"

let initialState = {
  level: 1,
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LEVEL:
      return {
        ...state,
        level: state.level + action.payload,
      };
    default:
      return state;
  }


}

export default rootReducer