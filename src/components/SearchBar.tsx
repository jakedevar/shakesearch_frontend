import resultsAPICall from '../utils/resultsAPICall';
import { setResults, setCaseSensitive, setSearchTerm, setPageNumber, setQuantity, setTotalResults, setReload, setExactMatch, setLoading, setError } from '../slices/storeSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useEffect } from 'react';
import { ApiCallResult } from '../types/ApiCallResult';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const caseSensitive = useAppSelector((state) => state.store.caseSensitive);
  const searchTerm = useAppSelector((state) => state.store.searchTerm);
  const pageNumber = useAppSelector((state) => state.store.pageNumber);
  const quantity = useAppSelector((state) => state.store.quantity);
  const reload = useAppSelector((state) => state.store.reload);
  const exactMatch = useAppSelector((state) => state.store.exactMatch);
  const results = useAppSelector((state) => state.store.results);
  const error = useAppSelector((state) => state.store.error);

  if (searchTerm.length === 0) {
    dispatch(setLoading(false));
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchTerm.length > 0) {
        dispatch(setLoading(true));
        dispatch(setResults([]));
        if (pageNumber > 1) {
          dispatch(setPageNumber(1));
        } else {
          dispatch(setReload(!reload));
        }
      }
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      resultsAPICall(caseSensitive, searchTerm, pageNumber, quantity, exactMatch).then((responseObject: ApiCallResult) => {
        if (responseObject.error !== undefined) {
          dispatch(setError(responseObject.error));
        }
        dispatch(setResults(responseObject.results));
        dispatch(setTotalResults(responseObject.totalResults));
        dispatch(setLoading(false));
      });
    }
  }, [pageNumber, reload]);

  const handleSearchBarTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error !== undefined) {
      dispatch(setError(0));
    }
    if (searchTerm.length > 0) {
      dispatch(setLoading(true));
    }
    if (results.length !== 0) {
      dispatch(setResults([]));
    }
    dispatch(setSearchTerm(e.target.value));
  };

  const handleQuanityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setQuantity(parseInt(e.target.value)));
    if (pageNumber > 1) {
      dispatch(setPageNumber(1));
    } else {
      dispatch(setReload(!reload));
    }
  }

  const handleCaseSensitiveChange = () => {
    if (error !== undefined) {
      dispatch(setError(0));
    }
    if (searchTerm.length > 0) {
      dispatch(setLoading(true));
    }
    dispatch(setCaseSensitive(!caseSensitive));
    if (pageNumber > 1) {
      dispatch(setPageNumber(1));
    } else {
      dispatch(setReload(!reload));
    }
  }

  const handleExactMatchChange = () => {
    if (error !== undefined) {
      dispatch(setError(0));
    }
    if (searchTerm.length > 0) {
      dispatch(setLoading(true));
    }
    dispatch(setExactMatch(!exactMatch));
    if (pageNumber > 1) {
      dispatch(setPageNumber(1));
    } else {
      dispatch(setReload(!reload));
    }
  }


  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="my-4 w-full flex v-screen justify-center items-center" aria-labelledby="search-section">
      <form className="flex flex-col items-center space-y-2" onSubmit={(e) => handleFormSubmit(e)}>
        <h2 id="search-section" className="sr-only">Search Bar</h2>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="caseSensitive" name="caseSensitive" checked={caseSensitive} className="inline-flex items-center cursor-pointer" onChange={() => {handleCaseSensitiveChange()}} />
          <label htmlFor="caseSensitive" className="cursor-pointer">Case Sensitive</label>
          <input type="checkbox" id="exactMatch" name="exactMatch" checked={exactMatch} className="inline-flex items-center cursor-pointer" onChange={() => {handleExactMatchChange()}} />
          <label htmlFor="exactMatch" className="cursor-pointer">Exact Match</label>
          <select name="quantity" id="quantity" className="inline-flex items-center cursor-pointer px-2 py-1 border border-gray-300 rounded" onChange={(e) => {handleQuanityChange(e)}}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <label htmlFor="quantity" className="cursor-pointer">Results per page</label>
        </div>
        <label htmlFor="search" className="sr-only">Search Term</label>
        <input
          id="search"
          value={searchTerm}
          onChange={(e) => e.target.value.length === 0 ? dispatch(setSearchTerm(e.target.value)) : handleSearchBarTyping(e)}
          className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-md text-sm focus:outline-none"
          />
      </form>
    </div>
  );
}

export default SearchBar;
