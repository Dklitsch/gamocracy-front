import React, { useState, useEffect } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import { Grid, Button, TextField, Typography } from '@material-ui/core';
import TwoPanelPopup from './Layout/TwoPanelPopup';
import VerticalList from './Layout/VerticalList';
import useGet from '../../../CustomHooks/useGet'

const useStyles = makeStyles((theme) => ({}));

const RegisterForm = (props) => {

    const classes = useStyles();

    const register = "Register";

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [body, setBody] = useState(null);
    const result = useGet(register, body) ?? {success : false, errors : {Email : null, Password : null}};

    if (result.success) {
        props.changeState();
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        setBody(JSON.stringify({ email: username, password: password}))
    }

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
                    error={result.errors.Email != null}
                    helperText={result.errors.Email}
                />
                <TextField 
                    label="Password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required
                    error={result.errors.Password != null}
                    helperText={result.errors.Password}
                    type="password"
                />
                <Button variant="contained" type="submit">Register</Button>
        </VerticalList>
    </form>)

    return (<TwoPanelPopup left={leftComponent} right={rightComponent} />)
}

export default RegisterForm;