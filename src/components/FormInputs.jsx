import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const FormInputs = (props) => {
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
            label='Herd Size'
            sx={{ backgroundColor: '#fff' }}
          />

          <TextField
            margin='normal'
            required
            label='Yield of cows'
            select
            sx={{ width: '30%', backgroundColor: '#fff' }}
          >
            {farmTypes.map((farms) => (
              <MenuItem key={farms.values} value={farms.values}>
                {farms.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin='normal'
            required
            label='Lagoon Volume'
            sx={{ backgroundColor: '#fff' }}
          />
        </Box>

        <Box
          component='div'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '2rem',
          }}
        >
          <Box component='div' sx={{ width: '50%' }}>
            <TextField
              margin='normal'
              required
              label='Lagoon Type'
              select
              sx={{ width: '60%', backgroundColor: '#fff' }}
            >
              {lagoonTypes.map((farms) => (
                <MenuItem key={farms.values} value={farms.values}>
                  {farms.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box sx={{ width: '30%' }}>
            <Box component='div'>
              <TextField
                margin='normal'
                required
                label='Lagoon Height'
                sx={{ backgroundColor: '#fff' }}
              />
            </Box>
            <Box component='div'>
              <TextField
                margin='normal'
                required
                label='Lagoon Width'
                sx={{ backgroundColor: '#fff' }}
              />
            </Box>
            <Box component='div'>
              <TextField
                margin='normal'
                required
                label='Lagoon Depth'
                sx={{ backgroundColor: '#fff' }}
              />
            </Box>
          </Box>
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
            sx={{ padding: '0.55rem 1.8rem' }}
            onClick={props.previousStep}
          >
            Previous
          </Button>

          <Button
            variant='contained'
            sx={{ padding: '0.55rem 1.8rem' }}
            onClick={props.nextStep}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FormInputs;
