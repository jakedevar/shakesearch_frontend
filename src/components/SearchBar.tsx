import {useState, useEffect} from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  return (
    <div>
      <form>
        <input type="radio" id="caseSensitive" name="caseSensitive" value="caseSensitive" /><p>Case Sensitive</p>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
        <button type="submit">Search</button>
      </form>
      <p>Searching for: {debouncedSearchTerm}</p>
    </div>
  );
}

export default SearchBar;
