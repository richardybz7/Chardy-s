import { createSelector } from "reselect"

export const selectPopup = (state) => state.popup

export const selectPopupIsShown = createSelector([selectPopup], (popup) => popup.show)