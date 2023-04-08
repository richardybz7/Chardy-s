import { BURGER_TYPES } from "./burger.types"

export const INITIAL_BURGER_STATE = {
  isOpen: false
}
export const burgerReducer = (
  state = INITIAL_BURGER_STATE,
  action = {}
) => {
  const { type, payload } = action
  switch(type){
    case BURGER_TYPES.IS_OPEN:
      return { ...state, isOpen: payload }
    default:
      return state
  }
}