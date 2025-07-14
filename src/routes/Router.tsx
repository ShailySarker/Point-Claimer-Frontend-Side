import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import LazyLoader from "../components/LazyLoader";

const LandingPage = React.lazy(() => import("../pages/LandingPage/LandingPage"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));
const Home = React.lazy(() => import("../pages/Home/Home"));


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
      {
        path: "/home",
        element:
          <Suspense fallback={<LazyLoader />}>
            <Home />
          </Suspense>
      },

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