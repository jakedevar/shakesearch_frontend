import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import SearchBar from './components/SearchBar';

function App() {
  const [text, setText] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/search?caseInsensitive=true&q=hamlet').then((response) => {
      setText(response.data);
    });
  }, []);
  return (
    <>
      <TitleBar />
      <SearchBar />
        <table>
          <tbody>
            {text.map((item) => {
              return (
                <tr>
                  <td>{item}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
  );
}

export default App;
