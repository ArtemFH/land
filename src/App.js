import {routes} from "./routes/routes";
import {useRoutes} from "react-router-dom";

function App() {
    return (
        <>{useRoutes(routes)}</>
    );
}

export default App;