import {Outlet} from "react-router-dom";
import NavBar from "../components/header/navbar";
import {Box} from "@mui/material";

function Layout() {
    return (
        <>
            <Box>
                <NavBar/>
            </Box>
            <Box>
                <Box>
                    <Outlet/>
                </Box>
            </Box>
        </>
    );
}

export default Layout;