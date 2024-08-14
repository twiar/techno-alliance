import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "reset-css";
import "./assets/index.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-multi-carousel/lib/styles.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);