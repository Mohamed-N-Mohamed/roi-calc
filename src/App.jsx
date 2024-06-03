import './App.css';
import FarmerInfo from './components/FarmerInfo';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import FormInputs from './components/FormInputs';
import FormInput2 from './components/FormInput2';
import Results from './components/Results';
import StepWizard from 'react-step-wizard';
import { useState } from 'react';

function App() {
  const [farmerDetails, setFarmerDetails] = useState({
    fullName: '',
    address: '',
    email: '',
    farmType: '',
    phone: '',
  });

  const [requiredValues, setRequiredValues] = useState({
    herdSize: '',
    yieldOfCows: '',
    lagoonVolume: '',
    lagoonHeight: '',
    lagoonWidth: '',
    lagoonDepth: '',
    lagoonType: '',
    timeHoused: '4',
    bundAngle: '',
  });

  //required fixed values
  const BMP_Table = 'Table to side';
  const conversionRatio = 0.6;
  const costPerGasCap = 4442.244;
  const SkirtCost = 12.1;
  const GFS_gas_processing_speed = 350400;
  const GFS_cost_inc_deployment = 79554;
  const CFM_gas_processing_capacity = 350400;
  const Static_CFM_cost = 0;
  const Mobile_CFM_cost = 0;
  const Volume_of_gas_bundles = 200;
  const Fixed_CFM_gas_use_per_year = 138478.08;
  const Mobile_CFM_use_per_year_ = 103858.56;
  const RTFC_price = 0.68
  const RTFC_split_percentage = 0.5 //(fix at 50%)
  const Assumed_of_fertiliser = 0.21
  const Cost_of_fertiliser = 400

  //Capital Cost

  //Income
  const electricExport = 0;

  //Net revenue = Add savings and income and subtract yearly operations cost

  return (
    <div className='main'>
      <Container maxWidth='md'>
        <CssBaseline />
        <StepWizard>
          {/* <FarmerInfo
            setFarmerDetails={setFarmerDetails}
            farmerDetails={farmerDetails}
          /> */}
          <FormInputs
            requiredValues={requiredValues}
            setRequiredValues={setRequiredValues}
          />
          <FormInput2 />
          <Results />
        </StepWizard>
      </Container>
    </div>
  );
}

export default App;
