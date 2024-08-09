import React from 'react';
import MiniSidebar from './components/MiniSidebar';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflowX: 'hidden' }}>
      {!isMobile && <MiniSidebar />}
      <Sidebar />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Header />
        <main style={{ flexGrow: 1, paddingRight: '20px', overflowY: 'auto' }}>
          {/* Main content goes here */}
          <h1>Welcome to the Dashboard</h1>
        </main>
      </Box>
    </Box>
  );
};

export default App;
