import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Results = ({ capitalCost, netRevenue, roiTime, previousStep }) => {
  const years = Math.floor(roiTime);
  const decimalPart = roiTime - years;
  const months = Math.floor(decimalPart * 12);

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

          {roiTime < 0 ? (
            <Typography sx={{ maxWidth: '300px' }}>
              Investing in this project has resulted in a financial loss
            </Typography>
          ) : (
            <TextField
              margin='normal'
              value={`${years} Years and ${months} Months`}
              sx={{ backgroundColor: '#fff', width: '60%' }}
            />
          )}
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

      <Box sx={{ width: '100%', maxWidth: 700, textAlign: 'center' }}>
        <Typography
          variant='body2'
          sx={{ fontWeight: 700, fontSize: '13px', marginTop: '-1rem' }}
        >
          *All results presented here are estimates only and do not form part of
          any contractual agreement. For a more complete report, please get in
          touch with us to organise a site visit where we can conduct a detailed
          assessment of your site and practices.
        </Typography>
      </Box>
    </Box>
  );
};

export default Results;
