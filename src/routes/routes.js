import {Download, HelpSupport, Home, Stores} from "./pages";
import {Layout} from "./components";

export const routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            }, {
                path: "stores",
                element: <Stores/>
            }, {
                path: "help-support",
                element: <HelpSupport/>
            }, {
                path: "download",
                element: <Download/>
            },
        ]
    }
]
