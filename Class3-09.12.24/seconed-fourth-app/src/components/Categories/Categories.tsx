import React from 'react'

type CategoryProps = {
    idCategory: string;
    strCategory: string
};

const Categories: React.FC<CategoryProps> = ({idCategory, strCategory}) => {
  return (
    <>
        <div>
            <h2>{strCategory}</h2>
            {/* <p>{idCategory}</p> */}
        </div>
    </>
  )
}

export default Categories