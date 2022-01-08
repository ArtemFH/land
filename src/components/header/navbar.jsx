import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "./image/logo.svg"
import {styled} from "@mui/system";

function NavBar() {
    return (
        <StyledDiv>
            <Box style={styles.container}>
                <Link style={styles.buttonStyleFirst} to={''}>
                    <img src={logo} alt={''}/>
                </Link>
                <Box style={styles.boxStyle}>
                    <Link style={styles.buttonStyleFirst} to={'stores'}>
                        <Button>Stores</Button>
                    </Link>
                    <Link style={styles.buttonStyleFirst} to={'help-support'}>
                        <Button>Help & Support</Button>
                    </Link>
                    <Link style={styles.buttonStyleLast} to={'download'}>
                        <Button style={styles.buttonDownload}>Download</Button>
                    </Link>
                </Box>
            </Box>
        </StyledDiv>
    )
}

export default NavBar;

const StyledDiv = styled('div')({
    backgroundColor: "yellow",
})

const styles = {
    buttonStyleFirst: {
        textDecoration: "none",
        display: "grid"
    }, buttonStyleLast: {
        textDecoration: "line-through"
    }, buttonDownload: {
        height: "50px",
        width: "120px",
        backgroundColor: "#0F2336",
        color: "#FFFFFF"
    }, boxStyle: {
        width: "410px",
        display: "flex",
        justifyContent: "space-between"
    }, container: {
        display: "flex",
        justifyContent: "space-around",
        height: "50px",
        padding: "30px 115px"
    }
}