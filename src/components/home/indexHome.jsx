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
            <Img>
                <img src={couple} alt={''}/>
            </Img>
        </Container>
    )
}

export default IndexHome;

const Container = styled(Box)`
  height: 610px;
  display: flex;
  width: 1210px;
  margin: 0 auto;
  position: relative;
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
  display: flex;
  color: #0F2336;
  font-size: 18px;
  margin-top: 50px;
  font-weight: 700;
  border-radius: 14px;
  text-transform: none;
  background-color: #00CCCC;
  justify-content: space-evenly;
  box-shadow: 0 3px 18px 0 rgba(0, 201, 201, 0.55);

  &:hover {
    background-color: #00ABAB;
  }
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

const Img = styled('div')`
  position: absolute;
  right: -30px;
  height: 100%;
  overflow: hidden;

  img {
    margin-top: -110px;
  }
`