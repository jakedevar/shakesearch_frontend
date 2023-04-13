import highlightSearchWord from "../utils/highlightSearchWord";
import {useAppSelector} from '../hooks'
import { ResultObject } from "../types/ResultObject";

const Table = () => {
  const results = useAppSelector((state) => state.store.results);
  const caseSensitive = useAppSelector((state) => state.store.caseSensitive);

  return(
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
  )
}

export default Table;
