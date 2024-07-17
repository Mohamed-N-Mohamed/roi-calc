import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Header from './Header';
import ProgressBar from '../components/ProgressBar';

const FormInput3 = ({ nextStep, previousStep, currentStep, totalSteps }) => {
  const [inputStates, setInputStates] = useState({
    inMonths: '',
    inHours: '',
    transitionaryMonths: '',
    transitionaryHours: '',
    outMonths: '',
    outHours: '',
  });

  const [errors, setErrors] = useState({
    inMonths: false,
    inHours: false,
    transitionaryMonths: false,
    transitionaryHours: false,
    outMonths: false,
    outHours: false,
  });

  const inYearHoused = (inputStates.inMonths / 12) * (inputStates.inHours / 24);
  const transitionayHoused =
    (inputStates.transitionaryMonths / 12) *
    (inputStates.transitionaryHours / 24);
  const outHoused = (inputStates.outMonths / 12) * (inputStates.outHours / 24);

  const fullYearHoused = inYearHoused + transitionayHoused + outHoused;
  console.log(fullYearHoused);

  //todo ---- fix validation for someone reason its showing NaN

  // const validateInputs = () => {
  //   const newErrors = {
  //     inMonths: inputStates.inMonths < 1 || inputStates.inMonths > 12,
  //     inHours: inputStates.inHours < 0 || inputStates.inHours > 24,
  //     transitionaryMonths:
  //       inputStates.transitionaryMonths < 1 ||
  //       inputStates.transitionaryMonths > 12,
  //     transitionaryHours:
  //       inputStates.transitionaryHours < 0 ||
  //       inputStates.transitionaryHours > 24,
  //     outMonths: inputStates.outMonths < 1 || inputStates.outMonths > 12,
  //     outHours: inputStates.outHours < 0 || inputStates.outHours > 24,
  //   };
  //   setErrors(newErrors);
  //   return !Object.values(newErrors).some(Boolean);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputStates((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    nextStep();
    // if (validateInputs()) {
    //   nextStep();
    // }
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
          component='p'
          variant='body1'
          sx={{ color: '#024724', Width: '600px' }}
        >
          Please enter the period, number of months, and daily hours in the shed
          to calculate the annual hours cows spend inside
        </Typography>
        <Box>
          <Grid
            container
            spacing={2}
            justifyContent='center'
            alignItems='center'
          >
            <Grid item xs={12} sm={2}>
              <Typography
                component='p'
                variant='body1'
                textAlign='center'
                sx={{ color: '#024724' }}
              >
                In
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                margin='normal'
                label='Number of Months'
                name='inMonths'
                onChange={handleChange}
                value={inputStates.inMonths}
                error={errors.inMonths}
                color='success'
                helperText={errors.inMonths ? 'Must be between 1 and 12' : ''}
                sx={{ backgroundColor: '#fff', width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                margin='normal'
                label='Hours housed'
                name='inHours'
                onChange={handleChange}
                color='success'
                value={inputStates.inHours}
                error={errors.inHours}
                helperText={errors.inHours ? 'Must be between 0 and 24' : ''}
                sx={{ backgroundColor: '#fff', width: '100%' }}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            justifyContent='center'
            alignItems='center'
            sx={{ mt: 2 }}
          >
            <Grid item xs={12} sm={2}>
              <Typography
                component='p'
                variant='body1'
                textAlign='center'
                sx={{ color: '#024724' }}
              >
                Transitionary
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                margin='normal'
                label='Number of Months'
                name='transitionaryMonths'
                onChange={handleChange}
                color='success'
                value={inputStates.transitionaryMonths}
                error={errors.transitionaryMonths}
                helperText={
                  errors.transitionaryMonths ? 'Must be between 1 and 12' : ''
                }
                sx={{ backgroundColor: '#fff', width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                margin='normal'
                label='Hours housed'
                name='transitionaryHours'
                onChange={handleChange}
                color='success'
                value={inputStates.transitionaryHours}
                error={errors.transitionaryHours}
                helperText={
                  errors.transitionaryHours ? 'Must be between 0 and 24' : ''
                }
                sx={{ backgroundColor: '#fff', width: '100%' }}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            justifyContent='center'
            alignItems='center'
            sx={{ mt: 2 }}
          >
            <Grid item xs={12} sm={2}>
              <Typography
                component='p'
                variant='body1'
                textAlign='center'
                sx={{ color: '#024724' }}
              >
                Out
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                margin='normal'
                label='Number of Months'
                name='outMonths'
                onChange={handleChange}
                color='success'
                value={inputStates.outMonths}
                error={errors.outMonths}
                helperText={errors.outMonths ? 'Must be between 1 and 12' : ''}
                sx={{ backgroundColor: '#fff', width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                margin='normal'
                label='Hours housed'
                name='outHours'
                onChange={handleChange}
                color='success'
                value={inputStates.outHours}
                error={errors.outHours}
                helperText={errors.outHours ? 'Must be between 0 and 24' : ''}
                sx={{ backgroundColor: '#fff', width: '100%' }}
              />
            </Grid>
          </Grid>
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
            onClick={handleNextStep}
          >
            Continue
          </Button>
        </Box>

        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </Box>
    </Box>
  );
};

export default FormInput3;
