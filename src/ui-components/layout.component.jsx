import {Outlet} from "react-router-dom";
import NavBar from "../components/header/navbar";
import {Grid} from "@mui/material";

function Layout() {
    return (
        <Grid container direction="column">
            <Grid item>
                <NavBar/>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Outlet/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Layout;