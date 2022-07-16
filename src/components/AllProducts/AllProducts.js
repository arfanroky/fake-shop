import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        const getAllProducts = async () => {
            const {data} = await axios.get('https://fakestoreapi.com/products')
            setProducts(data);
        }
        getAllProducts()
    }, [])

    return (
        <div className=''>
            {
                products.map(singleProduct => <SingleProduct key={singleProduct.id} singleProduct={singleProduct}/>)
            }
        </div>
    );
};

export default AllProducts;