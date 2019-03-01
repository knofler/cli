/*
 *
 * Pencil reducer
 *
 */

import { fromJS } from 'immutable';
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

export const initialState = fromJS({
  Pencil_API_Data_Events: [],
  Pencil_API_Data_loading: false,
  Pencil_API_Data_error: false,
  Pencil_events: [],
  Pencil_events_loading: false,
  Pencil_events_error: false,
  Pencil_featured_events: [],
  Pencil_featured_loading: false,
  Pencil_featured_error: false,
});

function pencilReducer(state = initialState, action) {
  console.log("reducer file being called");
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_Pencil_API_DATA:
      console.log("in LOAD_Pencil_API_DATA action: ", action);
      return state.set("Pencil_API_Data_loading", true).set("Pencil_API_Data_error", false);
    case LOAD_Pencil_API_DATA_ERROR:
      return state.set("Pencil_API_Data_loading", false).set("Pencil_API_Data_error", action.Pencil_API_Data_error);
    case LOAD_Pencil_API_DATA_SUCCESS:
      console.log("In LOAD_Pencil_API_DATA_SUCCESS reducer, action", action.Pencil_API_Data_Events);
      return state
        .set("Pencil_API_Data_loading", true)
        .set("Pencil_API_Data_error", false)
        .set("Pencil_API_Data_Events", action.Pencil_API_Data_Events);
    case LOAD_Pencil_EVENTS:
      console.log("In LOAD_Pencil_EVENTS action", action);
      return state.set("Pencil_events_loading", true).set("Pencil_events_error", false);
    case LOAD_Pencil_EVENTS_ERROR:
      return state.set("Pencil_events_loading", false).set("Pencil_events_error", action.Pencil_events_error);
    case LOAD_Pencil_EVENTS_SUCCESS:
      console.log("In LOAD_Pencil_EVENTS_SUCCESS reducer, action.Pencil_Events",
      action.Pencil_events);
      return state
      .set("Pencil_events_loading", true)
      .set("Pencil_events_error", false)
      .set("Pencil_events", action.Pencil_events);
    case LOAD_Pencil_FEATURED_EVENTS:
      console.log("In LOAD_Pencil_FEATURED_EVENTS action", action.Pencil_featured_events);
      return state.set("Pencil_featured_events", true).set("Pencil_featured_error", false);
    case LOAD_Pencil_FEATURED_EVENTS_ERROR:
      return state
        .set("Pencil_featured_events", false)
        .set("Pencil_featured_error", action.Pencil_featured_error);
    case LOAD_Pencil_FEATURED_EVENTS_SUCCESS:
        console.log("In LOAD_Pencil_FEATURED_EVENTS_SUCCESS reducer,action.Pencil_featured_events",
        action.Pencil_featured_events);
      return state
        .set("Pencil_featured_loading", true)
        .set("Pencil_featured_error", false)
        .set("Pencil_featured_events", action.Pencil_featured_events);
    default:
      return state;
  }
}

export default pencilReducer;
