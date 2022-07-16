import React from 'react';
import { Link} from 'react-router-dom';

const SingleProduct = ({singleProduct}) => {
    const {category, title, id, image, price, description ,rating} = singleProduct;
    return (
        <div>
            <div style={{width:'350px', border:'2px solid salmon', margin:'10px'}}>
                <figure>
                <img style={{width:'300px'}} src={image} alt="" />
                </figure>
              <div style={{padding:'0 10px 0 10px'}}>
              <span>rate {rating.rate} <br />   reviews { rating?.count}</span>
                <h2>{category}</h2>
                <p>{title}</p>
                <p style={{textAlign:"justify"}}>{description}</p>
                <p>Price: ${price}</p>
              </div>
              <button style={{color:'red'}}>
                <Link to={`productDetails/${id}`}>
                    Details
                </Link>
              </button>
            </div>
        </div>
    );
};

export default SingleProduct;