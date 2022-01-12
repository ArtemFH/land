import {Box} from "@mui/material";
import styled from "styled-components"
import Advantages from "./advantages";
import {useEffect, useState} from "react";
import axios from "axios";

function RoflProps() {
    // useEffect(() => {
    //     console.table(object);
    // }, [object]);

    const [object, setObject] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            setObject(res.data);
        })
    }, [setObject]);

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