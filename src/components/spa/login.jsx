import {Box, TextField, Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components"
import {useEffect, useState} from "react";
import axios from "axios";

const defaultValue = {
    email: "tulyavkoilya@yandex.ru",
    password: "test123123"
};


function User(props) {
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.removeItem("token");
        dispatch({type: "SAVE_TOKEN"})
    }

    return (
        <div>
            <pre>{JSON.stringify(props.user, undefined, 2)}</pre>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

function Login() {

    useEffect(() => {
        if (token.token) setToken();
    }, []);

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const dispatch = useDispatch();
    const token = useSelector(state => state);
    const [user, setUser] = useState({})

    const addToken = (token) => {
        dispatch({type: "SAVE_TOKEN", payload: token})
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setData({...data, [event.target.name]: value});
    }

    const postUser = (event) => {
        event.preventDefault();
        axios.post(`https://api.englishpatient.org/login`, {...data}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (!res.data.error) {
                const tk = res.data.token
                localStorage.setItem("token", tk)
                addToken(tk)
                setToken()
            }
        }).catch((error) => {
            console.error(error)
        })
    }

    const setToken = () => {
        axios.get(`https://api.englishpatient.org/users/me`, {
            headers: {
                'Authorization': token.token,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setUser(res.data);
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <Container>
            {token.token && <User user={user}/>}
            {!token.token && <form onSubmit={postUser}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    label="Password"
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign In
                </Button>
            </form>}
        </Container>
    )
}

export default Login;

const Container = styled(Box)`
  min-height: 567px;
  width: 1440px;
  display: flex;
  flex-wrap: wrap;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: space-evenly;
`