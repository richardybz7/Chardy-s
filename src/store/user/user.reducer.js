import { USER_ACTION_TYPES } from "./user.types"

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  
  switch(type){
    case USER_ACTION_TYPES.CHECK_USER_SESSION:
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
    case USER_ACTION_TYPES.SIGN_UP_START:
    case USER_ACTION_TYPES.SIGN_OUT_START:
    case USER_ACTION_TYPES.EDIT_USER_ADDRESS_START:
      return { ...state, isLoading: true }
    case USER_ACTION_TYPES.EDIT_USER_ADDRESS_SUCCESS:
      return { ...state, isLoading: false}
    case USER_ACTION_TYPES.NO_USER_SESSION:
      return { ...state, isLoading: false }
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
      return { ...state, currentUser: payload, error: null, isLoading: false }
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, isLoading: false}
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.EDIT_USER_ADDRESS_FAILED:
      return { ...state, error: payload, isLoading: false}
    default:
      return { ...state, isLoading: false }
  }
}