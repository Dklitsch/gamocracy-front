import React, { useState, useEffect } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import { Button, TextField } from '@material-ui/core';
import TwoPanelPopup from '../Layout/TwoPanelPopup';
import VerticalList from '../Layout/VerticalList';
import usePost from '../../../../CustomHooks/usePost';
import { login } from '../LoggedInSlice'
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({}));

const LoginForm = (props) => {

    const loginEndpoint = "Login";

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [body, setBody] = useState(null);
    const [loginErrorMessage, setLoginErrorMessage] = useState(null);
    const result = usePost(loginEndpoint, body);
    const loginSuccessful = result.status === 200;
    const dispatch = useDispatch();

    useEffect(() => {
        if (loginSuccessful){
            localStorage.setItem('id_token', result.body.response);
            dispatch(login());
        } else if (result.status != null) {
            setLoginErrorMessage("Invalid login, please try again.")
        }
    }, [result])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setBody(JSON.stringify({ email: username, password : password}))
    }

    const leftComponent = <Button onClick={props.changeState}>Not a member? Register</Button>
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
                error={loginErrorMessage != null}
            ></TextField>
            <TextField 
                label="Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                required
                type="password"
                error={loginErrorMessage != null}
                helperText={loginErrorMessage}
            ></TextField>
            <Button variant="contained" type="Submit">Login</Button>
        </VerticalList>
    </form>)

    return (
        <TwoPanelPopup left={leftComponent} right={rightComponent}></TwoPanelPopup>
    )
}

export default LoginForm;