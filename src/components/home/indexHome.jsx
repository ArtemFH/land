import {Box, Button, Typography} from "@mui/material";
import styled from "styled-components"
import arrow from "./image/Arrow.svg"
import couple from "./image/Couple.webp"

function IndexHome() {
    return (
        <Container>
            <BoxIndex>
                <TypoIndex>
                    <Typography>Order ahead</Typography>
                    <Typography>and earn rewards for every purchase</Typography>
                </TypoIndex>
                <ButtonIndex variant="contained">Discover how<img src={arrow} alt={''}/></ButtonIndex>
            </BoxIndex>
            <Imgs>
                <img src={couple} alt={''}/>
            </Imgs>
        </Container>
    )
}

export default IndexHome;

const Container = styled(Box)`
  display: flex;
  position: relative;
  height: 610px;
`

const BoxIndex = styled(Box)`
  left: 0;
  width: 550px;
  height: 475px;
  margin: 0 50px;
  position: absolute;
`

const ButtonIndex = styled(Button)`
  width: 208px;
  height: 60px;
  color: #0F2336;
  margin-top: 50px;
  border-radius: 14px;
  background-color: #00CCCC;
  box-shadow: 0px 3px 18px 0px rgba(0, 201, 201, 0.55);
`

const TypoIndex = styled(Box)`
  margin-top: 100px;

  p {
    font-size: 55px;
  }

  & :first-child {
    color: #00CCCC;
  }

  & :last-child:after {
    content: ".";
    color: #F3AF47;
  }
`

const Imgs = styled('div')`
  position: absolute;
  right: -30px;
  height: 100%;
  overflow: hidden;

  img {
    margin-top: -110px;
  }
`