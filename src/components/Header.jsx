import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Avatar, ListItemIcon, Typography, Divider, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'flex-end', display: 'flex', width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
          <Typography variant="body2" color="textSecondary" sx={{ marginRight: '5px' }}>
            00:03:20
          </Typography>
          <IconButton>
            <FiberManualRecordIcon sx={{ color: 'red', fontSize: '1.2rem' }} />
          </IconButton>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ marginRight: '10px', height: 60 }} /> 
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            aria-label="user options"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleClick}
            size="large"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Avatar src="/path/to/your/avatar.jpg" sx={{ marginRight: '10px' }} />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem disabled>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src="/path/to/your/avatar.jpg" sx={{ marginRight: '10px' }} />
                <div>
                  <Typography variant="body1">John Doe</Typography>
                  <Typography variant="body2" color="textSecondary">UI/UX Designer</Typography>
                </div>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              Account Setting
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ color: 'red' }}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" sx={{ color: 'red' }} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
