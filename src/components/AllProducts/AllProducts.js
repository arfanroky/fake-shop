import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import SingleProduct from '../SingleProduct/SingleProduct';
import Spinner from '../Spinner/Spinner';
import Pagination from './Pagination';

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(6);

  const { data, isLoading, error } = useQuery(
    ['allProducts'],
    async () => await axios.get('https://fakestoreapi.com/products')
  );

  if (isLoading) {
    return <Spinner text={'loading for the all products'}/>
  }

  if (error) {
    alert(error);
  }

  // Get Current Page
  const indexOfTheLastPost = currentPage * productPerPage;
  const indexOfTheFirstPost = indexOfTheLastPost - productPerPage;
  const currentPosts = data.data.slice(indexOfTheFirstPost, indexOfTheLastPost);

  return (
    <div className="container mx-auto py-5">
        <h1 className='my-5 border-bottom d-inline-block mx-auto'>All Products</h1>
      <div className="row row-cols-md-3 row-cols-1 g-5">
          {currentPosts.map((singleProduct) => (
            <SingleProduct
              key={singleProduct.id}
              singleProduct={singleProduct}
            />
          ))}
      </div>
      <Pagination isLoading={isLoading} postsPerPage={productPerPage} totalPage={data.data.length} setCurrentPage={setCurrentPage}/>
    </div>
  );
};

export default AllProducts;
