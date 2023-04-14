import { createSlice } from '@reduxjs/toolkit'
import { ResultObject } from '../types/ResultObject';
// ...


interface IState {
  results: ResultObject[];
  caseSensitive: boolean;
  searchTerm: string;
  pageNumber: number;
  quantity: number;
  totalResults: number;
  reload: boolean;
  exactMatch: boolean;
  loading: boolean;
  error: number;
}

const initialState: IState = {
  results: [],
  caseSensitive: false,
  searchTerm: '',
  pageNumber: 1,
  quantity: 10,
  totalResults: 0,
  reload: false,
  exactMatch: false,
  loading: false,
  error: 0
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setCaseSensitive: (state, action) => {
      state.caseSensitive = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setTotalResults: (state, action) => {
      state.totalResults = action.payload;
    },
    setReload: (state, action) => {
      state.reload = action.payload;
    },
    setExactMatch: (state, action) => {
      state.exactMatch = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
})

export const { setResults, setCaseSensitive, setSearchTerm, setPageNumber, setQuantity, setTotalResults, setReload, setExactMatch, setLoading, setError } = storeSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default storeSlice.reducer
