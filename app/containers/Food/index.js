/**
 *
 * Food
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Card from "components/Card";
import { 
  LOAD_Food_API_DATA,
  LOAD_Food_EVENTS,
  LOAD_Food_FEATURED_EVENTS
 } from "./actions";

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectFood from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Food extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Food</title>
          <meta name="description" content="Description of Food" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Food.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  food: makeSelectFood(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'food', reducer });
const withSaga = injectSaga({ key: 'food', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Food);
