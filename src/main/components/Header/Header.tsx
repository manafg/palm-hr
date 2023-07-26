import * as React from 'react';
import {AppBar , Box , Toolbar , Typography, IconButton} from '@mui/material';

import MenuBookIcon from '@mui/icons-material/MenuBook';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuBookIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Search Books
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;