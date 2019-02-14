/*
*
* Food actions
*
*/

import {
DEFAULT_ACTION,
LOAD_Food_API_DATA,
LOAD_Food_API_DATA_ERROR,
LOAD_Food_API_DATA_SUCCESS,
LOAD_Food_EVENTS,
LOAD_Food_EVENTS_ERROR,
LOAD_Food_EVENTS_SUCCESS,
LOAD_Food_FEATURED_EVENTS,
LOAD_Food_FEATURED_EVENTS_ERROR,
LOAD_Food_FEATURED_EVENTS_SUCCESS
} from "./constants";

/*
*
* DEFAULT actions Food
*
*/

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
 }

/*
*
* API DATA ACTIONS for Food
*
*/

export function loadFoodApiData(tenantId, skip, take) {
  console.log("in LoadApiData Action", tenantId);
  return {
    type: LOAD_Food_API_DATA,
    tenantId,
    skip,
    take
  };
}

export function loadFoodApiDataError(error) {
  return {
    type: LOAD_Food_API_DATA_ERROR,
    error
  };
}

export function loadFoodApiDataSuccess(apiDataEvents) {
  console.log(
  "payload received from API yeild in loadApiDataSuccess function in action is",apiDataEvents
  );
  return {
    type: LOAD_Food_API_DATA_SUCCESS,
    apiDataEvents
  };
}


/*
*
* EVENTS ACTIONS for Food
*
*/

export function loadFoodEvents(tenantId, skip, take, searchTerm) {
  console.log("in LoadEvents Action", tenantId);
  return {
    type: LOAD_Food_EVENTS,
    tenantId,
    skip,
    take,
    searchTerm,
  };
}

export function loadFoodEventsError(error) {
  return {
    type: LOAD_Food_EVENTS_ERROR,
    error,
  };
}

export function loadFoodEventsSuccess(events) {
  return {
    type: LOAD_Food_EVENTS_SUCCESS,
    events,
  };
}

/*
*
* EVENTS ACTIONS for Food
*
*/



export function loadFoodFeaturedEvents(tenantId, skip, take) {
  console.log("in loadFeaturedEvents Action", tenantId);
  return {
    type: LOAD_Food_FEATURED_EVENTS,
    tenantId,
    skip,
    take,
  };
}

export function loadFoodFeaturedEventsError(featuredError) {
  return {
    type: LOAD_Food_FEATURED_EVENTS_ERROR,
    featuredError,
  };
}

export function loadFoodFeaturedEventsSuccess(featuredEvents) {
  console.log("payload received from featuredEvents yeild is", featuredEvents);
  return {
    type: LOAD_Food_FEATURED_EVENTS_SUCCESS,
    featuredEvents,
  };
}