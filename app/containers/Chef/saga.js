import { all, call, put, takeLatest } from "redux-saga/effects";

import { 
  LOAD_Chef_API_DATA,
  LOAD_Chef_EVENTS,
  LOAD_Chef_FEATURED_EVENTS
 } from "./constants";

import {
  loadChefApiDataSuccess,
  loadChefApiDataError,
  loadChefEventsSuccess,
  loadChefEventsError,
  loadChefFeaturedEventsSuccess,
  loadChefFeaturedEventsError
 } from "./actions";


const herokuAPIURL = "https://mernaircanteen.herokuapp.com/api/";
const model = chef;
const getUrl = process.env.API_URL || herokuAPIURL;
const url = getUrl + model;

console.log("process.env.API_URL", process.env.API_URL);
console.log("herokuAPIURL is", herokuAPIURL);
console.log("url is ", url);

//Load Functions on Event Change

function* loadChefApiData() {
  yield takeLatest(LOAD_Chef_API_DATA, fetchChefApiDataEvents);
}

function* loadChefEvents() {
  yield takeLatest(LOAD_Chef_EVENTS, fetchChefEvents);
}

function* loadChefFeaturedEvents() {
  yield takeLatest(LOAD_Chef_FEATURED_EVENTS, fetchChefFeaturedEvents);
}

//Fetch Functions for API interaction

function* fetchChefApiDataEvents(action) {
  try {
    // LOAD_Chef_API_DATA event action and api call
    console.log("LOAD_Chef_API_DATA TenantId", action.tenantId);
    console.log("LOAD_Chef_API_DATA skip", action.skip);
    console.log("LOAD_Chef_API_DATA take", action.take);

    const response = yield call(fetch, url);
    const responseBody = yield response.json();
    console.log("responseBody of LOAD_Chef_API_DATA  in saga is", responseBody);
    yield put(loadChefApiDataSuccess(responseBody));
  }catch(error) {
    yield put(loadChefApiDataError(error));
  }
}

function* fetchChefEvents(action) {
  try {
    // LOAD_Chef_EVENTS event action and api call
    console.log("LOAD_Chef_EVENTS TenantId", action.tenantId);
    console.log("LOAD_Chef_EVENTS skip", action.skip);
    console.log("LOAD_Chef_EVENTS take", action.take);

    const response = yield call(fetch, url);
    const responseBody = yield response.json();
    console.log("responseBody of LOAD_Chef_EVENTS in saga is", responseBody);
    yield put(loadChefEventsSuccess(responseBody));
  }catch(error) {
    yield put(loadChefEventsError(error));
  }
}

function* fetchChefFeaturedEvents(action) {
  try {
    // LOAD_Chef_FEATURED_EVENTS event action and api call
    console.log("LOAD_Chef_FEATURED_EVENTS TenantId", action.tenantId);
    console.log("LOAD_Chef_FEATURED_EVENTS skip", action.skip);
    console.log("LOAD_Chef_FEATURED_EVENTS take", action.take);

    const response = yield call(fetch, url);
    const responseBody = yield response.json();
    console.log("responseBody of LOAD_Chef_FEATURED_EVENTS in saga is", responseBody);
    yield put(loadChefFeaturedEventsSuccess(responseBody));
  }catch(error) {
    yield put(loadChefFeaturedEventsError(error));
  }
}


// Individual exports for testing
export default function* chefSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadChefApiData(),loadChefEvents(),loadChefFeaturedEvents()]);
}