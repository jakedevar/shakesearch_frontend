import { setPageNumber } from '../slices/storeSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import Table from './Table';
import LoadingSpinner from "./LoadingSpinner";

const ResultsTable = () => {
  const dispatch = useAppDispatch();
  const pageNumber = useAppSelector((state) => state.store.pageNumber);
  const quantity = useAppSelector((state) => state.store.quantity);
  const totalResults = useAppSelector((state) => state.store.totalResults);
  const loading = useAppSelector((state) => state.store.loading);

  const handlePageClick = (addOrSubtractFlag: number) => {
    if (addOrSubtractFlag === 1) {
      dispatch(setPageNumber(pageNumber * quantity >= totalResults ? pageNumber : pageNumber + 1));
    } else {
      dispatch(setPageNumber(pageNumber === 1 ? 1 : pageNumber - 1));
    }
  }

  const showAmountOfResults = (): string => {
    const start =  (pageNumber === 1 ? 0 : (pageNumber - 1) * quantity);
    const end = start + quantity > totalResults ? start + quantity - ((start + quantity) - totalResults) : start + quantity;
    const returnString = `Showing ${start} - ${end} of ${totalResults} results`;
    return returnString;
  }

      console.log(loading)
  return (
    <section className="text-center" aria-labelledby="results-section">
      <h2 id="results-section" className="sr-only">Search Results</h2>
      <h3 className="text-xl font-semibold mb-2">Number of found searches {totalResults}</h3>
      <h4 className="text-lg font-medium mb-4">{showAmountOfResults()}</h4>
      <div className="mt-4 space-x-4">
        <button onClick={() => { handlePageClick(-1) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Previous</button>
        <button onClick={() => { handlePageClick(1) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
      </div>
        {loading ? <LoadingSpinner /> : <Table />}
      <div className="mt-4 space-x-4">
        <button onClick={() => { handlePageClick(-1) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Previous</button>
        <button onClick={() => { handlePageClick(1) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
      </div>
    </section>
  )
}

export default ResultsTable;
