import FoodCard from '../../../../Component/FoodCard/FoodCard';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './OrderTab.css';

export default function OrderTab({ items }) {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid md:grid-cols-3 my-6 gap-10">
        {currentItems.map(item => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>

      <ReactPaginate
        containerClassName="pagination"
        // className="pagination"
        breakLabel="..."
        nextLabel="Next "
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}
