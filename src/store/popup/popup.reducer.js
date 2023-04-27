import { POPUP_TYPES } from "./popup.types"

export const INITIAL_POPUP_STATE = {
  show: false
}
export const popUpReducer = (
  state = INITIAL_POPUP_STATE,
  action = {}
) => {
  const { type, payload } = action
  switch(type){
    case POPUP_TYPES.SHOW:
      return { show: payload }
    default:
      return state
  }
}