import { SET_LEVEL, SET_INTERACTIVE_DATA, UPDATE_INTERACTIVE_DATA, IS_CORRECT } from './action-types'

export function setLevel() {
    return {
      type: SET_LEVEL,
      payload: 1,
    };
} 

export function setInteractiveData(data) {
    return {
      type: SET_INTERACTIVE_DATA,
      payload: data,
    };
}

export function updateInteractiveData(optionType) {
  return {
    type: UPDATE_INTERACTIVE_DATA,
    payload: optionType,
  };
}

export function validateAnswers(type, section) {  
  
  const validation = type === section

  return {
    type: IS_CORRECT,
    payload: validation,
  };
}

