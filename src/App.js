import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
import SiteAppBar from './components/AppBar/SiteAppBar';
import StoryList from './components/StoryList/StoryList';

function App() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <SiteAppBar></SiteAppBar>
      <StoryList></StoryList>
    </Grid>
  );
}

export default App;
