import { useState } from 'react';
import './App.css';
import FarmerInfo from './components/FarmerInfo';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className='main'>
      <Container maxWidth='md'>
        <CssBaseline />
        <FarmerInfo />
      </Container>
    </div>
  );
}

export default App;
