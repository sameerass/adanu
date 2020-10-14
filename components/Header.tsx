import Link from 'next/link';
import Navigation from './Navigation';
import MobileNavigation from'./MobileNavigation';
import { useState } from 'react';

interface IState {
  showMenu: boolean;
}

const Header = () => {
  const [showMenu, toggleMobileMenu] = useState(false);
  return (<div className='header-wrapper'>
      <header className='green'>
            <Link href='/'><a className='logo yellow'>Adanu</a></Link>
            <a className='mobile hamburger' onClick={() => toggleMobileMenu(!showMenu)}>Menu</a>
            <Navigation/>
            <div className='social'>
                <a className='donate' href='https://pushpay.com/pay/adanurenton'>donate</a>
                <ul className='social_icons'>
                    <li>
                        <a href='https://itunes.apple.com/us/app/adanu/id1165156556?mt=8' className='shop'>
                            <img src='/images/shop.png'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/AdanuGhana/' className='fb'>
                            <img src='/images/facebook.png'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/adanughana' className='tw'>
                            <img src='/images/twitter.png'/>
                        </a>
                    </li>
                    <li>
                        <a href='http://instagram.com/AdanuGhana' className='instagram'>
                            <img src='/images/instagram.png'/>
                        </a>
                    </li>
                  </ul>
            </div>
        </header>
        <MobileNavigation showMenu={showMenu}/>
      </div>);
};

export default Header;
