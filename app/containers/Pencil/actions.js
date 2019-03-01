/*
*
* Pencil actions
*
*/

import {
DEFAULT_ACTION,
LOAD_Pencil_API_DATA,
LOAD_Pencil_API_DATA_ERROR,
LOAD_Pencil_API_DATA_SUCCESS,
LOAD_Pencil_EVENTS,
LOAD_Pencil_EVENTS_ERROR,
LOAD_Pencil_EVENTS_SUCCESS,
LOAD_Pencil_FEATURED_EVENTS,
LOAD_Pencil_FEATURED_EVENTS_ERROR,
LOAD_Pencil_FEATURED_EVENTS_SUCCESS
} from "./constants";

/*
*
* DEFAULT actions Pencil
*
*/

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
 }

/*
*
* API DATA ACTIONS for Pencil
*
*/

export function loadPencilApiData(tenantId, skip, take) {
  console.log("in LoadApiData Action", tenantId);
  return {
    type: LOAD_Pencil_API_DATA,
    tenantId,
    skip,
    take
  };
}

export function loadPencilApiDataError(error) {
  return {
    type: LOAD_Pencil_API_DATA_ERROR,
    error
  };
}

export function loadPencilApiDataSuccess(apiDataEvents) {
  console.log(
  "payload received from API yeild in loadApiDataSuccess function in action is",apiDataEvents
  );
  return {
    type: LOAD_Pencil_API_DATA_SUCCESS,
    apiDataEvents
  };
}


/*
*
* EVENTS ACTIONS for Pencil
*
*/

export function loadPencilEvents(tenantId, skip, take, searchTerm) {
  console.log("in LoadEvents Action", tenantId);
  return {
    type: LOAD_Pencil_EVENTS,
    tenantId,
    skip,
    take,
    searchTerm,
  };
}

export function loadPencilEventsError(error) {
  return {
    type: LOAD_Pencil_EVENTS_ERROR,
    error,
  };
}

export function loadPencilEventsSuccess(events) {
  return {
    type: LOAD_Pencil_EVENTS_SUCCESS,
    events,
  };
}

/*
*
* EVENTS ACTIONS for Pencil
*
*/



export function loadPencilFeaturedEvents(tenantId, skip, take) {
  console.log("in loadFeaturedEvents Action", tenantId);
  return {
    type: LOAD_Pencil_FEATURED_EVENTS,
    tenantId,
    skip,
    take,
  };
}

export function loadPencilFeaturedEventsError(featuredError) {
  return {
    type: LOAD_Pencil_FEATURED_EVENTS_ERROR,
    featuredError,
  };
}

export function loadPencilFeaturedEventsSuccess(featuredEvents) {
  console.log("payload received from featuredEvents yeild is", featuredEvents);
  return {
    type: LOAD_Pencil_FEATURED_EVENTS_SUCCESS,
    featuredEvents,
  };
}