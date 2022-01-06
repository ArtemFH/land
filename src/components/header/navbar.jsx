import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "./image/logo.svg"
import {styled} from "@mui/system";

function NavBar() {
    return (
        <StyledDiv>
            <Box style={{
                display: "flex",
                justifyContent: "space-around",
                height: "50px",
                padding: "30px 115px"
            }}>
                <Link style={{textDecoration: "none"}} to={''}>
                    <img src={logo} alt={''}/>
                </Link>
                <Box style={{
                    width: "410px",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Link style={ButtonStyle} to={'stores'}>
                        <Button>Stores</Button>
                    </Link>
                    <Link style={ButtonStyle} to={'help-support'}>
                        <Button>Help & Support</Button>
                    </Link>
                    <Link style={ButtonStyle} to={'download'}>
                        <Button style={{
                            height: "50px",
                            width: "120px",
                            backgroundColor: "#0F2336",
                            color: "#FFFFFF"
                        }}>Download</Button>
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

const ButtonStyle = {
    textDecoration: "none",
    display: "grid"
}