import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import First from "./routes/first";
import Second from "./routes/second";
import Third from "./routes/third";
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "reset-css";
import "./assets/index.css";
import "./assets/style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
    ],
  },
  {
    path: "first",
    element: <First />,
  },
  {
    path: "second",
    element: <Second />,
  },
  {
    path: "third",
    element: <Third />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);