import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from '../pages/Root/Root'
import Home from '../pages/Home/Home'




export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch('/appsData.json'),
                Component: Home,
            }
        ]

    },
]);

