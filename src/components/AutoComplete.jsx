import React from 'react';
import { useRef, useState } from 'react';
// import { usePlacesWidget } from 'react-google-autocomplete';
import Autocomplete, { usePlacesWidget } from 'react-google-autocomplete';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const AutoComplete = () => {
  const inputRef = useRef(null);
  const [country, setCountry] = useState('uk');
  /* This is a test */

  const apiKey = import.meta.env.VITE_API_Key;

  const { ref: materialRef } = usePlacesWidget({
    apiKey: apiKey,
    onPlaceSelected: (place) => console.log(place),
    inputAutocompleteValue: 'country',
    options: {
      componentRestrictions: { country },
    },
  });
  return (
    <TextField
      label='address'
      inputRef={materialRef}
      margin='normal'
      required
      name='address'
      sx={{ backgroundColor: '#fff', width: '50%' }}
    />
  );
};

export default AutoComplete;
