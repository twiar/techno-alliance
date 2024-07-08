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
import "react-image-gallery/styles/css/image-gallery.css";
import "react-multi-carousel/lib/styles.css";
import Suppliers from "./routes/suppliers";
import About from "./routes/about";
import Contacts from "./routes/contacts";
import Product from "./routes/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
    ],
  },
  {
    path: "/first",
    element: <First />,
  },
  {
    path: "/second",
    element: <Second />,
  },
  {
    path: "/third",
    element: <Third />,
  },
  {
    path: "/suppliers",
    element: <Suppliers />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);