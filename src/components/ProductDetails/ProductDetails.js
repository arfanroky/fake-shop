import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Rating from '@mui/material/Rating/Rating';
import Spinner from '../Spinner/Spinner';

const ProductDetails = () => {
  const id = useParams();

  const { data, isLoading, error } = useQuery(
    ['productDetails'],
    async () => await axios.get(`https://fakestoreapi.com/products/${id.id}`)
  );

  if (isLoading) {
    return <Spinner text={'loading for the product details!'}/>
  }

  if (error) {
    alert(error);
  }

  const{rating, title, category, image, price, description} = data.data;

  return (
    <div className="container mx-auto pt-5">
      <div class="card mb-3 w-75 mx-auto border-0">
        <div class="row g-2">
          <div class="col-md-4">
            <img
              src={image}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body mt-md-5 pt-md-5">
              <h2 class="card-title text-uppercase text-primary">{category}</h2>
            <div className="d-flex justify-content-start align-items-center">
              <Rating
                name="half-rating-read"
                defaultValue={Number(rating.rate)}
                readOnly
              />
              <span className="ms-2 fw-bold text-secondary">Ratings {rating?.count}</span>
            </div>
              <p className="card-text text-success">{title}</p>
              <p className="card-text text-secondary">
                {description}
              </p>
              <p class="card-text">
                Price: <span className=" text-danger">${price}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
