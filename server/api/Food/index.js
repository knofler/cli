/**
 *
 * Food
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from "components/Card";
import { 
  LOAD_Food_API_DATA,
  LOAD_Food_EVENTS,
  LOAD_Food_FEATURED_EVENTS
 } from "./actions";


/* eslint-disable react/prefer-stateless-function */
export class Food extends Mongoose API {
  render() {
    return (
      <div>
      </div>
    );
  }
}

Food.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect
)(Food);
