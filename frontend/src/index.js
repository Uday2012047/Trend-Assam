import React from "react";
import ReactDOM from "react-dom/client";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./index.css";

const options = {
  timeout: 3000,
  position: positions.MIDDLE,
  transition: transitions.SCALE,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);

// serviceWorkerRegistration.register();
