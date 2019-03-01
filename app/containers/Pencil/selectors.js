import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pencil state domain
 */

const selectPencilDomain = state =>
  state.get('pencil', initialState);

/**
 * Other specific selectors
 */

const makePencilApiDataSelector = () => {
  return createSelector(selectPencilDomain, substate => {
    console.log("Pencil_API_Data_Events in selector", substate.get("Pencil_API_Data_Events"));
    return substate.get("Pencil_API_Data_Events");
  });
};

const makePencilEventsSelector = () =>
  createSelector(selectPencilDomain, substate => substate.get("Pencil_events"));


const makePencilFeaturedEventSelector = () => {
  return createSelector(selectPencilDomain, substate => {
    console.log("featuredEvents in Dashboard selector",substate.get("Pencil_featured_events"));
    return substate.get("Pencil_featured_events");
  });
};


/**
 * Default selector used by Pencil
 */

const makeSelectPencil = () =>
  createSelector(selectPencilDomain, substate => substate.toJS());

export default makeSelectPencil;
export { 
  selectPencilDomain,
  makePencilApiDataSelector,
  makePencilEventsSelector,
  makePencilFeaturedEventSelector
   };
