import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const FormInput2 = () => {
  const farmTypes = [
    {
      values: 'High',
      label: 'High',
    },

    {
      values: 'Medium',
      label: 'Medium',
    },

    {
      values: 'Low',
      label: 'Low',
    },
  ];

  const lagoonTypes = [
    {
      values: 'Earth Bunded',
      label: 'Earth Bunded',
    },

    {
      values: 'Earth Lined',
      label: 'Earth Lined',
    },

    {
      values: 'Rectangular Concrete',
      label: 'Rectangular Concrete',
    },

    {
      values: 'Circular Concrete',
      label: 'Circular Concrete',
    },

    {
      values: 'Circular Steel',
      label: 'Circular Steel',
    },
  ];
  return (
    <Box
      sx={{
        marginTop: '20px',
        width: '100%',
        height: '85vh',
        backgroundColor: '#e8edf0',
        borderRadius: '5px',
      }}
    >
      <Typography
        component='h1'
        variant='h5'
        textAlign='center'
        sx={{ paddingTop: '1rem' }}
      >
        ROI Calculator
      </Typography>

      <Box
        component='form'
        className='roi-calculator'
        sx={{
          padding: '2rem',
          fontSize: '28px',
        }}
      >
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
            label='Yearly electric consumption'
            sx={{ backgroundColor: '#fff', width: '50%' }}
          />

          <TextField
            margin='normal'
            required
            label='Yearly diesel consumption'
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
            label='No. of tonnes of nitrogen based fertiliser'
            sx={{ backgroundColor: '#fff', width: '50%' }}
          />
        </Box>

        <Button
          variant='contained'
          sx={{
            padding: '0.55rem 1.8rem',
            display: 'block',
            margin: '0 auto',
          }}
        >
          calculate
        </Button>
      </Box>
    </Box>
  );
};

export default FormInput2;
