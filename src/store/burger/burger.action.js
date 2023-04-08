import { createAction } from "../../utils/reducer/reducer.utils";
import { BURGER_TYPES } from "./burger.types";

export const setBurgerIsOpen = (isOpen) =>
  createAction(BURGER_TYPES.IS_OPEN, isOpen)