import React from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Settings, Recommend } from './pages';



function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Box sx={{backgroundColor: theme => theme.palette.grey[100]}} >
        <Container maxWidth={'xl'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="recommend" element={<Recommend />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>


  )
}

export default App;
