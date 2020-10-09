import Link from 'next/link';

const Navigation = () => {
    return (<nav className='menu_wrapper'>
                <div className='menu-topmenu-container'>
                    <ul id='menu-topmenu' className='menu'>
                        <li id='menu-item-32' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-32'>
                            <Link href='/approach'><a>Approach</a></Link>
                        </li>
                        <li id='menu-item-36' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-36'>
                            <Link href='/volunteer'><a>Volunteer</a></Link>
                        </li>
                        <li id='menu-item-35' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-35'>
                            <Link href='/give'><a>Give</a></Link>
                        </li>
                        <li id='menu-item-1869' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-1869'>
                            <Link href='/adanubook'><a>Book</a></Link>
                        </li>
                        <li id='menu-item-323' className='menu-item menu-item-type-taxonomy menu-item-object-category menu-item-323'>
                            <Link href='/blog'><a>Blog</a></Link>
                        </li>
                        <li id='menu-item-34' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-34'>
                            <Link href='/about'><a>About</a></Link>
                        </li>
                    </ul>
                </div>  
            </nav> );
}

export default Navigation;