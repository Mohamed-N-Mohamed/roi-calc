import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header from './Header';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Results = ({
  capitalCost,
  netRevenue,
  roiTime,
  previousStep,
  saleableMethane,
  setPageState,
  pageState,
}) => {
  const years = Math.floor(roiTime);
  const decimalPart = roiTime - years;
  const months = Math.floor(decimalPart * 12);

  const handleChange = (e, newValue) => {
    console.log(newValue);
    setPageState(newValue);
  };

  return (
    <Box
      sx={{
        marginTop: '20px',
        width: '100%',
        height: '900px',
        backgroundColor: '#f1f3f4',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header />
      {/* <Typography
        component='h1'
        variant='h5'
        textAlign='center'
        sx={{ paddingTop: '1rem', color: '#024724' }}
      >
        Results
      </Typography> */}

      <Tabs value={pageState} centered onChange={handleChange}>
        <Tab label='CAPCH4 GAS' sx={{ color: '#024724' }} />
        <Tab label='CAPCH4' sx={{ color: '#024724' }} />
      </Tabs>

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
          <Typography sx={{ width: '40%', color: '#024724' }}>
            Capital Cost
          </Typography>
          <TextField
            margin='normal'
            color='success'
            value={`£ ${capitalCost.toFixed(2)}`}
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
          <Typography sx={{ width: '40%', color: '#024724' }}>
            Net Revenue
          </Typography>
          <TextField
            margin='normal'
            color='success'
            value={`£ ${netRevenue.toFixed(2)}`}
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
          <Typography sx={{ width: '40%', color: '#024724' }}>
            ROI Time
          </Typography>

          {roiTime < 0 ? (
            <Typography sx={{ maxWidth: '300px' }}>
              Investing in this project has resulted in a financial loss
            </Typography>
          ) : (
            <TextField
              margin='normal'
              color='success'
              value={`${years} Years and ${months} Months`}
              sx={{ backgroundColor: '#fff', width: '60%' }}
            />
          )}
        </Box>

        {saleableMethane && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              gap: '1rem',
            }}
          >
            <Typography sx={{ width: '40%', color: '#024724' }}>
              Sellable Gas
            </Typography>
            <TextField
              margin='normal'
              color='success'
              value={`${saleableMethane?.toFixed(2)} kg`}
              sx={{ backgroundColor: '#fff', width: '60%' }}
            />
          </Box>
        )}

        <Button
          variant='contained'
          color='success'
          sx={{
            padding: '0.55rem 3rem',
            margin: '0 auto',
            backgroundColor: '#6c9d4e',
          }}
          onClick={previousStep}
        >
          Previous
        </Button>
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: 700,
          textAlign: 'center',
          color: '#024724',
        }}
      >
        <Typography
          variant='body2'
          sx={{
            fontWeight: 700,
            fontSize: '13px',
            marginTop: '-1rem',
            color: '#024724',
          }}
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
