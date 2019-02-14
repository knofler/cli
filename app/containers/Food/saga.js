import { all, call, put, takeLatest } from "redux-saga/effects";

import { 
  LOAD_Food_API_DATA,
  LOAD_Food_EVENTS,
  LOAD_Food_FEATURED_EVENTS
 } from "./constants";

import {
  loadFoodApiDataSuccess,
  loadFoodApiDataError,
  loadFoodEventsSuccess,
  loadFoodEventsError,
  loadFoodFeaturedEventsSuccess,
  loadFoodFeaturedEventsError
 } from "./actions";


const herokuAPIURL = "https://mernaircanteen.herokuapp.com/api/";
const model = food;
const getUrl = process.env.API_URL || herokuAPIURL;
const url = getUrl + model;

console.log("process.env.API_URL", process.env.API_URL);
console.log("herokuAPIURL is", herokuAPIURL);
console.log("url is ", url);

//Load Functions on Event Change

function* loadFoodApiData() {
  yield takeLatest(LOAD_Food_API_DATA, fetchFoodApiDataEvents);
}

function* loadFoodEvents() {
  yield takeLatest(LOAD_Food_EVENTS, fetchFoodEvents);
}

function* loadFoodFeaturedEvents() {
  yield takeLatest(LOAD_Food_FEATURED_EVENTS, fetchFoodFeaturedEvents);
}

//Fetch Functions for API interaction

function* fetchFoodApiDataEvents(action) {
  try {
    // LOAD_Food_API_DATA event action and api call
    console.log("LOAD_Food_API_DATA TenantId", action.tenantId);
    console.log("LOAD_Food_API_DATA skip", action.skip);
    console.log("LOAD_Food_API_DATA take", action.take);

    const response = yield call(fetch, url);
    const responseBody = yield response.json();
    console.log("responseBody of LOAD_Food_API_DATA  in saga is", responseBody);
    yield put(loadFoodApiDataSuccess(responseBody));
  }catch(error) {
    yield put(loadFoodApiDataError(error));
  }
}

function* fetchFoodEvents(action) {
  try {
    // LOAD_Food_EVENTS event action and api call
    console.log("LOAD_Food_EVENTS TenantId", action.tenantId);
    console.log("LOAD_Food_EVENTS skip", action.skip);
    console.log("LOAD_Food_EVENTS take", action.take);

    const response = yield call(fetch, url);
    const responseBody = yield response.json();
    console.log("responseBody of LOAD_Food_EVENTS in saga is", responseBody);
    yield put(loadFoodEventsSuccess(responseBody));
  }catch(error) {
    yield put(loadFoodEventsError(error));
  }
}

function* fetchFoodFeaturedEvents(action) {
  try {
    // LOAD_Food_FEATURED_EVENTS event action and api call
    console.log("LOAD_Food_FEATURED_EVENTS TenantId", action.tenantId);
    console.log("LOAD_Food_FEATURED_EVENTS skip", action.skip);
    console.log("LOAD_Food_FEATURED_EVENTS take", action.take);

    const response = yield call(fetch, url);
    const responseBody = yield response.json();
    console.log("responseBody of LOAD_Food_FEATURED_EVENTS in saga is", responseBody);
    yield put(loadFoodFeaturedEventsSuccess(responseBody));
  }catch(error) {
    yield put(loadFoodFeaturedEventsError(error));
  }
}


// Individual exports for testing
export default function* foodSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadFoodApiData(),loadFoodEvents(),loadFoodFeaturedEvents()]);
}