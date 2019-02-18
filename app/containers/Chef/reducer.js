/*
 *
 * Chef reducer
 *
 */

import { fromJS } from 'immutable';
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

export const initialState = fromJS({
  Chef_API_Data_Events: [],
  Chef_API_Data_loading: false,
  Chef_API_Data_error: false,
  Chef_events: [],
  Chef_events_loading: false,
  Chef_events_error: false,
  Chef_featured_events: [],
  Chef_featured_loading: false,
  Chef_featured_error: false,
});

function chefReducer(state = initialState, action) {
  console.log("reducer file being called");
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_Chef_API_DATA:
      console.log("in LOAD_Chef_API_DATA action: ", action);
      return state.set("Chef_API_Data_loading", true).set("Chef_API_Data_error", false);
    case LOAD_Chef_API_DATA_ERROR:
      return state.set("Chef_API_Data_loading", false).set("Chef_API_Data_error", action.Chef_API_Data_error);
    case LOAD_Chef_API_DATA_SUCCESS:
      console.log("In LOAD_Chef_API_DATA_SUCCESS reducer, action", action.Chef_API_Data_Events);
      return state
        .set("Chef_API_Data_loading", true)
        .set("Chef_API_Data_error", false)
        .set("Chef_API_Data_Events", action.Chef_API_Data_Events);
    case LOAD_Chef_EVENTS:
      console.log("In LOAD_Chef_EVENTS action", action);
      return state.set("Chef_events_loading", true).set("Chef_events_error", false);
    case LOAD_Chef_EVENTS_ERROR:
      return state.set("Chef_events_loading", false).set("Chef_events_error", action.Chef_events_error);
    case LOAD_Chef_EVENTS_SUCCESS:
      console.log("In LOAD_Chef_EVENTS_SUCCESS reducer, action", action.Chef_Events",
      action.Chef_events;
      return state
      .set("Chef_events_loading", true)
      .set("Chef_events_error", false)
      .set("Chef_events", action.Chef_events);
    case LOAD_Chef_FEATURED_EVENTS:
      console.log("In LOAD_Chef_FEATURED_EVENTS action", action);
      return state.set("Chef_featured_events", true).set("Chef_featured_error", false);
    case LOAD_Chef_FEATURED_EVENTS_ERROR:
      return state
        .set("Chef_featured_events", false)
        .set("Chef_featured_error", action.Chef_featured_error);
    case LOAD_Chef_FEATURED_EVENTS_SUCCESS:
        console.log("In LOAD_Chef_FEATURED_EVENTS_SUCCESS reducer, action", action.Chef_Events",
        action.Chef_featured_events;
      return state
        .set("Chef_featured_loading", true)
        .set("Chef_featured_error", false)
        .set("Chef_featured_events", action.Chef_featured_events);
    default:
      return state;
  }
}

export default chefReducer;
