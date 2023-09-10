import React, { useState } from 'react'
import '../App.css'

export default function Pagination({currentPage, numbers, npage, setCurrentPage}) {

   
    function prePage() {
        if(currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

    function changeCPage(no) {
        setCurrentPage(no)
    }

    function nextPage() {
        if(currentPage !== npage)
            setCurrentPage(currentPage + 1)
    }

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous" onClick={prePage}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {
                        numbers.map((no , i) => (
                            <li className= {currentPage === no ? "active" : "" } key={i}>
                                 <a className='page-link' href='#' onClick={() => {changeCPage(no)}}>
                                    {no}
                                 </a>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next" onClick={nextPage}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
   
}
