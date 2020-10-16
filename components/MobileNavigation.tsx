import Nav from './utils/Nav';
import NavLink from './utils/NavLink';
import SubNavLink from './utils/SubNavLink';

interface IProps {
  showMenu: boolean;
}

const MobileNavigation = (props: IProps) => {
  return(<Nav className={`mobile_menu_wrapper ${props.showMenu ? 'mobile_show' : 'mobile_hide'}`}>
  <NavLink href='/approach'>Approach</NavLink>
  <SubNavLink href='/volunteer' title='Volunteer'>
    <NavLink href='/about/ghana'>Ghana</NavLink>
    <NavLink href='/volunteer/what-you-should-know'>What you should know</NavLink>
    <NavLink href='/volunteer/health-and-security'>Health and Security</NavLink>
    <NavLink href='/volunteer/book-your-trip'>Book your trip</NavLink>
    <NavLink href='/volunteer/trip-reviews'>Trip Reviews</NavLink>
  </SubNavLink>
  <SubNavLink href='/give' title='Give'>
      <NavLink href='/give/support'>Support a community</NavLink>
      <NavLink href='/give/giving-in-ghana'>Giving in Ghana</NavLink>
      <NavLink href='https://pushpay.com/pay/adanurenton'>Donate</NavLink>
  </SubNavLink>
  <NavLink href='/adanubook'>Book</NavLink>
  <NavLink href='/blog'>Blog</NavLink>
  <SubNavLink href='/about' title='About'>
    <NavLink href='/about/team'>Team</NavLink>
    <NavLink href='/about/financials'>Financials</NavLink>
    <NavLink href='/about/partners'>Partnerships</NavLink>
    <NavLink href='/category/press'>Press</NavLink>
  </SubNavLink>
  <SubNavLink href='/contact' title='Contact'>
    <NavLink href='/privacy-policy'>Privacy Policy</NavLink>
  </SubNavLink>
</Nav>);
};

export default MobileNavigation;
