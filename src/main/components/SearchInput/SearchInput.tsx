import React, { useCallback } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { SearchInputProps } from './types';
import { GroupItems, GroupHeader } from './styles';
import useBookConfig from '../../hooks/useBookConfig';
import _ from "lodash";

function SearchInput({ options, type, clearSearch }: SearchInputProps) {
  const { searchByAuthorCallBack, searchByPuplisherCallBack, searchByTitleCallBack } = useBookConfig();

  const debounceFunc = useCallback(
    _.debounce((event, text) => {

      if (!text) {
        clearSearch();
        return;
      }

      switch (type) {
        case 'title':
          searchByTitleCallBack(text.title);
          break;
        case 'authors':
          searchByAuthorCallBack(text.title);
          break;
        case 'publisher':
          searchByPuplisherCallBack(text.title);
          break;
        default:
          break;
      }
    }, 1000),

    [type, searchByTitleCallBack, searchByAuthorCallBack, searchByPuplisherCallBack, clearSearch]
  );

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      onChange={(event, value) => debounceFunc(event, value)}
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
