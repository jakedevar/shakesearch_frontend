// import highlightSearchWord from "../utils/highlightSearchWord";
import { setPageNumber } from '../slices/storeSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

const ResultsTable = () => {
  const dispatch = useAppDispatch();
  const results = useAppSelector((state) => state.store.results);
  const pageNumber = useAppSelector((state) => state.store.pageNumber);
  const quantity = useAppSelector((state) => state.store.quantity);
  const totalResults = useAppSelector((state) => state.store.totalResults);


  const handlePageClick = async (addOrSubtractFlag: number) => {
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
    <div>
      <h3>Number of found searches {totalResults}</h3>
      <h4>{showAmountOfResults()}</h4>
      <table>
        <thead>
          <tr>
            <th>Results</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 && results.map((item: string, idx: number) => {
            let alternateColorClass = idx % 2 === 0 ? "bg-green-100 hover:bg-green-300" : "bg-white hover:bg-gray-300" 
            // let tableData = highlightSearchWord(item, searchTerm);
            return (
              <tr className={alternateColorClass} key={idx}>
                <td >{item}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={async () => { handlePageClick(-1) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Previous</button>
      <button onClick={async () => { handlePageClick(1) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
    </div>
  )
}

export default ResultsTable;
