import { Link } from 'react-router-dom';
import { Category, NavItem } from '../../types';

export const NavBar = (props: {CategiriesArr: Category[]}) => {
    return (
      <div>
         {
            props.CategiriesArr.map((curr, i) => {
                return (
                    <div key={i} className='navItem'>
                        <Link to={curr.idCategory}>{curr.strCategory}</Link>
                    </div>
                )
            })
            }
      </div>
    );
};