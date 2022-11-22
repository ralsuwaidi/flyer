import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EventListView from "./Pages/EventListView";
import reportWebVitals from "./reportWebVitals";

import { createHashRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorView";
import EventDetailView from "./Pages/EventDetailView";

const router = createHashRouter([
  {
    path: "/",
    element: <EventListView />,
    errorElement: <ErrorPage />,
  },
  {
    path: "events/:eventId",
    element: <EventDetailView />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
