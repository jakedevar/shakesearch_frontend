import highlightSearchWord from "../utils/highlightSearchWord";
import {useAppSelector} from '../hooks'
import { ResultObject } from "../types/ResultObject";
import PageButtons from "./PageButtons";

const Table = () => {
  const results = useAppSelector((state) => state.store.results);
  const caseSensitive = useAppSelector((state) => state.store.caseSensitive);

  return(
    <>
    <PageButtons />
    <table className="mx-auto w-4/5 bg-white rounded-xl border-slate-800 border-2">
      <tbody>
        {results.length > 0 && results.map((item: ResultObject, idx: number) => {
          let alternateColorClass = idx % 2 === 0 ? "bg-gray-300 hover:bg-gray-400 hover:text-white" : "bg-white hover:bg-gray-400 hover:text-white";
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
    <PageButtons />
        </>
  )
}

export default Table;
