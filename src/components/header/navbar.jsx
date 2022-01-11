import styled from "styled-components";
import {Link} from "react-router-dom";
import {Box, Button} from "@mui/material";
import logo from "./image/Logo.svg"

function NavBar() {
    return (
        <Links>
            <Url to={''}>
                <img src={logo} alt={''}/>
            </Url>
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
  height: 50px;
  width: 1210px;
  display: flex;
  margin: 0 auto;
  padding: 30px 50px;
  justify-content: space-between;
`

const Url = styled(Link)`
  display: grid;
  text-decoration: none;
`

const ButUrl = styled(Button)`
  color: #000000;
  font-size: 14px;
  text-transform: none;
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