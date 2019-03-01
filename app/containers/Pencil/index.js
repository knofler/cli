/**
 *
 * Pencil
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
  loadPencilApiData,
  loadPencilEvents,
  loadPencilFeaturedEvents
 } from "./actions";

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectPencil,
  makePencilApiDataSelector,
  makePencilEventsSelector,
  makePencilFeaturedEventSelector
 } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Pencil extends React.Component {
  componentDidMount() {
    // load API Data
    this.props.loadPencilApiData("111111", 88, 99);
    // load events
    this.props.loadPencilEvents("222222", 0, 14, "");
    // // load Featured Events
    this.props.loadPencilFeaturedEvents("333333", 1, 12);
  }
  render() {
      const featuredEvents = {
        ...this.props.featuredEvents
      };
      console.log("featuredEvents in index", featuredEvents);
      
      const events = {
        ...this.props.events
      };
      console.log("events in index", events);
    return (
      <div>
        <Helmet>
          <title>Pencil</title>
          <meta name="description" content="Description of Pencil" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Pencil.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  apiDataEvents_Pencil: PropTypes.array,
  loadPencilApiData: PropTypes.func,
  events_Pencil: PropTypes.array,
  loadPencilEvents: PropTypes.func,
  featuredEvents_Pencil: PropTypes.array,
  loadPencilFeaturedEvents: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  pencil: makeSelectPencil(),
  events_Pencil: makePencilEventsSelector(),
  featuredEvents_Pencil: makePencilFeaturedEventSelector(),
  apiDataEvents_Pencil: makePencilApiDataSelector()
});

function mapDispatchToProps(dispatch) {
  return {
    // dispatch,
    loadPencilApiData: (tenantId, skip, take) =>
    dispatch(loadPencilApiData(tenantId, skip, take)),
    loadPencilEvents: (tenantId, skip, take, searchTerm) =>
    dispatch(loadPencilEvents(tenantId, skip, take, searchTerm)),
    loadPencilFeaturedEvents: (tenantId, skip, take) =>
    dispatch(loadPencilFeaturedEvents(tenantId, skip, take))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'pencil', reducer });
const withSaga = injectSaga({ key: 'pencil', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Pencil);
