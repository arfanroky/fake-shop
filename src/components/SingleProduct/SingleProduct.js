
import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = ({ singleProduct }) => {
  const { category, id, image } =
    singleProduct;
  return (
    <div className="col card_hover ">
      <Link className='text-decoration-none' to={`productDetails/${id}`}>
        <div class="card h-100 border-0 shadow mx-auto" style={{width:'350px'}}>
          <img src={image} class="card-img-top w-50 h-75 mx-auto pt-3" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-uppercase text-center">{category}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleProduct;
