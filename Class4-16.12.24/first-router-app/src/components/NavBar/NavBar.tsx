import { Link } from 'react-router-dom';
// import './NavBar.css';
import { NavItem } from '../../types';

export const NavBar = (props: { theArr: NavItem[] }) => {
    return (
        <div className='NavBar'>
            {
                props.theArr.map((curr) => {
                    return (
                        <div className='navItem'>
                            <Link to={curr.hrefStr}>{curr.displayStr}</Link>
                        </div>
                    )
                })
            }
        </div>
    );
};