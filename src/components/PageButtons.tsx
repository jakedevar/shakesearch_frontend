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
    <div className="mt-4 space-x-4 py-4">
      <button onClick={() => { handlePageClick(-1)}} className="border-none bg-gray-800 text-white hover:bg-gray-400 font-bold py-2 px-5 rounded">Prev</button>
      <button onClick={() => { handlePageClick(1) }} className="border-none bg-gray-800 text-white hover:bg-gray-400 font-bold py-2 px-5 rounded">Next</button>
    </div>
  )   
}

export default PageButtons;
