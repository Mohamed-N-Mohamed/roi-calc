import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from './Header';
import ProgressBar from '../components/ProgressBar';

const FormInput2 = ({
  nextStep,
  previousStep,
  currentStep,
  totalSteps,
  requiredValues,
  setRequiredValues,
}) => {
  const inputRefs = {
    electricConsumption: useRef(null),
    dieselConsumption: useRef(null),
    nitrogenFertilizer: useRef(null),
  };


  console.log('hello world')
  const [errors, setErrors] = useState({
    electricConsumption: '',
    dieselConsumption: '',
    nitrogenFertilizer: '',
  });

  const [values, setValues] = useState({
    electricConsumption: '',
    dieselConsumption: '',
    nitrogenFertilizer: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRequiredValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let errorMsg = '';

    if (!value) {
      errorMsg = 'This field cannot be empty.';
    } else if (
      name === 'electricConsumption' ||
      name === 'dieselConsumption' ||
      name === 'nitrogenFertilizer'
    ) {
      const pattern = /^-?\d*(\.\d+)?$/;
      if (!pattern.test(value)) {
        errorMsg = 'Please enter a valid number.';
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));

    return errorMsg === '';
  };

  const handleSubmit = () => {
    const isValid = Object.keys(inputRefs).every((key) =>
      validateInput(key, inputRefs[key].current.value)
    );
    

    if (isValid) {
      console.log('Form submitted with values:', requiredValues);
      nextStep();
    }
  };

  return (
    <Box
      sx={{
        marginTop: '20px',
        width: '100%',
        backgroundColor: '#f1f3f4',
        height: '800px',
        borderRadius: '5px',
      }}
    >
      <Header />

      <Box
        component='form'
        className='roi-calculator'
        sx={{
          padding: '2rem',
          fontSize: '28px',
          marginTop: '50px',
        }}
      >
        <Typography
          component='h1'
          variant='h5'
          textAlign='center'
          sx={{ color: '#024724', marginBottom: '1rem' }}
        >
          ROI Calculator
        </Typography>
        <Box
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          <TextField
            margin='normal'
            required
            label='Yearly electric consumption (kWh)'
            name='yearlyElectricConsumption'
            color='success'
            onChange={handleChange}
            inputRef={inputRefs.electricConsumption}
            error={!!errors.electricConsumption}
            value={requiredValues.yearlyElectricConsumption}
            sx={{ backgroundColor: '#fff', width: '50%' }}
          />

          <TextField
            margin='normal'
            required
            label='Yearly diesel consumption (l)'
            name='yearlyDieselConsumption'
            color='success'
            onChange={handleChange}
            inputRef={inputRefs.dieselConsumption}
            error={!!errors.dieselConsumption}
            value={requiredValues.yearlyDieselConsumption}
            sx={{ backgroundColor: '#fff', width: '50%' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          <TextField
            margin='normal'
            required
            label='No. of tonnes of nitrogen based fertiliser (tonnes)'
            name='numberOfTonnesNitrogenBasedFertiliser'
            color='success'
            onChange={handleChange}
            inputRef={inputRefs.nitrogenFertilizer}
            error={!!errors.nitrogenFertilizer}
            value={requiredValues.numberOfTonnesNitrogenBasedFertiliser}
            sx={{ backgroundColor: '#fff', width: '50%' }}
          />
        </Box>

        <Box
          component='div'
          className='form-submit'
          sx={{
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          <Button
            variant='contained'
            color='success'
            sx={{ padding: '0.55rem 1.8rem', backgroundColor: '#6c9d4e' }}
            onClick={previousStep}
          >
            Previous
          </Button>

          <Button
            variant='contained'
            color='success'
            sx={{ padding: '0.55rem 1.8rem', backgroundColor: '#6c9d4e' }}
            onClick={handleSubmit}
          >
            Calculate
          </Button>
        </Box>
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </Box>
    </Box>
  );
};

export default FormInput2;
