
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating/Rating';

const SingleProduct = ({ singleProduct }) => {
  const { category, id, image, rating } =
    singleProduct;
  return (
    <div className="col">
      <Link className='text-decoration-none' to={`productDetails/${id}`}>
        <div class="card h-100 border-0 shadow">
          <img src={image} class="card-img-top w-50 h-75 mx-auto" alt="..." />
          <div class="card-body">
            <div className="d-flex justify-content-start align-items-center">
              <Rating
                name="half-rating-read"
                defaultValue={Number(rating.rate)}
                readOnly
              />
              <span className="ms-2 fw-bold text-secondary">Ratings {rating?.count}</span>
            </div>
            <h5 class="card-title text-capitalize">{category}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleProduct;
