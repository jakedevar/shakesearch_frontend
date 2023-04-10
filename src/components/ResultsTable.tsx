import highlightSearchWord from "../utils/highlightSearchWord";

type Results = {
  results: string[]
  searchTerm: string
};

const ResultsTable = ({ results, searchTerm }: Results) => {
  return (
    <div>
      <table>
        <tbody>
          {results.length > 0 && results.map((item: string, idx: number) => {
            let alternateColorClass = idx % 2 === 0 ? "bg-green-100 hover:bg-green-300" : "bg-white hover:bg-gray-300" 
            let tableData = highlightSearchWord(item, searchTerm);
            return (
              <tr className={alternateColorClass} key={idx}>
                <td >{tableData}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ResultsTable;
