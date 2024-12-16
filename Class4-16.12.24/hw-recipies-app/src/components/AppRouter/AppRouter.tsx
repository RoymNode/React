import { useEffect, useState } from 'react';
import { Category, NavItem } from '../../types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryPage from '../CategoryPage/CategoryPage';
import Home from '../Home/Home';

const NavBar = () => {
const [categoriesData, setCategoriesData] = useState<Category[]>([]);

useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/categories.php")
       .then(res => res.json())
       .then(
            (categoriesData) => {
                setCategoriesData(categoriesData.categories);
                console.log(categoriesData);
            }
        );
 
}, []);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element=<Home /> />
                    {
                        categoriesData?.map((category) => {
                            return (
                                <Route key={category.idCategory} path={`/${category.strCategory}`} element={<CategoryPage />} />
                                
                            );
                        })
                    }
                </Routes>
            </BrowserRouter>
        </div>
    );

};

export default NavBar;