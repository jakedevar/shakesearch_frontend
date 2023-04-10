import resultsAPICall from './resultsAPICall';

const handlePageClick = async (addOrSubtractFlag: number, caseSensitive: boolean, searchTerm: string, pageNumber: number, quantity: number) => {
  const response = await resultsAPICall(caseSensitive, searchTerm, pageNumber, quantity);
  return response;
}

export default handlePageClick;
