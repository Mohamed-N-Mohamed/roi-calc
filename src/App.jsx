import { useState } from 'react';
import './App.css';
import FarmerInfo from './components/FarmerInfo';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import FormInputs from './components/FormInputs';
import FormInput2 from './components/FormInput2';
import Results from './components/Results';

function App() {
  return (
    <div className='main'>
      <Container maxWidth='md'>
        <CssBaseline />
        {/* <FarmerInfo /> */}
        {/* <FormInputs /> */}
        {/* <FormInput2 /> */}
        <Results />
      </Container>
    </div>
  );
}

export default App;
