import Nav from './utils/Nav';
import NavLink from './utils/NavLink';

const Navigation = () => {
  return(<Nav className='menu_wrapper'>
            <NavLink href='/approach'>Approach</NavLink>
            <NavLink href='/volunteer'>Volunteer</NavLink>
            <NavLink href='/give'>Give</NavLink>
            <NavLink href='/adanubook'>Book</NavLink>
            <NavLink href='/blog'>Blog</NavLink>
            <NavLink href='/about'>About</NavLink>
        </Nav>);
};

export default Navigation;
