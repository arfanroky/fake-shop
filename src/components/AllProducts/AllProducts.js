import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import SingleProduct from '../SingleProduct/SingleProduct';
import Spinner from '../Spinner/Spinner';

const AllProducts = () => {
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

  return (
    <div className="container mx-auto py-5">
        <h1 className='my-5 border-bottom d-inline-block mx-auto'>All Products</h1>
      <div className="row row-cols-md-3 row-cols-1 g-5">
          {data?.data.map((singleProduct) => (
            <SingleProduct
              key={singleProduct.id}
              singleProduct={singleProduct}
            />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
