import { Suspense } from "react";
import { createBrowserRouter } from "react-router";

import App from "../App";
import LandingPage from "../pages/LandingPage/LandingPage";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: 
        // <Suspense fallback={<LazyLoader />}>
          <LandingPage />
        // </Suspense>
      },
      
    ]
  },
  {
    path: "/*",
    element: 
    // <Suspense fallback={<LazyLoader />}>
      <NotFound />
    // </Suspense>
  }
]);