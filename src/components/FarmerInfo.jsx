import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import AutoComplete from './AutoComplete';
import Slider from '@mui/material/Slider';

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

const FarmerInfo = ({ nextStep, setFarmerDetails, farmerDetails }) => {
  const handleChange = (e) => {
    console.log(e.target.name);

    console.log(e.target.value);
    setFarmerDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [transitionPeriod, setTransitionPeriod] = useState([0, 11]);

  const handleSliderChange = (event, newValue) => {
    setTransitionPeriod(newValue);
  };

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const monthMarks = months.map((month, index) => ({
    value: index,
    label: month,
  }));

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
            name='fullName'
            sx={{ backgroundColor: '#fff', width: '50%' }}
            onChange={handleChange}
            value={farmerDetails.fullName}
          />
          {/* <TextField
            margin='normal'
            required
            label='Address '
            sx={{ backgroundColor: '#fff', width: '50%' }}
          /> */}
          <AutoComplete handleChange={handleChange} />
        </Box>
        <TextField
          margin='normal'
          required
          label='Email'
          fullWidth
          name='email'
          onChange={handleChange}
          value={farmerDetails.email}
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
            name='farmType'
            onChange={handleChange}
            value={farmerDetails.farmType}
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
            name='phone'
            onChange={handleChange}
            value={farmerDetails.phone}
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
            onClick={nextStep}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FarmerInfo;
