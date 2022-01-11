import styled from "styled-components";
import {Box} from "@mui/material";
import logo from "./images/Logo.svg"
import leftLeaf from "./images/LeftLeaf.svg"
import rightLeaf from "./images/RightLeaf.svg"

function Footer() {
    return (
        <FooterLayout>
            <Detail>
                <Box>
                    <img src={logo} alt={''}/>
                </Box>
                <Box>
                    <ul>
                        <li>Company</li>
                        <li>Merchant Portal</li>
                    </ul>
                    <ul>
                        <li>Support</li>
                        <li>FAQ</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul>
                        <li>Follow Us</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                    </ul>
                </Box>
            </Detail>
            <BackgroundDetail>
                <img src={leftLeaf} alt={''}/>
                <img src={rightLeaf} alt={''}/>
            </BackgroundDetail>
        </FooterLayout>
    )
}

export default Footer;

const FooterLayout = styled('footer')`
  height: 300px;
  position: relative;
  background-color: #263238;
`

const Detail = styled(Box)`
  z-index: 1;
  position: relative;
  padding: 55px 250px 0 250px;
  font-family: Roboto, sans-serif;
  font-weight: 300;

  li {
    opacity: .7;
    color: #FFFFFF;
    font-size: 14px;
    list-style: none;
    padding: 5px;
  }

  li:first-child {
    opacity: 1;
    color: #00CCCC;
    font-size: 12px;
    font-weight: bold;
    padding-bottom: 13px;
  }

  & {
    display: flex;
    justify-content: space-between;
  }

  & div:first-child {
    width: 50%;
  }

  & div:last-child {
    width: 50%;
    display: flex;
    justify-content: space-around;
  }

  & div:first-child img {
    width: 130px;
  }
`

const BackgroundDetail = styled(Box)`
  width: 100%;

  & :first-child {
    left: 0;
    top: -60px;
    position: absolute;
  }

  & :last-child {
    right: 0;
    bottom: 0;
    position: absolute;
  }
`