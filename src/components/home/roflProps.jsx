import {Box} from "@mui/material";
import styled from "styled-components"
import Advantages from "./advantages";
import logo from "./image/Arrow.svg"
import {useState} from "react";

const ObjAdvantages = [
    {
        image: logo,
        title: "Order ahead, skip the line",
        description: "Feel like a rock star when you bypass the line and save a bunch of time."
    },
    {
        image: logo,
        title: "Bonus and discounts",
        description: "You can enjoy lots of discounts from the selected stores, or accumulate points."
    },
    {
        image: logo,
        title: "Share with your friends",
        description: "Send gifts to your friends and family, and pick up for your coworkers when they can't get away ."
    }
]

function RoflProps() {
    // useEffect(() => {
    //     console.table(object);
    // }, [object]);

    const [object, setObject] = useState(ObjAdvantages);

    const mixer = () => {
        setObject([...object.sort(() => Math.random() - 0.5)]);
    }

    return (
        <Container onClick={mixer}>
            {/*<pre>{JSON.stringify(object, undefined, 2)}</pre>*/}
            {object.map((item, key) => <Advantages key={key} data={item}/>)}
        </Container>
    )
}

export default RoflProps;

const Container = styled(Box)`
  min-height: 410px;
  width: 1440px;
  display: flex;
  flex-wrap: wrap;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: space-evenly;
`