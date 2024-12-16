import { useEffect, useState } from 'react';
import './categories.css';

type CategoryProps = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
};

const Categories: React.FC<CategoryProps> = ({idCategory, strCategory, strCategoryThumb, strCategoryDescription}) => {

  const [showCategoryData, setShowCategoryData] = useState(false);
  return (
    <>
        <div className='recipie-card'>
          <h2 className='text-as-button' onClick={() => setShowCategoryData(!showCategoryData)}>{strCategory}</h2>
          {showCategoryData}
          {showCategoryData && (
          
            <div>
              <h3>Description: {strCategoryDescription}</h3>
              <img src={strCategoryThumb} />
               <button>Show Recipies</button>
              <p></p>
            </div>
          )}
        </div>
    </>
  )
}

export default Categories;