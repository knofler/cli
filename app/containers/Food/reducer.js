/*
 *
 * Food reducer
 *
 */

import { fromJS } from 'immutable';
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

export const initialState = fromJS({
  Food_API_Data_Events: [],
  Food_API_Data_loading: false,
  Food_API_Data_error: false,
  Food_events: [],
  Food_events_loading: false,
  Food_events_error: false,
  Food_featured_events: [],
  Food_featured_loading: false,
  Food_featured_error: false,
});

function foodReducer(state = initialState, action) {
  console.log("reducer file being called");
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_Food_API_DATA:
      console.log("in LOAD_Food_API_DATA action: ", action);
      return state.set("Food_API_Data_loading", true).set("Food_API_Data_error", false);
    case LOAD_Food_API_DATA_ERROR:
      return state.set("Food_API_Data_loading", false).set("Food_API_Data_error", action.Food_API_Data_error);
    case LOAD_Food_API_DATA_SUCCESS:
      console.log("In LOAD_Food_API_DATA_SUCCESS reducer, action", action.Food_API_Data_Events);
      return state
        .set("Food_API_Data_loading", true)
        .set("Food_API_Data_error", false)
        .set("Food_API_Data_Events", action.Food_API_Data_Events);
    case LOAD_Food_EVENTS:
      console.log("In LOAD_Food_EVENTS action", action);
      return state.set("Food_events_loading", true).set("Food_events_error", false);
    case LOAD_Food_EVENTS_ERROR:
      return state.set("Food_events_loading", false).set("Food_events_error", action.Food_events_error);
    case LOAD_Food_EVENTS_SUCCESS:
      console.log("In LOAD_Food_EVENTS_SUCCESS reducer, action", action.Food_Events",
      action.Food_events;
      return state
      .set("Food_events_loading", true)
      .set("Food_events_error", false)
      .set("Food_events", action.Food_events);
    case LOAD_Food_FEATURED_EVENTS:
      console.log("In LOAD_Food_FEATURED_EVENTS action", action);
      return state.set("Food_featured_events", true).set("Food_featured_error", false);
    case LOAD_Food_FEATURED_EVENTS_ERROR:
      return state
        .set("Food_featured_events", false)
        .set("Food_featured_error", action.Food_featured_error);
    case LOAD_Food_FEATURED_EVENTS_SUCCESS:
        console.log("In LOAD_Food_FEATURED_EVENTS_SUCCESS reducer, action", action.Food_Events",
        action.Food_featured_events;
      return state
        .set("Food_featured_loading", true)
        .set("Food_featured_error", false)
        .set("Food_featured_events", action.Food_featured_events);
    default:
      return state;
  }
}

export default foodReducer;
