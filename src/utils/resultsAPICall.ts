import axios from "axios";
import {ApiCallResult} from "../types/ApiCallResult";

const resultsAPICall = async (caseSensitive: boolean, searchTerm: string, pageNumber: number, quantity: number): Promise<ApiCallResult> =>  {
  const url = `http://localhost:3001/search?caseSensitive=${caseSensitive}&searchTerm=${searchTerm}&pageNumber=${pageNumber}&quantity=${quantity}`;
  const response = await axios.get(url);
  const rawResponseObject = response.data;
  const responseObject: ApiCallResult = {
    results: rawResponseObject.Results,
    totalResults: rawResponseObject.TotalResults
  }
  return responseObject;
}

export default resultsAPICall;
