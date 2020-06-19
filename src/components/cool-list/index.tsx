import React, { useState, useEffect } from 'react';

// Modules | Packages 
import axios from 'axios';
import { TextField } from '@material-ui/core';

// My Components
import List from '../list';
import RangeSlider from '../slider';

// Styled Components
import { FiltersContainer } from './styles';

interface RowItem {
  name: string,
  age: string | number,
}

interface ComponentState {
  loading: false,
  searchTerm: string,
  searchTerms: Array<string>,
  searchNames: Array<string>,
  searchAges: Array<string | number>,
  defaultRows: Array<RowItem>,
  filteredRows: Array<RowItem>,
  sliderValue: Array<number>,
}


export default function () {
  const [state, setState] = useState<ComponentState>({
    loading: false,
    searchTerm: '',
    searchTerms: [],
    searchNames: [],
    searchAges: [],
    defaultRows: [],
    filteredRows: [],
    sliderValue: [],
  });

  const [searchTimeout, setSearchTimeout] = useState(0);

  // Load Initial data
  useEffect(() =>{
    axios.get('https://random-persons.herokuapp.com/users')
      .then(response => setState( state => ({ ...state, defaultRows: response.data.data, filteredRows: response.data.data })))
  }, [])

  const filterRows = () => {
    let filteredRows: Array<RowItem> = [];
    const searchTerms = state.searchTerm.split(' ');
    const searchNames = searchTerms.filter(term => isNaN(parseInt(term)));
    const searchAges = searchTerms.filter(term => !isNaN(parseInt(term))).map(item => parseInt(item));

    if (searchNames.length && searchAges.length) {
      // name & age
      searchNames.forEach(name => {
        filteredRows = 
          filteredRows
            .concat(
              state.defaultRows
                .filter((row : RowItem) => row.name.toUpperCase().includes(name.toUpperCase()))
                .filter((r: RowItem) => searchAges.includes(r.age as number))
            );
      });
    }

    if (searchNames.length && !searchAges.length) {
      // name
      searchNames.forEach(name => {
        filteredRows =
          filteredRows
            .concat(
              state.defaultRows
                .filter((row : RowItem) => row.name.toUpperCase().includes(name.toUpperCase()))
            );
        });
    }

    if (!searchNames.length && searchAges.length) {
      // age
      filteredRows =
        filteredRows
          .concat(
            state.defaultRows
              .filter((row: RowItem) => {
                return searchAges.includes(row.age as number);
              })
          );
    }

    if (!searchNames.length && !searchAges.length) {
      filteredRows = filteredRows.concat(state.defaultRows);
    }

    setState({ ...state, searchTerms, searchNames, searchAges, filteredRows, })
  }

  const debounceSearch = () => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(setTimeout(() => {
      filterRows();
    }, 500));
  }

  const debounceSlider = (sliderValue: number[]) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(setTimeout(() => {
      setState({ ...state, sliderValue});
    }, 500));
  }

  return (
    <>
      <FiltersContainer>
        <TextField
          id="searchString"
          label="Search"
          placeholder="Name 45"
          value={state.searchTerm}
          onChange={event => setState({ ...state, searchTerm: event.target.value })}
          onKeyUp={debounceSearch}
        />

        <RangeSlider
          min={0}
          max={120}
          onChange={(sliderValue: any) => {
            debounceSlider(sliderValue)
          }}
          // width={'60%'}
        />
      </FiltersContainer>

      <List items={state.filteredRows.filter((row: any) => row.age >= state.sliderValue[0] && row.age <= state.sliderValue[1] )}/>
    </>
  )
};
