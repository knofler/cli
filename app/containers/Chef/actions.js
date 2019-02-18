/*
*
* Chef actions
*
*/

import {
DEFAULT_ACTION,
LOAD_Chef_API_DATA,
LOAD_Chef_API_DATA_ERROR,
LOAD_Chef_API_DATA_SUCCESS,
LOAD_Chef_EVENTS,
LOAD_Chef_EVENTS_ERROR,
LOAD_Chef_EVENTS_SUCCESS,
LOAD_Chef_FEATURED_EVENTS,
LOAD_Chef_FEATURED_EVENTS_ERROR,
LOAD_Chef_FEATURED_EVENTS_SUCCESS
} from "./constants";

/*
*
* DEFAULT actions Chef
*
*/

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
 }

/*
*
* API DATA ACTIONS for Chef
*
*/

export function loadChefApiData(tenantId, skip, take) {
  console.log("in LoadApiData Action", tenantId);
  return {
    type: LOAD_Chef_API_DATA,
    tenantId,
    skip,
    take
  };
}

export function loadChefApiDataError(error) {
  return {
    type: LOAD_Chef_API_DATA_ERROR,
    error
  };
}

export function loadChefApiDataSuccess(apiDataEvents) {
  console.log(
  "payload received from API yeild in loadApiDataSuccess function in action is",apiDataEvents
  );
  return {
    type: LOAD_Chef_API_DATA_SUCCESS,
    apiDataEvents
  };
}


/*
*
* EVENTS ACTIONS for Chef
*
*/

export function loadChefEvents(tenantId, skip, take, searchTerm) {
  console.log("in LoadEvents Action", tenantId);
  return {
    type: LOAD_Chef_EVENTS,
    tenantId,
    skip,
    take,
    searchTerm,
  };
}

export function loadChefEventsError(error) {
  return {
    type: LOAD_Chef_EVENTS_ERROR,
    error,
  };
}

export function loadChefEventsSuccess(events) {
  return {
    type: LOAD_Chef_EVENTS_SUCCESS,
    events,
  };
}

/*
*
* EVENTS ACTIONS for Chef
*
*/



export function loadChefFeaturedEvents(tenantId, skip, take) {
  console.log("in loadFeaturedEvents Action", tenantId);
  return {
    type: LOAD_Chef_FEATURED_EVENTS,
    tenantId,
    skip,
    take,
  };
}

export function loadChefFeaturedEventsError(featuredError) {
  return {
    type: LOAD_Chef_FEATURED_EVENTS_ERROR,
    featuredError,
  };
}

export function loadChefFeaturedEventsSuccess(featuredEvents) {
  console.log("payload received from featuredEvents yeild is", featuredEvents);
  return {
    type: LOAD_Chef_FEATURED_EVENTS_SUCCESS,
    featuredEvents,
  };
}