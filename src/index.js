import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Components (child)
import Spinner from "./components/Spinner";
import reportWebVitals from "./reportWebVitals";
// i18n
import i18n from "./i18n";
// Components (styles)
import Global from "./styles/global";



ReactDOM.render(
  <React.StrictMode>
    <Global />
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
