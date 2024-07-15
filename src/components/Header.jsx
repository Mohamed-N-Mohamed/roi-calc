import React from 'react';
import Box from '@mui/material/Box';
import image from '../assets/ROI-Banner.jpg';
const Header = () => {
  return (
    <Box>
      <img
        src={`${image}`}
        alt='banner'
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: '300px',
        }}
      />
    </Box>
  );
};

export default Header;
