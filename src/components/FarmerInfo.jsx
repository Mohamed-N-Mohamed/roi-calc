import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const farmTypes = [
  {
    values: 'dairy farms',
    label: 'dairy farms',
  },

  {
    values: 'dairy farms 2',
    label: 'dairy farms 2 ',
  },

  {
    values: 'dairy farms 3',
    label: 'dairy farms 3 ',
  },
];

const FarmerInfo = (props) => {
  console.log(props);
  return (
    <Box
      sx={{
        marginTop: '20px',
        width: '100%',
        height: '80vh',
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
        Farmer Information
      </Typography>

      <Box
        component='form'
        className='farmer-information'
        sx={{
          padding: '2rem',
          fontSize: '28px',
        }}
      >
        <Box
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          <TextField
            margin='normal'
            required
            label='Full Name'
            sx={{ backgroundColor: '#fff', width: '50%' }}
          />
          <TextField
            margin='normal'
            required
            label='Address '
            sx={{ backgroundColor: '#fff', width: '50%' }}
          />
        </Box>
        <TextField
          margin='normal'
          required
          label='Email'
          fullWidth
          sx={{ backgroundColor: '#fff' }}
        />

        <Box
          component='div'
          sx={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'cen',
          }}
        >
          <TextField
            margin='normal'
            required
            label='Farm Type'
            select
            sx={{ width: '50%', backgroundColor: '#fff' }}
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
            label='Phone'
            fullWidth
            sx={{ backgroundColor: '#fff', width: '50%' }}
          />
          {/* <FormControlLabel control={<Checkbox />} label='Yes, I agree to the requirement that you just layout it' sx={{width: '30%'}}/> */}
          {/* <Box>
            <Typography component='h6' variant='h6'>
              Farmer Information
            </Typography>
          </Box> */}
        </Box>

        <Box
          component='div'
          className='gdbr'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            paddingTop: '2rem',
          }}
        >
          <Typography variant='body2' sx={{ width: '400px' }}>
            I consent to the collection and processing of my personal data,
            including my name, address, contact number, and email
          </Typography>
          <Checkbox />
        </Box>

        <Box
          component='div'
          className='form-submit'
          sx={{ textAlign: 'center', paddingTop: '2rem' }}
        >
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

export default FarmerInfo;
