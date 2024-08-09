import React from 'react';
import { Box, IconButton, Typography, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout'; 
import ReportIcon from '@mui/icons-material/Report';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

const MiniSidebar = () => {
  return (
    <Box sx={{
      width: '56px',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: 1,
      position: 'relative', 
      justifyContent: 'space-between', 
      height: '100vh', 
    }}>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}>
        <IconButton 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            p: 1
          }}
        >
          <Typography 
            variant="body2" 
            component="div" 
            sx={{ 
              fontWeight: 'bold', 
              fontSize: '1rem',
              padding: '8px',
              paddingBottom: 0
            }}
          >
            LOGO
          </Typography>
        </IconButton>
        <Divider sx={{ my: 1, bgcolor: 'grey.300', width: '100%' }} />
        <IconButton sx={{ p: 1 }}>
          <DashboardIcon />
        </IconButton>
        <IconButton sx={{ p: 1 }}>
          <FeedbackIcon />
        </IconButton>
        <IconButton sx={{ p: 1 }}>
          <ReportIcon />
        </IconButton>
        <IconButton sx={{ p: 1 }}>
          <CategoryIcon />
        </IconButton>
        <IconButton sx={{ p: 1 }}>
          <SettingsIcon />
        </IconButton>
        <IconButton sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Logout Icon */}
      <IconButton 
        sx={{ 
          mb: 2,
          color: 'red' 
        }}
      >
        <LogoutIcon />
      </IconButton>

      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '2px',
          height: '100%',
          backgroundColor: 'grey.300',
        }}
      />
    </Box>
  );
};

export default MiniSidebar;
