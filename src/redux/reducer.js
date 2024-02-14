/* eslint-disable no-case-declarations */
import { GET_DRIVERS } from "./action-types"

let initialState = {
  drivers: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        copyDrivers: action.payload,
      };
    default:
      return state;
  }


}

export default rootReducer