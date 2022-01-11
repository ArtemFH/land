import styled from "styled-components";
import {Box} from "@mui/material";
import logo from "./images/Logo.svg"
import leftLeaf from "./images/LeftLeaf.svg"
import rightLeaf from "./images/RightLeaf.svg"

function Footer() {
    return (
        <FooterLayout>
            <Box>
                <img src={logo} alt={''}/>
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
            </Box>
            <BackgroundFooter>
                <img src={leftLeaf} alt={''}/>
                <img src={rightLeaf} alt={''}/>
            </BackgroundFooter>
        </FooterLayout>
    )
}

export default Footer;

const FooterLayout = styled(Box)`
  width: 1440px;
  height: 300px;
  background-color: #263238;
`

const BackgroundFooter = styled(Box)`
  position: relative;

  & :first-child {
    position: absolute;
    left: 0;
  }

  & :last-child {
    position: absolute;
    right: 0;
  }
`