import React from 'react';

const SearchProduct = () => {

    const filterProduct = async () => {

    }

    return (
        <form onChange={filterProduct} className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    );
};

export default SearchProduct;