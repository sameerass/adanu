
import { PropsWithChildren } from 'react';
import Layout, { IProps } from '../Layout';
import Nav from '../utils/Nav';
import NavLink from '../utils/NavLink';

const VolunteerLayout = (props: PropsWithChildren<IProps>) => {
  return(<Layout title={props.title || 'Volunteer'}>
            <div className='volunteer-container'>
              <Nav className='submenu conditional_menu'>
                  <NavLink href='/volunteer' exact={true}>take a trip to Ghana</NavLink>
                  <NavLink href='/volunteer/what-you-should-know'>What you should know</NavLink>
                  <NavLink href='/volunteer/health-and-security'>Health and Security</NavLink>
                  <NavLink href='/volunteer/trip-reviews'>Trip Reviews</NavLink>
                  <NavLink href='/volunteer/book-your-trip'>Book your trip</NavLink>
              </Nav>
              {props.children}
              {/*<!-- the ever important WP Footer -->*/}
              <div className='blue_strip'></div>
            </div>
    </Layout>);
};

export default VolunteerLayout;
