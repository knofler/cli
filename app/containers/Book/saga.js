/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/*
*
* BOOK saga
*
*/

import { all, call, put, takeLatest } from "redux-saga/effects";

import { 
  BOOK_CONST_ADD_POST 
} from "./constants";

import { 
  bookActionAddSuccess, 
  bookActionAddError 
} from "./actions";

const herokuAPIURL = "https://mernaircanteen.herokuapp.com";
const model = "/api/chefs";
const getUrl = process.env.API_URL || herokuAPIURL;
const url = getUrl + model;

console.log("process.env.API_URL", process.env.API_URL);
console.log("herokuAPIURL is", herokuAPIURL);
console.log("url is ", url);

// Load Functions on Event Change

function* bookSagaAdd() {
  yield takeLatest(BOOK_CONST_ADD_POST, fetchBookAdd);
}


function* fetchBookAdd(action) {
  try {
    // CRUD_CONST_BOOK event action and api call
    console.log(
      "BOOK_CONST_ADD_POST constant's action in saga is:: ",
      action
    );
    console.log(
      "BOOK_CONST_ADD constant's action.data in saga is:: ",
      action.input
    );
    console.log(
      "BOOK_CONST_ADD_POST constant's action.model in saga is:: ",
      action.model
    );

    if (action.input !== undefined && action.model !== undefined) {
      const BookUrl = `${getUrl}/api/${action.model}`;
      console.log("BookUrl:", BookUrl);
      const response = yield call(fetch, BookUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(action.input)
      });
      const responseBody = yield response.json();
      console.log(
        "responseBody of BOOK_CONST_ADD_POST in saga is",
        responseBody
      );
      if (!responseBody.errors) {
        window.localStorage.setItem(
          "Book-data",
          JSON.stringify(responseBody)
        );
        yield put(bookActionAddSuccess(responseBody));
      }
    }
  } catch (error) {
    yield put(bookActionAddError(error));
  }
}

// Individual exports for testing
export default function* bookSaga() {
  // See example in containers/HomePage/saga.js
  yield all([bookSagaAdd()]);
}
