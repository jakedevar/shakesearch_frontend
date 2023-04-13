import './App.css';
import TitleBar from './components/TitleBar';
import SearchBar from './components/SearchBar';
import ResultsTable from './components/ResultsTable';

function App() {
  return (
    <body className='"bg-gray-100 p-6"'>
      <TitleBar />
      <SearchBar />
      <ResultsTable />
    </body>
  );
}

export default App;
