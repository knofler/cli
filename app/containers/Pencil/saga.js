import { all, call, put, takeLatest } from "redux-saga/effects";

import { 
  LOAD_Pencil_API_DATA,
  LOAD_Pencil_EVENTS,
  LOAD_Pencil_FEATURED_EVENTS
 } from "./constants";

import {
  loadPencilApiDataSuccess,
  loadPencilApiDataError,
  loadPencilEventsSuccess,
  loadPencilEventsError,
  loadPencilFeaturedEventsSuccess,
  loadPencilFeaturedEventsError
 } from "./actions";


const herokuAPIURL = "https://mernaircanteen.herokuapp.com/api/";
const model = 'pencils';
const getUrl = process.env.API_URL || herokuAPIURL;
const url = getUrl + model;

console.log("process.env.API_URL", process.env.API_URL);
console.log("herokuAPIURL is", herokuAPIURL);
console.log("url is ", url);

//Load Functions on Event Change

function* loadPencilApiData() {
  yield takeLatest(LOAD_Pencil_API_DATA, fetchPencilApiDataEvents);
}

function* loadPencilEvents() {
  yield takeLatest(LOAD_Pencil_EVENTS, fetchPencilEvents);
}

function* loadPencilFeaturedEvents() {
  yield takeLatest(LOAD_Pencil_FEATURED_EVENTS, fetchPencilFeaturedEvents);
}

//Fetch Functions for API interaction

function* fetchPencilApiDataEvents(action) {
  try {
    // LOAD_Pencil_API_DATA event action and api call
    console.log("LOAD_Pencil_API_DATA TenantId", action.tenantId);
    console.log("LOAD_Pencil_API_DATA skip", action.skip);
    console.log("LOAD_Pencil_API_DATA take", action.take);

    const response = yield call(fetch, url);
    const responseBody = yield response.json();
    console.log("responseBody of LOAD_Pencil_API_DATA  in saga is", responseBody);
    yield put(loadPencilApiDataSuccess(responseBody));
  }catch(error) {
    yield put(loadPencilApiDataError(error));
  }
}

function* fetchPencilEvents(action) {
  try {
    // LOAD_Pencil_EVENTS event action and api call
    console.log("LOAD_Pencil_EVENTS TenantId", action.tenantId);
    console.log("LOAD_Pencil_EVENTS skip", action.skip);
    console.log("LOAD_Pencil_EVENTS take", action.take);

    const response = yield call(fetch, url);
    const responseBody = yield response.json();
    console.log("responseBody of LOAD_Pencil_EVENTS in saga is", responseBody);
    yield put(loadPencilEventsSuccess(responseBody));
  }catch(error) {
    yield put(loadPencilEventsError(error));
  }
}

function* fetchPencilFeaturedEvents(action) {
  try {
    // LOAD_Pencil_FEATURED_EVENTS event action and api call
    console.log("LOAD_Pencil_FEATURED_EVENTS TenantId", action.tenantId);
    console.log("LOAD_Pencil_FEATURED_EVENTS skip", action.skip);
    console.log("LOAD_Pencil_FEATURED_EVENTS take", action.take);

    const response = yield call(fetch, url);
    const responseBody = yield response.json();
    console.log("responseBody of LOAD_Pencil_FEATURED_EVENTS in saga is", responseBody);
    yield put(loadPencilFeaturedEventsSuccess(responseBody));
  }catch(error) {
    yield put(loadPencilFeaturedEventsError(error));
  }
}


// Individual exports for testing
export default function* pencilSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadPencilApiData(),loadPencilEvents(),loadPencilFeaturedEvents()]);
}