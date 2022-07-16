import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from  'react-router-dom'
const ProductDetails = () => {
    const id = useParams();
    const [productDetails, setProductDetails] = useState({});
    useEffect( () => {
       const getDetails = async () => {
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id.id}`);
        setProductDetails(data);
       }

       getDetails();
    }, [id])

    return (
        <div>
             <div style={{width:'350px', border:'2px solid salmon', margin:'10px'}}>
                <figure>
                <img style={{width:'300px'}} src={productDetails.image} alt="" />
                </figure>
              <div style={{padding:'0 10px 0 10px'}}>
              {/* <span>rate {productDetails.rating.rate} <br />   reviews { productDetails.rating?.count}</span> */}
                <h2>{productDetails.category}</h2>
                <p>{productDetails.title}</p>
                <p style={{textAlign:"justify"}}>{productDetails.description}</p>
                <p>Price: ${productDetails.price}</p>
              </div>
            </div> 
        </div>
    );
};

export default ProductDetails;