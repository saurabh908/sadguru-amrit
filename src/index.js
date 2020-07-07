import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import Routes from "./routing";

import configureStore from "./redux-saga/getStore";

const store = configureStore();
const rootElement = document.getElementById("root");

const RenderRoutes = props => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

ReactDOM.render(<RenderRoutes />, rootElement);
