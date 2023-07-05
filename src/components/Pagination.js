import React from 'react'

const Pagination = ({ pages, currentPage, firstPage, prevPage, changePage, nextPage, lastPage }) => {

  return (
    <div className="pagination-div">
        <ul className="pagination">
            <li className='page'>
                <a href='#' className='page-link' onClick={firstPage}>First</a>
            </li>
            <li className='page'>
                <a href='#' className='page-link' onClick={prevPage}>«</a>
            </li>
            {
                pages.map((n, i) => (
                    <li className='page' key={i}>
                        <a href='#' className={currentPage === n ? 'page-active' : 'page'} onClick={() => changePage(n)}>{n}</a>
                    </li>
                ))
            }
            <li className='page'>
                <a href='#' className='page-link' onClick={nextPage}>»</a>
            </li>
            <li className='page'>
                <a href='#' className='page-link' onClick={lastPage}>Last</a>
            </li>
        </ul>
    </div>
  )
}

export default Pagination