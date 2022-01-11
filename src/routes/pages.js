import {Suspense, lazy} from "react";

const Loader = (Component) => (props) => (
    <Suspense fallback={<></>}>
        <Component {...props}/>
    </Suspense>
)

export const Home = Loader(lazy(() => import('../pages/home.page')));
export const Stores = Loader(lazy(() => import('../pages/stores.page')));
export const HelpSupport = Loader(lazy(() => import('../pages/help-support.page')));
export const Download = Loader(lazy(() => import('../pages/download.page')));