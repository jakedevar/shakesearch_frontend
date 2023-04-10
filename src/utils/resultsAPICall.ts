import axios from "axios";

const resultsAPICall = async (caseSensitive: boolean, query: string, setResults: React.Dispatch<React.SetStateAction<string[]>>, pageNumber: number, quantity: number) => {
  const url = `http://localhost:3001/search?caseSensitive=${caseSensitive}&query=${query}&pageNumber=${pageNumber}&quantity=${quantity}`;
  const response = await axios.get(url);
  const data = response.data;
  setResults(data);
}

export default resultsAPICall;
