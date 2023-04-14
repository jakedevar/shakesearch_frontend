import { useAppSelector } from '../hooks';
import Table from './Table';
import LoadingSpinner from "./LoadingSpinner";

const ResultsTable = () => {
  const totalResults = useAppSelector((state) => state.store.totalResults);
  const loading = useAppSelector((state) => state.store.loading);
  const searchTerm = useAppSelector((state) => state.store.searchTerm);
  const quantity = useAppSelector((state) => state.store.quantity);
  const pageNumber = useAppSelector((state) => state.store.pageNumber);

  const ShowDocsOrSpinner = () => {
    if (!loading && totalResults === 0) {
      return (
        <div className='justify-center items-center text-center'>
          <h2 className='text-lg font-bold'>Hi welcome to Shakesearch</h2>
          <p>To search just type in the search bar and your results will be displayed!</p>
          <p>Don't worry about misspellings, the program can handle a few errors</p>
        </div>
      )
    } else {
      return loading ? <LoadingSpinner /> : <Table />
    }
  }

  const showAmountOfResults = (): string => {
    const start =  (pageNumber === 1 ? 0 : (pageNumber - 1) * quantity);
    const end = start + quantity > totalResults ? start + quantity - ((start + quantity) - totalResults) : start + quantity;
    const returnString = `Showing ${start} - ${end} of ${totalResults} results`;
    return returnString;
  }

  return (
    <>
      <section className="text-center" aria-labelledby="results-section">
        {/* <h2 id="results-section" className="sr-only">Search Results</h2> */}
        {/* <h3 className="text-xl font-semibold mb-2">Number of found searches {totalResults}</h3> */}
        <h3 className="text-xl font-semibold mb-2">{loading ? `Searching for ${searchTerm}` : showAmountOfResults()}</h3>
        {ShowDocsOrSpinner()}
      </section>
      </>
  )
}

export default ResultsTable;
