import {setPageNumber} from '../slices/storeSlice';
import {useAppDispatch, useAppSelector} from '../hooks';
const PageButtons = () => {
  const dispatch = useAppDispatch();
  const pageNumber = useAppSelector((state) => state.store.pageNumber);
  const quantity = useAppSelector((state) => state.store.quantity);
  const totalResults = useAppSelector((state) => state.store.totalResults);

  const handlePageClick = (addOrSubtractFlag: number) => {
    if (addOrSubtractFlag === 1) {
      dispatch(setPageNumber(pageNumber * quantity >= totalResults ? pageNumber : pageNumber + 1));
    } else {
      dispatch(setPageNumber(pageNumber === 1 ? 1 : pageNumber - 1));
    }
  }

  return (
    <div className="mt-4 space-x-4">
      <button onClick={() => { handlePageClick(-1) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Previous</button>
      <button onClick={() => { handlePageClick(1) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
    </div>
  )   
}

export default PageButtons;
