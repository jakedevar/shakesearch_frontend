import resultsAPICall from '../utils/resultsAPICall';
import { setResults, setCaseSensitive, setSearchTerm, setPageNumber, setQuantity, setTotalResults, setReload } from '../slices/storeSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useState, useEffect } from 'react';
import { ApiCallResult } from '../types/ApiCallResult';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const caseSensitive = useAppSelector((state) => state.store.caseSensitive);
  const searchTerm = useAppSelector((state) => state.store.searchTerm);
  const pageNumber = useAppSelector((state) => state.store.pageNumber);
  const quantity = useAppSelector((state) => state.store.quantity);
  const reload = useAppSelector((state) => state.store.reload);

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      if (searchTerm.length > 0) {
        dispatch(setPageNumber(1));
        resultsAPICall(caseSensitive, searchTerm, pageNumber, quantity).then((responseObject: ApiCallResult) => {
          dispatch(setResults(responseObject.results));
          dispatch(setTotalResults(responseObject.totalResults));
        });
      }
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      resultsAPICall(caseSensitive, searchTerm, pageNumber, quantity).then((responseObject: ApiCallResult) => {
        dispatch(setResults(responseObject.results));
        dispatch(setTotalResults(responseObject.totalResults));
      });
    }
  }, [pageNumber, reload, caseSensitive]);

  const handleQuanityChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setQuantity(parseInt(e.target.value)));
    if (pageNumber > 1) {
      dispatch(setPageNumber(1));
    } else {
      dispatch(setReload(!reload));
    }
  }

  return (
    <div className="my-4" aria-labelledby="search-section">
      <form className="flex flex-col items-center space-y-2">
        <h2 id="search-section" className="sr-only">Search Bar</h2>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="caseSensitive" name="caseSensitive" checked={caseSensitive} className="inline-flex items-center cursor-pointer" onChange={(e) => {dispatch(setCaseSensitive(!caseSensitive))}} />
          <label htmlFor="caseSensitive" className="cursor-pointer">Case Sensitive</label>
        </div>
        <label htmlFor="quantity" className="sr-only">Results per page</label>
        <select name="quantity" id="quantity" className="inline-flex items-center cursor-pointer px-2 py-1 border border-gray-300 rounded" onChange={(e) => {handleQuanityChange(e)}}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        <label htmlFor="search" className="sr-only">Search Term</label>
        <input
          id="search"
          value={searchTerm}
          onChange={(e) => e.target.value.length === 0 ? dispatch(setSearchTerm(e.target.value)) : (function() {dispatch(setResults([])); dispatch(setSearchTerm(e.target.value))})()}
          className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-md text-sm focus:outline-none"
          />
        <button type="submit">Search</button>
      </form>
      <p>Searching for: {debouncedSearchTerm}</p>
    </div>
  );
}

export default SearchBar;
