/**
 *
 * Chef
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
  LOAD_Chef_API_DATA,
  LOAD_Chef_EVENTS,
  LOAD_Chef_FEATURED_EVENTS
 } from "./actions";

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectChef from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Chef extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Chef</title>
          <meta name="description" content="Description of Chef" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Chef.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  chef: makeSelectChef(),
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

const withReducer = injectReducer({ key: 'chef', reducer });
const withSaga = injectSaga({ key: 'chef', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Chef);
