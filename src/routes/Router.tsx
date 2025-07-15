import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import LazyLoader from "../components/LazyLoader";

const LandingPage = React.lazy(() => import("../pages/LandingPage/LandingPage"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));
const Home = React.lazy(() => import("../pages/Home/Home"));
const Leaderboard = React.lazy(() => import("../pages/Leaderboard/Leaderboard"));


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
      {
        path: "/leaderboard",
        element:
          <Suspense fallback={<LazyLoader />}>
            <Leaderboard />
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