/**
 * FullStack Generator
 */



// const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Create a FullStack App ",
  prompts: [
    {
      type: "list",
      name: "type",
      message: "Select Deployment Options :",
      default: "Both",
      choices: () => [
        "Stateless Function",
        "React.PureComponent",
        "React.Component"
      ]
    },
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Form",
      // validate: value => {
      //   if (/.+/.test(value)) {
      //     return componentExists(value)
      //       ? "A component or container with this name already exists"
      //       : true;
      //   }

      //   return "The name is required";
      // }
    },
    {
      type: "confirm",
      name: "wantHeaders",
      default: false,
      message: "Do you want headers?"
    },
    {
      type: "confirm",
      name: "wantActionsAndReducer",
      default: true,
      message:
        "Do you want an actions/constants/selectors/reducer tuple for this container?"
    },
    {
      type: "confirm",
      name: "wantSaga",
      default: true,
      message: "Do you want sagas for asynchronous flows? (e.g. fetching data)"
    },
    {
      type: "confirm",
      name: "wantMessages",
      default: true,
      message: "Do you want i18n messages (i.e. will this component use text)?"
    },
    {
      type: "confirm",
      name: "wantLoadable",
      default: true,
      message: "Do you want to load resources asynchronously?"
    },
    {
      type: "confirm",
      name: "wantModel",
      default: true,
      message: "Do you want to start with a model for your Data schema?"
    },
    {
      type: "confirm",
      name: "wantRoutes",
      default: true,
      message: "Do you want Routes?"
    },
    {
      type: "confirm",
      name: "wantController",
      default: true,
      message:
        "Do you want a controller for this model?"
    },
    {
      type: "confirm",
      name: "wantDummyData",
      default: false,
      message: "Do you want dummy data for the model? (e.g. fetching data)"
    }
  ],
  actions: data => {
    // Generate index.js and index.test.js
    var componentTemplate,apiTemplate; // eslint-disable-line no-var

    switch (data.type) {
      case "Stateless Function": {
        componentTemplate = "./container/stateless.js.hbs";
        break;
      }
      default: {
        componentTemplate = "./container/class.js.hbs";
      }
    }

    const actions = [
      {
        type: "add",
        path: "../../app/containers/{{properCase name}}/index.js",
        templateFile: componentTemplate,
        abortOnFail: true
      },
      {
        type: "add",
        path: "../../app/containers/{{properCase name}}/tests/index.test.js",
        templateFile: "./container/test.js.hbs",
        abortOnFail: true
      },
      {
        type: "add",
        path: "../../server/api/{{properCase name}}/tests/index.test.js",
        templateFile: "./api/test.js.hbs",
        abortOnFail: true
      }
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: "add",
        path: "../../app/containers/{{properCase name}}/messages.js",
        templateFile: "./container/messages.js.hbs",
        abortOnFail: true
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: "add",
        path: "../../app/containers/{{properCase name}}/actions.js",
        templateFile: "./container/actions.js.hbs",
        abortOnFail: true
      });
      actions.push({
        type: "add",
        path: "../../app/containers/{{properCase name}}/tests/actions.test.js",
        templateFile: "./container/actions.test.js.hbs",
        abortOnFail: true
      });

      // Constants
      actions.push({
        type: "add",
        path: "../../app/containers/{{properCase name}}/constants.js",
        templateFile: "./container/constants.js.hbs",
        abortOnFail: true
      });

      // Selectors
      actions.push({
        type: "add",
        path: "../../app/containers/{{properCase name}}/selectors.js",
        templateFile: "./container/selectors.js.hbs",
        abortOnFail: true
      });
      actions.push({
        type: "add",
        path:
          "../../app/containers/{{properCase name}}/tests/selectors.test.js",
        templateFile: "./container/selectors.test.js.hbs",
        abortOnFail: true
      });

      // Reducer
      actions.push({
        type: "add",
        path: "../../app/containers/{{properCase name}}/reducer.js",
        templateFile: "./container/reducer.js.hbs",
        abortOnFail: true
      });
      actions.push({
        type: "add",
        path: "../../app/containers/{{properCase name}}/tests/reducer.test.js",
        templateFile: "./container/reducer.test.js.hbs",
        abortOnFail: true
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: "add",
        path: "../../app/containers/{{properCase name}}/saga.js",
        templateFile: "./container/saga.js.hbs",
        abortOnFail: true
      });
      actions.push({
        type: "add",
        path: "../../app/containers/{{properCase name}}/tests/saga.test.js",
        templateFile: "./container/saga.test.js.hbs",
        abortOnFail: true
      });
    }

    // If api needs model,route and controller
    if (data.wantLoadable) {
      actions.push({
        type: "add",
        path: "../../app/containers/{{properCase name}}/Loadable.js",
        templateFile: "./component/loadable.js.hbs",
        abortOnFail: true
      });
    }

    if (data.wantModel) {
      actions.push({
        type: "add",
        path: "../../server/api/{{properCase name}}/model.js",
        templateFile: "./api/model.js.hbs",
        abortOnFail: true
      });
    }

    if (data.wantRoutes) {
      actions.push({
        type: "add",
        path: "../../server/api/{{properCase name}}/routes.js",
        templateFile: "./api/routes.js.hbs",
        abortOnFail: true
      });
    }

    if (data.wantController) {
      actions.push({
        type: "add",
        path: "../../server/api/{{properCase name}}/controller.js",
        templateFile: "./api/controller.js.hbs",
        abortOnFail: true
      });
    }

    if (data.wantDummyData) {
      actions.push({
        type: "add",
        path: "../../server/api/{{properCase name}}/dummyData.js",
        templateFile: "./api/dummyData.js.hbs",
        abortOnFail: true
      });
    }


    actions.push({
      type: "prettify",
      path: ["/containers/","/api/"]
    });

    return actions;
  }
};