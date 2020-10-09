import Link from 'next/link';

const MobileNavigation = () => {
    return(<nav className='mobile_hide mobile_menu_wrapper'>
            <div className='menu-mobilemenu-container'>
                <ul id='menu-mobilemenu' className='menu'>
                    <li id='menu-item-103' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-103'>
                        <Link href='/'><a>Home</a></Link>
                    </li>
                    <li id='menu-item-109' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-109'>
                        <Link href='/approach'><a>Approach</a></Link>
                    </li>
                    <li id='menu-item-113' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-113'>
                        <Link href='/volunteer'><a>Volunteer</a></Link>
                            <ul className='sub-menu'>
                                <li id='menu-item-106' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-106'>
                                    <Link href='/about/ghana'><a>Ghana</a></Link>
                                </li>
                                <li id='menu-item-114' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-114'>
                                    <Link href='/volunteer/what-you-should-know'><a>What you should know</a></Link>
                                </li>
                                <li id='menu-item-1057' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1057'>
                                    <Link href='/volunteer/health-and-security'><a>Health and Security</a></Link>
                                </li>
                                <li id='menu-item-1613' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1613'>
                                    <Link href='/volunteer/book-your-trip'><a>Book your trip</a></Link>
                                </li>
                                <li id='menu-item-1839' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1839'>
                                    <Link href='/volunteer/trip-reviews'><a>Trip Reviews</a></Link>
                                </li>
                            </ul>
                    </li>
                    <li id='menu-item-111' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-111'>
                        <Link href='/give'><a>Give</a></Link>
                        <ul className='sub-menu'>
                            <li id='menu-item-112' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-112'>
                                <Link href='/give/support'><a>Support a community</a></Link>
                            </li>
                            <li id='menu-item-1840' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1840'>
                                <Link href='/give/giving-in-ghana'><a>Giving in Ghana</a></Link>
                            </li>
                            <li id='menu-item-1470' className='menu-item menu-item-type-custom menu-item-object-custom menu-item-1470'>
                                <a href='https://pushpay.com/pay/adanurenton'>Donate</a>
                            </li>
                        </ul>
                    </li>
                    <li id='menu-item-1870' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1870'>
                        <Link href='/adanubook'><a>Book</a></Link>
                    </li>
                    <li id='menu-item-471' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-471'>
                        <Link href='/blog'><a>Blog</a></Link>
                    </li>
                    <li id='menu-item-104' className='menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-17 current_page_item menu-item-has-children menu-item-104'>
                        <a href='index.html'>About</a>
                        <ul className='sub-menu'>
                            <li id='menu-item-108' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-108'>
                                <Link href='/about/team'><a>Team</a></Link>
                            </li>
                            <li id='menu-item-105' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-105'>
                                <Link href='/about/financials'><a>Financials</a></Link>
                            </li>
                            <li id='menu-item-1850' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1850'>
                                <Link href='/partners'><a>Partnerships</a></Link>
                            </li>
                            <li id='menu-item-187' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-187'>
                                <Link href='/category/press'><a>Press</a></Link>
                            </li>
                        </ul>
                    </li>
                    <li id='menu-item-110' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-110'>
                        <Link href='/contact'><a>Contact</a></Link>
                        <ul className='sub-enu'>
                            <li id='menu-item-19' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-199'>
                               <Link href='/privacy-policy'><a>Privacy Policy</a></Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>  
    </nav>);
}

export default MobileNavigation;