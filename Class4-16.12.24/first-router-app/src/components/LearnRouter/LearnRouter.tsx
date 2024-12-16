import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { arrForNav } from '../../types';
import Home from '../Home/Home';
import About from '../About/About';
import Products from '../Products/Products';

export const LearnRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar theArr={arrForNav} />
                <Routes>
                    <Route path="/" element=<Home /> />
                    <Route path="/about" element=<About /> />
                    <Route path="/products" element=<Products /> />
                </Routes>
                <div>this is my footer</div>
            </BrowserRouter>
        </div>
    );
};