import './App.css';
import FarmerInfo from './components/FarmerInfo';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import FormInputs from './components/FormInputs';
import FormInput2 from './components/FormInput2';
import Results from './components/Results';
import StepWizard from 'react-step-wizard';

function App() {
  console.log(import.meta.env.VITE_API_Key);
  return (
    <div className='main'>
      <Container maxWidth='md'>
        <CssBaseline />
        <StepWizard>
          <FarmerInfo />
          <FormInputs />
          <FormInput2 />
          <Results />
        </StepWizard>
      </Container>
    </div>
  );
}

export default App;
