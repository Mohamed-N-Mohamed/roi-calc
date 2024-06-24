import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
  return (
    <Box sx={{ width: '100%', mt: 2, mb: 2 }}>
      <Typography variant='body2' color='textSecondary'>{`${Math.round(
        percentage
      )}%`}</Typography>
      <LinearProgress variant='determinate' value={percentage} />
    </Box>
  );
};

export default ProgressBar;
