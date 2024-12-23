import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './components/types';
import ProductsGallery from './components/ProductsGallery/ProductsGallery';
import BigCard from './components/BigCard/BigCard';

function App() {
  const [clickedProduct, setClickedProduct] = useState<Product>();
  return (
    <div className="container">
      <ProductsGallery setClickedProduct={setClickedProduct}/>
      <BigCard clickedProduct={clickedProduct} />
    </div>
  );
}

export default App;
