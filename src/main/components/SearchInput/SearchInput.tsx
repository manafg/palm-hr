import * as React from 'react';
import {TextField , Autocomplete} from '@mui/material';
import {SearchInputProps} from './types';
import {GroupItems, GroupHeader} from './styles'


function SearchInput({options} : SearchInputProps) {
//   const options = top100Films.map((option) => {
//     const firstLetter = option.title[0].toUpperCase();
//     return {
//       firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
//       ...option,
//     };
//   });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Books" />}
      renderGroup={(params) => (
        <li key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
    />
  );
}

export default SearchInput;
