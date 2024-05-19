import * as React from "react";
import "./Index.css";
import App from "./App";
import Game from "./components/Game/Game";
import CardList from "./components/Makanan/Makanan";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Member from "./components/Member/Member";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/game",
    element:<Game /> ,
  },
  {
    path: "/about",
    element:<Member /> ,
  },
  {
    path: "/kulinerMKN",
    element: <CardList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

