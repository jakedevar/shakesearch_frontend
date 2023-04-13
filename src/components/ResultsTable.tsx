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
      return <p>Hi welcome to Shakesearch</p>
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
