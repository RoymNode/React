import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Caterory } from './types';
import Categories from './components/Categories/Categories';
import './components/Gallery/Gallery.css';

function App() {

  const [categoriesData, setCategoriesData] = useState<Caterory[]>();

  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(
        (categoriesData) => {
          setCategoriesData(categoriesData.categories);
          console.log(categoriesData);
        }
      )
  }, []);

  return (
    <>

     <div className='gallery'>

      {categoriesData?.map((category) => {
        return  <Categories key=                   {category.idCategory}
                            idCategory=            {category.idCategory} 
                            strCategory=           {category.strCategory}
                            strCategoryThumb=      {category.strCategoryThumb} 
                            strCategoryDescription={category.strCategoryDescription} />
      })};
     </div>

    </>
  )
}


export default App;
