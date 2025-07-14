import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import LazyLoader from "../components/LazyLoader";

const LandingPage = React.lazy(() => import("../pages/LandingPage/LandingPage"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));
// const LandingPage = React.lazy(() => import("../pages/LandingPage/LandingPage"));


export const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element:
      <Suspense fallback={<LazyLoader />}>
        <LandingPage />
      </Suspense>
  },
  {
    path: "/",
    Component: App,
    children: [
      // {
      //   index: true,
      //   element: 
      //   // <Suspense fallback={<LazyLoader />}>
      //     <LandingPage />
      //   // </Suspense>
      // },

    ]
  },
  {
    path: "/*",
    element:
      <Suspense fallback={<LazyLoader />}>
        <NotFound />
      </Suspense>
  }
]);