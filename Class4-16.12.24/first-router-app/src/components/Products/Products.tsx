import { Link, useNavigate } from "react-router-dom";

const Products = () =>{
    const navigate  = useNavigate();
    return (
        <div>
            This is the products
            <Link to={'/product-full-page/1'}>{'product 1'}</Link>
            <Link to={'/product-full-page/2'}>{'product 2'}</Link>
            <Link to={'/product-full-page/3'}>{'product 3'}</Link>
            <input type="button" value={"Show product 4"} onClick={() => {
                navigate(`/product-full-page/4`);
            }}/>
        </div>
    )
}

export default Products;