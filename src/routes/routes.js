import {Download, HelpSupport, Index, Stores} from "./pages";
import {Layout} from "./components";

export const routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Index/>
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
