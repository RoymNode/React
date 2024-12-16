import { Link } from "react-router-dom";

const Products = () =>{
    return (
        <div>
            This is the products
            <Link to={'/product-full-page/1'}>{'product 1'}</Link>
            <Link to={'/product-full-page/2'}>{'product 1'}</Link>
            <Link to={'/product-full-page/3'}>{'product 1'}</Link>
        </div>
    )
}

export default Products;