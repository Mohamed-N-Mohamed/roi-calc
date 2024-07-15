import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header from './Header';

const FormInput3 = ({ nextStep, previousStep }) => {
  return (
    <Box
      sx={{
        marginTop: '20px',
        width: '100%',
        backgroundColor: '#f1f3f4',
        height: '900px',
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
          sx={{ color: '#024724' }}
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
            label='Months entirely in shed'
            name='Transitionary months'
            sx={{ backgroundColor: '#fff', width: '300px' }}
          />

          <TextField
            margin='normal'
            label='Months entirely in shed'
            name='Transitionary months'
            sx={{ backgroundColor: '#fff', width: '300px' }}
          />

          <TextField
            margin='normal'
            label='Months entirely in shed'
            name='Transitionary months'
            sx={{ backgroundColor: '#fff', width: '300px' }}
          />
        </Box>

        <Box
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <TextField
            margin='normal'
            label='Transitionary months in shed'
            name='Transitionary months'
            sx={{ backgroundColor: '#fff', width: '300px' }}
          />

          <TextField
            margin='normal'
            label='Transitionary months in shed'
            name='Transitionary months'
            sx={{ backgroundColor: '#fff', width: '300px' }}
          />

          <TextField
            margin='normal'
            label='Transitionary months in shed'
            name='Transitionary months'
            sx={{ backgroundColor: '#fff', width: '300px' }}
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
            onClick={nextStep}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FormInput3;
