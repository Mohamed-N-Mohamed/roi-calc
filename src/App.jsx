import { useState } from 'react';
import './App.css';
import FarmerInfo from './components/FarmerInfo';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import FormInputs from './components/FormInputs';

function App() {
  return (
    <div className='main'>
      <Container maxWidth='md'>
        <CssBaseline />
        {/* <FarmerInfo /> */}
        <FormInputs />
      </Container>
    </div>
  );
}

export default App;
