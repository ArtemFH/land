import {Button, Grid} from "@mui/material";
import logo from "./image/logo.svg"
import {useNavigate} from "react-router-dom";

function ButtonLink({path, children}) {
    const navigate = useNavigate();

    const handleClick = () => navigate(path);

    return (
        <Button variant={'contained'} onClick={handleClick}>{children}</Button>
    )
}

function NavBar() {
    return (
        <Grid flex>
            <Grid>
                <img src={logo} alt={''}/>
            </Grid>
            <Grid>
                <ButtonLink path={'stores'}>Stores</ButtonLink>
                <ButtonLink path={'help-support'}>Help & Support</ButtonLink>
                <ButtonLink path={'download'}>Download</ButtonLink>
            </Grid>
        </Grid>
    )
}

export default NavBar;