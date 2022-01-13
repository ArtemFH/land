import {Box} from "@mui/material";
import styled from "styled-components"
import {useState} from "react";
import axios from "axios";

function Login() {
    const [data, setData] = useState('');

    const obj = {
        email: "tulyavkoilya@yandex.ru",
        password: "test123123"
    };

    const postUser = () => {
        axios.post(`https://api.englishpatient.org/login`, {...obj}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setData(res.data);
        }).catch((error) => {
            console.error(error)
        })
    }

    const setToken = () => {
        axios.get(`https://api.englishpatient.org/users/me`, {
            headers: {
                'Authorization': data.token,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setData(res.data)
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <Container>
            <div>
                <button onClick={postUser} disabled={data.token} type="submit">Post</button>
                {data.token}
            </div>
            <div>
                <button onClick={setToken} disabled={!data.token} type="submit">Get</button>
                {data.email}
            </div>
        </Container>
    )
}

export default Login;

const Container = styled(Box)`
  min-height: 410px;
  width: 1440px;
  display: flex;
  flex-wrap: wrap;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: space-evenly;

  & div {
    width: 40%;
    margin: 50px;
    display: flex;
    text-align: center;
    flex-direction: column;
  }
`