import React, { useState, useEffect } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import TwoPanelPopup from '../Layout/TwoPanelPopup';
import VerticalList from '../Layout/VerticalList';
import usePost from '../../../../CustomHooks/usePost'
import apiResponse from '../../../../CustomHooks/ApiResponse';

const useStyles = makeStyles((theme) => ({}));

const RegisterForm = (props) => {

    const register = "Register";
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [body, setBody] = useState(null);
    const result = usePost(register, body);
    const emailErrorMessage = result.body !== null ? result.body.errors.Email : null;
    const passwordErrorMessage = result.body !== null ? result.body.errors.Password : null;

    if (result.status === 200) {
        props.changeState();
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        setBody(JSON.stringify({ email: username, password: password}))
    }

    return (<form onSubmit={(e) => handleSubmit(e)}>
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
}

export default RegisterForm;