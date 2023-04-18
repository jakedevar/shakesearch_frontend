import axios from "axios";
import {ApiCallResult} from "../types/ApiCallResult";

const resultsAPICall = async (caseSensitive: boolean, searchTerm: string, pageNumber: number, quantity: number, exactMatch: boolean): Promise<ApiCallResult> =>  {
  try {
    searchTerm = searchTerm.replaceAll(";", "");
    const url = `https://jakedevar-shakesearch.onrender.com/search?caseSensitive=${caseSensitive}&searchTerm=${searchTerm}&pageNumber=${pageNumber}&quantity=${quantity}&exactMatch=${exactMatch}`;
    const response = await axios.get(url);
    const rawResponseObject = response.data;
    const responseObject: ApiCallResult = {
      results: rawResponseObject.Results,
      totalResults: rawResponseObject.TotalResults
    }
    return responseObject;
  } catch (error: any) {
    return { 
      error: error.response.status || "Unknown error occurred",
      results: [],
      totalResults: 0
    };
  }
}

export default resultsAPICall;
