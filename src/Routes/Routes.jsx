import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from '../pages/Root/Root'
import Home from '../pages/Home/Home'
import ShowAllApps from "../pages/ShowAllApps/ShowAllApps";
import AppsDetails from "../pages/AppsDetails/AppsDetails";
import Installation from "../pages/Installation/Installation";




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
            },
            {

                path: "/apps",
                loader: () => fetch('/appsData.json'),
                Component: ShowAllApps,
            },
            {

                path: "/apps/:id",
                loader: () => fetch('/appsData.json'),
                Component: AppsDetails,
            },
            {

                path: "/installation",
                loader: () => fetch('/appsData.json'),
                Component: Installation,
            },


        ]

    },
]);

