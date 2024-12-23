import './App.css';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import ProductsGallery from './components/ProductsGallery';
import { store } from './store';
import FavoriteProducts from './components/FavoriteProducts';
import CitiesGallery from './components/CitiesGallery';
import FavoriteCities from './components/FavoriteCities';

function App() {
  return (
    <Provider store={store}>  {/* We need to wrap our components inside the Provider */}
      <div className="App">
        <h1>Products</h1>
        <ProductsGallery />
        <hr />
        <FavoriteProducts />
        <br />
        <hr />
        <h1>Cities</h1>
        <CitiesGallery />
        <hr />
        <FavoriteCities />
      </div>
    </Provider>
  );
}

export default App;