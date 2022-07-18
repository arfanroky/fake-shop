import React from 'react';

const Pagination = ({postsPerPage, totalPage, setCurrentPage}) => {
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(totalPage / postsPerPage); i++){
        pageNumber.push(i);
    }
    
    return (
        <div className=' mt-4 d-flex justify-content-center'>
            <ul className='pagination '>
                {
                    pageNumber.map(number => <li className='page-item' key={number} onClick={() => setCurrentPage(number)}>
                        <span  className='page-link bg-primary text-light'>{number}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Pagination;