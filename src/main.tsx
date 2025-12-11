import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// Components (child)
import Spinner from "./components/Spinner";
// i18n
import "./i18n";
// Components (styles)
import Global from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
