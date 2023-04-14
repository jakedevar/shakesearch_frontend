import './App.css';
import TitleBar from './components/TitleBar';
import SearchBar from './components/SearchBar';
import ResultsTable from './components/ResultsTable';

function App() {
  return (
    <>
      <TitleBar />
      <SearchBar />
      <ResultsTable />
    </>
  );
}

export default App;
