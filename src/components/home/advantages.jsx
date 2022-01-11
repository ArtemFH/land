import styled from "styled-components";
import {Box} from "@mui/material";

function Advantages(props) {
    return (
        <Card>
            <img src={props.data.image} alt={''}/>
            <p id={'title'}>{props.data.title}</p>
            <p id={'description'}>{props.data.description}</p>
        </Card>
    )
}

export default Advantages;

const Card = styled(Box)`
  width: 325px;
  height: 225px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  font-family: Roboto, sans-serif;

  & img {
    width: 105px;
    height: 105px;
    margin: 0 auto;
  }

  #title {
    color: #0F2336;
    font-size: 25px;
    font-weight: bold;
    padding-top: 25px;
  }

  #description {
    color: #576D81;
    font-size: 16px;
    padding-top: 10px;
  }
`