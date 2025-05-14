import React from "react";
import { createBrowserRouter } from "react-router-dom";
import APP from "./App";
import Error from "./components/404/Error";
 
export const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<Error />,
        element: <APP />,
    },
]);