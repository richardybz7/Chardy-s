import { createSelector } from "reselect"

export const selectBurger = (state) => state.burger

export const selectIsOpenBurger = createSelector([selectBurger], (burger) => burger.isOpen)