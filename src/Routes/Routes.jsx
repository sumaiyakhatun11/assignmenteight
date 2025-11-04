import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from '../pages/Root/Root'




export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,

    },
]);

