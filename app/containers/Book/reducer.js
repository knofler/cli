/* eslint-disable no-return-assign */
/* eslint-disable no-case-declarations */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/*
 *
 * BOOK reducer
 *
 */

import { fromJS } from "immutable";
import {
  DEFAULT_ACTION,
  BOOK_CONST_ADD,
  BOOK_CONST_ADD_POST,
  BOOK_CONST_ADD_ERROR,
  BOOK_CONST_ADD_SUCCESS,
  BOOK_CONST_ADD_FORM_INPUT,
  BOOK_CONST_ADD_FORM_RESET
} from "./constants";

export const initialState = fromJS({
  BOOK_STATE_ADD_PAYLOAD: {},
  BOOK_STATE_ADD_SUCCESS: false,
  BOOK_STATE_ADD_ERROR: false,
  BOOK_STATE_ADD_MODEL: "N0_MODEL",
  BOOK_STATE_ADD_INPUT: {},
  BOOK_STATE_ADD_FORM_RESET: false,
  BOOK_STATE_ADD_FORM_STRUCTURE: [],
  BOOK_STATE_ADD_LOADING: false
});

function bookReducer(state = initialState, action) {
  console.log("Global reducer file being called");
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case BOOK_CONST_ADD:
      console.log("in BOOK_CONST_ADD in REDUCER :: action::: ", action);
      console.log(
        "in BOOK_CONST_ADD in REDUCER :: action.struct ::: ",
        action.struct
      );
      console.log(
        "in BOOK_CONST_ADD in REDUCER :: action.model ::: ",
        action.model
      );
      const userInput = {};
      action.struct.map(each => (userInput[each.name] = ""));
      return state
        .set("BOOK_STATE_ADD_MODEL", action.model)
        .set("BOOK_STATE_ADD_FORM_STRUCTURE", action.struct)
        .set("BOOK_STATE_ADD_INPUT", userInput)
        .set("BOOK_STATE_ADD_ERROR", false);
    case BOOK_CONST_ADD_POST:
      console.log("in BOOK_CONST_ADD_POST in REDUCER :: action::: ", action);
      console.log(
        "in BOOK_CONST_ADD in REDUCER :: action.input ::: ",
        action.input
      );
      console.log(
        "in BOOK_CONST_ADD in REDUCER :: action.model ::: ",
        action.model
      );
      return state
        .set("BOOK_STATE_ADD_MODEL", action.model)
        .set("BOOK_STATE_ADD_INPUT", action.input)
        .set("BOOK_STATE_ADD_LOADING", true)
        .set("BOOK_STATE_ADD_ERROR", false);
    case BOOK_CONST_ADD_ERROR:
      console.log(
        "in BOOK_CONST_ADD_ERROR in REDUCER,:: error ::: ",
        action.error
      );
      return state
        .set("BOOK_STATE_ADD_LOADING", false)
        .set("BOOK_STATE_ADD_ERROR", action.error);
    case BOOK_CONST_ADD_SUCCESS:
      console.log(
        "In BOOK_CONST_ADD_SUCCESS in REDUCER,:: payload :::",
        action.payload
      );
      return state
        .set("BOOK_STATE_ADD_LOADING", false)
        .set("BOOK_STATE_ADD_ERROR", false)
        .set("BOOK_STATE_ADD_SUCCESS", true)
        .set("BOOK_STATE_ADD_PAYLOAD", action.payload);
    case BOOK_CONST_ADD_FORM_INPUT:
      console.log(
        "in BOOK_CONST_ADD_FORM_INPUT in REDUCER :: action::: ",
        action
      );
      console.log(
        "in BOOK_CONST_ADD_FORM_INPUT in REDUCER :: action.input ::: ",
        action.input
      );
      return state
        .set("BOOK_STATE_ADD_INPUT", action.input)
        .set("BOOK_STATE_ADD_LOADING", true)
        .set("BOOK_STATE_ADD_ERROR", false);

    case BOOK_CONST_ADD_FORM_RESET:
      console.log(
        "in BOOK_CONST_ADD_FORM_RESET in REDUCER :: action.event ::: ",
        action
      );
      return state
        .set("BOOK_STATE_ADD_INPUT", {})
        .set("BOOK_STATE_ADD_FORM_RESET", true);

    default:
      return state;
  }
}

export default bookReducer;
