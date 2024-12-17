import { Link } from 'react-router-dom';
import { Category, NavItem } from '../../types';

type CategoryProps = {
    idCategory: string;
    strCategory: string;
};

//export const NavBar = (props: {CategiriesArr: Category[]}) => {
export const NavBar: React.FC<CategoryProps> = ({idCategory, strCategory}) => {
    return (
        <div className='navItem'>
            <Link to={idCategory}>{strCategory}</Link>
        </div>
    );
};