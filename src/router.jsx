import React from "react";
import { createBrowserRouter } from "react-router-dom";
import APP from "./App";
import Error from "./pages/Error";
 
export const router = createBrowserRouter([
    {
        path: "/",
        errorElement:<Error />,
        element: <APP />,
    },
]);