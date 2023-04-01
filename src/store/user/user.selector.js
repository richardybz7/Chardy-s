import { createSelector } from "reselect"

export const selectUserState = (state) => state.user

export const selectCurrentUser = (state) => state.user.currentUser

export const selectIsLoading = createSelector([selectUserState],
  (userState) => userState.isLoading  
)