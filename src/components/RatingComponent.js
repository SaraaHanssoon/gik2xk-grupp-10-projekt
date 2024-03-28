import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function RatingComponent({ value, readOnly = true, onChange }) {
  return (
    <Box>
      <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        readOnly={readOnly}
        onChange={(event, newValue) => {
          if (onChange) onChange(newValue);
        }}
      />
    </Box>
  );
}

export default RatingComponent;
