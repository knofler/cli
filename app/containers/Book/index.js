/* eslint-disable no-return-assign */
/* eslint-disable func-names */
/* eslint-disable react/no-string-refs */
/* eslint-disable no-console */
/* eslint-disable comma-dangle */

/**
 *
 * Book
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
import Form from "components/Form";
import { 
  bookActionAdd,
  bookActionAddPost,
  bookActionAddChangeModel,
  bookActionAddFormStructure,
  bookActionAddSetFormState,
  bookActionAddFormInputReset
 } from "./actions";

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectBook,
  makeBookAddPayloadSelector,
  makeBookAddModelSelector,
  makeBookAddFormStructureSelector,
  makeBookAddInputSelector,
  makeBookAddFormItemResetSelector
 } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import "./book.css";

/* eslint-disable react/prefer-stateless-function */
export class Book extends React.Component {
  constructor(props) {
    super(props);
    // Local component States
    this.state = {
      render: "This is Default Add Form Render Space"
    };
    // Binding Component specific methods
    // this.addFormAPICall = this.addFormAPICall.bind(this);
  }
  componentDidMount() {
    // On Component Mount, set the form structure and Model
    this.props.bookDispatchAdd({
      model: this.props.model,
      struct: this.props.formStructure
    });

  }
  
  // Form Handlechange event handlers              
  handleChange = (element, e) => {
    e.preventDefault();
    console.log(
      "e.currentTarget.name:",
      e.currentTarget.name,
      "e.currentTarget.value",
      e.currentTarget.value
    );

    const userInput = {};
    userInput[e.currentTarget.name] = e.currentTarget.value;

    setTimeout(() => {
      this.props.bookDispatchAddSetFormState(userInput);
    }, 10);
  };
                
  // ADD Form Methods
  addFormAPICall = e => {
    e.preventDefault();
    console.log("Add Form Data Method is invoked");
    const userInput = {};
    this.props.formStructure.map(
      // eslint-disable-next-line no-return-assign
      each => (userInput[each.name] = `${e.target[each.name].value}`)
    );
    setTimeout(() => {
      console.log("userInput in add is :", userInput);
      console.log(
        "After input setInput BOOK_STATE_ADD_INPUT in addFormApi Func is  :",
        this.props.bookPropsAddInput
      );
      // Make API call
      this.props.bookDispatchAddPost({
        model: this.props.model,
        input: userInput
      });
      // clear the local form
      this.refs.form.reset();
      // clear BOOK_STATE_ADD_INPUT
      // this.props.bookDispatchAddFormInputReset();
    }, 200);
  };             
            
  render() {
     
    if (this.props.formStructure && this.props.deploy === true) {
      return (
        <div>
            <Helmet>
              <title>Book</title>
              <meta name="description" content="Description of Book" />
            </Helmet>
            <FormattedMessage {...messages.header} />
            <div>
              <div>
                Injected Model is :::
                <strong> {this.props.bookPropsAddModel}</strong>
              </div>
              <div>
                Form Structure Passed on ::
                <pre>
                  {JSON.stringify(this.props.bookPropsAddFormStructure)}
                </pre>
              </div>
              <div>
                <p>
                  Submited Forms JSON Response :: <br />
                  <pre className="jsonResponse">
                    {JSON.stringify(this.props.bookPropsAddPayload)}
                  </pre>
                </p>
              </div>
              <div>
                User Input is ::
                <pre className="userInput">
                  {JSON.stringify(this.props.bookPropsAddInput)}
                </pre>
              </div>
              <div>
                Form Reset Status :::
                <strong>
                  {" "}
                  {JSON.stringify(this.props.bookPropsAddFormReset)}
                </strong>
            </div>
            </div>
              {/* <Form
                formStructure={this.props.formStructure}
                submitFunc={this.addFormAPICall}
                ref={this.state.ref}
              /> */}
            {/* Display Form */}
              <div>
                <form ref="form" onSubmit={this.addFormAPICall}>
                  {this.props.formStructure.map(each => (
                    <div>
                      <label>{each.label}</label>
                      <input
                        type={each.type}
                        name={each.name}
                        onChange={e => this.handleChange(each.name, e)}
                      />
                    </div>
                  ))}
                  <button type="submit">Submit</button>
                </form>
              </div>
          </div>
      );
    }
    return (
      <div>
        <Helmet>
          <title>Book</title>
          <meta name="description" content="Description of Book" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <div>
          <pre>{/* <code>{this.state.bookPropsAddPayload}</code> */}</pre>
        </div>
      </div>
    );               
  }
}

Book.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  formStructure: PropTypes.array.isRequired,
  model: PropTypes.string.isRequired,
  deploy: PropTypes.bool.isRequired,
  bookDispatchAdd: PropTypes.func,
  bookDispatchAddPost: PropTypes.func,
  bookDispatchAddFormStructure: PropTypes.func,
  bookDispatchAddChangeModel: PropTypes.func,
  bookDispatchAddFormInputReset: PropTypes.func,
  bookDispatchAddSetFormState: PropTypes.func,
  bookPropsAddPayload: PropTypes.object,
  bookPropsAddInput: PropTypes.object,
  bookPropsAddFormReset: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  //book: makeSelectBook(),
  bookPropsAddPayload: makeBookAddPayloadSelector(),
  bookPropsAddModel: makeBookAddModelSelector(),
  bookPropsAddFormStructure: makeBookAddFormStructureSelector(),
  bookPropsAddInput: makeBookAddInputSelector(),
  bookPropsAddFormReset: makeBookAddFormItemResetSelector()
});

function mapDispatchToProps(dispatch) {
  return {
    // dispatch,
   bookDispatchAdd: ({ struct, model }) =>
      dispatch(bookActionAdd({ struct, model })),
    bookDispatchAddPost: ({ input, model }) =>
      dispatch(bookActionAddPost({ input, model })),
    bookDispatchAddSetFormState: input =>
      dispatch(bookActionAddSetFormState(input)),
    bookDispatchAddFormInputReset: () =>
      dispatch(bookActionAddFormInputReset()),
    bookDispatchAddFormStructure: ({ data }) =>
      dispatch(bookActionAddFormStructure({ data })),
    bookDispatchAddChangeModel: ({ model }) =>
      dispatch(bookActionAddChangeModel({ model }))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'book', reducer });
const withSaga = injectSaga({ key: 'book', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Book);
