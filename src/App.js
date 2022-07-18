
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AllProducts from './components/AllProducts/AllProducts';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/allProducts' element={<AllProducts/>}/>
      <Route path='/productDetails/:id' element={<ProductDetails/>}/>
    </Routes>
    </>
  );
}

export default App;
