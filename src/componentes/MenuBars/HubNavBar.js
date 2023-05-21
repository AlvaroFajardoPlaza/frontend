import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const HubNavBar = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" sx={{m:'1rem'}}>BOTÓN CASA/S</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi Casa 1
          </Typography>
          <Button color="inherit" sx={{m:'1rem'}}>AJUSTES</Button>
          <Button  color="inherit">USUARIO</Button> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HubNavBar