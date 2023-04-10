import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
// ...


interface IState {
  results: string[];
  caseSensitive: boolean;
  searchTerm: string;
  pageNumber: number;
  quantity: number;
  totalResults: number;
}

const initialState: IState = {
  results: [],
  caseSensitive: false,
  searchTerm: '',
  pageNumber: 1,
  quantity: 10,
  totalResults: 0
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
    }
  },
})

export const { setResults, setCaseSensitive, setSearchTerm, setPageNumber, setQuantity, setTotalResults } = storeSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default storeSlice.reducer
