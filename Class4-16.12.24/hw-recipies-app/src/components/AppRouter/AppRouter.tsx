import { useEffect, useState } from 'react';
import { Category, NavItem } from '../../types';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CategoryPage from '../CategoryPage/CategoryPage';
import Home from '../Home/Home';
import './AppRouter.css';

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
                <div className='cat-nav-bar'>
                    <ul className='ul-link-items'>
                    {
                        categoriesData?.map((category) => {
                            return <li className='li-link-item'><Link key={category.idCategory} to={category.strCategory}>{category.strCategory}</Link></li>
                        })
                    }
                    </ul>
                </div>
                <Routes>
                    {/* <Route path="/" element=<Home /> /> */}
                    {
                        categoriesData?.map((category) => {
                            return (
                                <Route key={category.idCategory} path={"/:cat"} element={<CategoryPage />} />
                                
                            );
                        })
                    }
                </Routes>
            </BrowserRouter>
        </div>
    );

};

export default NavBar;