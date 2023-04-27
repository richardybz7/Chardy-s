import { createAction } from "../../utils/reducer/reducer.utils";
import { POPUP_TYPES } from "./popup.types";

export const setShowPopup = (isShown) =>
  createAction(POPUP_TYPES.SHOW, isShown)