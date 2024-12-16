import { useParams } from "react-router-dom";

const CategoryPage = () =>{
    const params = useParams();
    const productId = params.id;
    return (
        <div>
            Category {productId}
        </div>
    )
}

export default CategoryPage;