import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const Results = () => {
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
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            paddingTop: '2rem',
            alignSelf: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Typography>Capital Cost</Typography>
            <TextField
              margin='normal'
              value='£100,254,30'
              sx={{ backgroundColor: '#fff', width: '30%' }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Typography>Net Revenue</Typography>
            <TextField
              margin='normal'
              value='£150,000/year'
              sx={{ backgroundColor: '#fff', width: '30%' }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Typography>ROI Time</Typography>
            <TextField
              margin='normal'
              value='6 Years'
              sx={{ backgroundColor: '#fff', width: '30%', marginLeft: '1rem' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Results;
