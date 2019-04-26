/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/*
*
* BOOK actions
*
*/

import {
  DEFAULT_ACTION,
  BOOK_CONST_ADD,
  BOOK_CONST_ADD_POST,
  BOOK_CONST_ADD_SUCCESS,
  BOOK_CONST_ADD_ERROR,
  BOOK_CONST_ADD_MODEL,
  BOOK_CONST_ADD_FORM_STRUCTURE,
  BOOK_CONST_ADD_FORM_INPUT,
  BOOK_CONST_ADD_FORM_RESET
} from "./constants";

/*
*
* DEFAULT actions BOOK
*
*/

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

/*
*
  * BOOK ACTIONS ADD
*
*/

/*
 *
    * BOOK ACTIONS ADD MODEL,FORM STRUCTURE AND INITIIAL FORM INPUT
 *
 */
export function bookActionAdd({ struct, model }) {
  console.log("in bookActionAdd in ACTION :: struct :::", struct);
  console.log("in bookActionAdd in ACTION :: model :::", model);
  return {
    type: BOOK_CONST_ADD,
    struct,
    model
  };
}
/*
 *
    * BOOK ACTIONS API POST CALL WITH FORM INPUT
 *
 */
export function bookActionAddPost({ input, model }) {
  console.log("in bookActionAddPost in ACTION :: input :::", input);
  console.log("in bookActionAddPost in ACTION :: model :::", model);
  return {
    type: BOOK_CONST_ADD_POST,
    input,
    model
  };
}
/*
 *
    * BOOK ACTIONS API CALL ERROR HANDLING
 *
 */
export function bookActionAddError(error) {
  console.log("in bookActionAddError in ACTION :: error :::", error);
  return {
    type: BOOK_CONST_ADD_ERROR,
    error
  };
}
/*
 *
    * BOOK ACTIONS API CALL SUCCESS CALL BACK FUNCTIONS
 *
 */
export function bookActionAddSuccess(payload) {
  console.log("in bookActionAddSuccess in ACTION :: payload :::", payload);
  return {
    type: BOOK_CONST_ADD_SUCCESS,
    payload
  };
}
/*
 *
    * BOOK ACTIONS FROM INPUT STATE SET
 *
 */
export function bookActionAddSetFormState(input) {
  console.log("in bookActionAddSetFormState in ACTION :: input :::", input);
  return {
    type: BOOK_CONST_ADD_FORM_INPUT,
    input
  };
}
/*
 *
    * BOOK ACTIONS FROM INPUT STATE RESET
 *
 */
export function bookActionAddFormInputReset() {
  console.log(
    "in bookActionAddFormInputReset in ACTION is called without any parameter"
  );
  return {
    type: BOOK_CONST_ADD_FORM_RESET
  };
}

// ############# NOT ACTIVE ACTION YET ################
/*
 *
    * BOOK ACTIONS MODEL CHANGE
 *
 */
export function bookActionAddChangeModel({ model }) {
  console.log("in bookActionAddChangeModel in ACTION :: model :::", model);
  return {
    type: BOOK_CONST_ADD_MODEL,
    model
  };
}
/*
 *
 * BOOK ACTIONS FORM STRUCTURE SET STATE
 *
 */
export function bookActionAddFormStructure(data) {
  console.log("in bookActionAddFormStructure in ACTION :: data :::", data);
  return {
    type: BOOK_CONST_ADD_FORM_STRUCTURE,
    data
  };
}
// ############# NOT ACTIVE ACTION YET ################
