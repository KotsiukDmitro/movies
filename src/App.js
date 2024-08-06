import { Container, CssBaseline } from '@mui/material';
import Navigation from './components/navigation/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Settings, Recommend } from './pages';



function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Container maxWidth={'xl'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="recommend" element={<Recommend />} />
      </Routes>
      </Container>
    </BrowserRouter>


  )
}

export default App;
