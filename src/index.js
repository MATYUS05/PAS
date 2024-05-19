import * as React from "react";
import "./Index.css";
import App from "./App";
import Game from "./components/Game/Game";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Member from "./components/Member/Member";
import CardList from "./components/Makanan/Makanan";
import CardList1 from "./components/Minuman/Minuman";
import HotelList from "./components/HotelAPI/hotelAPI";

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
    path: "/makan",
    element: <CardList />
  },
  {
    path: "/minum",
    element: <CardList1 />
  },
  {
    path: "/hotel",
    element: <HotelList />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

