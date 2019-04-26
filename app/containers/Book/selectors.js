/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/*
*
* BOOK selectors
*
*/

import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the create state domain
 */

const selectBookDomain = state =>  
  state.get('book', initialState);

/**
 * BOOK_STATE_ADD_PAYLOAD
 */

const makeBookAddPayloadSelector = () =>
  createSelector(selectBookDomain, substate => {
    console.log(
      "BOOK_STATE_ADD_PAYLOAD in SELECTOR:: :::",
      substate.get("BOOK_STATE_ADD_PAYLOAD")
    );
    return substate.get("BOOK_STATE_ADD_PAYLOAD");
  });

/**
 * BOOK_STATE_ADD_INPUT
 */

const makeBookAddInputSelector = () =>
  createSelector(selectBookDomain, substate => {
    console.log(
      "BOOK_STATE_ADD_INPUT in SELECTOR:: :::",
      substate.get("BOOK_STATE_ADD_INPUT")
    );
    return substate.get("BOOK_STATE_ADD_INPUT");
  });

/**
 * BOOK_STATE_ADD_MODEL
 */

const makeBookAddModelSelector = () =>
  createSelector(selectBookDomain, substate => {
    console.log(
      "BOOK_STATE_ADD_MODEL in SELECTOR:: :::",
      substate.get("BOOK_STATE_ADD_MODEL")
    );
    return substate.get("BOOK_STATE_ADD_MODEL");
  });

/**
 * BOOK_STATE_ADD_FORM_STRUCTURE
 */

const makeBookAddFormStructureSelector = () =>
  createSelector(selectBookDomain, substate => {
    console.log(
      "BOOK_STATE_ADD_FORM_STRUCTURE in SELECTOR:: :::",
      substate.get("BOOK_STATE_ADD_FORM_STRUCTURE")
    );
    return substate.get("BOOK_STATE_ADD_FORM_STRUCTURE");
  });

/**
 * BOOK_STATE_ADD_FORM_ITEM_RESET
 */

const makeBookAddFormItemResetSelector = () =>
  createSelector(selectBookDomain, substate => {
    console.log(
      "BOOK_STATE_ADD_FORM_ITEM_RESET in SELECTOR:: :::",
      substate.get("BOOK_STATE_ADD_FORM_RESET"),
      "BOOK_STATE_ADD_INPUT after reset in SELECTOR:: :::",
      substate.get("BOOK_STATE_ADD_INPUT")
    );
    return substate.get("BOOK_STATE_ADD_FORM_RESET");
  });

/**
 * Default selector used by Book
 */

const makeSelectBook = () =>
  createSelector(selectBookDomain, substate => substate.toJS());

export default makeSelectBook;
export {
  selectBookDomain,
  makeBookAddPayloadSelector,
  makeBookAddInputSelector,
  makeBookAddModelSelector,
  makeBookAddFormStructureSelector,
  makeBookAddFormItemResetSelector
};
