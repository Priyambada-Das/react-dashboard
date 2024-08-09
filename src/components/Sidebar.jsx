import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, TextField, Typography, InputAdornment, Divider, Box, useMediaQuery, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedbackIcon from '@mui/icons-material/Feedback';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReportIcon from '@mui/icons-material/Report';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          position: 'relative',
          height: '100vh',  
          display: { xs: 'none', sm: 'block' },
        },
        ...(isMobile && {
          width: '100%',
          '& .MuiDrawer-paper': {
            width: '100%',
            display: open ? 'block' : 'none',
            height: '100vh', 
          },
        }),
      }}
      variant={isMobile ? "temporary" : "persistent"}
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box sx={{ padding: '10px 20px' }}>
        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: { fontSize: '0.75rem' },
          }}
          sx={{ marginBottom: '0px' }}
        />
        <Box sx={{ width: 'calc(100% + 40px)', marginLeft: '-20px', mt: '10px', mb: '10px' }}>
          <Divider sx={{ bgcolor: 'grey.300' }} />
        </Box>
        <Typography variant="body2" component="div" sx={{ fontSize: '1rem' }} noWrap>
          My Options
        </Typography>
      </Box>
      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon fontSize="small" /> },
          { text: 'Feedbacks', icon: <FeedbackIcon fontSize="small" /> },
          { text: 'Leaves', icon: <EventNoteIcon fontSize="small" /> },
          { text: 'Attendance', icon: <AccessTimeIcon fontSize="small" /> },
          { text: 'Daily Timesheet', icon: <AccessTimeIcon fontSize="small" /> },
          { text: 'Work Log', icon: <WorkIcon fontSize="small" /> },
        ].map((item, index) => (
          <ListItem button key={item.text} sx={{ py: 1 }}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ sx: { fontSize: '0.75rem' } }}
            />
          </ListItem>
        ))}
        {/* Divider after Work Log */}
        <Divider sx={{ my: 1, bgcolor: 'grey.300' }} />
        {[
          { text: 'Reimbursements', icon: <MonetizationOnIcon fontSize="small" /> },
          { text: 'Reports', icon: <ReportIcon fontSize="small" /> },
          { text: 'My Expenses', icon: <MonetizationOnIcon fontSize="small" /> },
          { text: 'Income', icon: <MonetizationOnIcon fontSize="small" /> },
          { text: 'Categories', icon: <CategoryIcon fontSize="small" /> },
          { text: 'Settings', icon: <SettingsIcon fontSize="small" /> },
        ].map((item, index) => (
          <ListItem button key={item.text} sx={{ py: 1 }}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ sx: { fontSize: '0.75rem' } }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
