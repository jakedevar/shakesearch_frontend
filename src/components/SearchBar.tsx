import resultsAPICall from '../utils/resultsAPICall';
import {useState, useEffect} from 'react';

type SearchBarProps = {
  caseSensitive: boolean;
  results: string[];
  searchTerm: string;
  pageNumber: number;
  quantity: number;
  setResults: React.Dispatch<React.SetStateAction<string[]>>;
  setCaseSensitive: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const SearchBar = ({caseSensitive, results, searchTerm, pageNumber, quantity, setResults, setCaseSensitive, setSearchTerm, setPageNumber, setQuantity}: SearchBarProps) => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      if (searchTerm.length > 0) {
        setPageNumber(1);
        resultsAPICall(caseSensitive, searchTerm, setResults, pageNumber, quantity);
      }
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  return (
    <div>
      <form>
        <input type="radio" id="caseSensitive" name="caseSensitive" checked={caseSensitive} className="inline-flex items-center cursor-pointer" onClick={() => {setCaseSensitive(!caseSensitive)}} /><p>Case Sensitive</p>
        <select name="quantity" id="quantity" className="inline-flex items-center cursor-pointer" onChange={(e) => {setQuantity(parseInt(e.target.value))}}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        <input
          value={searchTerm}
          onChange={(e) => e.target.value.length === 0 ? setSearchTerm(e.target.value) : (function() {setResults([]); setSearchTerm(e.target.value)})()}
          className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-md text-sm focus:outline-none"
          />
        <button type="submit">Search</button>
      </form>
      <p>Searching for: {debouncedSearchTerm}</p>
    </div>
  );
}

export default SearchBar;
