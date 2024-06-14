import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const FormInputs = ({
  previousStep,
  nextStep,
  requiredValues,
  setRequiredValues,
}) => {
  const inputRefs = {
    herdSize: useRef(null),
    lagoonVolume: useRef(null),
    lagoonLength: useRef(null),
    lagoonWidth: useRef(null),
    lagoonDepth: useRef(null),
  };

  const [errors, setErrors] = useState({
    herdSize: '',
    lagoonVolume: '',
    lagoonLength: '',
    lagoonWidth: '',
    lagoonDepth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRequiredValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let errorMsg = '';

    if (!value) {
      errorMsg = 'This field cannot be empty.';
    } else if (
      name === 'herdSize' ||
      name === 'lagoonVolume' ||
      name === 'lagoonLength' ||
      name === 'lagoonWidth' ||
      name === 'lagoonDepth'
    ) {
      const pattern = /^-?\d*(\.\d+)?$/;
      if (!pattern.test(value)) {
        errorMsg = 'Please enter a valid number.';
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));

    return errorMsg === '';
  };

  const handleSubmit = () => {
    const isValid = Object.keys(inputRefs).every((key) =>
      validateInput(key, inputRefs[key].current.value)
    );

    if (isValid) {
      console.log('Form submitted with values:', requiredValues);
      nextStep();
    }
  };

  const farmTypes = [
    { values: 'High', label: 'High' },
    { values: 'Medium', label: 'Medium' },
    { values: 'Low', label: 'Low' },
  ];

  const lagoonTypes = [
    { values: 'Earth Bunded', label: 'Earth Bunded' },
    { values: 'Earth Lined', label: 'Earth Lined' },
    { values: 'Rectangular Concrete', label: 'Rectangular Concrete' },
    { values: 'Circular Concrete', label: 'Circular Concrete' },
    { values: 'Circular Steel', label: 'Circular Steel' },
  ];

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
          maxWidth: '900px',
        }}
      >
        <Box
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <TextField
            margin='normal'
            required
            label='Herd Size'
            name='herdSize'
            onChange={handleChange}
            inputRef={inputRefs.herdSize}
            error={!!errors.herdSize}
            value={requiredValues.herdSize}
            sx={{ backgroundColor: '#fff', flex: '1 1 calc(33% - 1rem)' }}
          />
          <TextField
            margin='normal'
            required
            label='Yield of cows'
            select
            onChange={handleChange}
            name='yieldOfCows'
            value={requiredValues.yieldOfCows}
            sx={{ backgroundColor: '#fff', flex: '1 1 calc(33% - 1rem)' }}
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
            name='lagoonVolume'
            onChange={handleChange}
            inputRef={inputRefs.lagoonVolume}
            error={!!errors.lagoonVolume}
            value={requiredValues.lagoonVolume}
            sx={{ backgroundColor: '#fff', flex: '1 1 calc(33% - 1rem)' }}
          />
        </Box>

        <Box
          component='div'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}
        >
          <TextField
            margin='normal'
            required
            label='Lagoon Type'
            select
            onChange={handleChange}
            name='lagoonType'
            value={requiredValues.lagoonType}
            sx={{ backgroundColor: '#fff', flex: '1 1 calc(33% - 1rem)' }}
          >
            {lagoonTypes.map((farms) => (
              <MenuItem key={farms.values} value={farms.values}>
                {farms.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            margin='normal'
            required
            label='Lagoon Length'
            name='lagoonLength'
            onChange={handleChange}
            inputRef={inputRefs.lagoonLength}
            error={!!errors.lagoonLength}
            value={requiredValues.lagoonLength}
            sx={{ backgroundColor: '#fff', flex: '1 1 calc(33% - 1rem)' }}
          />
          <TextField
            margin='normal'
            required
            label='Lagoon Width'
            name='lagoonWidth'
            onChange={handleChange}
            inputRef={inputRefs.lagoonWidth}
            error={!!errors.lagoonWidth}
            value={requiredValues.lagoonWidth}
            sx={{ backgroundColor: '#fff', flex: '1 1 calc(33% - 1rem)' }}
          />
          <TextField
            margin='normal'
            required
            label='Lagoon Depth'
            name='lagoonDepth'
            onChange={handleChange}
            inputRef={inputRefs.lagoonDepth}
            error={!!errors.lagoonDepth}
            value={requiredValues.lagoonDepth}
            sx={{ backgroundColor: '#fff', flex: '1 1 calc(33% - 1rem)' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            maxWidth: '600px',
            margin: '2rem auto',
          }}
        >
          <TextField
            margin='normal'
            required
            label='Months entirely in shed'
            name='monthIn'
            sx={{ backgroundColor: '#fff', width: '300px' }}
          />

          <TextField
            margin='normal'
            required
            label='Transitionary months in shed'
            name='Transitionary months'
            sx={{ backgroundColor: '#fff', width: '300px' }}
          />
          {/* <Typography id='slider-label' gutterBottom>
            Time Housed
          </Typography>
          <Slider
            value={transitionPeriod}
            onChange={handleSliderChange}
            valueLabelDisplay='auto'
            aria-labelledby='slider-label'
            min={0}
            max={11}
            marks={monthMarks}
          /> */}
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
            onClick={previousStep}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            sx={{ padding: '0.55rem 1.8rem' }}
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FormInputs;
