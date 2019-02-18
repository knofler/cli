import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the chef state domain
 */

const selectChefDomain = state =>
  state.get('chef', initialState);

/**
 * Other specific selectors
 */

const makeChefApiDataSelector = () => {
  return createSelector(selectChefDomain, substate => {
    console.log("Chef_API_Data_Events in selector", substate.get("Chef_API_Data_Events"));
    return substate.get("Chef_API_Data_Events");
  });
};

const makeChefEventsSelector = () =>
  createSelector(selectChefDomain, substate => substate.get("Chef_events"));


const makeChefFeaturedEventSelector = () => {
  return createSelector(selectChefDomain, substate => {
    console.log("featuredEvents in Dashboard selector",substate.get("Chef_featured_events"));
    return substate.get("Chef_featured_events");
  });
};


/**
 * Default selector used by Chef
 */

const makeSelectChef = () =>
  createSelector(selectChefDomain, substate => substate.toJS());

export default makeSelectChef;
export { 
  selectChefDomain,
  makeChefApiDataSelector,
  makeChefEventsSelector,
  makeChefFeaturedEventSelector
   };
