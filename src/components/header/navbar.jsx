import {Button, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "./image/logo.svg"

function NavBar() {
    return (
        <Grid style={{
            display: "flex",
            justifyContent: "space-around",
            height: "50px",
            padding: "30px 115px"
        }}>
            <Grid>
                <img src={logo} alt={''}/>
            </Grid>
            <Grid style={{
                width: "410px",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Link style={{textDecoration: "none"}} to={'stores'}>
                    <Button>Stores</Button>
                </Link>
                <Link style={{textDecoration: "none"}} to={'help-support'}>
                    <Button>Help & Support</Button>
                </Link>
                <Link style={{textDecoration: "none"}} to={'download'}>
                    <Button style={{
                        height: "50px",
                        width: "120px",
                        backgroundColor: "#0F2336",
                        color: "#FFFFFF"
                    }}>Download</Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default NavBar;