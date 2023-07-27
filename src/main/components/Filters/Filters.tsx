import * as React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

function Filter({selectedValue, handleChange}: any) {
  

  return (
    <div>
         <FormControlLabel
          control={<Radio
            checked={selectedValue === 'title'}
            onChange={handleChange}
            value="title"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'title' }}
          />}
          label="Filter by Title"
          labelPlacement="top"
        />

        <FormControlLabel
          control={<Radio
            checked={selectedValue === 'authors'}
            onChange={handleChange}
            value="authors"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'authors' }}
          />}
          label="Filter by Authors"
          labelPlacement="top"
        />

        <FormControlLabel
          control={<Radio
            checked={selectedValue === 'publisher'}
            onChange={handleChange}
            value="publisher"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'publisher' }}
          />}
          label="Filter by Publisher"
          labelPlacement="top"
        />
      

     
    </div>
  );
}

export default Filter;
