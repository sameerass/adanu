import Link from 'next/link';
import Navigation from './Navigation';
import MobileNavigation from'./MobileNavigation';
import { Component } from 'react';

interface IState {
  showMenu: boolean;
}

export default class Header extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { showMenu: false };
  }
  render() {
    return (<div className='header-wrapper'>
      <header className='green'>
            <Link href='/'><a className='logo yellow'>Adanu</a></Link>
            <a className='mobile hamburger' onClick={() => this.toggleMobileMenu()}>Menu</a>
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
        <MobileNavigation showMenu={this.state.showMenu}/>
        </div>);
  }

  toggleMobileMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }
}
