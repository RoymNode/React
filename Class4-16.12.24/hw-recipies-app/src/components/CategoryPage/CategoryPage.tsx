import { useParams } from "react-router-dom";

const CategoryPage = () =>{
    const params = useParams();
    const strCategory = params.cat;
    return (
        <div>
            Category {strCategory}
        </div>
    )
}

export default CategoryPage;