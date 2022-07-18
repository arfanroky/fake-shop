import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/loading.png';
import SearchProduct from '../SearchProduct/SearchProduct';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
   <Link to='/'> <img  style={{width:'40px', height:'40px'}} src={logo} alt="" /></Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='allProducts'>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='contact'>Contact Us</Link>
        </li>
      </ul>
     <SearchProduct/>
    </div>
  </div>
</nav>

    );
};

export default Navbar;