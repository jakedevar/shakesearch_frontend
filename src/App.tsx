import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import SearchBar from './components/SearchBar';
import ResultsTable from './components/ResultsTable';

function App() {
  const [results, setResults] = useState<string[]>([]);
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [quantity, setQuantity] = useState(10);

  console.log("fucking loaded!!!!")
  return (
    <>
      <TitleBar />
      <SearchBar caseSensitive={caseSensitive} results={results} searchTerm={searchTerm} pageNumber={pageNumber} quantity={quantity} setResults={setResults} setCaseSensitive={setCaseSensitive} setSearchTerm={setSearchTerm} setPageNumber={setPageNumber} setQuantity={setQuantity} />
      <ResultsTable results={results} searchTerm={searchTerm} />
      </>
  );
}

export default App;
