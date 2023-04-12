import highlightSearchWord from "../utils/highlightSearchWord";
import { setPageNumber } from '../slices/storeSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { ResultObject } from "../types/ResultObject";

const ResultsTable = () => {
  const dispatch = useAppDispatch();
  const results = useAppSelector((state) => state.store.results);
  const pageNumber = useAppSelector((state) => state.store.pageNumber);
  const quantity = useAppSelector((state) => state.store.quantity);
  const totalResults = useAppSelector((state) => state.store.totalResults);
  const searchTerm = useAppSelector((state) => state.store.searchTerm);
  const caseSensitive = useAppSelector((state) => state.store.caseSensitive);
  const exactMatch = useAppSelector((state) => state.store.exactMatch);


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

  return (
    <section className="text-center" aria-labelledby="results-section">
      <h2 id="results-section" className="sr-only">Search Results</h2>
      <h3 className="text-xl font-semibold mb-2">Number of found searches {totalResults}</h3>
      <h4 className="text-lg font-medium mb-4">{showAmountOfResults()}</h4>
      <div className="mt-4 space-x-4">
        <button onClick={() => { handlePageClick(-1) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Previous</button>
        <button onClick={() => { handlePageClick(1) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
      </div>
      <table className="mx-auto">
        <thead>
          <tr>
            <th className="text-lg font-semibold">Results</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 && results.map((item: ResultObject, idx: number) => {
            let alternateColorClass = idx % 2 === 0 ? "bg-gray-300 hover:bg-gray-100" : "bg-white hover:bg-gray-300" 
            let highlightedText = highlightSearchWord(item.Line, item.SearchTerm, caseSensitive);
            return (
              <tr className={`${alternateColorClass} cursor-pointer`} key={idx}>
                <td className="py-2 px-4" dangerouslySetInnerHTML={{__html: highlightedText}}>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4 space-x-4">
        <button onClick={() => { handlePageClick(-1) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Previous</button>
        <button onClick={() => { handlePageClick(1) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
      </div>
    </section>
  )
}

export default ResultsTable;
