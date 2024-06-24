import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Results = ({ capitalCost, netRevenue, roiTime, previousStep }) => {
  return (
    <Box
      sx={{
        marginTop: '20px',
        width: '100%',
        height: '85vh',
        backgroundColor: '#e8edf0',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            gap: '1rem',
          }}
        >
          <Typography sx={{ width: '40%' }}>Capital Cost</Typography>
          <TextField
            margin='normal'
            value={capitalCost.toFixed(2)}
            sx={{ backgroundColor: '#fff', width: '60%' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            gap: '1rem',
          }}
        >
          <Typography sx={{ width: '40%' }}>Net Revenue</Typography>
          <TextField
            margin='normal'
            value={netRevenue.toFixed(2)}
            sx={{ backgroundColor: '#fff', width: '60%' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            gap: '1rem',
          }}
        >
          <Typography sx={{ width: '40%' }}>ROI Time</Typography>
          <TextField
            margin='normal'
            value={ `${Math.round(roiTime)} Years`}
            sx={{ backgroundColor: '#fff', width: '60%' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            gap: '1rem',
          }}
        >
          <Typography sx={{ width: '40%' }}>Sellable Gas</Typography>
          <TextField
            margin='normal'
            value='0'
            sx={{ backgroundColor: '#fff', width: '60%' }}
          />
        </Box>
        <Button
          variant='contained'
          sx={{ padding: '0.55rem 3rem', margin: '0 auto' }}
          onClick={previousStep}
        >
          Previous
        </Button>
      </Box>
    </Box>
  );
};

export default Results;
