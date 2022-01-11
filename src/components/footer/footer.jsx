import styled from "styled-components";
import {Link} from "react-router-dom";
import {Box, Button} from "@mui/material";

function NavBar() {
    return (
        <Links>
            <UrlBox>
                <Url to={'stores'}>
                    <ButUrl>Stores</ButUrl>
                </Url>
                <Url to={'help-support'}>
                    <ButUrl>Help & Support</ButUrl>
                </Url>
                <Url to={'download'}>
                    <ButDown>Download</ButDown>
                </Url>
            </UrlBox>
        </Links>
    )
}

export default NavBar;

const Links = styled(Box)`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 30px 115px;
`

const Url = styled(Link)`
  text-decoration: none;
  display: grid;
`

const ButUrl = styled(Button)`
  text-transform: none;
  font-size: 14px;
  color: #000000;
`

const ButDown = styled(ButUrl)`
  height: 50px;
  width: 120px;
  background-color: #0F2336;
  color: #FFFFFF;
  border-radius: 8px;
`

const UrlBox = styled(Box)`
  width: 410px;
  display: flex;
  justify-content: space-between;
`