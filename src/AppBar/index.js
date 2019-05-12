import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function TopAppBar(props) {
  return (
    <AppBar position="static" color="default" >
      <Toolbar>
        <Typography variant="h6" style={{ flex: 1 }}>
          NEHSAA Web System
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopAppBar;
