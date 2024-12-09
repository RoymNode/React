import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery/Gallery'
import CheesecakeRecipe from './components/CheesecakeRecipe/CheesecakeRecipe'
import { Caterory } from './types'
import Categories from './components/Categories/Categories'


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
     {/* <Gallery /> */}
     {/* <CheesecakeRecipe /> */}

     

     {categoriesData?.map((category) => {
      return  <Categories key={category.idCategory} idCategory={category.idCategory} strCategory={category.strCategory} />
     })};


    </>
  )
}

export default App
