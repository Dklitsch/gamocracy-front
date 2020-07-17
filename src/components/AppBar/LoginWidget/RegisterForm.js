import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import TwoPanelPopup from './Layout/TwoPanelPopup';
import VerticalList from './Layout/VerticalList';

const useStyles = makeStyles((theme) => ({}));

const Register = (props) => {

    const classes = useStyles();

    const register = "Register";

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [body, setBody] = useState(null);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState(null);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);

    if (registrationSuccess) {
        props.changeState();
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        setBody(JSON.stringify({ email: username, password: password}))
    }

    useEffect(() => { 
        async function fetchData() {
            const response = await fetch(process.env.REACT_APP_API_ADDRESS + register, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: body
            }) 
            setRegistrationSuccess(response.ok);
            if (!response.ok) {
                let result = await response.json();
                setEmailErrorMessage(result.errors.Email)
                setPasswordErrorMessage(result.errors.Password)
            }
        }
        if (body != null)
        {
            fetchData();
        }
    }, [body]);

    const leftComponent = <Button onClick={props.changeState}>Already a member? Login</Button>
    const rightComponent = (<form onSubmit={(e) => handleSubmit(e)}>
    <VerticalList>
                <TextField 
                    label="Username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    required
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={emailErrorMessage != null}
                    helperText={emailErrorMessage}
                />
                <TextField 
                    label="Password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required
                    error={passwordErrorMessage != null}
                    helperText={passwordErrorMessage}
                    type="password"
                />
                <Button variant="contained" type="submit">Register</Button>
        </VerticalList>
    </form>)

    return (<TwoPanelPopup left={leftComponent} right={rightComponent} />)
}

export default Register;