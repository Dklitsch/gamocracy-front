import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/LoginWidget';
import Grid from '@material-ui/core/Grid'
import Register from './components/Register';

function App() {

  const [loginType, setLoginType] = useState('login');
  const loginEnums = { login: 'login', register: 'register' }

  const displayLoginByType = (loginOrRegister) => {
    if (loginOrRegister === "login") {
      return <LoginWidget changeState={() => setLoginType(loginEnums.register)}></LoginWidget>
    } else {
      return <Register changeState={() => setLoginType(loginEnums.login)}></Register>
    }
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      {displayLoginByType(loginType)}
    </Grid>
  );
}

export default App;
