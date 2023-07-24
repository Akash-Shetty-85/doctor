import React, { useState } from 'react';
import { AppBar, Button, Drawer, Hidden, IconButton, List, ListItem, ListItemText, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer open/close
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  // Update the active tab based on the current location
  React.useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setValue(0);
    } else if (path === '/remedies') {
      setValue(1);
    } else if (path === '/bookings') {
      setValue(2);
    }
  }, [location]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ background: 'green' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            sanjeevani
          </Typography>
          {isSmallScreen ? (
            <React.Fragment>
              <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2 }}
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Tabs
                value={value}
                onChange={(e, value) => setValue(value)}
                variant="scrollable"
                scrollButtons="auto"
                indicatorColor="primary"
                sx={{ display: 'none' }}
              >
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Natural Remedies" component={Link} to="/remedies" />
                <Tab label="Appointments" component={Link} to="/bookings" />
              </Tabs>
            </React.Fragment>
          ) : (
            <Tabs
              value={value}
              onChange={(e, value) => setValue(value)}
              indicatorColor="secondary"
              sx={{
                '& .MuiTab-root': {
                  color: 'white',
                },
                '& .Mui-selected': {
                  color: 'black',
                  backgroundColor: '#4CAF50', // Replace with your desired shade of green
                  borderRadius: '15px'
                },
              }}
            >
            
              <Tab label="Homed" component={Link} to="/" sx={{ color: 'white' }} />
              <Tab label="Natural Remedies" component={Link} to="/remedies" sx={{ color: 'white' }} />
              <Tab label="Appointments" component={Link} to="/bookings" sx={{ color: 'white' }} />

            </Tabs>
          )}
          <Hidden mdDown>
            <Button variant="contained" sx={{ marginLeft: 'auto' }} component={Link} to="/login" onClick={() => setValue(-1)}>
              Login
            </Button>
            <Button variant="contained" sx={{ marginLeft: 2 }} component={Link} to="/signup" onClick={() => setValue(-1)}>
              Signup
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/remedies" onClick={toggleDrawer}>
            <ListItemText primary="Natural Remedies" />
          </ListItem>
          <ListItem component={Link} to="/bookings" onClick={toggleDrawer}>
            <ListItemText primary="Appointments" />
          </ListItem>
        </List>
        <Button variant="contained" sx={{ marginBottom: 1 }} component={Link} to="/login" onClick={toggleDrawer}>
          Login
        </Button>
        <Button variant="contained" sx={{ marginBottom: 'auto' }} component={Link} to="/signup" onClick={toggleDrawer}>
          Signup
        </Button>
      </Drawer>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
