import {Outlet} from "react-router-dom";
import NavBar from "../components/header/navbar";
import {Box, Container} from "@mui/material";

function Layout() {
    return (
        <Container>
            <Box>
                <NavBar/>
            </Box>
            <Box>
                <Box>
                    <Outlet/>
                </Box>
            </Box>
        </Container>
    );
}

export default Layout;