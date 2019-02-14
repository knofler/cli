import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the food state domain
 */

const selectFoodDomain = state =>
  state.get('food', initialState);

/**
 * Other specific selectors
 */

const makeFoodApiDataSelector = () => {
  return createSelector(selectFoodDomain, substate => {
    console.log("Food_API_Data_Events in selector", substate.get("Food_API_Data_Events"));
    return substate.get("Food_API_Data_Events");
  });
};

const makeFoodEventsSelector = () =>
  createSelector(selectFoodDomain, substate => substate.get("Food_events"));


const makeFoodFeaturedEventSelector = () => {
  return createSelector(selectFoodDomain, substate => {
    console.log("featuredEvents in Dashboard selector",substate.get("Food_featured_events"));
    return substate.get("Food_featured_events");
  });
};


/**
 * Default selector used by Food
 */

const makeSelectFood = () =>
  createSelector(selectFoodDomain, substate => substate.toJS());

export default makeSelectFood;
export { 
  selectFoodDomain,
  makeFoodApiDataSelector,
  makeFoodEventsSelector,
  makeFoodFeaturedEventSelector
   };
